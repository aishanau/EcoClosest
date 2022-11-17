
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

const RootStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

import BrowsePage from './pages/BrowsePage';
import ResultsPage from './pages/ResultsPage';
import AccountPage from './pages/AccountPage';
import CategoryPage from './pages/CategoryPage';

import titles from './index.js';

export default function App() {

  const TabsNav = () => (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Wardrobe"
        component={WardrobePage}
        options={{
          tabBarIcon: ({ size }) => <MaterialCommunityIcons name="hanger" size={size} color={PRIMARY_COLOUR} />,
        }}
      />
      <Tabs.Screen
        name="Shop"
        component={BrowsePage}
        options={{
          tabBarIcon: ({ size }) => <Ionicons name="md-search" size={size} color={PRIMARY_COLOUR} />,
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={SamplePage}
        options={{
          tabBarIcon: ({ size }) => <Ionicons name="md-cart" size={size} color={PRIMARY_COLOUR} />,
        }}
      />
      <Tabs.Screen
        name="Account"
        component={AccountPage}
        options={{
          tabBarIcon: ({ size }) => <MaterialCommunityIcons name="account" size={size} color={PRIMARY_COLOUR} />,
        }}
      />
    </Tabs.Navigator>
  );

  const tabBarOptions = {
    indicatorStyle: { colour: PRIMARY_COLOUR, },
    activeTintColor: PRIMARY_COLOUR,
    pressOpacity: 1,
    style: { colour: PRIMARY_COLOUR, },

  }
  return (
    <NavigationContainer>
      <RootStack.Navigator tabBarOptions={tabBarOptions} initialRouteName="EcoCloset">
        <RootStack.Screen name="Wardrobe" component={WardrobePage} />
        <RootStack.Screen name="Shop" component={BrowsePage} />
        <RootStack.Screen name="Cart" component={SamplePage} />
        <RootStack.Screen name="Account" component={AccountPage} />
        <RootStack.Screen name="Results" component={ResultsPage} options={{ title: "Results" }}/>
        <RootStack.Screen name="Category" component={CategoryPage} options={{ title: "Category" }}/>
        <RootStack.Screen name="EcoCloset" component={TabsNav} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
