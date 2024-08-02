import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CartScreen = () => {
  const cartItems = [
    { id: '1', title: 'Peluche FNAF 2 Toy Chica', price: 20, quantity: 2 },
    { id: '2', title: 'Peluche FNAF 2 Toy Bonnie', price: 25, quantity: 1 },
    { id: '3', title: 'Peluche FNAF 5 Funtime Foxy', price: 35, quantity: 1 },
    { id: '4', title: 'Peluche FNAF 2 Toy Puppet', price: 30, quantity: 1 },
    { id: '5', title: 'Peluche FNAF 1 Freddy Fazbear', price: 45, quantity: 1 },
    { id: '6', title: 'Peluche FNAF 3 Phantom Chica', price: 45, quantity: 1 },
    { id: '7', title: 'Peluche FNAF 3 Phantom Puppet', price: 45, quantity: 1 },
    { id: '5', title: 'Peluche FNAF 4 Nightmare Fredbear', price: 45, quantity: 1 }

  ];

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const calculateShipping = () => {
    let shippingCost = cartItems.length * 50;
    if (cartItems.length >= 3 && cartItems.length <= 8) {
      shippingCost -= (cartItems.length - 2) * 5;
    }
  
    return shippingCost;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>compras</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>Precio: ${item.price}</Text>
            <Text style={styles.itemQuantity}>Cantidad: {item.quantity}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
      <Text style={styles.totalText}>Costo de Envío: ${calculateShipping()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  itemPrice: {
    fontSize: 16,
    color: 'white',
  },
  itemQuantity: {
    fontSize: 16,
    color: 'white',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
});

export default CartScreen;
