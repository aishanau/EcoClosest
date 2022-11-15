import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Saf, TouchableOpacity } from 'react-native';
// import { Divider } from 'react-native-elements';

import { Button, ButtonGroup, withTheme, Divider, Icon } from '@rneui/themed';

export default function BrowsePage() {

  return (
    <ScrollView style={styles.container}>
    <View style={{ paddingTop: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
        <Button
            title="Set Limit"
            buttonStyle={{
                backgroundColor: '#FB5C5C',
                borderRadius: 30,
            }}
            containerStyle={{
            width: 250,
            marginHorizontal: 50,
            marginVertical: 20,
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 14 }}
        />

        <TouchableOpacity
            style={styles.menu}>
            <Icon
                reverse
                name='account-circle'
                type='materialicons'
                color='transparent'
                containerStyle={{}}
                iconProps={{ color: "#FB5C5C" }}
                iconStyle={{}}
                disabledStyle={{}}
                onLongPress={() => console.log("onLongPress()")}
                onPress={() => console.log("onPress()")}
                size={25}
            />
            <Text> Account </Text>
            <Icon
                reverse
                name='right'
                type='antdesign'
                color='transparent'
                iconProps={{ color: "#FB5C5C" }}
                iconStyle={{}}
                containerStyle={{ position: 'absolute', right: 0 }}
                disabledStyle={{}}
                onLongPress={() => console.log("onLongPress()")}
                onPress={() => console.log("onPress()")}
                size={20}
            />
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.menu2}>
            <Icon
                reverse
                name='settings'
                type='feather'
                color='transparent'
                containerStyle={{}}
                iconProps={{ color: "#FB5C5C" }}
                iconStyle={{}}
                disabledStyle={{}}
                onLongPress={() => console.log("onLongPress()")}
                onPress={() => console.log("onPress()")}
                size={25}
            />
            <Text> Settings </Text>
            <Icon
                reverse
                name='right'
                type='antdesign'
                color='transparent'
                iconProps={{ color: "#FB5C5C" }}
                iconStyle={{}}
                containerStyle={{ position: 'absolute', right: 0 }}
                disabledStyle={{}}
                onLongPress={() => console.log("onLongPress()")}
                onPress={() => console.log("onPress()")}
                size={20}
            />
        </TouchableOpacity>

        {/* <Button
              title="My Account"
              titleStyle={{ fontWeight: 'semi-bold', fontSize: 18, color: '#FB5C5C' }}
              buttonStyle={{
                borderWidth: 2,
                borderColor: '#FFD0D0',
                backgroundColor: 'transparent',
              }}
              containerStyle={{
                width: '100%',
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 10,
                color: '#FB5C5C',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
        /> */}

        <Button
            title="LOGOUT"
            buttonStyle={{
                backgroundColor: '#565454',
                borderRadius: 30,
            }}
            containerStyle={{
            width: 250,
            marginHorizontal: 50,
            marginVertical: 20,
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 14 }}
        />
    </View>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  menu: {
    padding: 5,
    borderTopWidth: 2,
    borderTopColor: '#FFD0D0',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  menu2: {
    padding: 5,
    borderTopWidth: 2,
    borderTopColor: '#FFD0D0',
    borderBottomWidth: 2,
    borderBottomColor: '#FFD0D0',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
});
