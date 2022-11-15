import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Tab, TabView } from "@rneui/themed";
import ClothesTab from "../components/ClothesTab";
import OutfitsTab from "../components/OutfitsTab";
import { PRIMARY_COLOUR, SECONDARY_COLOUR } from "../styles";

const screenWidth = Dimensions.get("window").width;

const WardrobePage = () => {
  const [index, setIndex] = useState(0);

  const [isClothesTabActive, setIsClothesTabActive] = useState(true);

  useEffect(() => {
    console.log("the value of the index is ", index);
  }, [index]);

  return (
    <>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.header}>Wardrobe</Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: SECONDARY_COLOUR,
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: isClothesTabActive
              ? PRIMARY_COLOUR
              : SECONDARY_COLOUR,
            borderTopRightRadius: isClothesTabActive ? 30 : 0,
            width: screenWidth * 0.5,
            justifyContent: "center",
            alignItems: "center",
            display: "inline",
          }}
          onPress={() => setIsClothesTabActive(true)}
        >
          <Text
            style={
              isClothesTabActive ? styles.activeTitle : styles.inactiveTitle
            }
          >
            Clothes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: !isClothesTabActive
              ? PRIMARY_COLOUR
              : SECONDARY_COLOUR,
            borderTopLeftRadius: !isClothesTabActive ? 30 : 0,
            width: screenWidth * 0.5,
            justifyContent: "center",
            alignItems: "center",
            display: "inline",
          }}
          onPress={() => setIsClothesTabActive(false)}
        >
          <Text
            style={
              !isClothesTabActive ? styles.activeTitle : styles.inactiveTitle
            }
          >
            Outfits
          </Text>
        </TouchableOpacity>
      </View>

      {isClothesTabActive && <ClothesTab />}
      {!isClothesTabActive && <OutfitsTab />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
    border: 0,
    width: screenWidth,
  },
  header: {
    padding: 20,
    fontWeight: "700",
    fontSize: 20,
    letterSpacing: 1,
    textAlignment: "center",
    color: "#000",
  },
  activeTitle: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "700",
  },
  inactiveTitle: {
    color: PRIMARY_COLOUR,
    fontSize: 13,
    fontWeight: "700",
  },
  btn: {
    backgroundColor: "#FFD0D0",
    borderRadius: 30,
  },
});

export default WardrobePage;
