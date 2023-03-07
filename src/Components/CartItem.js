import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {
  incrementHandler,
  decrementHandler,
  deleteItem,
} from '../Services/cartItems/action';

export default function CartItem({data}) {

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteItem(id));
  };

  const handleDecrement = (id, isSingleItem) => {
    dispatch(decrementHandler(id, isSingleItem));
  };

  const handleIncrement = id => {
    dispatch(incrementHandler(id));
  };

  return (
    <View style={[styles.cartItem]}>
      <Image source={data.productImage} style={styles.productImage} />
      <View style={styles.productInfo}>
        <View style={styles.productInfoElem}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 17}}>
              {data.productName}
            </Text>
            <Text>${data.pricePerKg}/Kg</Text>
          </View>
          <View style={styles.itemQuantityHandler}>
            <TouchableOpacity
              style={styles.counterButtons}
              onPress={() => handleDecrement(data.productId, data.productCount === 1)}>
              <Text style={styles.counterButtonsFontStyle}>-</Text>
            </TouchableOpacity>
            <Text style={styles.counterButtonsFontStyle}>
              {data.productCount}
            </Text>
            <TouchableOpacity
              style={styles.counterButtons}
              onPress={() => handleIncrement(data.productId)}>
              <Text style={styles.counterButtonsFontStyle}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.productInfoElem}>
          <View style={styles.timestamp}>
            <Text>{new Date(data.addedAt).toDateString().slice(0, -4)}</Text>
          </View>
          <TouchableOpacity onPress={() => handleDelete(data.productId)}>
            <Image source={require('../assets/images/deleteIcon.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    margin: 5,
    padding: 10,
    borderWidth: 0.3,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 4,
    height: 120,
    flexDirection: 'row',
  },
  productImage: {
    width: 100,
  },
  productInfo: {
    flex: 1,
  },
  productInfoElem: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  itemQuantityHandler: {
    width: 85,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  counterButtons: {
    borderWidth: 1,
    borderRadius: 20,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterButtonsFontStyle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
