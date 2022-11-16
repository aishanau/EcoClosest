import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WardrobePage from './pages/WardrobePage';


export default function App() {
  return (
    <SafeAreaView style={styles.container} >
        <WardrobePage />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
