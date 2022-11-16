import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { outerwear, tops, accessories } from "../database";
import { PRIMARY_COLOUR, SECONDARY_COLOUR } from "../styles";
import CategoryList from "./CategoryList";
import PrimaryButton from "./PrimaryButton";

const screenWidth = Dimensions.get("window").width;

const clothingCategories = [
  { category: "Outerwear", itemList: outerwear },
  { category: "Tops", itemList: tops },
  { category: "Accessories", itemList: accessories },
];

const ClothesTab = () => {

  const addItemEvent = () => {
    console.log("trigger to add item modal, choose upload or take photo");
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonContainer}>
        <PrimaryButton title={"Add New Item"} onPress={addItemEvent} />
      </View>
      {clothingCategories.map((item, idx) => (
        <CategoryList
          key={idx}
          category={item.category}
          itemList={item.itemList}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    border: 0,
    width: screenWidth,
    backgroundColor: SECONDARY_COLOUR,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  album: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "space-evenly",
    marginBottom: 10,
  },
  header: {
    paddingTop: 20,
    fontWeight: "700",
    textAlignment: "center",
  },
  title: {
    color: PRIMARY_COLOUR,
    fontSize: "18px",
    fontWeight: "700",
  },
  titleContainer: {
    paddingLeft: 35,
  },
  btn: {
    backgroundColor: SECONDARY_COLOUR,
    borderRadius: 30,
  },
});

export default ClothesTab;
