import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Navbar, { CartContext } from './layout/Navbar';
import Footer from './layout/Footer';
import Contact from './pages/contact/contact';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import About from './pages/about/about';
import ProductDetail from './pages/shop/ProductDetail';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  // Load cart from localStorage if available
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  });
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const addToCart = (item) => {
    setCartItems((prev) => {
      const found = prev.find((i) => i.id === item.id && i.size === item.size);
      if (found) {
        return prev.map((i) =>
          i.id === item.id && i.size === item.size ? { ...i, qty: i.qty + item.qty } : i
        );
      }
      return [...prev, item];
    });
  };

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, setCartItems }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </CartContext.Provider>
  );
};

export default App;