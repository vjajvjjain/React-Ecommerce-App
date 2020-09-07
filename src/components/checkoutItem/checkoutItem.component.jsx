import React from "react";
import { connect } from "react-redux";
import {
  removeItem,
  addItem,
  decreaseQuantity,
} from "../../redux/CartReducer/cartReducer.actions";
import "./checkoutItem.styles.scss";

const CheckoutItem = ({ cartItem, dispatch }) => {
  const { id, name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(decreaseQuantity(cartItem))}
        >
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => dispatch(removeItem(id))}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null)(CheckoutItem);
