import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // 🔧 EDIT HERE: Replace with your actual WhatsApp number
    // Format: Country code + phone number (no spaces, dashes, or plus sign)
    // Example: '212682575642' for Morocco (+212 682575642)
    const phoneNumber = '212682575642';
    
    // 🔧 EDIT HERE: Customize the pre-filled message
    const message = 'Hello! I need help with my order.';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Log the URL for debugging (remove in production)
    console.log('WhatsApp URL:', whatsappUrl);
    console.log('Opening WhatsApp with number:', phoneNumber);
    console.log('Pre-filled message:', message);
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      className="fixed bottom-6 right-6 bg-black text-white w-14 h-14 rounded-full flex justify-center items-center shadow-lg hover:bg-green-600 transition-all duration-300 ease-out group z-50 hover:scale-105 active:scale-95"
      aria-label="Chat on WhatsApp"
      onClick={handleWhatsAppClick}
    >
      {/* Notification Badge */}
      <div className="absolute -right-1 -top-1 z-10">
        <div className="flex h-6 w-6 items-center justify-center">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"
          ></span>
          <span
            className="relative inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white font-custom"
          >
            1
          </span>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <FaWhatsapp className="w-7 h-7" />

      {/* Pulsing Border */}
      <span
        className="absolute inset-0 rounded-full border-4 border-white/30 scale-100 animate-pulse"
      ></span>

      {/* Tooltip */}
      <div
        className="absolute right-full mr-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
      >
        <div className="bg-black text-white text-sm px-3 py-1 font-custom">
          Do you need help?
        </div>
        <div
          className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-black"
        ></div>
      </div>
    </button>
  );
};

export default WhatsAppButton; 