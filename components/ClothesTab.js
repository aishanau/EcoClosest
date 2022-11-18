import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Modal,
  Text,
} from "react-native";
import { PRIMARY_COLOUR, SECONDARY_COLOUR } from "../styles";
import CategoryList from "./CategoryList";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import * as ImagePicker from 'expo-image-picker';
import '../database.js';
import { useIsFocused } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

const ClothesTab = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [statusCamera, requestPermissionCamera] = ImagePicker.useCameraPermissions();
  const [statusLib, requestPermissionLib] = ImagePicker.useMediaLibraryPermissions();
  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      // console.log("hello");
      navigation.navigate("Upload Item", { image: result.assets[0].uri });
      setModalVisible(false);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      navigation.navigate("Upload Item", { image: result.assets[0].uri });
      setModalVisible(false);
    }
  };

  const takePhotoPermission = async () => {
    if (statusCamera == null || !statusCamera.granted) {
      statusCamera = await requestPermissionCamera();
    }
    if (statusCamera != null && statusCamera.granted) {
      await takePhoto();
    }
  };

  const pickImagePermission = async () => {
    if (statusLib == null || !statusLib.granted) {
      statusLib = await requestPermissionLib();
    }
    if (statusLib != null && statusLib.granted) {
      await pickImage();
    }
  };

  const addItemEvent = () => {
    console.log("trigger to add item modal, choose upload or take photo");
    setModalVisible(true);
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
            <View style={{ paddingBottom: 10 }}>
              <SecondaryButton
                containerStyle={styles.modalPrimaryButtonStyle}
                title={"Upload Image"}
                onPress={pickImagePermission}
              />
            </View>
            <View style={{ paddingBottom: 10 }}>
              <SecondaryButton
                containerStyle={styles.modalPrimaryButtonStyle}
                title={"Take Photo"}
                onPress={takePhotoPermission}
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
        <View style={{paddingBottom: 70}}>
        {Object.entries(global.clothes).map(([key, value], idx) => (
          <CategoryList
            navigation={navigation}
            key={idx}
            category={key}
            itemList={value}
          />
        ))}
        </View>
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
