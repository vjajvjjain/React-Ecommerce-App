export const cartAction = () => ({
  type: "SHOW_DROPDOWN",
});
export const addItem = (cartItem) => ({
  type: "ADD_ITEM",
  payload: cartItem,
});
export const removeItem = (id) => ({
  type: "REMOVE_ITEM",
  payload: id,
});
export const decreaseQuantity = (item) => ({
  type: "DECREASE_QUANTITY",
  payload: item,
});
