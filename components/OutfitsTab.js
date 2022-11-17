import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { PRIMARY_COLOUR, SECONDARY_COLOUR } from "../styles";
import { outfitsCategoryList } from "../database";
import OutfitCategoryList from "./OutfitCategoryList";
import PrimaryButton from "./PrimaryButton";

const screenWidth = Dimensions.get("window").width;

const OutfitsTab = ({ navigation, route }) => {
  const createOutfitEvent = () => {
    console.log("navigate to CreateOutfitPage");
    navigation.navigate("Create Outfit", {});
  }

  // useEffect(()=>{console.log("the outfits category list list is ", outfitsCategoryList[0].list)})

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonContainer}>
        <PrimaryButton title={"Create New Outfit"} onPress={createOutfitEvent} />
      </View>
      {outfitsCategoryList.map((item, idx) => (
        <OutfitCategoryList
          key={idx}
          category={item.category}
          list={item.list}
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
  title: {
    color: PRIMARY_COLOUR,
    fontSize: "18px",
    fontWeight: "700",
  },
  titleContainer: {
    paddingLeft: 35,
  },
});

export default OutfitsTab;