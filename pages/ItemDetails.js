import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, SectionList, FlatList} from 'react-native';
import { Icon, Image, Dialog, ListItem, Divider} from '@rneui/themed';
import { Input } from "@rneui/base";

import SearchBar from '../components/BrandSearch';

import { Button } from '@rneui/themed';

export default function ItemDetails({navigation, route}) {
  const [item, setItem] = useState(route.params.details.item == undefined ? '' : route.params.details.item);
  const [brand, setBrand] = useState(route.params.details.brand == undefined ? '' : route.params.details.brand);
  const [category, setCategory] = useState(route.params.details.category == undefined ? '' : route.params.details.category);
  const [price, setPrice] = useState(route.params.details.price == undefined ? '' : route.params.details.price);
  const [colour, setColour] = useState(route.params.details.colour == undefined ? [] : [...route.params.details.colour]);
  const [fabric, setFabric] = useState(route.params.details.fabric == undefined ? [] : [...route.params.details.fabric]);
  const [image, setImage] = useState(route.params.details.image == undefined ? '' : route.params.details.image);

  const [brandModalVisible, setBrandModalVisible] = useState(false);
  const [brandSearch, setBrandSearch] = useState('');

  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [colourModalVisible, setColourModalVisible] = useState(false);
  const [fabricModalVisible, setFabricModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [view, setView] = useState(true);

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

  const edit = () => {
    setView(false);
  }
  const remove = () => {
    const index = global.clothes[category].findIndex(c => c.id == route.params.details.id);
    global.clothes[category].splice(index, index+1);
    if (global.clothes[category] = []) {
      delete global.clothes[category];
    }
  }

  const deleteItem = () => {
    remove();
    setDeleteModalVisible(!deleteModalVisible);
    navigation.goBack();
  }

  const getView = () => {
    return view ? 'visible' : 'hidden';
  }

  const resetItem = () => {
    setItem(route.params.details.item == undefined ? '' : route.params.details.item);
    setBrand(route.params.details.brand == undefined ? '' : route.params.details.brand);
    setCategory(route.params.details.category == undefined ? '' : route.params.details.category);
    setPrice(route.params.details.price == undefined ? '' : route.params.details.price);
    setColour(route.params.details.colour == undefined ? [] : [...route.params.details.colour]);
    setFabric(route.params.details.fabric == undefined ? [] : [...route.params.details.fabric]);
    setImage(route.params.details.image == undefined ? '' : route.params.details.image);
  }

  const saveItem = () => {
    const details = {
      item: item,
      image: image,
      brand: brand,
      category: category,
      price: price,
      colour: [...colour],
      fabric: [...fabric],
      id: route.params.details.id
    }
    const index = global.clothes[category].findIndex(c => c.id == route.params.details.id);
    global.clothes[category][index] = details;
  }

  return <ScrollView>
    <View style={{ marginVertical: 20}}>
      <View style={{paddingHorizontal: 35}}>
        
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          {view
          /* View Heading */
          ? (<>
              {/* <TouchableOpacity>
                <Icon name="arrowleft" type="antdesign"/>
              </TouchableOpacity> */}
              <TouchableOpacity onPress={() => {setDeleteModalVisible(true)}} style={{backfaceVisibility: getView()}}>
                <Icon name="trash" type="evilicon" size='35'/>
              </TouchableOpacity>
              <TouchableOpacity onPress={edit} style={{marginRight: 10, backfaceVisibility: getView()}}>
                <Icon name="pencil" type="evilicon" size='35'/>
              </TouchableOpacity>
            </>)
          /* Edit Heading */
          : (<>
              <TouchableOpacity onPress={() => {setView(true); resetItem()}}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <Button 
                buttonStyle={styles.btn}
                containerStyle={{
                    backfaceVisibility: !getView()
                }}
              >
                <Text style={styles.btnText} onPress={() => {setView(true); saveItem()}}>Save</Text>
              </Button>
            </>)}
        </View>
        {/* <Text style={styles.heading}>Add Details</Text> */}
        {/* DELETE MODAL */}
        <Modal
          transparent
          visible={deleteModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setDeleteModalVisible(!deleteModalVisible);
          }}
        >
          <View style={[styles.modalOverlay, {justifyContent: 'center', margin: 15}]}>
            <View style={[styles.modalView, {padding: 35, alignItems: 'center'}]}>
              <Text style={{margin: 10}}>Are you sure you want to delete?</Text>
              <Button
                buttonStyle={styles.btn}
                containerStyle={{margin: 10}}
                onPress={deleteItem}
              >
                <Text style={styles.btnText}>Delete</Text>
              </Button>
              <Button
                buttonStyle={[styles.btn, {backgroundColor: 'grey'}]}
                containerStyle={{margin: 10}}
                onPress={() => {setDeleteModalVisible(!deleteModalVisible)}}
              >
                <Text style={styles.btnText}>Cancel</Text>
              </Button>
            </View>
          </View>
        </Modal>
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
          onChangeText={(input) => {setItem(input)}}
          value={item}
          disabled={view}
        />
        {/* <Divider/> */}

        {/* BRAND MODAL */}
        {/* <ListItem.Swipeable style={{padding: 0}}>
          <ListItem.Content> */}
            
          {/* </ListItem.Content>
          <ListItem.Chevron />
        </ListItem.Swipeable> */}
        <TouchableOpacity
          onPress={() => {!view && setBrandModalVisible(!brandModalVisible)}}
          disabled={view}
          >
            <View>
            <Input
              containerStyle={{}}
              inputContainerStyle={{}}
              label="Brand"
              placeholder="Select Brand"
              disabled
              disabledInputStyle={{color: 'black'}}
              value={brand}
            />
            </View>
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
          onPress={() => {!view && setCategoryModalVisible(!categoryModalVisible)}}
          disabled={view}
          >
          <View>
          <Input
            containerStyle={styles.input}
            inputContainerStyle={{}}
            label="Category"
            placeholder="Category"
            value={category}
            disabled
          />
          </View>
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
          disabled={view}
        />

        {/* COLOUR */}
        <TouchableOpacity onPress={() => {!view && setColourModalVisible(!colourModalVisible)}}
        disabled={view}
        >
        <View>
        <Input
          containerStyle={styles.input}
          inputContainerStyle={{}}
          label="Colour"
          placeholder="Select Colour"
          value={colour.toString()}
          disabled
        />
        </View>
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
        <TouchableOpacity onPress={() => {!view && setFabricModalVisible(!fabricModalVisible)}} disabled={view}>
          <View>
          <Input
            containerStyle={styles.input}
            inputContainerStyle={{}}
            label="Fabric Composition"
            placeholder="Select Fabric"
            value={fabric.toString()}
            disabled
          />
          </View>
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
                    <ListItem.CheckBox
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
    paddingHorizontal: 15,
  },
  btnText: {
    fontWeight: '700',
    margin: 3,
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