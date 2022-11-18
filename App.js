import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
import CheckoutSuccess from './pages/CheckoutSuccess';
import WardrobePage from './pages/WardrobePage';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import SamplePage from "./components/SamplePage";
import SamplePage2 from "./components/SamplePage2";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { PRIMARY_COLOUR } from "./styles";
import CreateOutfitPage from "./pages/CreateOutfitPage";
import React, { useState } from "react";

const RootStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

import UploadItem from "./pages/UploadItem";
import ItemDetails from "./pages/ItemDetails";
import PhotoGallery from "./pages/PhotoGallery";
import ShopItem from "./pages/ShopItem";
import BrowsePage from "./pages/BrowsePage";
import ResultsPage from "./pages/ResultsPage";
import AccountPage from "./pages/AccountPage";
import CategoryPage from "./pages/CategoryPage";
import SignUp from "./pages/SignUp";

import titles from "./index.js";
import ViewOutfit from "./pages/ViewOutfit";
import Login from "./pages/Login";
import Splash from "./pages/Splash";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const TabsNav = () => (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Wardrobe"
        component={WardrobePage}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="hanger"
              size={size}
              color={PRIMARY_COLOUR}
              style={{ marginTop: 10, marginBottom: 3 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Shop"
        component={BrowsePage}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons
              name="md-search"
              size={size}
              color={PRIMARY_COLOUR}
              style={{ marginTop: 10, marginBottom: 3 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={CartPage}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons
              name="md-cart"
              size={size}
              color={PRIMARY_COLOUR}
              style={{ marginTop: 10, marginBottom: 3 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        component={AccountPage}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="account"
              size={size}
              color={PRIMARY_COLOUR}
              style={{ marginTop: 10, marginBottom: 3 }}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );

  const tabBarOptions = {
    indicatorStyle: { colour: PRIMARY_COLOUR },
    activeTintColor: PRIMARY_COLOUR,
    pressOpacity: 1,
    style: { colour: PRIMARY_COLOUR },
  };
  return (
    <NavigationContainer>
      {isSignedIn && (
        <RootStack.Navigator initialRouteName="EcoCloset">
          <RootStack.Screen name="Wardrobe" component={WardrobePage} />
          <RootStack.Screen name="Cart" component={CartPage} />
          <RootStack.Screen name="Checkout" component={Checkout} />
          <RootStack.Screen name="Checkout Success" component={CheckoutSuccess} />
          <RootStack.Screen name="Account" component={SamplePage2} />
          <RootStack.Screen name="Create Outfit" component={CreateOutfitPage} />
          <RootStack.Screen name="Upload Item" component={UploadItem} />
          <RootStack.Screen name="Item Details" component={ItemDetails} />
          <RootStack.Screen name="View Outfit" component={ViewOutfit} />
          <RootStack.Screen name="Shop" component={BrowsePage} />
          <RootStack.Screen name="Shop Item" component={ShopItem} />
          <RootStack.Screen
            name="Results"
            component={ResultsPage}
            options={{ title: "Results" }}
          />
          <RootStack.Screen
            name="Category"
            component={CategoryPage}
            options={{ title: "Category" }}
          />
          <RootStack.Screen name="EcoCloset" component={TabsNav} />
        </RootStack.Navigator>
      )}
      {!isSignedIn && (
        <RootStack.Navigator initialRouteName="Welcome">
          <RootStack.Screen
            name="Welcome"
            component={Splash} />
          
          <RootStack.Screen
            name="Sign Up"
            children={() => <SignUp setIsSignedIn={setIsSignedIn}/>}
          />
          <RootStack.Screen
            name="Login"
            children={() => <Login setIsSignedIn={setIsSignedIn}/>}
          />
        </RootStack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
