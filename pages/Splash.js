import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    Image,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { Dialog, CheckBox, Slider, Input } from "@rneui/themed";
  
  import { MAIN_TEXT_COLOUR, PRIMARY_COLOUR } from "../styles";
  import ImageCarousel from "../components/ImageCarousel";
  import PrimaryButton from "../components/PrimaryButton";
  import MultiSelectBar from "../components/MultiSelect";
  import { clothingCategories } from "../database";
  import SecondaryButton from "../components/SecondaryButton";
  
  const screenHeight = Dimensions.get("window").height;

  const Splash = ({ setIsSignedIn, navigation }) => {

    return (
      <>
        <ScrollView>
          <Image
            style={{ height: screenHeight, position: 'absolute' }}
            source={require("../assets/splash.png")}
          ></Image>
  
          <View
            style={{
              flexDirection: "column",
              paddingTop: screenHeight * 0.55,
              paddingHorizontal: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ paddingBottom: 10 }}>
              <PrimaryButton
                title={"Login"}
                onPress={() => navigation.navigate('Login')}
                containerStyle={{ width: 250 }}
              />
            </View>
            <View style={{ paddingBottom: 10 }}>
              <SecondaryButton
                title={"Don't have account"}
                onPress={() => navigation.navigate('Sign Up')}
                containerStyle={{ width: 250 }}
              />
            </View>
          </View>
        </ScrollView>
      </>
    );
  };
  
  export default Splash;
  
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
    input: {
      height: 40,
      margin: 12,
      padding: 10,
    },
  });
  