// Import a library to help create a component

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import UserPage from './src/components/UserPage'
// import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header />
    <UserPage />
  </View>
);

//Render it to the device

AppRegistry.registerComponent('photo52', () => App);
