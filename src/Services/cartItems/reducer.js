import {
  DECREASE_PRODUCT_COUNT,
  DELETE_CART_ITEM,
  INCREASE_PRODUCT_COUNT,
} from './constants';

const initialState = [
  {
    productId: 1,
    productName: 'Apple',
    pricePerKg: 2.5,
    productCount: 2,
    addedAt: 1678083047339,
    productImage: require('../../assets/images/prodId1.png'),
  },
  {
    productId: 2,
    productName: 'Mango',
    pricePerKg: 4.5,
    productCount: 7,
    addedAt: 1678083047339,
    productImage: require('../../assets/images/prodId2.png'),
  },
  {
    productId: 3,
    productName: 'Stawberry',
    pricePerKg: 1.5,
    productCount: 5,
    addedAt: 1678083047339,
    productImage: require('../../assets/images/prodId3.png'),
  },
];
export const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_PRODUCT_COUNT:
      return state.map(item =>
        item.productId === action.payload.id
          ? {...item, productCount: item.productCount + 1}
          : item,
      );
    case DECREASE_PRODUCT_COUNT:
      if (!action.payload.isSingleItem) {
        return state.map(item =>
          item.productId === action.payload.id
            ? {...item, productCount: item.productCount - 1}
            : item,
        );
      } else {
        return state.filter(item => item.productId !== action.payload.id);
      }
    case DELETE_CART_ITEM:
      return state.filter(item => item.productId !== action.payload.id);
    default:
      return state;
  }
};
