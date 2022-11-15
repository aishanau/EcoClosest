import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, ButtonGroup, withTheme, Divider, Icon } from '@rneui/themed';
import { StyleSheet, Text, View, ScrollView, Saf, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';

export default function SetLimitPage({setModalVisible, modalVisible}) {

  return (

    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
    }}
    >
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Text style={{ fontWeight: '600', paddingBottom: 10 }}>Set Limit </Text>
            <Text style={styles.modalText}>Set a limit on the maximum number of items they can purchase from the application</Text>

            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 0}}>
                <TouchableOpacity
                style={styles.menu}>
                    <Text> Duration </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text> Select Timeframe</Text>
                    <Icon
                        reverse
                        name='right'
                        type='antdesign'
                        color='transparent'
                        iconProps={{ color: "#FB5C5C" }}
                        iconStyle={{}}
                        // containerStyle={{ position: 'absolute', right: 0 }}
                        disabledStyle={{}}
                        onLongPress={() => console.log("onLongPress()")}
                        onPress={() => console.log("onPress()")}
                        size={20}
                    />
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                style={[styles.menu, { borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 20}]}>
                    <Text> Limit </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Select No. of Items</Text>
                    <Icon
                        reverse
                        name='right'
                        type='antdesign'
                        color='transparent'
                        iconProps={{ color: "#FB5C5C" }}
                        iconStyle={{}}
                        // containerStyle={{ position: 'absolute', right: 0 }}
                        disabledStyle={{}}
                        onLongPress={() => console.log("onLongPress()")}
                        onPress={() => console.log("onPress()")}
                        size={20}
                    />
                    </View>

                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.textStyle}>Set Limit</Text>
                </Pressable>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
            </View>

        </View>
        </View>
    </Modal>

  );
}


const styles = StyleSheet.create({
    menu: {
      padding: 5,
      width: '90%',
      borderTopWidth: 1,
      borderTopColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    centeredView: {
      flex: 1,
      marginTop: 22,
      justifyContent: "center",
      alignItems: "flex-end",
    },
    modalView: {
      margin: 5,
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