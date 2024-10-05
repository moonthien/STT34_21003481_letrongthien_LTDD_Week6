// Screen1.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import image from '../assets/image.png';

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A premium online store for sporter and their stylish choice</Text>
      <Image source={require('../assets/image.png')} style={styles.image} />
      <Button title="Get Started" color="red" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 292,
    height: 270,
    marginBottom: 20,
  },
 
});

export default Screen1;
