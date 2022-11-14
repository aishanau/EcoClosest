import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ItemCard from './components/ItemCard';
import ButtonIcon from './components/ButtonIcon';
import SearchBar from './components/SearchBar';

import titles from './index.js';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ItemCard /> */}
      {/* <ButtonIcon name={titles.shirt}/> */}
      <SearchBar />
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
