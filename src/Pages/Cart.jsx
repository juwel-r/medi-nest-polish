import React from "react";
import useCart from "../Hooks/useCart";
import SectionHeader from "../components/SectionHeader";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { showAlert, showToast } from "../Utils/alerts";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const { userInfo } = useAuth();

  const handleDelete = (id) => {
    showAlert({
      title: "Are you sure!",
      text: "You can't be able to revert it",
      icon: "warning",
      confirmButtonText: "Yes, Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/cart/${id}`);
          if (res.data.deletedCount > 0) {
            console.log(res.data);
            showToast("Item has been Deleted!");
            refetch();
          } else {
            showAlert({
              title: "Something went wrong!",
              text: "Something is wrong like internal issue.",
              icon: "error",
              confirmButtonText: "Try Again",
            });
          }
        } catch (error) {
          showAlert({
            title: "Something went wrong!",
            text: error,
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      }
    });
  };

  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  //increase or decrease quality
  const handleQuantity = async (id, value) => {
    try {
      const res = await axiosSecure.patch(`/cart/${id}`, { value });
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        showToast("Quantity Updated.");
        refetch();
      } else {
        showAlert({
          title: "Something went wrong!",
          text: "Something is wrong like internal issue.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      showAlert({
        title: "Something went wrong!",
        text: error,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  //   delete all cartItems
  const handleDeleteAll = () => {
    showAlert({
      title: "Delete All!",
      text: "Are you sure to delete all cart items!",
      icon: "warning",
      confirmButtonText: "Yes, Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/cart?email=${userInfo.email}`);
          if (res.data.deletedCount > 0) {
            console.log(res.data);
            showToast("You Cart is now empty!");
            refetch();
          } else {
            showAlert({
              title: "Something went wrong!",
              text: "Something is wrong like internal issue.",
              icon: "error",
              confirmButtonText: "Try Again",
            });
          }
        } catch (error) {
          showAlert({
            title: "Something went wrong!",
            text: error,
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      }
    });
  };

  return (
    <div className="">
      {/* Header */}
      <div className="text-center mb-8">
        <SectionHeader
          title={"Your Shopping Cart"}
          subTitle={"Review your selected items and manage your cart."}
        ></SectionHeader>
      </div>

      {/* Cart Items */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="grid grid-cols-2 md:flex items-center justify-between gap-4 bg-gray-100 p-4 rounded-lg shadow"
                >
                  {/* Photo ===section */}
                  <div className="w-40 border h-full">
                    <img
                      className="w-full h-full rounded-md"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  {/* Item Details ===section */}
                  <div className="md:justify-self-start ">
                    <h2 className="text-lg font-bold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-500">{item.company}</p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Price:</span> $
                      {item.price} per unit
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Total:</span> $
                      {item.price * item.quantity}
                    </p>
                  </div>

                  {/* Quantity Controls ===section */}
                  <div className="flex items-center gap-2">
                    <button
                      disabled={item.quantity === 1}
                      onClick={() => handleQuantity(item._id, -1)}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={`${
                        item.quantity === 1 && "Minimum Quantity Limit Reached!"
                      }`}
                      className="px-3 py-1 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-white rounded-lg border text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantity(item._id, 1)}
                      className="px-3 py-1 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button ===section */}
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-8 flex justify-between items-center">
              {/* Clear All */}
              <button
                onClick={handleDeleteAll}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Clear All Items
              </button>

              {/* Total Cost */}
              <div className="flex items-center gap-4">
                <p className="text-xl font-bold">
                  Subtotal: <span className="text-blue-600">${totalCost}</span>
                </p>
                <Link to="/checkout"><button className="green-button">
                  Checkout ({cartItems.length})
                </button></Link>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            Your cart is currently empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
