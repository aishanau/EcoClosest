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
import { useNavigation } from '@react-navigation/native';


import { MAIN_TEXT_COLOUR, PRIMARY_COLOUR } from "../styles";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const SignUp = ({ isSignedIn, setIsSignedIn }) => {
  const navigation = useNavigation();

  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSignUp = () => {
    if ((email !== '') && (password !== '') && (password.length === confirmPassword.length)) {
      setIsSignedIn(true);
    }
  };
  return (
    <>
      <ScrollView>
        <Image
          style={{ height: "90%" }}
          source={require("../assets/SignUp.png")}
        ></Image>
        <View style={{ paddingBottom: 10 }}>
          <Input
            containerStyle={styles.input}
            inputContainerStyle={{}}
            label="Email"
            placeholder="janedoe@email.com"
            onChangeText={(input) => setEmail(input)}
            value={email}
          />
        </View>
        <View style={{ paddingBottom: 10 }}>
          <Input
            containerStyle={styles.input}
            inputContainerStyle={{}}
            label="Password"
            placeholder="Enter a password"
            onChangeText={(input) => setPassword(input)}
            value={password}
            secureTextEntry={true}
          />
        </View>
        <View style={{ paddingBottom: 10 }}>
          <Input
            containerStyle={styles.input}
            inputContainerStyle={{}}
            label="Confirm Password"
            placeholder="Enter a password"
            onChangeText={(input) => setConfirmPassword(input)}
            value={confirmPassword}
            secureTextEntry={true}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            paddingTop: 40,
            paddingHorizontal: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ paddingBottom: 10 }}>
            <PrimaryButton
              title={"Sign Up"}
              onPress={handleSignUp}
              containerStyle={{ width: 250 }}
            />
          </View>
          <View style={{ paddingBottom: 10 }}>
            <SecondaryButton
              title={"Already have account"}
              onPress={() => navigation.goBack()}
              containerStyle={{ width: 250 }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SignUp;

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
