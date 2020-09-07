import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItemCount = createSelector(
  [selectCartItem],
  (cartItems) =>
    cartItems.reduce((accumulator, nexVal) => accumulator + nexVal.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItem], (cartItems) =>
  cartItems.reduce(
    (accumulator, nexVal) => accumulator + nexVal.quantity * nexVal.price,
    0
  )
);
