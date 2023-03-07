export const getSubTotalValue = cartItems =>
  cartItems.reduce((p, item) => {
    p += item.productCount * item.pricePerKg;
    return p;
  }, 0);
