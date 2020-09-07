import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItem } from "../../redux/CartReducer/cart.selectors";
import { withRouter } from "react-router-dom";
import { cartAction } from "../../redux/CartReducer/cartReducer.actions";
import CartItem from "../cartItem/cartItem.component";
import Button from "../Button/button.component";
import "./cartDropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-line">Your cart is empty</span>
      )}
    </div>
    <Button
      inverted
      onClick={() => {
        history.push("/checkout");
        dispatch(cartAction());
      }}
    >
      Go To Checkout
    </Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
