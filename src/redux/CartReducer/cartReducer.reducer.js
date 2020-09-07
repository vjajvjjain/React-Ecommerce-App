import { addCartItem, removeCartItem } from "./cart.utils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOW_DROPDOWN":
      return { ...state, hidden: !state.hidden };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
