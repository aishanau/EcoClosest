import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@rneui/themed';

export default function ItemCard() {
  return (
    <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
        <View style={styles.innerCard}>
          <Text style={styles.title}>
            Outfit Name
          </Text>
          <Text style={styles.price}>
            $Price 
          </Text>
        </View>
        </Card>
    </View>
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
    fontSize: '18px',
  },
  price: { 
    fontSize: '16px',
    fontColor: '#D8143A'
  },
});
