import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Saf, FlatList } from 'react-native';

import ItemCard from '../components/ItemCard';
import ButtonIcon from '../components/ButtonIcon';
import SearchBar from '../components/SearchBar';

import { Button, ButtonGroup, withTheme } from '@rneui/themed';

// import titles from '../index.js';
import database from '../index.js';

const titles = {
  shirt: {
      name: "Shirt",
      icon: require('../assets/shirticon.png')
  }
};

export default function ResultsPage( {navigation, route} ) {
    const {item} = route.params;
    const [value, setValue] = useState(JSON.stringify(item));
    console.log(JSON.stringify(item));


    const [saleItems, setSaleItems] = useState(database.pants);

  return (
    <View style={styles.container}>
        <SearchBar navigation={navigation} val={value}/>
        <View style={{padding: 10, alignItems: 'center'}}>
        <Text>
            Results for {value}
        </Text>
        </View>

        <FlatList
        data={saleItems}
        style={styles.list}
        numColumns={2}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
            <ItemCard
            name={item.name}
            price={item.price}
            icon={item.icon}
            />
        )}
      />

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },  
  album2: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'space-evenly',
    marginBottom: 10
  },
  list: {
    width: '100%',
    backgroundColor: '#FFF',
  },
  item: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
});
