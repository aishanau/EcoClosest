import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, ButtonGroup, withTheme, Divider, Icon, Dialog, CheckBox } from '@rneui/themed';
import { StyleSheet, Text, View, ScrollView, Saf, 
    TouchableOpacity, Alert, Modal, Pressable, 
    Dimensions, TextInput } from 'react-native';

const screenWidth = Dimensions.get("window").width;

const timeframes = [ 'Select Timeframe', 'Weekly', 'Monthly', 'Every 6 Months', 'Yearly' ];

export default function SetLimitPage({setModalVisible, modalVisible}) {
    const [tf_modal, setTf_modal] = useState(false);
    const [tf_modal2, setTf_modal2] = useState(false);

    const [number, setNumber] = React.useState(0);
    const [limit, setLimit] = React.useState(0);

    const [checked, setChecked] = useState(0);
    const [option, setOption] = useState('Select timeframe')

    const toggleTf_modal = () => {
        setTf_modal(!tf_modal);
    };

    const resetLimit = () => {
        setOption('Select timeframe');
        setLimit(0);
    };

    const toggleTf_modal2 = () => {
        setTf_modal2(!tf_modal2);
    };

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
                style={styles.menu}
                onPress={toggleTf_modal}>
                    <Text> Duration </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{option}</Text>
                    {/* { checked === 0 ? <Text>Select Timeframe</Text> : <Text>Selected</Text> } */}
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
                style={[styles.menu, { borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 20}]}
                onPress={toggleTf_modal2}>
                    <Text> Limit </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    { limit == 0 ? <Text>Select No.of Items</Text> : <Text>{limit}</Text> }
                    {/* <Text>Select No.of Items</Text> */}
                    <Icon
                        reverse
                        name='right'
                        type='antdesign'
                        color='transparent'
                        iconProps={{ color: "#FB5C5C" }}
                        iconStyle={{}}
                        // containerStyle={{ position: 'absolute', right: 0 }}
                        disabledStyle={{}}
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
                onPress={resetLimit}
                >
                <Text style={styles.textStyle}>Reset Limit</Text>
                </Pressable>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
            </View>


            {/* TIMEFRAME DIALOG */}

            <Dialog
            isVisible={tf_modal}
            onBackdropPress={toggleTf_modal}
            >
            <Dialog.Title title="Select Preference"/>
            {['Weekly', 'Monthly', 'Every 6 months', 'Yearly'].map((l, i) => (
                <CheckBox
                key={i}
                title={l}
                containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={checked === i + 1}
                onPress={() => setChecked(i + 1)}
                />
            ))}

            <Dialog.Actions>
                <Dialog.Button
                title="CONFIRM"
                onPress={() => {
                    setOption(timeframes[checked]);
                    console.log(`Option ${checked} was selected!`);
                    toggleTf_modal();
                }}
                />
                <Dialog.Button title="CANCEL" onPress={toggleTf_modal} />
            </Dialog.Actions>
            </Dialog>


            {/* LIMIT DIALOGUE */}
            <Dialog
            isVisible={tf_modal2}
            onBackdropPress={toggleTf_modal2}
            >

            <TextInput 
            style={styles.input}
            keyboardType='numeric'
            onChangeText={ (text) => {
                setNumber(text.replace(/[^0-9]/g, ''));
            }}
            value={number}
            />

            <Dialog.Actions>
                <Dialog.Button
                title="CONFIRM"
                onPress={() => {
                    console.log(`${limit} limit set!`);
                    setLimit(number);
                    toggleTf_modal2();
                }}
                />
                <Dialog.Button title="CANCEL" onPress={toggleTf_modal2} />
            </Dialog.Actions>
            </Dialog>

        </View>
        </View>

    </Modal>

  );
}


const styles = StyleSheet.create({
    menu: {
      padding: 5,
      width: screenWidth,
      paddingLeft: 40,
      borderTopWidth: 1,
      borderTopColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    centeredView: {
      width: screenWidth,
      flex: 1,
      marginTop: 22,
      justifyContent: "center",
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
      textAlign: "center",
      fontColor: '#FFD0D0',
    },
    modalText: {
      marginBottom: 15,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
  });