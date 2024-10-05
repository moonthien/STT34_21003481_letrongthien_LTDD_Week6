// Screen3.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const Screen3 = ({ route }) => {
  const { image, title = 'Pina Mountain', price = '$350', discount = '15% OFF', description = 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.' } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <Text>{discount} | {price}</Text>
      <Text>Description</Text>
      <Text>
        {description}
      </Text>
      <Button color = "red" title="Add to cart" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  imageContainer: {
    backgroundColor: '#fdf7dd', // Màu nền
    width: '100%', // Chiếm toàn bộ chiều rộng màn hình
    height: 250, // Đặt chiều cao background
    alignItems: 'center', // Căn giữa hình ảnh
    justifyContent: 'center', // Căn giữa hình ảnh
    marginBottom: 20,
  },
  image: {
    width: 150, // Kích thước hình ảnh nhỏ hơn
    height: 150,
  },
});

export default Screen3;
