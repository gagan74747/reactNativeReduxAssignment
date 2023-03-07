import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {getSubTotalValue} from '../utils/subTotalValue';
import {getTotalCartValue} from '../utils/getTotalCartValue';

export default function CartInfo({flex}) {
  const cartItems = useSelector(state => state.cartItems);
  const deliveryCharges = 18;
  const subTotalValue = getSubTotalValue(cartItems);
  const totalCartValue = getTotalCartValue(subTotalValue, deliveryCharges);

  return (
    <View style={[styles.cartInfo, {flex}]}>
      <View style={styles.textStyle}>
        <Text style={styles.fontStyle}>Delivery Charges</Text>
        <Text style={styles.fontStyle}>${deliveryCharges.toFixed(2)}</Text>
      </View>
      <View style={styles.textStyle}>
        <Text style={styles.fontStyle}>Sub Total</Text>
        <Text style={styles.fontStyle}>${subTotalValue.toFixed(2)}</Text>
      </View>
      <View style={styles.textStyle}>
        <Text style={styles.fontStyle}>Total</Text>
        <Text style={styles.fontStyle}>${totalCartValue.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartInfo: {
    margin: 5,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 25,
    height: 230,
    padding: 20,
  },
  textStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fontStyle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
