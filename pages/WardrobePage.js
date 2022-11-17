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

const WardrobePage = ({navigation, route }) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => navigation.setOptions({ title : "Wardrobe" }), []);


  const styles = StyleSheet.create({
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

      {isActive && <ClothesTab route={route} navigation={navigation}/>}
      {!isActive && <OutfitsTab />}
    </>
  );
};

export default WardrobePage;
