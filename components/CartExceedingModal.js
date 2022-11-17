import * as React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Image } from '@rneui/themed';

export default ({display}) => {
  
  return (
    <View style={{display: display}}>
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 50, resizeMode: 'contain' }}
          source={require('../assets/cartexceed.png')} 
        />

        <Text style={{
          fontSize: '17px',
        }}>You are exceeding your monthly purchase limit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    backgroundColor: '#E78587',
    borderRadius: 10,
    padding: 10,
  },
});


