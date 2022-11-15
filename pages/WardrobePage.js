import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Saf } from 'react-native';

const WardrobePage = () => {


  return (
    <ScrollView style={styles.container}>
        <Text>this is an empty page</Text>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
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
    marginBottom: 20
  },
  header: {
    paddingTop: 20,
    fontWeight: '700',
    textAlignment: 'center',

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
});

export default WardrobePage;