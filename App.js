import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import BrowsePage from './pages/BrowsePage';
import ResultsPage from './pages/ResultsPage';
import AccountPage from './pages/AccountPage';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import titles from './index.js';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <AccountPage />
//       {/* <BrowsePage /> */}
//     </View>
//   );
// }

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Browse Page"
          component={BrowsePage}
          // options={{ title: "Search Page" }}
        />
        {/* <RootStack.Screen name="Results Page" component={ResultsPage} /> */}
        <RootStack.Screen
          name="Results"
          component={ResultsPage}
          options={{ title: "Results"}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
