import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from '@rneui/themed';
import RnIncrementDecrementBtn from './RnIncrementDecrementBtn/rnIncrementDecrementBtn';
import { useState, useEffect } from 'react';
import {Button} from 'react-native-paper';
import {getDb, setDb} from '../index.js';

import { useIsFocused } from "@react-navigation/native";

const CartItemCard = ({database, setDatabase, quantity, setQuantity, idx, name, icon, price, description}) => {

  const isFocused = useIsFocused();
  const [item, setItem] = useState({});

  const updateQ = (event) => {
    setQuantity(event);
    const newDb = database;
    // check if pant or jacket
    let result = database['pants'].findIndex(i => i.name === name);
    if (result >= 0) {
      console.log('IS IT A PANT?')
      // it is a pant
      newDb['pants'][result]['quantity'] = parseInt(event);
    } else {
      result = database['jackets'].findIndex(i => i.name === name);
      // it is a jacket
      if (result >= 0) {
        console.log('IS IT A JACKET?')
        newDb['jackets'][result]['quantity'] = parseInt(event);
      }
    }
    setDatabase(newDb);
    setDb(database);
  }

  const deleteItem = (quan) => {
    setQuantity(quan);
    const newDb = database;
    if (result == idx) {
      // it is a pant
      newDb['pants'][idx]['quantity'] = parseInt(quan)
    } else {
      result = database['jackets'].findIndex(i => i.name === name);
      // it is a jacket
      if (result == idx) {
        newDb['jackets'][idx]['quantity'] = parseInt(quan)
      }
    }
    setDatabase(newDb);
    setDb(database);
  }

  useEffect(() => {
    setDb(database);
  }, [database])


  return (
    <>
    <View elevation={10} style={[styles.container, styles.shadowProp]}>
      <View style={styles.leftImage}>
        <Image
          style={{ width: 140, height: 140, resizeMode: 'cover', }}
          source={{
            uri: icon
          }} />
      </View>
      <View style={styles.rightInfo}>
        <View style={styles.deleteIcon}>
          <Text style={styles.productTitle}>{name}</Text>
          <TouchableOpacity onPress={() => deleteItem(0)}>
            <Image
              style={{ width: 22, height: 22, resizeMode: 'cover' }}
              source={require('../assets/deleteicon.png')} />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.productName}>
      
    </View> */}
        <View style={styles.productInfo}>
          <Text>{description}</Text>
        </View>

        <View style={styles.productNumbers}>
          <Text style={styles.productPrice}>{price}</Text>
          <RnIncrementDecrementBtn
            minVal={0}
            max={10}
            val={1}
            disableControl={false}
            disabledColor={'#eeeeee'}
            activeColor={'#adebaa'}
            handleClick={(event) => updateQ(event)}
            styleBtn={{ width: 50, height: 50 }}
            styleTextInput={{ width: 50, height: 50, backgroundColor: '#adebaa' }}
            labelStyle={{ fontSize: 15, color: 'blue' }} />
        </View>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: '2rem',
    margin: 20,
    // borderWidth: 1,
    // borderColor: '#FFD0D0',
    borderRadius: 20,
    width: '60%',
    alignSelf: 'center',
    backgroundColor: 'white',  
  },
  leftImage: {
    width: '35%',
    alignItems: 'center',
    height: '100%',
    padding: 10,
    borderRightWidth: 2,
    borderColor: '#eeeeee',
  },
  rightInfo: { 
    width: '65%',
    height: '100%',
    justifyContent: 'space-evenly',
    padding: 10,
    marginRight: 35,
    marginLeft: 15,
  },
  deleteIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productName: {
    // alignSelf: 'flex-start',
  },
  productTitle: {
    fontSize: '20px',
    fontWeight: '500',
  },
  productInfo: {
    alignSelf: 'flex-start',
  },
  productNumbers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productPrice: {
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: '20px',
    fontWeight: '400',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default CartItemCard;
