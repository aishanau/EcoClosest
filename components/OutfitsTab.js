import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { SECONDARY_COLOUR } from "../styles";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const OutfitsTab = () => {
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
        <Text style={styles.header}>this is the outfits tab</Text>
        <Text>All Items Are Ethically Sourced</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SECONDARY_COLOUR,
    paddingTop: 10,
    border: 0,
    width: screenWidth,
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

export default OutfitsTab;