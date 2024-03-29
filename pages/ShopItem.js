import React, { useState } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Modal, SectionList, FlatList, Alert} from 'react-native';
import { Icon, Image, Dialog, ListItem, Divider} from '@rneui/themed';
import { Input } from "@rneui/base";
import { Button } from '@rneui/themed';
import { timeout } from "q";

// update database
import { setDb, database } from "../index";

export default function ShopItem({navigation, route}) {
  // let details = {
  //   name: 'Purple Hoodie',
  //   brand: 'Geeta Mens',
  //   price: '$48.00 AUD',
  //   icon: null
  // }

  const [expandedFabric, setExpandedFabric] = useState(false);
  const [expandedCare, setExpandedCare] = useState(false);
  const [expandedReturn, setExpandedReturn] = useState(false);

  const [sizeModalVisible, setSizeModalVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [item, setItem] = useState(route.params.details);

  const showAlert = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
    
  }

  const addToCart = () => {
    // Update quantity field in database
    let result = database['pants'].findIndex(i => i.name === item.name);
    if (result >= 0) {
      database['pants'][result].quantity = database['pants'][result].quantity + 1;
      setDb(database);
    }
    result = database['jackets'].findIndex(i => i.name === item.name);
    if (result >= 0) {
      database['jackets'][result].quantity = database['jackets'][result].quantity + 1;
      setDb(database);
    }
    // console.log(result);
    
    // console.log(item.quantity);

  }

  const tryInOutfit = (image) => {
    // TODO: Navigate to try outifts page
  }

  return <ScrollView>
      {/* IMAGE */}
    <View style={{ marginBottom: 70}}>
      {/* <TouchableOpacity style={{position: 'absolute', left: 35, top: 70, zIndex: 2}}>
        <Icon name="arrowleft" type="antdesign"/>
      </TouchableOpacity> */}
      <Image source={{uri: route.params.details.icon}} containerStyle={{aspectRatio: 0.8, backgroundColor: '#ccc', width: '100%'}} />
      {/* ITEM INFO */}
      <View style={{ padding: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginVertical: 5}}>{route.params.details.name}</Text>
        <Text>{route.params.details.brand}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginVertical: 15}}>{route.params.details.price}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 11}}>DESCRIPTION</Text>
        <Text style={{fontSize: 12, marginTop: 10, marginBottom: 20}}>{description}</Text>

        {/* BUTTONS */}
        {/* ADD TO CART */}
        <Button 
          buttonStyle={styles.btn}
          containerStyle={{marginVertical: 10}}
          onPress={() => {setSizeModalVisible(true)}}
        >
          <Icon name="shopping-bag" type="font-awesome" color="white" size="20"/>
          <Text style={styles.btnText}>Add to Cart</Text>
        </Button>
        {/* SIZE MODAL */}
        <Modal
          animationType="slide"
          transparent
          visible={sizeModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalView}>
              <View>
                <TouchableOpacity
                  style={{alignItems: 'flex-end'}}
                  onPress={() => {setSizeModalVisible(false)}}>
                  <Icon style={{paddingRight: 35}} name="x" type="feather"></Icon>
                </TouchableOpacity>
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 11, marginVertical: 10, textAlign: 'center'}}>SELECT SIZE</Text>
              <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 15, marginBottom: 30}}>
                {sizes.map((size, idx) => {
                  return <TouchableOpacity key={idx} onPress={() => {setSizeModalVisible(false); addToCart(); showAlert();}}>
                    <View style={{backgroundColor: '#F1F4FB', borderRadius: 6, marginHorizontal: 10, width: 50, aspectRatio: 1, justifyContent: 'center', alignItems: 'center'}}>
                      <Text>{size}</Text>
                    </View>
                  </TouchableOpacity>
                })}
              </View>
            </View>
          </View>
        </Modal>
        {/* ADDED TO CART ALERT */}
        <Modal 
          animationType="fade"
          transparent
          visible={alertVisible}
        >
          <View style={styles.alertOverlay}>
            <View style={styles.alertView}>
                <Text style={{color: 'white', textAlign: 'center', fontSize: 17, fontWeight: 'bold'}}>Added to Cart</Text>
            </View>
          </View>
        </Modal>
        {/* TRY IN OUTFIT */}
        <Button 
          buttonStyle={styles.btn}
          containerStyle={{marginVertical: 10}}
          onPress={() => {tryInOutfit(route.params.details.icon)}}
        >
          <Icon name="hanger" type="material-community" color="white" size="20"/>
          <Text style={styles.btnText}>Try in Outfit</Text>
        </Button>
      </View>
      {/* EXTRA ITEM DETAILS */}
      <ListItem.Accordion
        topDivider
        content={
          <>
            <ListItem.Content style={styles.accordionBox}>
              <ListItem.Title style={styles.accordionText}>FABRIC COMPOSITION</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expandedFabric}
        onPress={() => {
          setExpandedFabric(!expandedFabric);
        }}
      >
        <View style={styles.accordionContent}>
          <Text>{fabric}</Text>
        </View>
      </ListItem.Accordion>
      <ListItem.Accordion
        topDivider
        content={
          <>
            <ListItem.Content style={styles.accordionBox}>
              <ListItem.Title style={styles.accordionText}>CARE</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expandedCare}
        onPress={() => {
          setExpandedCare(!expandedCare);
        }}
      >
        <View style={styles.accordionContent}>
          <Text>{care}</Text>
        </View>
      </ListItem.Accordion>
      <ListItem.Accordion
        topDivider
        content={
          <>
            <ListItem.Content style={styles.accordionBox}>
              <ListItem.Title style={styles.accordionText}>RETURN POLICY</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expandedReturn}
        onPress={() => {
          setExpandedReturn(!expandedReturn);
        }}
      >
        <View style={styles.accordionContent}>
          <Text>{policy}</Text>
        </View>
      </ListItem.Accordion>
    </View>
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
    paddingVertical: 15
  },
  btnText: {
    fontWeight: '700',
    margin: 5,
    marginHorizontal: 10,
    color: 'white'
  },
  accordionText: {
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 12
  },
  accordionBox: {
    paddingHorizontal: 10
  },
  accordionContent: {
    paddingHorizontal: 25,
    paddingBottom: 25,
    backgroundColor: 'white'
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalView: {
    positon: "absolute",
    bottom: 0,
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 35,
    paddingHorizontal: 10,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  alertOverlay: {
    flex: 1,
    justifyContent: 'center'
  },
  alertView: {
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    borderRadius: 20,
    marginHorizontal: 70,
    paddingVertical: 50,
    paddingHorizontal: 10,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

const sizes = ['XS', 'S', 'M', 'L', 'XL'];
const description = "This soft V-neckline and slight flared shape over the hips makes for a flattering fit. The Viola has a centre back seam so fits perfectly into the small of your back.";
const care = "Handwash or machine wash in cold water with eco-friendly detergent.";
const fabric = "92% bamboo (viscose) 8% spandex. Fabric made in Australia. 275gsm.\n\nThe Bamboo Jersey has a beautiful feel as it is made using the viscose process leaving it with a luxurious handle. It remains 'pill free' for a long time due to the quality yarn used.";
const policy = "We are happy for you to return items for a refund or exchange. To organise a return, items must be unused and in original condition, so all tags must still be attached.\n\nPlease take care when trying clothes on to ensure no pet hair or strong smells are present also.";