import React from "react";
import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/Signup/SignUp.component";
import "./SignInAndSignUpPage.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up-page">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
