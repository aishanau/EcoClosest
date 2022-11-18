import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Saf } from 'react-native';

import CartItemCard from '../components/CartItemCard';
import CartExceedingModal from "../components/CartExceedingModal";

import { Button, ButtonGroup, withTheme } from '@rneui/themed';

import { getDb, setDb } from '../index.js';

export default function CartPage() {

  const [database, setDatabase] = useState(getDb());
  const [myItems, setItems] = useState([]);
  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(0)
  const [modalDisplay, setModalDisplay] = useState('none')
  const [limit, setLimit] = useState(3);
  
  // initial use effect to see what items are in cart
  useEffect(() => {
    let newItems = []
    for (let item of database['pants']) {
      if (item.quantity > 0) {
        newItems.push(item);
      }
    }
    // update myItems
    setItems(newItems);

  },[])

  useEffect(() => {
    let t = 0
    for (let item of database['pants']) {
      console.log(item.quantity);
      t = t + item.quantity*parseInt(item.price.substring(1))
    }
    setTotal(t)
    console.log(t)
  }, [quantity, database])
  
  // use effect to update items shown on page
  useEffect(() => {
    let newItems = []
    let totalQuantity = 0
    for (let item of database['pants']) {
      if (item.quantity > 0) {
        totalQuantity = totalQuantity + item.quantity;
        newItems.push(item);
      }
    }
    console.log(modalDisplay);
    if (totalQuantity > limit) {
      setModalDisplay('flex');
    } else if (totalQuantity <= limit) {
      setModalDisplay('none');
    }
    // update myItems
    setItems(newItems);

  }, [quantity, database])

  return (
    <ScrollView style={styles.container} vertical={true}>
        
        <View style={{ paddingTop: 20, paddingBottom: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.header}>
              My Cart
          </Text>
        </View>
        <CartExceedingModal
          display={modalDisplay} 
        />

        <View style={styles.album}>
          {myItems.map((item, idx) => (
            <View key={idx}>
              <CartItemCard
                database={database}
                setDatabase={setDatabase}
                quantity={quantity}
                setQuantity={setQuantity}
                idx={idx}
                name={item.name}
                price={item.price}
                icon={item.icon}
                description={item.description}
              />
            </View>
          ))}
        </View>

        <View>
          {myItems.map((item, idx) => (
            <View style={styles.itemTotal} key={idx}>
              <Text style={styles.priceText}>{item.quantity} x {item.name}</Text>
              <Text style={styles.priceText}>${item.quantity*parseInt(item.price.substring(1))} AUD</Text>
          </View>
          ))}
          <View
            style={{
              borderBottomColor: '#eeeeee',
              borderBottomWidth: 1,
              marginBottom: 15,
              marginTop: 15,
            }}
          />
          <View style={styles.itemTotal}>
              <Text style={styles.priceText}>Total:</Text>
              <Text style={styles.priceText}>${total} AUD</Text>
          </View>
          
        </View>
        <Button
            title="Checkout"
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={styles.btnYES}
            titleStyle={{ fontWeight: '600', fontSize: 16, color: '#FB5C5C' }}
            containerStyle={{
              marginHorizontal: 50,
              height: 50,
              width: 300,
              marginVertical: 10,
              alignSelf: 'center',
            }}
            onPress={() => console.log('aye')}
          />
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    width: '100%',
  },
  album: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20,
  },

  header: {
    paddingTop: 20,
    fontWeight: '700',
    textAlignment: 'center',
    fontSize: '20px',

  },
  title: {
    fontColor: '#FB5C5C',
    fontSize: '20px',
    fontWeight: '600',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#FFD0D0',
    borderRadius: 30,
  },
  itemTotal: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  priceText: {
    fontSize: '20px',
    fontWeight: '400',
  },
  btnYES: {
    backgroundColor: '#FFD0D0',
    borderRadius: 30,
    // alignItems: 'center',
  },
  btnNO: {
    backgroundColor: '#eeeeee',
    borderRadius: 30,
  },
});
