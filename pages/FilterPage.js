import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, ButtonGroup, withTheme, Divider, 
    Icon, Dialog, CheckBox, Slider } from '@rneui/themed';
import { StyleSheet, Text, View, ScrollView, Saf, 
    TouchableOpacity, Alert, Modal, Pressable, 
    Dimensions, TextInput, FlatList } from 'react-native';

import MultiSelectBar from '../components/MultiSelect';

const screenWidth = Dimensions.get("window").width;

const timeframes = [ 'Popularity', 'Price Low to High', 'Price High to Low', 'Alphabetical A-Z' ];
const sizes = ['Extra-small', 'Small', 'Medium', 'Large', 'Extra-Large'];

const materials = [
    { id: 1, name: 'Cotton' },
    { id: 2, name: 'Wool' },
    { id: 3, name: 'Linen' },
    { id: 4, name: 'Plant-based Fibres' },
    { id: 5, name: 'Others' },
];

const brands_list = [
    { id: 1, name: 'North Face' },
    { id: 2, name: 'Burberry' },
    { id: 3, name: 'Outland' },
    { id: 4, name: 'DK Active' },
    { id: 5, name: 'A.Bch' },
    { id: 6, name: 'Others' },
];

export default function FilterPage({setModalVisible, modalVisible}) {
    const [sort_modal, setSort_modal] = useState(false);
    const [number, setNumber] = React.useState(0);

    const [checked, setChecked] = useState(0);
    const [option, setOption] = useState('Popularity')

    const [option_size, setOptionSize] = useState('')
    const [checked_size, setCheckedSize] = useState(0);

    const [size_modal, setSize_modal] = useState(false);
    const [price_modal, setPrice_modal] = useState(false);
    const [max_value, setMaxValue] = useState(300);

    const [material_modal, setMaterial_modal] = useState(false);
    const [selected_materials, setMaterials] = useState([]);

    const [brands_modal, setBrands_modal] = useState(false);
    const [selected_brands, setBrands] = useState([]);

    const toggle_sort_modal = () => {
        setSort_modal(!sort_modal);
    };

    const toggle_size_modal = () => {
        setSize_modal(!size_modal);
    };

    const toggle_price_modal = () => {
        setPrice_modal(!price_modal);
    };

    const toggle_material_modal = () => {
        setMaterial_modal(!material_modal);
    };

    const toggle_brands_modal = () => {
        setBrands_modal(!brands_modal);
    };

  return (

    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
    }}
    >
        <View style={styles.centeredView}>
        <View style={styles.modalView}>

            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 0}}>

                <TouchableOpacity
                    style={styles.menu}
                    onPress={toggle_sort_modal}>
                        <Text> Sort </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text>{option}</Text>
                        {/* { checked === 0 ? <Text>Select Timeframe</Text> : <Text>Selected</Text> } */}
                        <Icon
                            reverse
                            name='right'
                            type='antdesign'
                            color='transparent'
                            iconProps={{ color: "#FB5C5C" }}
                            // containerStyle={{ position: 'absolute', right: 0 }}
                            onPress={() => console.log("onPress()")}
                        />
                        </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menu}
                    onPress={toggle_size_modal}>
                        <Text> Size </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text>{option_size}</Text>
                        <Icon
                            reverse
                            name='right'
                            type='antdesign'
                            color='transparent'
                            iconProps={{ color: "#FB5C5C" }}
                            // containerStyle={{ position: 'absolute', right: 0 }}
                            onPress={() => console.log("onPress()")}
                        />
                        </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menu}
                    onPress={toggle_price_modal}>
                        <Text> Price Range </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text>{max_value}</Text>
                        <Icon
                            reverse
                            name='right'
                            type='antdesign'
                            color='transparent'
                            iconProps={{ color: "#FB5C5C" }}
                            // containerStyle={{ position: 'absolute', right: 0 }}
                            onPress={() => console.log("onPress()")}
                        />
                        </View>
                </TouchableOpacity>

                {/* SELECT MATERIALS  */}
                <TouchableOpacity
                    style={styles.menu}
                    onPress={toggle_material_modal}>
                        <Text>Selected Materials </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                        {/* <FlatList
                            data={selected_materials}
                            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                        /> */}
                        {selected_materials.map((item, idx) => (
                            <Text>{item} </Text>
                            ))}
                        </View>
                        <Icon
                            reverse
                            name='right'
                            type='antdesign'
                            color='transparent'
                            iconProps={{ color: "#FB5C5C" }}
                            // containerStyle={{ position: 'absolute', right: 0 }}
                            onPress={() => console.log("onPress()")}
                        />
                        </View>

                </TouchableOpacity>

                {/* SELECT BRANDS  */}
                <TouchableOpacity
                    style={styles.menu}
                    onPress={toggle_brands_modal}>
                        <Text>Selected Brands </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>

                        {selected_brands.map((item, idx) => (
                            <Text>{item} </Text>
                            ))}
                        </View>
                        <Icon
                            reverse
                            name='right'
                            type='antdesign'
                            color='transparent'
                            iconProps={{ color: "#FB5C5C" }}
                            // containerStyle={{ position: 'absolute', right: 0 }}
                            onPress={() => console.log("onPress()")}
                        />
                        </View>

                </TouchableOpacity>

            </View>


            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.textStyle}>Sort and Filter</Text>
                </Pressable>

                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
            </View>


            {/* SORT BY DIALOG */}

            <Dialog
            isVisible={sort_modal}
            onBackdropPress={toggle_sort_modal}
            >
                <Dialog.Title title="Select Preference"/>
                {timeframes.map((l, i) => (
                    <CheckBox
                    key={i}
                    title={l}
                    containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={checked === i + 1}
                    onPress={() => setChecked(i + 1)}
                    />
                ))}

                <Dialog.Actions>
                    <Dialog.Button
                    title="CONFIRM"
                    onPress={() => {
                        setOption(timeframes[checked - 1]);
                        console.log(`Option ${checked} was selected!`);
                        toggle_sort_modal();
                    }}
                    />
                    <Dialog.Button title="CANCEL" onPress={toggle_sort_modal} />
                </Dialog.Actions>
            </Dialog>

            {/* SIZE */}
            <Dialog
            isVisible={size_modal}
            onBackdropPress={toggle_size_modal}
            >
                <Dialog.Title title="Select Preference"/>
                {sizes.map((l, i) => (
                    <CheckBox
                    key={i}
                    title={l}
                    containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={checked_size === i + 1}
                    onPress={() => setCheckedSize(i + 1)}
                    />
                ))}

                <Dialog.Actions>
                    <Dialog.Button
                    title="CONFIRM"
                    onPress={() => {
                        setOptionSize(sizes[checked_size - 1]);
                        toggle_size_modal();
                    }}
                    />
                    <Dialog.Button title="CANCEL" onPress={toggle_size_modal} />
                </Dialog.Actions>
            </Dialog>

            {/* PRICE RANGE */}
            <Dialog
            isVisible={price_modal}
            onBackdropPress={toggle_price_modal}
            >
                <Dialog.Title title="Select Price Range"/>
                <View style={[styles.contentView]}>
                <Slider
                    value={max_value}
                    onValueChange={setMaxValue}
                    maximumValue={300}
                    minimumValue={20}
                    step={10}
                    allowTouchTrack
                    trackStyle={{ height: 5, backgroundColor: 'transparent' }}
                    thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
                    thumbProps={{
                    children: (
                        <Icon
                        name="attach-money"
                        type="material"
                        size={10}
                        reverse
                        containerStyle={{ bottom: 10, right: 10 }}
                        // color={color()}
                        />
                    ),
                    }}
                />
                <Text style={{ paddingTop: 20 }}>Value: {max_value}</Text>
                </View>

                <Dialog.Actions>
                    <Dialog.Button
                    title="CONFIRM"
                    onPress={() => {
                        toggle_price_modal();
                    }}
                    />
                    <Dialog.Button title="CANCEL" onPress={toggle_price_modal} />
                </Dialog.Actions>
            </Dialog>

            {/* SELECT MATERIALS */}
            <Dialog
            isVisible={material_modal}
            onBackdropPress={toggle_material_modal}
            >
                <Dialog.Title title="Select Materials"/>
                <View style={[styles.multiselect]}>
                    <MultiSelectBar items={materials} setItems={setMaterials}/>
                </View>
                <Dialog.Actions>
                    <Dialog.Button
                    title="CONFIRM"
                    onPress={() => {
                        toggle_material_modal();
                    }}
                    />
                    <Dialog.Button title="CANCEL" onPress={toggle_material_modal} />
                </Dialog.Actions>
            </Dialog>

            {/* SELECT BRANDS */}
            <Dialog
            isVisible={brands_modal}
            onBackdropPress={toggle_brands_modal}
            >
                <Dialog.Title title="Select Materials"/>
                <View style={[styles.multiselect]}>
                    <MultiSelectBar items={brands_list} setItems={setBrands}/>
                </View>
                <Dialog.Actions>
                    <Dialog.Button
                    title="CONFIRM"
                    onPress={() => {
                        toggle_brands_modal();
                    }}
                    />
                    <Dialog.Button title="CANCEL" onPress={toggle_brands_modal} />
                </Dialog.Actions>
            </Dialog>
        </View>
        </View>

    </Modal>

  );
}


const styles = StyleSheet.create({
    multiselect: {
        width: '100%',
        height: 300
    },
    menu: {
    //   padding: 5,
      width: screenWidth,
      paddingLeft: 40,
      borderTopWidth: 1,
      borderTopColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    centeredView: {
      width: screenWidth,
      flex: 1,
      marginTop: 22,
      justifyContent: "flex-end",
    },
    modalView: {
      margin: 5,
      backgroundColor: "#FFD0D0",
      borderRadius: 20,
      padding: 35,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 30,
      width: 250,
      padding: 10,
      elevation: 2,
      margin: 5
    },
    buttonOpen: {
      backgroundColor: "#FB5C5C",
    },
    buttonClose: {
      backgroundColor: "#565454",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontColor: '#FFD0D0',
    },
    modalText: {
      marginBottom: 15,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
  });