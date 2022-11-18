import * as React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Image } from '@rneui/themed';
import { Button } from '@rneui/themed';

export default function CheckoutSuccess({navigation}) {
  
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
        source={require('../assets/success.png')} 
      />

      <Text style={{
        fontSize: '17px', margin: 10,
      }}>Congrats! Your order has been placed</Text>

      <Text style={{
        fontSize: '10px', color: '#fff', margin: 10
      }}>Your items have been placed and is on its way to being processed.</Text>

      <Button
        title="Track Order"
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={styles.btnYES}
        titleStyle={{ fontWeight: '600', fontSize: 16, color: '#FB5C5C' }}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 200,
          marginVertical: 10,
          margin: 10
        }}
        onPress={() => console.log('tracking your order')}
      />
        
      <Button
        title="Continue Shopping"
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
        onPress={() => navigation.navigate("Shop")}
      />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#E78587',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
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


