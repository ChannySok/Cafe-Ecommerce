import React from "react";

const Receipt = ({
  customerName,
  customerPhone,
  items,
  total,
  onNewOrder,
  darkMode,
}) => {
  const handlePrintAndClose = () => {
    window.print();
    onNewOrder();
  };

  return (
    <div
      id="receipt-container"
      className={`fixed inset-0 ${
        darkMode ? "bg-black/30" : "bg-white/30"
      } backdrop-blur bg-opacity-50 flex justify-center items-center p-4 z-50`}
    >
      <div
        className={`rounded-lg shadow-xl w-full max-w-lg p-8 relative animate-fade-in-up ${
          darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
        }`}
      >
        {}
        <button
          onClick={onNewOrder}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold print:hidden"
        >
          &times;
        </button>
        <h2
          className={`text-3xl font-bold mb-6 text-center ${
            darkMode ? "text-amber-400" : "text-amber-900"
          }`}
        >
          Order Receipt
        </h2>

        <div className="mb-6 text-gray-700">
          <p>
            <strong>Customer Name:</strong> {customerName || "N/A"}
          </p>
          <p>
            <strong>Phone Number:</strong> {customerPhone || "N/A"}
          </p>
        </div>

        <h3 className="text-xl font-bold text-amber-800 mb-4 border-b pb-2">
          Ordered Items:
        </h3>
        <ul className="mb-6 max-h-60 overflow-y-auto pr-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
            >
              <span className="text-gray-700">
                {item.name} (x{item.quantity})
              </span>
              <span className="font-semibold text-gray-900">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-300 pt-4 mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-amber-900">Total:</span>
          <span className="text-3xl font-extrabold text-amber-700">
            ${total.toFixed(2)}
          </span>
        </div>

        <p className="text-center text-green-600 font-semibold text-lg mt-8">
          Thank you for your purchase!
        </p>

        <div className="flex justify-center mt-6 space-x-4 print:hidden">
          <button
            onClick={handlePrintAndClose}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Print Receipt
          </button>
          <button
            onClick={onNewOrder}
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
