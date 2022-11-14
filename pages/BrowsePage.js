import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ItemCard from '../components/ItemCard';
import ButtonIcon from '../components/ButtonIcon';
import SearchBar from '../components/SearchBar';

import titles from '../index.js';

export default function BrowsePage() {
    const [category, setCategory] = useState([ 
        {title: titles.shirt.name, image: titles.shirt.icon },
        {title: titles.shirt.name, image: titles.shirt.icon },
        {title: titles.shirt.name, image: titles.shirt.icon },
        {title: titles.shirt.name, image: titles.shirt.icon },
    ]);

  return (
    <View style={styles.container}>
        <Text style={styles.header}>
            Shop Sustainably
        </Text>
        <Text>
            All Items Are Ethically Sourced
        </Text>
        <SearchBar />
        <Text style={styles.title}>
            Shop by Category
        </Text>
        <View style={styles.album}>
            {category.map(({ title, image }, idx) => (
                <ButtonIcon
                key={idx}
                title={title}
                image={image}
                // onPress={() =>
                //     navigation.navigate("Details", {
                //     title,
                //     text,
                //     image,
                    // })
                // }
                />
      ))}

        </View>

      {/* <ItemCard /> */}
      {/* <ButtonIcon name={titles.shirt}/> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  album: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'space-evenly',
  },
  header: {
    margin: 5,
    fontWeight: '700'
  },
  title: {
    fontColor: '#FB5C5C',
    fontSize: '20px',
    fontWeight: '600'
  }
});
