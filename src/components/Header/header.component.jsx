import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/svg logos/crown.svg";
import ShoppingBag from "../shoppingBag/shoppingbag.component";
import CartDropdown from "../cartDropdown/cartDropdown.components";
import { selectCurrentUser } from "../../redux/UserReducer/user.selectors";
import { selectHidden } from "../../redux/CartReducer/cart.selectors";
import { cartAction } from "../../redux/CartReducer/cartReducer.actions.js";
import { auth } from "../../Fire database/firebase.utility.js";
import "./header.styles.scss";

const Header = ({ currentUser, toogleCart, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signup" className="option">
          SIGN IN
        </Link>
      )}
      <ShoppingBag onClick={() => toogleCart()} />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toogleCart: () => dispatch(cartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
