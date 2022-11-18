import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card } from "@rneui/themed";
import { MAIN_TEXT_COLOUR, SECONDARY_COLOUR } from "../styles";
import React, { useEffect, useState } from "react";

const OutfitCard = ({ navigation, details, image, name }) => {
  useEffect(() => {
    console.log("details in OutfitCard ", details);
  }, []);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log("this leads to view outfit page");
        navigation.navigate("View Outfit", { details: details });
      }}
    >
      <Card containerStyle={styles.card}>
        <Card.Image
          style={{ padding: 0, width: 120, height: 120, resizeMode: "cover" }}
          source={{
            uri: details.image,
          }}
        />
        <View style={styles.innerCard}>
          <Text style={styles.item}>{details.name}</Text>
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
  item: {
    margin: 5,
    color: MAIN_TEXT_COLOUR,
    fontSize: "16px",
    fontWeight: "700",
  },
});

export default OutfitCard;
