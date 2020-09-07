import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StripeCheckoutButton from "../../components/StripeCheckoutButton/StripeCheckoutButton.components";
import {
  selectCartItem,
  selectCartTotal,
} from "../../redux/CartReducer/cart.selectors";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkoutItem/checkoutItem.component";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">Total- ${total}</div>
    <div className="test-warning">
      * Please use this card for payments as a test card *
      <br />* Card Number - 4242 4242 4242 4242 Exp - 8 / 29 CVV-123 *
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
