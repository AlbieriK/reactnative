import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params; 
  const [cart, setCart] = useState([]); 

  const addToCart = () => {
    setCart([...cart, product]); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
     
      <TouchableOpacity style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>Aceptar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ProductDetailScreen;
