import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card } from "@rneui/themed";
import { MAIN_TEXT_COLOUR, SECONDARY_COLOUR } from "../styles";
import React, { useEffect, useState } from "react";

const OutfitCard = ({ outfitName, icon }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log("this leads to item details page")}
    >
      <Card containerStyle={styles.card}>
        <Card.Image
          style={{ padding: 0, width: 120, height: 120, resizeMode: "cover" }}
          source={{
            uri: icon,
          }}
        />
        <View style={styles.innerCard}>
          <Text style={styles.title}>{outfitName}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

// Issue: font color not changing
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    border: "10px",
    borderColor: SECONDARY_COLOUR,
    borderRadius: 20,
  },
  innerCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    margin: 10,
    fontColor: MAIN_TEXT_COLOUR,
    fontSize: "14px",
  },
});

export default OutfitCard;