import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { outerwear, tops, bottoms, accessories } from "../database";
import { PRIMARY_COLOUR, SECONDARY_COLOUR } from "../styles";
import CategoryList from "./CategoryList";
import WardrobeCard from "./WardrobeCard";

const screenWidth = Dimensions.get("window").width;

// const clothingCategories = [
//   { category: "outerwear", list: outerwear },
//   { category: "tops", list: tops },
//   { category: "bottoms", list: bottoms },
//   { category: "accessories", list: accessories },
// ];

const ClothesTab = () => {
  useEffect(() => {
    console.log(
      "the current clothing categories list is ",
      clothingCategories[0].itemList
    );
  }, []);

  const [clothingCategories, setClothingCategories] = useState([
    { category: "Outerwear", itemList: outerwear },
    { category: "Tops", itemList: tops },
    { category: "Bottoms", itemList: bottoms },
    { category: "Accessories", itemList: accessories },
  ]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{clothingCategories[0].category}</Text>
      </View>
      <View style={styles.album}>
        <ScrollView horizontal={true}>
          {clothingCategories[0].itemList.map(({ item, brand, image }, idx) => (
            <WardrobeCard key={idx} item={item} brand={brand} image={image} />
          ))}
        </ScrollView>
      </View>

      {clothingCategories.map((item, idx) => (
        <CategoryList key={idx} category={item.category} itemList={item.itemList} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    border: 0,
    width: screenWidth,
    backgroundColor: SECONDARY_COLOUR,
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
