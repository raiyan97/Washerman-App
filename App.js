import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Routes from './src/Routes/Routes';
import { store } from './src/ReduxToolKIt/Store/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
