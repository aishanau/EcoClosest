import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

import ClothesTab from "../components/ClothesTab";
import OutfitsTab from "../components/OutfitsTab";
import { PRIMARY_COLOUR, SECONDARY_COLOUR } from "../styles";
const screenWidth = Dimensions.get("window").width;

const WardrobePage = () => {
  const [isActive, setIsActive] = useState(true);

  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    leftTab: {
      height: 50,
      backgroundColor: isActive ? PRIMARY_COLOUR : SECONDARY_COLOUR,
      borderTopRightRadius: isActive ? 30 : 0,
      width: screenWidth * 0.5,
      justifyContent: "center",
      alignItems: "center",
      display: "inline",
    },
    rightTab: {
      height: 50,
      backgroundColor: !isActive ? PRIMARY_COLOUR : SECONDARY_COLOUR,
      borderTopLeftRadius: !isActive ? 30 : 0,
      width: screenWidth * 0.5,
      justifyContent: "center",
      alignItems: "center",
      display: "inline",
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
  });

  return (
    <>
      <View
        style={styles.container}
      >
        <Text style={styles.header}>Wardrobe</Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: SECONDARY_COLOUR,
          borderBottomWidth: 3,
          borderBottomColor: PRIMARY_COLOUR,
        }}
      >
        <TouchableOpacity
          style={styles.leftTab}
          onPress={() => setIsActive(true)}
        >
          <Text style={isActive ? styles.activeTitle : styles.inactiveTitle}>
            Clothes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rightTab}
          onPress={() => setIsActive(false)}
        >
          <Text style={!isActive ? styles.activeTitle : styles.inactiveTitle}>
            Outfits
          </Text>
        </TouchableOpacity>
      </View>

      {isActive && <ClothesTab />}
      {!isActive && <OutfitsTab />}
    </>
  );
};

export default WardrobePage;
