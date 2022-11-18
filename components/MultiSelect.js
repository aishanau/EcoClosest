import React, { useState, useEffect } from "react";

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import MultiSelect from 'react-native-multiple-select';


export default function MultiSelectBar({items, setItems}) {
    const [selectedItems, setSelectedItems] = useState([]);

    const onSelectedItemsChange = (selectedItems) => {
        // console.log(selectedItems);
        setSelectedItems(selectedItems);
        for (let i = 0; i < selectedItems.length; i++) {
          var tempItem = items.find(item => item.id === selectedItems[i]);
        }
    };

    useEffect(() => {
        temp_list = [];
        for (let i = 0; i < selectedItems.length; i++) {
            var tempItem = items.find(item => item.id === selectedItems[i]);
            temp_list.push(tempItem.name);
        }
        setItems(temp_list);
    }, [selectedItems]);

    return (
        // <SafeAreaView style={{ flex: 1 }}>
    
          <View style={styleSheet.MainContainer}>
    
            {/* <Text style={styleSheet.text}> React Native Multiple Select </Text> */}
    
            <MultiSelect
            //   hideTags
              items={items}
              uniqueKey="id"
              onSelectedItemsChange={onSelectedItemsChange}
              selectedItems={selectedItems}
              selectText="Select Materials"
            //   fontSize={3}
              searchInputPlaceholderText="Search Items Here..."
              onChangeInput={(text) => console.log(text)}
              tagRemoveIconColor="#EFB1B1"
              tagBorderColor="#FB5C5C"
              tagTextColor="#FB5C5C"
              selectedItemTextColor="#FFD0D0"
              selectedItemIconColor="#FFD0D0"
              itemTextColor="#565454"
              displayKey="name"
              searchInputStyle={{ color: 'black' }}
              submitButtonColor="#FB5C5C"
              submitButtonText="Submit"
            />
    
          </View>
        // </SafeAreaView>
    );

}

const styleSheet = StyleSheet.create({

    MainContainer: {
      flex: 1,
      padding: 12,
      backgroundColor: 'white'
    },
  
    text: {
      padding: 12,
      fontSize: 22,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'black'
    }
  
});