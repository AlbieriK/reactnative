import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ImageBackground } from 'react-native';

const productsData = [
  {
    id: '1',
    title: 'Peluche FNAF 2 Toy Chica',
    description: 'Peluche oficial de Toy Chica de FNAF 2.',
    imageUrl: require('./assets/images/FreddyFNAF1.png'),
  },
  {
    id: '2',
    title: 'Peluche FNAF 2 Toy Bonnie',
    description: 'Peluche oficial de Toy Bonnie de FNAF 2.',
    imageUrl: require('./assets/images/FreddyFNAF1.png'),
  },
  {
    id: '3',
    title: 'Peluche FNAF 5 Funtime Foxy',
    description: 'Peluche oficial de Funtime Foxy de FNAF 5.',
    imageUrl: require('./assets/images/FreddyFNAF1.png'),
  },
  {id: '4',
  title: 'Peluche FNAF 2 Puppett',
  description: 'Peluche oficial de Puppet de FNAF 2.',
  imageUrl: require('./assets/images/FreddyFNAF1.png'),
},
{
id: '5',
title: 'Peluche FNAF 1 Freddy fazbears',
description: 'Peluche oficial de Freddy fazbears de FNAF 1.',
imageUrl: require('./assets/images/FreddyFNAF1.png'),
},
{    id: '6',
    title: 'Peluche FNAF 3 Phantom Chica',
    description: 'Peluche oficial de Phantom chica de FNAF 2.',
    imageUrl: require('./assets/images/FreddyFNAF1.png'),
  },
  {    id: '7',
    title: 'Peluche FNAF 3 Phantom Puppet',
    description: 'Peluche oficial de Phantom Puppet de FNAF 3.',
    imageUrl: require('./assets/images/FreddyFNAF1.png'),
  },
  {    id: '8',
    title: 'Peluche FNAF 4 Nightmare Fredbear',
    description: 'Peluche oficial de Funtime Foxy de FNAF 5.',
    imageUrl: require('./assets/images/FreddyFNAF1.png'),
  },
];

const HomeScreen = ({ navigation }) => {
  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <ImageBackground source={item.imageUrl} style={styles.imageBackground}>
        <Text style={styles.productTitle}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={productsData}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  productCard: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
    width: '100%',
  },
});

export default HomeScreen;
