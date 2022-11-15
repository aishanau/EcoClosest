import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import WardrobePage from "./pages/WardrobePage";
import WardrobePageSwipeable from "./pages/WardrobePageSwipeable";

export default function App() {
  return (

      <View style={styles.container}>
        <WardrobePageSwipeable />
        {/* <WardrobePage /> */}
        <StatusBar/>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 32,
  },
});
