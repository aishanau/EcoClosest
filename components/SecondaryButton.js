import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { PRIMARY_COLOUR, SECONDARY_COLOUR } from "../styles.js";

const SecondaryButton = ({ textStyle, containerStyle, title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={[styles.buttonContainer, containerStyle]}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: SECONDARY_COLOUR,
    borderRadius: 30,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: "700",
    color: PRIMARY_COLOUR,
    textAlign: "center",
  },
});

export default SecondaryButton;
