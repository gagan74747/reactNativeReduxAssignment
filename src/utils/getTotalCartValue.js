export const getTotalCartValue = (subTotalValue, deliverCharges) =>
  subTotalValue === 0 ? 0 : subTotalValue + deliverCharges;
