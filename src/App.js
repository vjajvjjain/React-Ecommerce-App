import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/UserReducer/user.selectors";
import HomePage from "./pages/homepage/Homepage.component.jsx";
import ShopPage from "./pages/ShopPage/ShopPage.component.jsx";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage.component.jsx";
import Header from "./components/Header/header.component.jsx";
import { connect } from "react-redux";
import { userAction } from "./redux/UserReducer/user.actions";
import CheckoutPage from "./pages/CheckoutPage/checkout.component.jsx";
import {
  auth,
  creatingUserDataInDatabase,
} from "./Fire database/firebase.utility";
import "./App.css";

class App extends React.Component {
  unSubscribeConnection = null;

  componentDidMount() {
    const { userAction } = this.props;
    this.unSubscribeConnection = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await creatingUserDataInDatabase(userAuth);
        userRef.onSnapshot((snapshot) => {
          userAction({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        userAction(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeConnection();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signup"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  userAction: (user) => dispatch(userAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
