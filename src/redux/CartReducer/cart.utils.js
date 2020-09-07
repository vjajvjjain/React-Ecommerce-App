export const addCartItem = (cartItems, newItemToCart) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === newItemToCart.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItemToCart.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...newItemToCart, quantity: 1 }];
};

export const removeCartItem = (cartItems, itemToDecrease) => {
  if (itemToDecrease.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToDecrease.id);
  }
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToDecrease.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToDecrease.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
