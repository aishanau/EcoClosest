import React, { useState } from 'react';
import {TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Card } from '@rneui/themed';
import titles from '../index.js';

export default function ButtonIcon({title, image}) {

    return (
    <TouchableOpacity style={styles.btn}>
        <Card containerStyle={styles.card} wrapperStyle={styles.innerCard}>
          <Image
          source={
            // require('../assets/shirticon.png')
            image
            // name.icon
          }
         />
        <View>
          <Text style={styles.title}>
            {/* {name.name} */}
            {/* Name */}
            {title}
          </Text>
        </View>
        </Card>
    </TouchableOpacity>
    );
}

// Issue: font color not changing
const styles = StyleSheet.create({

    card: {
      border: '10px',
      borderColor: '#FFD0D0',
      borderRadius: 30,
      backgroundColor: '#FFD0D0',
    },
    innerCard: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFD0D0',
    },
    title: { 
      margin: 10, 
      color: '#FB5C5C', 
      fontSize: '18px',
      fontWeight: 'large'
    },
    price: { 
      fontSize: '16px',
      fontColor: '#D8143A'
    },
  });
  