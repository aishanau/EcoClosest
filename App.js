import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import BrowsePage from './pages/BrowsePage'
import UploadItem from './pages/UploadItem'
import ItemDetails from './pages/ItemDetails';
import PhotoGallery from './pages/PhotoGallery';

export default function App() {
  return (
    <View style={styles.container}>
      <ItemDetails />
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
