import {View, StyleSheet} from 'react-native';
import React from 'react';
import CartItemsContainer from '../Components/CartItemsContainer';
import CartInfo from '../Components/CartInfo';
import Button from '../Components/Button';

export default function Cart() {
  return (
    <View style={styles.container}>
      <CartItemsContainer flex={5} />
      <CartInfo flex={2.5} />
      <Button flex={1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:10,
    marginHorizontal:10
  },
});
