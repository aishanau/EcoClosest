import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Saf, TouchableOpacity, Image, Pressable, Dimensions } from 'react-native';
import { Button, ButtonGroup, withTheme, Divider, Icon } from '@rneui/themed';

import SetLimitPage from './SetLimitPage';

const screenWidth = Dimensions.get("window").width;

export default function AccountPage() {
    const [modalVisible, setModalVisible] = useState(false);
    const [limit, setLimit] = useState({});
    const [isLimit, setIslimit] = useState(false);

    useEffect(() => {
      if (limit !=={} && limit.time && limit.limit) {
        setIslimit(true);
      }
    }, [limit])
  return (
    <ScrollView style={styles.container}>
    <View style={{ paddingTop: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
      <Text style={styles.header}>Habit this Month</Text>
      <Image
        style={styles.graph}
          source={
            require('../assets/graph.jpeg')
          }
      />
      
      {!isLimit ? 
        <Text> </Text> 
        : <Text style={styles.sub}> You have set a limit of {limit.limit} Items {limit.time} </Text>
      }

        <SetLimitPage setModalVisible={setModalVisible} modalVisible={modalVisible} retLimit={setLimit}/>

        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(!modalVisible)}
            >
            {!isLimit ? <Text style={styles.textStyle}>Set Limit</Text> : <Text style={styles.textStyle}>Change Limit</Text>}
            
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
  },
  graph: {
    width: screenWidth,
    height: 200,
    resizeMode: 'cover',
  },
  header: {
    padding: 10,
    fontWeight: "700",
    fontSize: 20,
    letterSpacing: 1,
    textAlignment: "center",
    color: "#FB5C5C",
  },
  sub: {
    padding: 10,
    fontWeight: "500",
    fontSize: 14,
    // letterSpacing: 1,
    textAlignment: "center",
    color: "#FB5C5C",
  },
});
