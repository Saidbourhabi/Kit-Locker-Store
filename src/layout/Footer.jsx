import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegCopyright, FaInstagram, FaFacebookF, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white py-8 border-t border-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="w-full h-px bg-white/10 mb-6" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2 text-lg font-custom font-bold tracking-wide mb-2 md:mb-0">
                        <FaRegCopyright className="text-xl opacity-80" />
                        <span>PK Roster {new Date().getFullYear()}</span>
                    </div>
                    <div className="flex gap-6 text-base font-custom font-medium">
                        <Link to="/" className="hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200">Home</Link>
                        <Link to="/shop" className="hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200">Store</Link>
                        <Link to="/about" className="hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200">About</Link>
                        <Link to="/contact" className="hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200">Contact</Link>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
                    <div className="text-sm font-custom text-white/80">Open: 9:00 AM — 10:00 PM (Mon-Sun)</div>
                    <div className="flex gap-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/90 transition-colors duration-200"><FaInstagram className="text-xl" /></a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/90 transition-colors duration-200"><FaFacebookF className="text-xl" /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/90 transition-colors duration-200"><FaTwitter className="text-xl" /></a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/90 transition-colors duration-200"><FaTiktok className="text-xl" /></a>
                    </div>
                </div>
                <div className="text-xs font-custom text-white/60 text-center mt-2">All rights reserved. &copy; {new Date().getFullYear()} PK Roster</div>
            </div>
        </footer>
    );
};

export default Footer;