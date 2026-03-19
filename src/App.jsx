import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import Menu from "./pages/Menu.jsx";
import NotFound from "./pages/NotFound.jsx";
import OrderForm from "./sections/OrderForm.jsx";
import OurDrinks from "./sections/OurDrinks.jsx";
import OurFoods from "./Sections/OurFoods.jsx";
import OurSnacks from "./sections/OurSnacks.jsx";
import Receipt from "./sections/Receipt.jsx";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptData, setReceiptData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Check user's preferred color scheme
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setDarkMode(prefersDark);
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    setShowOrderForm(true);
    setShowReceipt(false);
  };

  const updateCartQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const handlePlaceOrder = (customerInfo) => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    setReceiptData({
      customerName: customerInfo.name,
      customerPhone: customerInfo.phone,
      items: cart,
      total: total,
    });
    setShowOrderForm(false);
    setShowReceipt(true);
    setCart([]);
  };

  const handleCloseOrderForm = () => {
    setShowOrderForm(false);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleNewOrder = () => {
    setShowReceipt(false);
    setReceiptData(null);
    setCart([]);
  };

  return (
    <Router>
      <Layout
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        cart={cart}
        showOrderForm={showOrderForm}
        setShowOrderForm={setShowOrderForm}
      >
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="/menu"
            element={<Menu darkMode={darkMode} isStandalone />}
          />
          <Route
            path="/menu/drinks"
            element={<OurDrinks addToCart={addToCart} darkMode={darkMode} />}
          />
          <Route
            path="/menu/snacks"
            element={<OurSnacks addToCart={addToCart} darkMode={darkMode} />}
          />
          <Route
            path="/menu/foods"
            element={<OurFoods addToCart={addToCart} darkMode={darkMode} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {showOrderForm && (
          <OrderForm
            cartItems={cart}
            onUpdateQuantity={updateCartQuantity}
            onPlaceOrder={handlePlaceOrder}
            onClear={handleClearCart}
            onClose={handleCloseOrderForm}
            darkMode={darkMode}
          />
        )}

        {showReceipt && receiptData && (
          <Receipt
            customerName={receiptData.customerName}
            customerPhone={receiptData.customerPhone}
            items={receiptData.items}
            total={receiptData.total}
            onNewOrder={handleNewOrder}
            darkMode={darkMode}
          />
        )}
      </Layout>
    </Router>
  );
};

export default App;
