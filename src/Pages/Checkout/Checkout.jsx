import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import SectionHeader from "../../components/SectionHeader";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Checkout = () => {
  return (
    <div>
      <SectionHeader
        title={"Make Payment"}
        subTitle={
          "Complete your payment safely and enjoy a seamless shopping experience."
        }
      ></SectionHeader>
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Checkout;
