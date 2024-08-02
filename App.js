import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';
import WishlistScreen from './screens/WishlistScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tienda de FNAF', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Detalles del Producto', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Carrito de Compras', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} options={{ title: 'Lista de Deseos', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

