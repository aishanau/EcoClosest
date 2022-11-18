import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function PhotoGallery({ navigation }) {
  const [image, setImage] = useState(null);
  const [statusCamera, requestPermissionCamera] = ImagePicker.useCameraPermissions();
  const [statusLib, requestPermissionLib] = ImagePicker.useMediaLibraryPermissions();

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
        navigation.navigate('UploadItem', {image: result.assets[0].uri});
      }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      navigation.navigate('UploadItem', {image: result.assets[0].uri});
    }
  };

  const takePhotoPermission = async () => {
    if (statusCamera == null || !statusCamera.granted) {
      statusCamera = await requestPermissionCamera();
    }
    if (statusCamera != null && statusCamera.granted) {
      await takePhoto();
    }
  }

  const pickImagePermission = async () => {
    if (statusLib == null || !statusLib.granted) {
      statusLib = await requestPermissionLib();
    }
    if (statusLib != null && statusLib.granted) {
      await pickImage();
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Take photo" onPress={takePhotoPermission} />
      <Button title="Upload from gallery" onPress={pickImagePermission} />
    </View>
  );
}