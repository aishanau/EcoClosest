import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { outerwear } from "../database";
import { SECONDARY_COLOUR } from "../styles";
import WardrobeCard from "./WardrobeCard";

const screenWidth = Dimensions.get("window").width;

const ClothesTab = () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          paddingTop: 20,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.header}>this is the clothes tab</Text>
      </View>

      <Text style={styles.title}>Outerwear</Text>
      <View style={styles.album}>
        <ScrollView horizontal={true}>
          {outerwear.map((item, idx) => (
             <WardrobeCard
              key={idx}
              name={item.item}
              price={item.brand}
              icon={item.image}
            />
          ))}
        </ScrollView>
      </View>
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
    fontColor: "#FB5C5C",
    fontSize: "20px",
    fontWeight: "600",
  },
  btn: {
    backgroundColor: "#FFD0D0",
    borderRadius: 30,
  },
});

export default ClothesTab;
