import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Saf, FlatList, TouchableOpacity } from 'react-native';

import ItemCard from '../components/ItemCard';
import SearchBar from '../components/SearchBar';
import FilterPage from './FilterPage';


import { Button, ButtonGroup, withTheme, Icon } from '@rneui/themed';

// import titles from '../index.js';
import database from '../index.js';


export default function CategoryPage( {navigation, route} ) {
    const {item} = route.params;

    const [value, setValue] = useState(item);
    const [modalVisible, setModalVisible] = useState(false);
    const [saleItems, setSaleItems] = useState([]);

    console.log(value);

    useEffect(() => {
        if (value == 'Pants') {
            setSaleItems(database.pants);
        } else if (value === 'Jackets') {
            setSaleItems(database.jackets);
        } else {
            setSaleItems([]);
        }
    }, [value]) 


  return (
    <View style={styles.container}>
        <SearchBar navigation={navigation} val={value}/>
        <View style={{padding: 10, alignItems: 'center'}}>
        <Text style={{ fontWeight: '800' }}>
            Showing results for {value}
        </Text>

        </View>

        <FilterPage setModalVisible={setModalVisible} modalVisible={modalVisible} />
        <TouchableOpacity 
        style={styles.sortbtn}
        onPress={() => setModalVisible(!modalVisible)}>
            <Text style={{color: '#FB5C5C', padding: 5}}>Filter & Sort</Text>
            <Icon
            name='options-outline'
            type='ionicon'
            color='#FFD0D0'
            />
        </TouchableOpacity>
        {
            saleItems.length == 0 
            ? <View style={{padding: 10, alignItems: 'center'}}>
                <Text>No results for {value} :c </Text> 
            </View>
            : <FlatList
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
        }


    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },  
  sortbtn: {
    // padding: 5,
    borderWidth: 1,
    borderColor: '#FB5C5C',
    marginTop: 5,
    width: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
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
