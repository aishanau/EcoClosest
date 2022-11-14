import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import BrowsePage from './pages/BrowsePage'

import titles from './index.js';

export default function App() {
  return (
    <View style={styles.container}>
      <BrowsePage />
    </View>
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
