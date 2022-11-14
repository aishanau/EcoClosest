import * as React from "react";
import { SearchBar } from "@rneui/base";
import { View, StyleSheet } from 'react-native';

export default () => {
  const [value, setValue] = React.useState("");
  return (
    <View style={styles.container}>
        <SearchBar
        platform="ios"
        containerStyle={styles.inner}
        inputContainerStyle={styles.inner}
        inputStyle={{fontColor: 'white'}}
        searchIcon={{color: '#fff'}}
        loadingProps={{}}
        onChangeText={newVal => setValue(newVal)}
        onClearText={() => console.log(onClearText())}
        placeholder="Search items"
        placeholderTextColor="#fff"
        round
        cancelButtonTitle="cancel"
        cancelButtonProps={{color: '#F9F7F7', margin: 5}}
        onCancel={() => console.log('cancelled')}
        value={value}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        borderRadius: 20,
        margin: 30
    },
    inner: {
        backgroundColor: '#FFD0D0',
        borderRadius: 30,
    }
    });


