import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, SectionList, FlatList} from 'react-native';
import { Icon, Image, ListItem, Divider} from '@rneui/themed';
import { Input } from "@rneui/base";

import SearchBar from '../components/SearchBar';

import { Button } from '@rneui/themed';

export default function UploadItem({image}) {
  const [item, setItem] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [colour, setColour] = useState([]);
  const [fabric, setFabric] = useState([]);

  const [brandModalVisible, setBrandModalVisible] = useState(false);
  const [brandSearch, setBrandSearch] = useState('');

  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [colourModalVisible, setColourModalVisible] = useState(false);
  const [fabricModalVisible, setFabricModalVisible] = useState(false);

  const pressFabricCheckBox = (item) => {
    if (fabric.includes(item)) {
      setFabric(fabric.filter(f => f != item));
    } else {
      setFabric([...fabric, item]);
    }
  }

  const pressColourCheckBox = (item) => {
    if (colour.includes(item)) {
      setColour(colour.filter(c => c != item));
    } else {
      setColour([...colour, item]);
    }
  }

  return <ScrollView>
    <View style={{ marginVertical: 70}}>
      <View style={{paddingHorizontal: 35}}>
        <TouchableOpacity style={{alignSelf: 'flex-start'}}>
          <Icon name="arrowleft" type="antdesign"/>
        </TouchableOpacity>
        <Text style={styles.heading}>Add Details</Text>
      </View>
      <Image
        source={{uri: image}}
        containerStyle={{aspectRatio: 1, width: '100%', height: 'auto', backgroundColor: '#ccc', marginVertical: 20}}
      />

      {/* FORM INPUT */}
      <View style={{margin: 10}}>
        {/* ITEM NAME */}
        <Input
          containerStyle={styles.input}
          inputContainerStyle={{}}
          label="Item Name"
          placeholder="Item Name"
          onChangeText={(input) => setItem(input)}
          value={item}
        />
        {/* <Divider/> */}

        {/* BRAND MODAL */}
        {/* <ListItem.Swipeable style={{padding: 0}}>
          <ListItem.Content> */}
            
          {/* </ListItem.Content>
          <ListItem.Chevron />
        </ListItem.Swipeable> */}
        <TouchableOpacity
          onPress={() => {setBrandModalVisible(!brandModalVisible)}}>
            <Input
              containerStyle={{}}
              inputContainerStyle={{}}
              label="Brand"
              placeholder="Select Brand"
              disabled
              disabledInputStyle={{color: 'black'}}
              value={brand}
            />
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent
          visible={brandModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setBrandModalVisible(!brandModalVisible);
          }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalView}>
              <View style={{alignSelf: 'center'}}>
                <TouchableOpacity
                  style={{alignItems: 'flex-end'}}
                  onPress={() => {setBrandModalVisible(false)}}>
                  <Icon style={{paddingRight: 35}} name="x" type="feather"></Icon>
                </TouchableOpacity>
                <Text style={styles.heading}>Brand</Text>
                <SearchBar style={{alignItems: 'center'}} value={brandSearch} setValue={(value) => {setBrandSearch(value)}}></SearchBar>
              </View>
              <View style={{padding: 0, margin: 0, width: '100%', height: '70%', justifyContent: 'flex-end'}}>
                {brandSearch == '' ? < SectionList
                  stickySectionHeadersEnabled
                  cont
                  sections={brandsSection}
                  renderItem={({item}) =>
                    <TouchableOpacity onPress={() => {setBrand(item); setBrandModalVisible(false);}}>
                      <View>
                        <Text style={styles.item}>{item}</Text>
                      </View>
                    </TouchableOpacity>
                  }
                  renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                  keyExtractor={(item, index) => `basicListEntry-${item.title}-${index}`}
                />
                : 
                <FlatList
                  data={brands.filter(item => item.toLowerCase().includes(brandSearch.toLowerCase()))}
                  renderItem={({item}) =>
                  <TouchableOpacity onPress={() => {setBrand(item); setBrandModalVisible(false);}}>
                    <View>
                      <Text style={styles.item}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                }
                />
                }
              </View>
            </View>
          </View>
        </Modal>

        {/* CATEGORY MODAL */}
        <TouchableOpacity
          onPress={() => {setCategoryModalVisible(!categoryModalVisible)}}>
          <Input
            containerStyle={styles.input}
            inputContainerStyle={{}}
            label="Category"
            placeholder="Category"
            value={category}
            disabled
          />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent
          visible={categoryModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setCategoryModalVisible(!categoryModalVisible);
          }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalView}>
              <View>
                <TouchableOpacity
                  style={{alignItems: 'flex-end'}}
                  onPress={() => {setCategoryModalVisible(false)}}>
                  <Icon style={{paddingRight: 35}} name="x" type="feather"></Icon>
                </TouchableOpacity>
                <Text style={styles.heading}>Category</Text>
              </View>
              <View style={{marginTop: 20, marginBottom: 50}}>
                {categories.map((item, idx) => {
                  return <TouchableOpacity key={idx} onPress={() => {setCategory(item); setCategoryModalVisible(false);}}>
                    <View>
                      <Text style={styles.item}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                })}
              </View>
            </View>
          </View>
        </Modal>

        {/* PRICE */}
        <Input
          containerStyle={styles.input}
          inputContainerStyle={{}}
          label="Price"
          placeholder="AUD"
          keyboardType="decimal-pad"
          onChangeText={(input) => setPrice(input)}
          value={price.toString()}
        />

        {/* COLOUR */}
        <TouchableOpacity onPress={() => {setColourModalVisible(!colourModalVisible)}}>
        <Input
          containerStyle={styles.input}
          inputContainerStyle={{}}
          label="Colour"
          placeholder="Select Colour"
          keyboardType="decimal-pad"
          value={colour.toString()}
          disabled
        />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent
          visible={colourModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setCategoryModalVisible(!colourModalVisible);
          }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalView}>
              <View>
                <TouchableOpacity
                  style={{alignItems: 'flex-end'}}
                  onPress={() => {setColourModalVisible(false)}}>
                  <Icon style={{paddingRight: 35}} name="x" type="feather"></Icon>
                </TouchableOpacity>
                <Text style={styles.heading}>Colour</Text>
              </View>
              <View style={{height: '75%', marginVertical: 10}}>
                  {coloursList.map((item, idx) => {
                    return <ListItem.CheckBox
                    key={idx}
                    onPress={() => {pressColourCheckBox(item)}}
                    title={
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <View style={{backgroundColor: item.toLowerCase(), width: 20, marginHorizontal: 10, borderWidth: item == 'White' ? 1 : 0}}/>
                        <Text>{item}</Text>
                      </View>
                    }
                    containerStyle={styles.item}
                    checked={colour.includes(item)}
                  />
                  })}
              </View>
              <Button
                onPress={() => {setColourModalVisible(false);}}
                buttonStyle={styles.btn}
                containerStyle={{
                    marginHorizontal: 20,
                }}
              >
              <Text style={styles.btnText}>Done</Text>
            </Button>
            </View>
          </View>
        </Modal>
        
        {/* FABRIC COMPOSITION */}
        <TouchableOpacity onPress={() => {setFabricModalVisible(!fabricModalVisible)}}>
          <Input
            containerStyle={styles.input}
            inputContainerStyle={{}}
            label="Fabric Composition"
            placeholder="Select Fabric"
            keyboardType="decimal-pad"
            value={fabric.toString()}
            disabled
          />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent
          visible={fabricModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setCategoryModalVisible(!fabricModalVisible);
          }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalView}>
              <View>
                <TouchableOpacity
                  style={{alignItems: 'flex-end'}}
                  onPress={() => {setFabricModalVisible(false)}}>
                  <Icon style={{paddingRight: 35}} name="x" type="feather"></Icon>
                </TouchableOpacity>
                <Text style={styles.heading}>Fabric Composition</Text>
              </View>
              <View style={{height: '70%', marginVertical: 10}}>
                <FlatList
                  data={fabricList}
                  renderItem={({item}) => 
                    <ListItemCheckBox
                      onPress={() => {pressFabricCheckBox(item)}}
                      checked={fabric.includes(item)}
                      title={item}
                      containerStyle={styles.item}
                    />
                  }
                />
              </View>
              <Button
                onPress={() => {setFabricModalVisible(false);}}
                buttonStyle={styles.btn}
                containerStyle={{
                    marginHorizontal: 20,
                    marginTop: 20
                }}
              >
              <Text style={styles.btnText}>Done</Text>
            </Button>
            </View>
          </View>
        </Modal>
      </View>
      <Button 
          buttonStyle={styles.btn}
          containerStyle={{
              marginHorizontal: 20
          }}
        >
        <Text style={styles.btnText}>Save</Text>
      </Button>
    </View>
  </ScrollView>
}

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
    paddingTop: 35,
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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 50,
  },
  input: {
    marginVertical: 10
  }
})

