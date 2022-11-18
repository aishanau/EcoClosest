import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Dialog, CheckBox, Slider, Input } from "@rneui/themed";

import { MAIN_TEXT_COLOUR, PRIMARY_COLOUR } from "../styles";
import ImageCarousel from "../components/ImageCarousel";
import PrimaryButton from "../components/PrimaryButton";
import MultiSelectBar from "../components/MultiSelect";
import { clothingCategories } from "../database";
import WardrobeCard from "../components/WardrobeCard";

const screenWidth = Dimensions.get("window").width;

const ViewOutfit = ({ navigation, route }) => {
  const [editModeEnabled, setEditModeEnabled] = useState(true);

  const [outfitName, setOutfitName] = useState(route.params.details.name);

  useEffect(() => {
    console.log("details in ViewOutfit ", route.params.details);
  }, []);
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          contentContainerStyle: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-evenly",
          }}
        >
          <PrimaryButton
            title={!editModeEnabled ? "Save" : "Edit Outfit"}
            onPress={() => setEditModeEnabled(!editModeEnabled)}
            containerStyle={{ width: "90%" }}
          />
        </View>
        <Input
          disabled={editModeEnabled}
          containerStyle={styles.input}
          inputContainerStyle={{}}
          label="Outfit Name"
          onChangeText={(input) => setOutfitName(input)}
          value={outfitName}
        />

        <View style={{ padding: 20 }}>
          <WardrobeCard
            navigation={navigation}
            details={route.params.details.outerwear}
          />
          <WardrobeCard
            navigation={navigation}
            details={route.params.details.tops}
          />
          <WardrobeCard
            navigation={navigation}
            details={route.params.details.accessories}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default ViewOutfit;

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    width: 250,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  title: {
    color: MAIN_TEXT_COLOUR,
    fontSize: "18px",
    fontWeight: "700",
    padding: 20,
  },
  modalText: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
});
