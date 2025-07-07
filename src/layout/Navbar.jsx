import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingBasketLine } from 'react-icons/ri';
import FreeShippingBar from '../components/FreeShippingBar';

// Cart context for global state
const CartContext = React.createContext({ cartItems: [], cartCount: 0, addToCart: () => {}, setCartItems: () => {} });
export const useCart = () => useContext(CartContext);

const Navbar = () => {
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <FreeShippingBar />
      <nav className={`fixed top-6 sm:top-7 md:top-8 left-0 w-full z-50 border-b border-black/10 shadow-sm transition-colors duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mr-4">
              {/* Placeholder for logo, update src later */}
              <span className="text-white text-xl sm:text-2xl font-bold font-custom">PK</span>
            </div>
          </div>

          {/* Desktop Nav Links + Cart */}
          <div className="hidden lg:flex items-center gap-10 ml-auto">
            <NavLink to="/" label="Home" />
            <NavLink to="/shop" label="Store" />
            <NavLink to="/about" label="About Us" />
            <NavLink to="/contact" label="Contact Us" />
            <Link to="/cart" className="relative flex items-center group ml-8">
              <RiShoppingBasketLine className="text-2xl text-black" />
              <span className="ml-2 text-black font-custom font-bold">({cartCount})</span>
            </Link>
          </div>

          {/* Mobile Cart Icon */}
          <div className="lg:hidden flex items-center">
            <Link to="/cart" className="relative flex items-center group mr-4">
              <RiShoppingBasketLine className="text-xl sm:text-2xl text-black" />
              <span className="ml-2 text-black font-custom font-bold text-sm sm:text-base">({cartCount})</span>
            </Link>
            
            {/* Mobile Hamburger Menu */}
            <label className="flex flex-col gap-2 w-8 cursor-pointer">
              <input 
                className="peer hidden" 
                type="checkbox" 
                checked={mobileMenuOpen} 
                onChange={toggleMobileMenu} 
              />
              <div
                className={`rounded-2xl h-[3px] w-1/2 bg-black duration-500 transition-all origin-right ${
                  mobileMenuOpen ? 'rotate-[225deg] -translate-x-[12px] -translate-y-[1px]' : ''
                }`}
              ></div>
              <div
                className={`rounded-2xl h-[3px] w-full bg-black duration-500 transition-all ${
                  mobileMenuOpen ? '-rotate-45' : ''
                }`}
              ></div>
              <div
                className={`rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end transition-all origin-left ${
                  mobileMenuOpen ? 'rotate-[225deg] translate-x-[12px] translate-y-[1px]' : ''
                }`}
              ></div>
            </label>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-black/10 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <MobileNavLink to="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink to="/shop" label="Store" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink to="/about" label="About Us" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink to="/contact" label="Contact Us" onClick={() => setMobileMenuOpen(false)} />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="relative px-3 py-2 text-black font-custom font-semibold text-lg transition-colors duration-200 hover:text-black focus:text-black group"
  >
    <span>{label}</span>
    {/* Bottom hover underline effect */}
    <span className="absolute left-0 bottom-0 w-full h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom" />
  </Link>
);

const MobileNavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-3 py-3 text-black font-custom font-semibold text-lg transition-colors duration-200 hover:bg-black/5 rounded-lg"
  >
    {label}
  </Link>
);

export { CartContext };
export default Navbar;