const brandsSection = [
  {title: 'A', data: ["ASOS", "Adidas", "Aldo", "American Eagle Outfitters", "Armani", "Asics", "Audemars Piguet"]},
  {title: 'B', data: ["Banana Republic", "Bogner", "Breguet", "Brunello Cucinelli", "Burberry"]},
  {title: 'C', data: ["C&A", "Calvin Klein", "Cartier", "Chanel", "Chopard", "Chow Tai Fook", "Christian Louboutin", "Coach", "Cole Haan"]},
  {title: 'D', data: ["Desigual", "Diesel", "Dior", "Dolce & Gabbana"]},
  {title: 'E', data: ["ESCADA", "Elie Saab", "Elie Tahari"]},
  {title: 'F', data: ["Fendi", "Foot Locker Inc.", "Forever 21", "Fossil", "Furla"]},
  {title: 'G', data: ["G-star", "GAP", "Gucci"]},
  {title: 'H', data: ["H&M", "Hermès", "Hugo Boss"]},
  {title: 'I', data: ["IWC Schaffhausen"]},
  {title: 'J', data: ["Jaeger-Le Coultre", "Jimmy Choo"]},
  {title: 'L', data: ["Lacoste", "Lao Feng Xiang", "Levi’s", "Longchamp", "Longines", "Louis Vuitton", "Lululemon"]},
  {title: 'M', data: ["Macy’s", "Manolo Blahnik", "Max Mara", "Michael Kors", "Moncler"]},
  {title: 'N', data: ["Net-a-Porter", "New Balance", "New Look", "Next", "Nike", "Nine West", "Nordstrom"]},
  {title: 'O', data: ["Oakley", "Off White", "Old Navy", "Omega"]},
  {title: 'P', data: ["Patagonia", "Patek Philippe", "Polo Ralph Lauren", "Prada", "Primark", "Puma"]},
  {title: 'R', data: ["Ray-Ban", "Rolex"]},
  {title: 'S', data: ["Salvatore Ferragamo", "Sisley", "Skechers", "Steve Madden", "Stuart Weitzman", "Swarovski", "Swatch"]},
  {title: 'T', data: ["TJ Maxx", "TOD’s", "Tag Heuer", "Ted Baker", "The North Face", "Tiffany & Co.", "Tissot", "Tom Ford", "Tommy Hilfiger", "Topshop", "Tory Burch"]},
  {title: 'U', data: ["UNIQLO", "Under Armour", "Urban Outfitters"]},
  {title: 'V', data: ["Vacheron Constantin", "Valentino", "Vera Wang", "Victoria’s Secret"]},
  {title: 'Z', data: ["Zalando", "Zara"]}
]
const brands = [
  "ASOS", "Adidas", "Aldo", "American Eagle Outfitters", "Armani", "Asics", "Audemars Piguet",
  "Banana Republic", "Bogner", "Breguet", "Brunello Cucinelli", "Burberry",
  "C&A", "Calvin Klein", "Cartier", "Chanel", "Chopard", "Chow Tai Fook", "Christian Louboutin", "Coach", "Cole Haan",
  "Desigual", "Diesel", "Dior", "Dolce & Gabbana",
  "ESCADA", "Elie Saab", "Elie Tahari",
  "Fendi", "Foot Locker Inc.", "Forever 21", "Fossil", "Furla",
  "G-star", "GAP", "Gucci",
  "H&M", "Hermès", "Hugo Boss",
  "IWC Schaffhausen",
  "Jaeger-Le Coultre", "Jimmy Choo",
  "Lacoste", "Lao Feng Xiang", "Levi’s", "Longchamp", "Longines", "Louis Vuitton", "Lululemon",
  "Macy’s", "Manolo Blahnik", "Max Mara", "Michael Kors", "Moncler",
  "Net-a-Porter", "New Balance", "New Look", "Next", "Nike", "Nine West", "Nordstrom",
  "Oakley", "Off White", "Old Navy", "Omega",
  "Patagonia", "Patek Philippe", "Polo Ralph Lauren", "Prada", "Primark", "Puma",
  "Ray-Ban", "Rolex",
  "Salvatore Ferragamo", "Sisley", "Skechers", "Steve Madden", "Stuart Weitzman", "Swarovski", "Swatch",
  "TJ Maxx", "TOD’s", "Tag Heuer", "Ted Baker", "The North Face", "Tiffany & Co.", "Tissot", "Tom Ford", "Tommy Hilfiger", "Topshop", "Tory Burch",
  "UNIQLO", "Under Armour", "Urban Outfitters",
  "Vacheron Constantin", "Valentino", "Vera Wang", "Victoria’s Secret",
  "Zalando", "Zara"
]

const categories = ["Tops", "Bottoms", "Outerwear", "Dresses", "Shoes", "Accessories"]

const coloursList = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Brown", "Grey", "Black", "White"]

const fabricList = ["Alpaca", "Bamboo", "Blend", "Cashmere", "Chiffon", "Cotton", "Hemp", "Linen", "Polyester", "Silk", "Wool"]