import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView, TextInput } from "react-native";
import Dropdown from "../components/Dropdown";
// import { CheckBox } from "react-native-paper";

import { Button, ButtonGroup, withTheme } from '@rneui/themed';

export default function Checkout({navigation, route}) {
  const {total} = route.params;
  
  const [email, onChangeEmail] = React.useState("");
  const [fname, onChangefname] = React.useState("");
  const [lname, onChangelname] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [addy1, onChangeAddy1] = React.useState("");
  const [addy2, onChangeAddy2] = React.useState("");
  const [city, onChangeCity] = React.useState("");
  const [country, onChangeCountry] = React.useState("");
  const [state, onChangeState] = React.useState("");
  const [postcode, onChangePostcode] = React.useState("");
  const [cardNo, onChangecardNo] = React.useState("");
  const [cvv, onChangeCvv] = React.useState("");
  const [expiry, onChangeExpiry] = React.useState("");

  // checkbox
  const [checked, setChecked] = React.useState(false);

  return (
    <ScrollView style={styles.container} vertical={true}>
        <View style={{ paddingTop: 20, paddingBottom: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.header}>
              Checkout
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>1. Personal Details</Text>
          {/* <Text>.{'\n'}</Text> */}
          <SafeAreaView style={styles.splitTwo}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email"
            />
          </SafeAreaView>
        </View>

        <View style={styles.section}>
            <Text style={styles.title}>2. Shipping</Text>
            {/* <Text>.{'\n'}</Text> */}
            <SafeAreaView style={styles.splitTwo}>
              <TextInput
                style={styles.input2}
                onChangeText={onChangefname}
                value={fname}
                placeholder="First Name"
              />
              <TextInput
                style={styles.input2}
                onChangeText={onChangelname}
                value={lname}
                placeholder="Last Name"
              />
            </SafeAreaView>

            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder=" Phone Number"
                // keyboardInput="numeric"
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeAddy1}
                value={addy1}
                placeholder="Address Line 1"
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeAddy2}
                value={addy2}
                placeholder="Address Line 2 (optional)"
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeCity}
                value={city}
                placeholder="City"
              />
            </SafeAreaView>
            <SafeAreaView style={styles.splitTwo}>
              <TextInput
                style={styles.input2}
                onChangeText={onChangeCountry}
                value={country}
                placeholder="Country"
              />
              <TextInput
                style={styles.input2}
                onChangeText={onChangeState}
                value={state}
                placeholder="State"
              />
            </SafeAreaView>

            <SafeAreaView style={styles.splitTwo}>
              <TextInput
                style={styles.input}
                onChangeText={onChangePostcode}
                value={postcode}
                placeholder="Postcode"
              />
            </SafeAreaView>
            <Text style={styles.subheading}>Select Shipping Method</Text>
            {/* <Text>.{'\n'}</Text> */}
            <Dropdown> </Dropdown>
        </View>

        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
              {/* <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              /> */}
            <Text style={styles.label}>Billing Address is same as Shipping Address</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>3. Payment Details</Text>
          {/* <Text>.{'\n'}</Text> */}
          <View style={styles.splitTwo}>
            {/* payment icons */}
            <TouchableOpacity
              onPress={() => {
                  console.log("clicked mastercard")
              }}
              style={{
                shadowColor: 'pink',
                shadowOffset: {width: 2, height: 4},
                shadowOpacity: 0.5,
                shadowRadius: 10,
                borderRadius: '10px'
              }}
            >
              <Image
                style={{ width: 150, height: 90, resizeMode: 'cover',}}
                source={require("../assets/mastercard.jpeg")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                  console.log("clicked paypal")
              }}
            >
              <Image
                style={{ width: 100, height: 100, resizeMode: 'cover'}}
                source={require("../assets/paypal.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                  console.log("clicked apple pay")
              }}
            >
              <Image
                style={{ width: 100, height: 100, resizeMode: 'cover'}}
                source={require("../assets/applepay.png")}
              />
            </TouchableOpacity>
          </View>
          {/* <Text>.{'\n'}</Text> */}
          {/* card details */}
          <TextInput
              style={styles.input}
              onChangeText={onChangecardNo}
              value={cardNo}
              placeholder="Card Number"
              caretHidden={true}
              secureTextEntry={true}
            />
          <SafeAreaView style={styles.splitTwo}>
            <TextInput
              style={styles.input2}
              onChangeText={onChangeCvv}
              value={cvv}
              placeholder="CVV"
              caretHidden={true}
              secureTextEntry={true}
            />
            <TextInput
              style={styles.input2}
              onChangeText={onChangeExpiry}
              value={expiry}
              placeholder="Expiry (MM/YY)"
              caretHidden={true}
              secureTextEntry={true}
            />
          </SafeAreaView>
        </View>
        <Text style={{fontSize: '8px', fontColor: 'eeeeee'}}></Text>
        <View style={styles.splitTwo}>
              <Text style={styles.subheading}>Promo Code</Text>
              <Text>{'Select promo code >'}</Text>
        </View>
        {/* <Text>.{'\n'}</Text> */}
        <View style={styles.splitTwo}>
              <Text style={styles.subheading}>Total</Text>
              <Text>${total} AUD</Text>
        </View>

        {/*confirm button*/}
        <View style={{ paddingTop: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            title="Confirm Order"
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={styles.btnYES}
            titleStyle={{ fontWeight: '600', fontSize: 16, color: '#FB5C5C' }}
            containerStyle={{
              marginHorizontal: 50,
              height: 50,
              width: 200,
              marginVertical: 10,
            }}
            onPress={() => navigation.navigate("Checkout Success")}
          />

          <Button
            title="Cancel Order"
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={styles.btnNO}
            titleStyle={{ fontWeight: '600', fontSize: 16, color: '#16' }}
            containerStyle={{
              marginHorizontal: 50,
              height: 50,
              width: 200,
              marginVertical: 10,
            }}
            onPress={() => navigation.navigate("Shop")}
          />
        </View>

    </ScrollView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    width: '90%',
  },
  header: {
    paddingTop: 20,
    fontWeight: '700',
    textAlignment: 'center',
    fontSize: '20px',
  },
  title: {
    fontColor: '#FB5C5C',
    fontSize: '16px',
    fontWeight: '600',
    // textAlign: 'center',
    marginBottom: 10,
  },
  subheading: {
    fontColor: '#FB5C5C',
    fontSize: '15px',
    fontWeight: '500',
    marginBottom: 10,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },
  input: {
    height: 40,
    // margin: 12,
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: '7px',
  },
  input2: {
    height: 40,
    // margin: 12,
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    width: '50%',
    borderRadius: '7px',
  },
  splitTwo: {
    width: '100%',
    display: 'flex',
    gap: 30,
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'space-between',
    marginBottom: 10,
    // alignSelf : 'center',
  },
  checkcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  btnYES: {
    backgroundColor: '#FFD0D0',
    borderRadius: 30,
  },
  btnNO: {
    backgroundColor: '#eeeeee',
    borderRadius: 30,
  },
});
