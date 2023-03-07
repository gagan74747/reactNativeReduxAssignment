import {View, StyleSheet} from 'react-native';
import React from 'react';
import Cart from './src/Screens/Cart';
import {Provider} from 'react-redux';
import store from './src/Services/rootReducer';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Cart />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
