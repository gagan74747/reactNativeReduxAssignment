import {View, StyleSheet, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

export default function CartItemsContainer({flex}) {
  const cartItems = useSelector(state => state.cartItems);
  const renderItem = useCallback(({item}) => {
    return <CartItem data={item} />;
  }, []);

  return (
    <View style={[styles.cartItemsContainer, {flex}]}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.productId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cartItemsContainer: {
    marginVertical: 5,
  },
});
