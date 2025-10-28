import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Routes from './src/Routes/Routes';
import OrderDetailsScreen from './src/Screens/OrderDetails/OrderDetailsScreen';
import TextScreen from './src/Screens/TextScreen';
import OrderCompleteScreen from './src/Screens/OrderComplete/OrderCompleteScreen';
import DetailScreen from './src/Screens/Detail/DetailScreen';
import TextScreen2 from './src/Screens/TextScreen2';


import { store } from './src/ReduxToolkit/Store/Store';
import { Provider } from 'react-redux';

export default function App() {
  return (
  <Routes />

)
}

const styles = StyleSheet.create({});
