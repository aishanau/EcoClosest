import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { PRIMARY_COLOUR } from "../styles";
import OutfitCard from "./OutfitCard";

const OutfitCategoryList = ({ category, list }) => {

//   useEffect(() => {console.log("list in outfit category list is ", list, category)}, [])  
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{category}</Text>
      </View>
      <View style={styles.album}>
        <ScrollView horizontal={true}>
          {list.map(({ name, image, outerwear, tops, accessories }, idx) => (
            <OutfitCard
              key={idx}
              item={name}
              image={image}
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

export default OutfitCategoryList;
