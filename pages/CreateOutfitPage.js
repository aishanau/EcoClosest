import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState, } from "react";
import {
  Dialog,
  CheckBox,
  Slider,
  Input
} from "@rneui/themed";

import { MAIN_TEXT_COLOUR, PRIMARY_COLOUR } from "../styles";
import ImageCarousel from "../components/ImageCarousel";
import PrimaryButton from "../components/PrimaryButton";
import MultiSelectBar from "../components/MultiSelect";
import { clothingCategories } from "../database";

const screenWidth = Dimensions.get("window").width;

const CreateOutfitPage = ({ navigation, route }) => {
  const [addLayerVisible, setAddLayerVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [displayOuterwear, setDisplayOuterwear] = useState(false);
  const [displayTops, setDisplayTops] = useState(false);
  const [displayAccessories, setDisplayAccessories] = useState(false);

  const [outfitName, setOutfitName] = useState("");

  const [selectedOuterwear, setSelectedOuterwear] = useState(0);
  const [selectedTops, setSelectedTops] = useState(0);
  const [selectedAccessories, setSelectedAccessories] = useState(0);

  const handleCreateOutfit = () => {
    navigation.goBack();
  }

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
        <View style={{flexDirection: 'row', paddingHorizontal: 5, justifyContent: "space-evenly"}}>
          <PrimaryButton
            title={"Select Layers"}
            onPress={() => setAddLayerVisible(!addLayerVisible)}
            containerStyle={{ width: "49%" }}
          />
          <PrimaryButton
            title={"Save Outfit"}
            onPress={handleCreateOutfit}
            containerStyle={{ width: "49%" }}
          />

        </View>
        <Input
          containerStyle={styles.input}
          inputContainerStyle={{}}
          label="Outfit Name"
          placeholder="Give your outfit a name"
          onChangeText={(input) => setOutfitName(input)}
          value={outfitName.toString()}
        />
        </View>


        {displayOuterwear && (
          <View>
            <Text style={styles.title}>Outerwear</Text>
            <ImageCarousel data={clothingCategories[0].itemList} setIndex={setSelectedOuterwear} />
          </View>
        )}

        {displayTops && (
          <View>
            <Text style={styles.title}>Tops</Text>
            <ImageCarousel data={clothingCategories[1].itemList} setIndex={setSelectedTops} />
          </View>
        )}

        {displayAccessories && (
          <View>
            <Text style={styles.title}>Accessories</Text>
            <ImageCarousel data={clothingCategories[2].itemList} setIndex={setSelectedAccessories} />
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
    padding: 10,
  },
});
