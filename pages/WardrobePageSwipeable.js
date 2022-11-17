import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { Tab, TabView } from "@rneui/themed";
import ClothesTab from "../components/ClothesTab";
import OutfitsTab from "../components/OutfitsTab";
import { PRIMARY_COLOUR, SECONDARY_COLOUR } from "../styles";

const screenWidth = Dimensions.get("window").width;

const WardrobePageSwipeable = () => {
  const [index, setIndex] = useState(0);

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
      <Tab
        style={{ backgroundColor: SECONDARY_COLOUR }}
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: PRIMARY_COLOUR,
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Clothes"
          titleStyle={(active) => {
            return active ? styles.activeTitle : styles.inactiveTitle;
          }}
          containerStyle={(active) => ({
            backgroundColor: active ? PRIMARY_COLOUR : SECONDARY_COLOUR,
            borderTopRightRadius: active ? 30 : 0,
          })}
        />
        <Tab.Item
          title="Outfits"
          titleStyle={(active) => {
            return active ? styles.activeTitle : styles.inactiveTitle;
          }}
          containerStyle={(active) => ({
            backgroundColor: active ? PRIMARY_COLOUR : SECONDARY_COLOUR,
            borderTopLeftRadius: active ? 30 : 0,
          })}
        />
      </Tab>

      <TabView
        value={index}
        onChange={setIndex}
        tabItemContainerStyle={{ width: screenWidth, flex: 1 }}
        animationType="spring"
      >
        <TabView.Item style={{}}>
          <ClothesTab />
        </TabView.Item>
        <TabView.Item style={{}}>
          <OutfitsTab />
        </TabView.Item>
      </TabView>
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

export default WardrobePageSwipeable;
