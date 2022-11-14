import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Saf } from 'react-native';

import ItemCard from '../components/ItemCard';
import ButtonIcon from '../components/ButtonIcon';
import SearchBar from '../components/SearchBar';

import { Button, ButtonGroup, withTheme } from '@rneui/themed';

import titles from '../index.js';

export default function BrowsePage() {
    const [category, setCategory] = useState([ 
        {title: titles.shirt.name, image: titles.shirt.icon },
        {title: titles.shirt.name, image: titles.shirt.icon },
        {title: titles.shirt.name, image: titles.shirt.icon },
        {title: titles.shirt.name, image: titles.shirt.icon },
    ]);

  return (
    <ScrollView style={styles.scrollView}>
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
                />
      ))}

        </View>
        <Button
              title="Browse all categories"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={styles.btn}
              titleStyle={{ fontWeight: '600', fontSize: 16, color: '#FB5C5C' }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
              }}
              onPress={() => console.log('aye')}
            />

        <Text style={styles.title}>
            On Sale
        </Text>
        {/* <View style={styles.album2}>
            <ScrollView
            horizontal={true}
            >
            {category.map(({ title, image }, idx) => (
                <ItemCard
                key={idx}
                // onPress={() =>
                //     navigation.navigate("Details", {
                //     title,
                //     text,
                //     image,
                    // })
                // }
                />
      ))}
            </ScrollView>
        </View> */}
      {/* <ItemCard /> */}
      {/* <ButtonIcon name={titles.shirt}/> */}
    </View>
    </ScrollView>

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
    marginBottom: 10
  },
  album2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-evenly',
    marginBottom: 10
  },
  header: {
    margin: 5,
    fontWeight: '700'
  },
  title: {
    fontColor: '#FB5C5C',
    fontSize: '20px',
    fontWeight: '600'
  },
  btn: {
    backgroundColor: '#FFD0D0',
    borderRadius: 30,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 6
  },
});
