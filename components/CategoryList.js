import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { PRIMARY_COLOUR } from "../styles";
import WardrobeCard from "./WardrobeCard";

const CategoryList = ({ navigation, category, itemList }) => {

  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{category}</Text>
      </View>
      <View style={styles.album}>
        <ScrollView horizontal={true}>
          {itemList.map((item, idx) => (
            <WardrobeCard
              navigation={navigation}
              key={idx}
              details={item}
              // item={item}
              // brand={brand}
              // image={image}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  album: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "space-evenly",
    marginBottom: 10,
  },
  title: {
    color: PRIMARY_COLOUR,
    fontSize: "18px",
    fontWeight: "700",
    paddingTop: 20,
  },
  titleContainer: {
    paddingLeft: 35,
  },
});

export default CategoryList;
