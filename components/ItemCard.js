import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card } from '@rneui/themed';

export default function ItemCard({name, icon, price}) {
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={() => console.log('click for more details')}
    >
        <Card containerStyle={styles.card}>
          <Card.Image
            style={{ padding: 0, width: 120, height: 120, resizeMode: 'cover' }}
            source={{
              uri: icon
            }}
          />
        <View style={styles.innerCard}>
          <Text style={styles.title}>
            {name}
          </Text>
          <Text style={styles.price}>
            {price}
          </Text>
        </View>
        </Card>
    </TouchableOpacity>
  );
}

// Issue: font color not changing
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    border: '10px',
    borderColor: '#FFD0D0',
    borderRadius: 20,
  },
  innerCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: { 
    margin: 10, 
    fontColor: '#565454', 
    fontSize: '14px',
  },
  price: { 
    fontSize: '16px',
    fontColor: '#D8143A'
  },
});
