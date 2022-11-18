import * as React from "react";
import { SearchBar, Button, Icon, Input } from "@rneui/base";
import { View, StyleSheet, TouchableOpacity } from 'react-native';

export default ({value, setValue}) => {
  return (
    <View style={styles.container}>
        <View style={styles.search}>     
        <SearchBar
        platform="ios"
        containerStyle={styles.inner}
        inputContainerStyle={styles.inner}
        inputStyle={{fontColor: 'white', fontSize: 15}}
        searchIcon={{color: '#fff'}}
        loadingProps={{}}
        onChangeText={newVal => setValue(newVal)}
        onClearText={() => console.log(onClearText())}
        placeholder="Search items"
        placeholderTextColor="#fff"
        round
        cancelButtonTitle=" "
        cancelButtonProps={{color: '#F9F7F7', margin: 5}}
        onCancel={() => console.log(value)}
        value={value}
        />
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        width: 340,
        borderRadius: 20,
        margin: 30,
    },
    inner: {
        backgroundColor: '#FFD0D0',
        borderRadius: 30,
    }
});