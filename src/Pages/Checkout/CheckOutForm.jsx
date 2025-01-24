import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import { showAlert } from "../../Utils/alerts";
import { Helmet } from "react-helmet-async";

const CheckOutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [transaction, setTransaction] = useState("");
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { userInfo } = useAuth();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((a, c) => a + c.price * c.quantity, 0);
  console.log(cart);
  console.log(totalPrice);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);
  // console.log(clientSecret);

  const handleSubmit = async (e) => {
    setTransaction("");
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (card === null) return;
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    //
    if (error) {
      showAlert({
        title: "Something went wrong!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } else {
      console.log("Payment method info is", paymentMethod);
      setError("");
    }

    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userInfo?.disPlayName || "Anonymous",
            email: userInfo?.email || "No Email",
          },
        },
      });
    if (confirmError) {
      showAlert({
        title: "Something went wrong!",
        text: confirmError.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransaction(paymentIntent.id);
        const paymentInfo = {
          name: userInfo.displayName,
          buyerEmail: userInfo.email,
          amount: totalPrice,
          transactionId: paymentIntent.id,
          cartIds: cart.map((item) => item._id),
          itemIds: cart.map((item) => item.itemId),
          orderInfo: cart.map((item) => ({
            id: item.itemId,
            quantity: item.quantity,
            price: item.price,
          })),
          status: "Pending",
        };
        axiosSecure.post("/payment", paymentInfo).then((res) => {
          // console.log(res.data);
          refetch();
          showAlert({
            title: `Payment successful $${totalPrice.toFixed(2)}`,
            icon: "success",
            confirmButtonText: "Thanks",
          });
          navigate("/invoice", { state: { paymentInfo, cart } });
        });
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg mt-10">
      <Helmet>
        <title>Payment Gateway | Medi Nest</title>
      </Helmet>
      {/* Header Section */}
      <h2 className="text-2xl font-bold text-center mb-4">
        Complete Your Payment
      </h2>
      <p className="text-lg text-gray-600 text-center mb-6">
        Securely finalize your purchase. Total Items:{" "}
        <strong>{cart.length}</strong>
      </p>

      {/* Payment Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Card Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card Details
          </label>
          <CardElement
            className="border border-gray-300 rounded-md p-3 bg-white"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>

        {/* Pay Button */}
        <button
          type="submit"
          className="w-full btn btn-primary bg-blue-600 text-white hover:bg-blue-700 rounded-md py-2 font-medium"
          disabled={!stripe || !clientSecret || totalPrice < 1}
        >
          Pay ${totalPrice.toFixed(2)}
        </button>
      </form>

      {/* Feedback Messages */}
      {transaction && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
          <p>
            <strong>Payment Successful!</strong>
          </p>
          <p>
            Transaction ID: <span className="font-mono">{transaction}</span>
          </p>
        </div>
      )}
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-md">
          <p>
            <strong>Payment Failed:</strong> {error}
          </p>
        </div>
      )}

      {/* Additional Information */}
      <div className="mt-6 text-gray-600 text-sm">
        <p>
          <strong>Need Help?</strong> Contact our{" "}
          <a href="/support" className="text-blue-600 hover:underline">
            support team
          </a>{" "}
          for assistance.
        </p>
        <p className="mt-2">
          Your payment details are encrypted and securely processed.
        </p>
      </div>
    </div>
  );
};

export default CheckOutForm;
