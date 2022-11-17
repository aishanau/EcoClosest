import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
import CheckoutSuccess from './pages/CheckoutSuccess';

import titles from './index.js';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Checkout/> */}
      {/* <CartPage/> */}
      <CheckoutSuccess/>
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
