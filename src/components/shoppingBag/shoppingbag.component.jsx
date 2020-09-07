import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemCount } from "../../redux/CartReducer/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/svg logos/shopping-bag.svg";
import "./shoppingBag.styles.scss";
const ShoppingBag = ({ onClick, itemCount }) => (
  <div className="cart-icon" onClick={onClick}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount,
});

export default connect(mapStateToProps)(ShoppingBag);
