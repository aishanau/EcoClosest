import * as React from "react";
import { SearchBar, Button, Icon, Input } from "@rneui/base";
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import database from '../index.js';

export default ({navigation, val}) => {
  const [value, setValue] = React.useState('');

  const updateSearch = (value) => {
    setValue(value);
  };

  const update = () => {
    console.log(value)
    navigation.navigate("Results", {item: value})
  };

  return (
    <View style={styles.container}>

      
      <TouchableOpacity
      onPress={update}>
      {/* // style={{backgroundColor: 'transparent'}}> */}
        <Icon
          name='search1'
          type='antdesign'
          color='#FFD0D0'
        />
      </TouchableOpacity>

        <View style={styles.search}>

          
        <SearchBar
        platform="ios"
        containerStyle={styles.inner}
        inputContainerStyle={styles.inner}
        inputStyle={{fontColor: 'white'}}
        searchIcon={{color: '#FFD0D0'}}
        onChangeText={updateSearch}
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
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    search: {
        width: 250,
        borderRadius: 20,
        margin: 10
    },
    inner: {
        backgroundColor: '#FFD0D0',
        borderRadius: 30,
    }
    });


