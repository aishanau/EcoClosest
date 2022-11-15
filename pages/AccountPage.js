import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Saf, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';
import { Button, ButtonGroup, withTheme, Divider, Icon } from '@rneui/themed';

import SetLimitPage from './SetLimitPage';

export default function AccountPage() {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView style={styles.container}>
    <View style={{ paddingTop: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 0 }}>

        <SetLimitPage setModalVisible={setModalVisible} modalVisible={modalVisible} />

        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(!modalVisible)}
            >
            <Text style={styles.textStyle}>Set Limit</Text>
        </Pressable>

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
    marginTop: 15,
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
  centeredView: {
    flex: 1,
    marginTop: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FFD0D0",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 30,
    width: 250,
    padding: 10,
    elevation: 2,
    margin: 5
  },
  buttonOpen: {
    backgroundColor: "#FB5C5C",
  },
  buttonClose: {
    backgroundColor: "#565454",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
  }
});
