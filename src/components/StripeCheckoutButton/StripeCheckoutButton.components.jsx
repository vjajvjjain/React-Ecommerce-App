import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const StripePrice = price * 100;
  const publishedKey =
    "pk_test_51HOMBNHFHv0cHuzkvGi9skwIS7EH1DOx6n2AUAu2drl2TSlCr0KYplAJLnRMph8Hk2K47XLqgxaA7kSuLWa47uPk00PQx1hksU";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      description={`Your bag total is $${price}`}
      name="CRWN CLOTHINGS LTD..."
      amount={StripePrice}
      currency="USD"
      shippingAddress
      billingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      stripeKey={publishedKey}
      token={onToken}
      panelLabel="Pay Now"
    />
  );
};

export default StripeCheckoutButton;
