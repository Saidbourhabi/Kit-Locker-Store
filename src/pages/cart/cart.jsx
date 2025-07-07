import React, { useState } from 'react';
import { useCart } from '../../layout/Navbar';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, setCartItems } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const [showForm, setShowForm] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRemove = (id, size) => {
    setCartItems(cartItems.filter(item => !(item.id === id && item.size === size)));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setError(null);
    const form = e.target;
    const orderDetails = cartItems.map(item => `- ${item.name} (Size: ${item.size}, Qty: ${item.qty}, ${item.price.toFixed(2)} MAD)`).join('\n');
    const templateParams = {
      customer_name: form.name.value,
      customer_email: form.email.value,
      customer_address: form.address.value,
      customer_phone: form.phone.value,
      order: orderDetails,
      total: `${total.toFixed(2)} MAD`,
    };
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setSent(true);
        setSending(false);
      }, () => {
        setError('Failed to send order. Please try again.');
        setSending(false);
      });
  };

  return (
    <div className="min-h-screen bg-black pt-24 sm:pt-28 md:pt-32 px-4 flex flex-col items-center justify-center">
      {/* Main heading */}
      <div className="w-[90%] max-w-6xl mb-8">
        <h1 className="text-4xl font-custom font-bold text-white text-center">Your Cart</h1>
      </div>
      
      {/* Cart content */}
      {cartItems.length === 0 ? (
        <div className="w-[90%] max-w-6xl bg-black border border-white shadow-2xl mb-16">
          <div className="p-8 text-center">
            <p className="text-lg font-custom text-white">Your cart is empty.</p>
            <button onClick={() => navigate('/shop')} className="mt-4 px-6 py-2 bg-white text-black font-custom font-bold border border-white hover:bg-black hover:text-white transition-colors duration-200">Back to Store</button>
          </div>
        </div>
      ) : showForm ? (
        <div className="w-[90%] max-w-6xl bg-black border border-white shadow-2xl mb-16">
          <div className="flex flex-col md:flex-row h-full">
            {/* Left side - Order Items (50%) */}
            <div className="w-full md:w-1/2 p-8 border-r border-white">
              <div className="flex flex-col items-center md:items-start h-full">
                <h2 className="text-3xl font-custom font-bold text-white mb-6">Order Summary</h2>
                <div className="w-full space-y-4">
                  {cartItems.map((item, idx) => (
                    <div key={item.id + item.size} className="flex items-center gap-4 p-4 border border-white/20">
                      {item.image && <img src={item.image} alt="Product" className="w-16 h-16 object-cover border border-white" />}
                      <div className="flex-1">
                        <h3 className="font-custom font-bold text-white">{item.name}</h3>
                        <p className="font-custom text-white/80">Size: {item.size} | Qty: {item.qty}</p>
                        <p className="font-custom text-white/80">{item.price.toFixed(2)} MAD</p>
                      </div>
                      <button type="button" onClick={() => handleRemove(item.id, item.size)} className="px-3 py-1 text-sm font-custom bg-red-600 text-white hover:bg-red-800">Remove</button>
                    </div>
                  ))}
                </div>
                <div className="mt-6 w-full p-4 border border-white/20">
                  <div className="flex justify-between items-center font-custom text-xl text-white">
                    <span>Total:</span>
                    <span className="font-bold">{total.toFixed(2)} MAD</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Checkout Form (50%) */}
            <div className="w-full md:w-1/2 p-8">
              <form onSubmit={handleCheckout} className="flex flex-col items-center md:items-start h-full">
                <h2 className="text-3xl font-custom font-bold text-white mb-6">Order Details</h2>
                <div className="w-full space-y-4">
                  <div>
                    <label className="block mb-2 text-white font-custom" htmlFor="name">Full Name</label>
                    <input className="w-full px-4 py-2 bg-black border border-white text-white placeholder-white focus:outline-none focus:border-white font-custom" type="text" id="name" name="name" placeholder="Full Name" required />
                  </div>
                  <div>
                    <label className="block mb-2 text-white font-custom" htmlFor="email">Email</label>
                    <input className="w-full px-4 py-2 bg-black border border-white text-white placeholder-white focus:outline-none focus:border-white font-custom" type="email" id="email" name="email" placeholder="Email Address" required />
                  </div>
                  <div>
                    <label className="block mb-2 text-white font-custom" htmlFor="address">Address</label>
                    <input className="w-full px-4 py-2 bg-black border border-white text-white placeholder-white focus:outline-none focus:border-white font-custom" type="text" id="address" name="address" placeholder="Delivery Address" required />
                  </div>
                  <div>
                    <label className="block mb-2 text-white font-custom" htmlFor="phone">Phone Number</label>
                    <input className="w-full px-4 py-2 bg-black border border-white text-white placeholder-white focus:outline-none focus:border-white font-custom" type="tel" id="phone" name="phone" placeholder="Phone Number" required />
                  </div>
                </div>
                <button type="submit" disabled={sending} className="w-full py-3 font-bold transition-colors duration-200 bg-white text-black border border-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white mt-6 font-custom">
                  {sending ? 'Sending...' : 'Confirm Order'}
                </button>
                {sent && <p className="mt-4 text-green-400 font-custom">Order sent successfully!</p>}
                {error && <p className="mt-4 text-red-400 font-custom">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[90%] max-w-6xl bg-black border border-white shadow-2xl mb-16">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <button onClick={() => navigate('/shop')} className="px-6 py-2 bg-white text-black font-custom font-bold border border-white hover:bg-black hover:text-white transition-colors duration-200">Back to Store</button>
            </div>
            <table className="w-full mb-6">
              <thead>
                <tr className="border-b border-white">
                  <th className="text-left pb-2 font-custom text-white">Product</th>
                  <th className="text-left pb-2 font-custom text-white">Size</th>
                  <th className="text-left pb-2 font-custom text-white">Qty</th>
                  <th className="text-left pb-2 font-custom text-white">Price</th>
                  <th className="text-left pb-2 font-custom text-white">Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, idx) => (
                  <tr key={item.id + item.size} className="border-b border-white/10">
                    <td className="py-2 font-custom flex items-center gap-2 text-white">
                      {item.image && <img src={item.image} alt="Product" className="w-10 h-10 object-cover border border-white" />}
                      {item.name}
                    </td>
                    <td className="py-2 font-custom text-white">{item.size}</td>
                    <td className="py-2 font-custom text-white">{item.qty}</td>
                    <td className="py-2 font-custom text-white">{item.price.toFixed(2)} MAD</td>
                    <td className="py-2 font-custom text-white">{(item.price * item.qty).toFixed(2)} MAD</td>
                    <td className="py-2 font-custom">
                      <button type="button" onClick={() => handleRemove(item.id, item.size)} className="px-2 py-1 text-xs font-custom bg-red-600 text-white hover:bg-red-800">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center font-custom text-xl text-white">
              <span>Total:</span>
              <span className="font-bold">{total.toFixed(2)} MAD</span>
            </div>
            <button onClick={() => setShowForm(true)} className="mt-8 w-full py-3 bg-white text-black font-custom font-bold border border-white hover:bg-black hover:text-white transition-colors duration-200">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 