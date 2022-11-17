import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Saf } from 'react-native';

import ItemCard from '../components/ItemCard';
import ButtonIcon from '../components/ButtonIcon';

import { Button, ButtonGroup, withTheme } from '@rneui/themed';

// import titles from '../index.js';
import { getDb, setDb } from '../index.js';

export default function CartPage() {

  const [database, setDatabase] = useState(getDb());
  const [myItems, setItems] = useState([...[database.pants[0], database.pants[1]]]);
  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let t = 0
    myItems.map((item) => (
      t = t + item.quantity*parseInt(item.price.substring(1))
    ));
    setTotal(t)
    console.log(t)
  }, [quantity, database])
  
  return (
    <ScrollView style={styles.container} vertical={true}>
        <View style={{ paddingTop: 20, paddingBottom: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.header}>
              My Cart
          </Text>
        </View>

        <View style={styles.album}>
          {myItems.map((item, idx) => (
            <View key={idx}>
              <ItemCard
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
          onPress={onPressLearnMore}
          title="Checkout ->"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
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
});
