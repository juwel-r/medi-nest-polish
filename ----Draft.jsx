import React from "react";

const CartPage = ({ cartItems, onIncrease, onDecrease, onRemove, onClear }) => {
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Your Shopping Cart</h1>
        <p className="text-gray-600">Review your selected items and manage your cart.</p>
      </div>

      {/* Cart Items */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  
                  className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow"
                >
                  {/* Item Details */}
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.company}</p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Price:</span> ${item.price.toFixed(2)} per unit
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Total:</span> $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onDecrease(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-white rounded-lg border text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onIncrease(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemove(item.id)}
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
                onClick={onClear}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Clear All Items
              </button>

              {/* Total Cost */}
              <p className="text-xl font-bold">
                Total Cost: <span className="text-blue-600">${totalCost.toFixed(2)}</span>
              </p>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 text-lg">Your cart is currently empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
