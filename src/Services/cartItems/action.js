import {DECREASE_PRODUCT_COUNT, DELETE_CART_ITEM, INCREASE_PRODUCT_COUNT} from './constants';

export const incrementHandler = id => {
  return {
    type: INCREASE_PRODUCT_COUNT,
    payload: {
      id,
    },
  };
};

export const decrementHandler = (id, isSingleItem) => {
  return {
    type: DECREASE_PRODUCT_COUNT,
    payload: {
      id,
      isSingleItem,
    },
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_CART_ITEM,
    payload: {
      id,
    },
  };
};
