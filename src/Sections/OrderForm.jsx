import React, { useState, useEffect } from "react";

const OrderForm = ({
  cartItems,
  onUpdateQuantity,
  onPlaceOrder,
  onClear,
  onClose,
  darkMode,
}) => {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customerName.trim()) {
      setFormError("Please enter your name.");
      return;
    }
    if (!customerPhone.trim()) {
      setFormError("Please enter your phone number.");
      return;
    }

    setFormError("");
    onPlaceOrder({ name: customerName, phone: customerPhone });
  };

  const handleClear = () => {
    setFormError("");
    setCustomerName("");
    setCustomerPhone("");
    onClear();
  };

  return (
    <div
      className={`fixed inset-0 ${
        darkMode ? "bg-black/30" : "bg-white/30"
      } backdrop-blur bg-opacity-50 flex justify-center items-center p-4 z-50`}
    >
      <div
        className={`rounded-lg shadow-xl w-full max-w-lg p-6 relative animate-fade-in-up ${
          darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
          Your Order
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        ) : (
          <>
            <ul className="mb-6 max-h-60 overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex-1">
                    <span className="font-semibold text-gray-800">
                      {item.name}
                    </span>
                    <span className="text-sm text-gray-500 block">
                      ${item.price.toFixed(2)} each
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                      className="bg-red-200 text-red-700 px-2 py-1 rounded-md text-sm hover:bg-red-300 transition"
                    >
                      -
                    </button>
                    <span className="font-medium text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                      className="bg-green-200 text-green-700 px-2 py-1 rounded-md text-sm hover:bg-green-300 transition"
                    >
                      +
                    </button>
                  </div>
                  <span className={`font-semibold w-20 text-right ${darkMode ? "text-white" : "text-black"}`}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-4">
              <span className="text-xl font-bold text-amber-900">Total:</span>
              <span className="text-2xl font-extrabold text-amber-700">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
              {formError && (
                <p className="text-red-600 text-sm mb-4 text-center">
                  {formError}
                </p>
              )}
              <div className="mb-4">
                <label
                  htmlFor="customerName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Name <span className="text-red-500">*</span>: {}
                </label>
                <input
                  type="text"
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white focus:border-blue-400"
                      : "border-gray-300 text-gray-700 focus:border-blue-500"
                  }`}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="customerPhone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone Number <span className="text-red-500">*</span>: {}
                </label>
                <input
                  type="tel"
                  id="customerPhone"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white focus:border-blue-400"
                      : "border-gray-300 text-gray-700 focus:border-blue-500"
                  }`}
                  placeholder="Your PhoneNumber"
                  required
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleClear}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                >
                  Place Order
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderForm;
