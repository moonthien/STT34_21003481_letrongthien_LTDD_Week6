import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const DATA = [
  { id: '1', name: 'Pinarello', price: '$1800', image: require('../assets/image_3.png') },
  { id: '2', name: 'Pina Mountain', price: '$1700', image: require('../assets/image_1.png') },
  { id: '3', name: 'Pina Bike', price: '$1500', image: require('../assets/image2.png') },
  { id: '4', name: 'Pinarello', price: '$1900', image: require('../assets/image_3.png') },
  { id: '5', name: 'Pinarello', price: '$2700', image: require('../assets/image_1.png') },
  { id: '6', name: 'Pinarello', price: '$1350', image: require('../assets/image2.png') },
];

const Screen2 = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => navigation.navigate('Screen3', { image: item.image })} // Chuyển đến Screen3 và truyền hình ảnh
    >
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The world's Best Bike</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'red',
  },
  filterText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#fdf7dd',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#555',
  },
});

export default Screen2;
