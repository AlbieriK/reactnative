import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WishlistScreen = ({ navigation }) => {
  const viewCart = () => {

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Deseos</Text>
      <TouchableOpacity style={styles.button} onPress={viewCart}>
        <Text style={styles.buttonText}>Ver Carrito</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
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

export default WishlistScreen;
