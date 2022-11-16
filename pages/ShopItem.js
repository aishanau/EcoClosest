import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, SectionList, FlatList} from 'react-native';
import { Icon, Image, Dialog, ListItem, Divider} from '@rneui/themed';
import { Input } from "@rneui/base";
import { Button } from '@rneui/themed';

export default function ShopItem() {
  let details = {
    name: 'Purple Hoodie',
    brand: 'Geeta Mens',
    price: '$48.00 AUD'
  }

  const [expandedFabric, setExpandedFabric] = useState(false);
  const [expandedCare, setExpandedCare] = useState(false);
  const [expandedReturn, setExpandedReturn] = useState(false);

  return <ScrollView style={{padding: 0, margin: 0}}>
      {/* IMAGE */}
      <Image style={{backgroundColor: '#ccc', height: '100%', width: '100%'}}>
        <View style={{paddingHorizontal: 35}}>
          <TouchableOpacity style={{alignSelf: 'flex-start'}}>
            <Icon name="arrowleft" type="antdesign"/>
          </TouchableOpacity>
        </View>
      </Image>
      {/* ITEM INFO */}
      <Text>{details.name}</Text>
      <Text>{details.brand}</Text>
      <Text>{details.price}</Text>
      <Text>Description</Text>
      <Text>lorem ipsum description</Text>

      {/* BUTTONS */}
      <Button 
        buttonStyle={styles.btn}
        containerStyle={{
            marginHorizontal: 20
        }}
      >
        <Icon name="shopping-bag" type="font-awesome" reverse/>
        <Text style={styles.btnText}>Add to Cart</Text>
      </Button>
      <Button 
        buttonStyle={styles.btn}
        containerStyle={{
            marginHorizontal: 20
        }}
      >
        <Icon name="hanger" type="material-community" reverse/>
        <Text style={styles.btnText}>Try in Outfit</Text>
      </Button>

      {/* EXTRA ITEM DETAILS */}
      <ListItem.Accordion
        content={
          <>
            <ListItem.Content>
              <ListItem.Title>Fabric Composition</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expandedFabric}
        onPress={() => {
          setExpandedFabric(!expandedFabric);
        }}
      >
        <Text>lorem ipsum</Text>
      </ListItem.Accordion>
      <ListItem.Accordion
        content={
          <>
            <ListItem.Content>
              <ListItem.Title>Care</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expandedCare}
        onPress={() => {
          setExpandedCare(!expandedCare);
        }}
      >
        <Text>lorem ipsum</Text>
      </ListItem.Accordion>
      <ListItem.Accordion
        content={
          <>
            <ListItem.Content>
              <ListItem.Title>Return Policy</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expandedReturn}
        onPress={() => {
          setExpandedReturn(!expandedReturn);
        }}
      >
        <Text>lorem ipsum</Text>
      </ListItem.Accordion>
  </ScrollView>
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: '700',
    marginHorizontal: 40,
    textAlign: 'center'
  },
  btn: {
    backgroundColor: '#FB5C5C',
    borderRadius: 30,
    paddingHorizontal: 30,
  },
  btnText: {
    fontWeight: '700',
    margin: 5,
    color: 'white'
  }
})