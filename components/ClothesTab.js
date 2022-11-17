import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Modal,
  Text,
} from "react-native";
import { clothingCategories } from "../database";
import { PRIMARY_COLOUR, SECONDARY_COLOUR } from "../styles";
import CategoryList from "./CategoryList";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import * as ImagePicker from 'expo-image-picker';

const screenWidth = Dimensions.get("window").width;

const ClothesTab = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);

  const addItemEvent = () => {
    console.log("trigger to add item modal, choose upload or take photo");
    setModalVisible(true);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredModalView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Choose an option to upload an image of the new item
            </Text>
            <View style={{paddingBottom: 10}} >
              <SecondaryButton
                containerStyle={styles.modalPrimaryButtonStyle}
                title={"Upload Image"}
                onPress={pickImage}
              />
            </View>
            <View style={{paddingBottom: 10}} >
              <SecondaryButton
                containerStyle={styles.modalPrimaryButtonStyle}
                title={"Take Photo"}
                onPress={() => {
                  setModalVisible(false);
                }}
              />
            </View>
            <PrimaryButton
              containerStyle={styles.modalPrimaryButtonStyle}
              title={"Cancel"}
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>

      <ScrollView style={[styles.container, { blur: modalVisible ? 10 : 0 }]}>
        <View style={styles.buttonContainer}>
          <PrimaryButton title={"Add New Item"} onPress={addItemEvent} />
        </View>

        {clothingCategories.map((item, idx) => (
          <CategoryList
            key={idx}
            category={item.category}
            itemList={item.itemList}
          />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    border: 0,
    width: screenWidth,
    backgroundColor: SECONDARY_COLOUR,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: PRIMARY_COLOUR,
    fontSize: "18px",
    fontWeight: "700",
  },
  titleContainer: {
    paddingLeft: 35,
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 15,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  modalPrimaryButtonStyle: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    elevation: 2,
    width: 200,
  },
  modalText: {
    marginBottom: 15,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default ClothesTab;
