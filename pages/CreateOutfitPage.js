import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { outerwear, tops } from "../database";
import {
  Button,
  ButtonGroup,
  withTheme,
  Divider,
  Icon,
  Dialog,
  CheckBox,
  Slider,
} from "@rneui/themed";

// import PropTypes from "prop-types";
import { MAIN_TEXT_COLOUR, PRIMARY_COLOUR } from "../styles";
import ImageCarousel from "../components/ImageCarousel";
import PrimaryButton from "../components/PrimaryButton";
import MultiSelectBar from "../components/MultiSelect";
import { clothingCategories } from "../database";
// export const clothingCategories = [
//   { category: "Outerwear", itemList: outerwear },
//   { category: "Tops", itemList: tops },
//   { category: "Accessories", itemList: accessories },
// ];

{
  /* <Dialog
isVisible={material_modal}
onBackdropPress={toggle_material_modal}
>
    <Dialog.Title title="Select Materials"/>
    <View style={[styles.multiselect]}>
        <MultiSelectBar items={materials} setItems={setMaterials}/>
    </View>
    <Dialog.Actions>
        <Dialog.Button
        title="CONFIRM"
        onPress={() => {
            toggle_material_modal();
        }}
        />
        <Dialog.Button title="CANCEL" onPress={toggle_material_modal} />
    </Dialog.Actions>
</Dialog> */
}
const screenWidth = Dimensions.get("window").width;

const CreateOutfitPage = ({ navigation, route }) => {
  const [addLayerVisible, setAddLayerVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [displayOuterwear, setDisplayOuterwear] = useState(false);
  const [displayTops, setDisplayTops] = useState(false);
  const [displayAccessories, setDisplayAccessories] = useState(false);

  useEffect(() => {
    console.log("current selected categories are: ", selectedCategories);

    setDisplayOuterwear(selectedCategories.includes("Outerwear"));
    setDisplayTops(selectedCategories.includes("Tops"));
    setDisplayAccessories(selectedCategories.includes("Accessories"));
  }, [selectedCategories]);
  return (
    <>
      <Dialog
        isVisible={addLayerVisible}
        onBackdropPress={() => setAddLayerVisible(false)}
      >
        <Dialog.Title title="Select Layers" />
        <View style={[styles.multiselect]}>
          <MultiSelectBar
            items={clothingCategories}
            setItems={setSelectedCategories}
          />
        </View>
        <Dialog.Actions>
          <Dialog.Button
            title="CONFIRM"
            onPress={() => {
              setAddLayerVisible(!addLayerVisible);
            }}
          />
          <Dialog.Button
            title="CANCEL"
            onPress={() => setAddLayerVisible(!addLayerVisible)}
          />
        </Dialog.Actions>
      </Dialog>

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
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <PrimaryButton
            title={"Select Layers"}
            onPress={() => setAddLayerVisible(!addLayerVisible)}
            containerStyle={{ width: "50%" }}
          />
        </View>

        {displayOuterwear && (
          <View>
            <Text style={styles.title}>Outerwear</Text>
            <ImageCarousel data={clothingCategories[0].itemList} />
          </View>
        )}

        {displayTops && (
          <View>
            <Text style={styles.title}>Tops</Text>
            <ImageCarousel data={clothingCategories[1].itemList} />
          </View>
        )}

        {displayAccessories && (
          <View>
            <Text style={styles.title}>Accessories</Text>
            <ImageCarousel data={clothingCategories[2].itemList} />
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default CreateOutfitPage;

const styles = StyleSheet.create({
  multiselect: {
    width: "100%",
    height: 300,
  },

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
    borderWidth: 1,
    padding: 10,
  },
});
