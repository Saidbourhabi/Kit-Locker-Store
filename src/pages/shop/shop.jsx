import React, { useState } from 'react';
import { useCart } from '../../layout/Navbar';
import { Link } from 'react-router-dom';
import fcBarcaImg from '../../assets/images/FcBarca.jpg';
import fcBarcaImg2 from '../../assets/images/FcBarca2.jpg';
import fcBarcaImg3 from '../../assets/images/FcBarca3.jpg';
import manUnitedImg from '../../assets/images/manunited.jpg';
import parisImg from '../../assets/images/paris.jpg';
import parisImg2 from '../../assets/images/paris2.jpg';
import parisImg3 from '../../assets/images/paris3.jpg';
import amImg from '../../assets/images/am.jpg';
import amImg2 from '../../assets/images/am2.jpg';
import amImg3 from '../../assets/images/am3.jpg';
import rmImg from '../../assets/images/rm.jpg';
import rmImg2 from '../../assets/images/rm2.jpg';
import portoImg from '../../assets/images/porto.jpg';
import portoImg2 from '../../assets/images/porto2.jpg';
import portoImg3 from '../../assets/images/porto3.jpg';
import ufcImg from '../../assets/images/ufc.jpg';
import ufcImg2 from '../../assets/images/ufc2.jpg';
import ufcImg3 from '../../assets/images/ufc3.jpg';
import westHamImg from '../../assets/images/westHam.jpg';
import westHamImg2 from '../../assets/images/westHam2.jpg';
import westHamImg3 from '../../assets/images/westHam3.jpg';


const products = [
  {
    id: 'jersey-1',
    name: 'FC Barcelona Jersey',
    price: 190,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [fcBarcaImg, fcBarcaImg2, fcBarcaImg3],
    description: 'Official FC Barcelona Jersey - Limited Edition',
    category: 'teams',
  },
  {
    id: 'jersey-2',
    name: 'Manchester United Jersey',
    price: 190,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [manUnitedImg, manUnitedImg, manUnitedImg],
    description: 'Official Manchester United Jersey - 2024 Edition',
    category: 'teams',
  },
  {
    id: 'jersey-3',
    name: 'Morocco Team Jersey',
    price: 210,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [fcBarcaImg, fcBarcaImg2, fcBarcaImg3],
    description: 'Official Morocco Team Jersey - 2024 Edition',
    category: 'international',
  },
  {
    id: 'jersey-4',
    name: 'Real Madrid Jersey',
    price: 200,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [rmImg, rmImg2, rmImg],
    description: 'Official Real Madrid Jersey - 2024 Edition',
    category: 'teams',
  },
  {
    id: 'jersey-5',
    name: 'Chelsea FC Jersey',
    price: 185,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [fcBarcaImg3, fcBarcaImg, fcBarcaImg2],
    description: 'Official Chelsea FC Jersey - 2024 Edition',
    category: 'teams',
  },
  {
    id: 'jersey-6',
    name: 'Argentina Team Jersey',
    price: 220,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [manUnitedImg, fcBarcaImg, fcBarcaImg2],
    description: 'Official Argentina Team Jersey - 2024 Edition',
    category: 'international',
  },
  {
    id: 'jersey-7',
    name: 'Brazil Team Jersey',
    price: 215,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [fcBarcaImg, fcBarcaImg2, fcBarcaImg3],
    description: 'Official Brazil Team Jersey - 2024 Edition',
    category: 'international',
  },
  {
    id: 'jersey-8',
    name: 'Liverpool FC Jersey',
    price: 195,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [fcBarcaImg2, fcBarcaImg3, fcBarcaImg],
    description: 'Official Liverpool FC Jersey - 2024 Edition',
    category: 'teams',
  },
  {
    id: 'jersey-9',
    name: 'Germany Team Jersey',
    price: 210,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [fcBarcaImg3, fcBarcaImg, fcBarcaImg2],
    description: 'Official Germany Team Jersey - 2024 Edition',
    category: 'international',
  },
  {
    id: 'jersey-10',
    name: 'Juventus FC Jersey',
    price: 205,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [manUnitedImg, fcBarcaImg, fcBarcaImg2],
    description: 'Official Juventus FC Jersey - 2024 Edition',
    category: 'teams',
  },
  {
    id: 'jersey-11',
    name: 'France Team Jersey',
    price: 225,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [parisImg, parisImg2, parisImg3],
    description: 'Official France Team Jersey - 2024 Edition',
    category: 'international',
  },
  {
    id: 'jersey-12',
    name: 'AC Milan Jersey',
    price: 198,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [amImg, amImg2, amImg3],
    description: 'Official AC Milan Jersey - 2024 Edition',
    category: 'teams',
  },
  {
    id: 'jersey-13',
    name: 'Portugal Team Jersey',
    price: 218,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [portoImg, portoImg2, portoImg3],
    description: 'Official Portugal Team Jersey - 2024 Edition',
    category: 'international',
  },
  {
    id: 'jersey-14',
    name: 'Tottenham Hotspur Jersey',
    price: 192,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [fcBarcaImg2, fcBarcaImg3, fcBarcaImg],
    description: 'Official Tottenham Hotspur Jersey - 2024 Edition',
    category: 'teams',
  },
  {
    id: 'jersey-15',
    name: 'Netherlands Team Jersey',
    price: 212,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [fcBarcaImg3, fcBarcaImg, fcBarcaImg2],
    description: 'Official Netherlands Team Jersey - 2024 Edition',
    category: 'international',
  },
  {
    id: 'jersey-16',
    name: 'UFC Jersey',
    price: 180,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [ufcImg, ufcImg2, ufcImg3],
    description: 'Official UFC Jersey - 2024 Edition',
    category: 'teams',
  },
  {
    id: 'jersey-17',
    name: 'West Ham Jersey',
    price: 188,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [westHamImg, westHamImg2, westHamImg3],
    description: 'Official West Ham Jersey - 2024 Edition',
    category: 'teams',
  },
  {
    id: 'jersey-18',
    name: 'PSG Jersey',
    price: 195,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [parisImg2, parisImg3, parisImg],
    description: 'Official PSG Jersey - 2024 Edition',
    category: 'teams',
  },
];

export const productsList = products; // For use in ProductDetail

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Teams', value: 'teams' },
  { label: 'International Teams', value: 'international' },
];

const Shop = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProducts = products.filter(p =>
    filter === 'all' ? true : filter === 'international' ? p.category === 'international' : p.category === 'teams'
  );

  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-24 sm:pt-28 md:pt-32 pb-16 px-2">
      {/* Headline */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center mb-10">
        <h1 className="font-custom text-5xl md:text-7xl font-extrabold text-white text-center uppercase pt-15 mb-12">OUR STORE</h1>
      </div>
      {/* Main content: Filter bar left, grid right */}
      <div className="w-full max-w-6xl mx-auto flex flex-row gap-8">
        {/* Filter Bar (vertical, left) */}
        <div className="flex flex-col gap-4 min-w-[180px]">
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-2 font-custom font-bold border-2 transition-colors duration-200 text-lg ${filter === f.value ? 'bg-white text-black border-white' : 'bg-black text-white border-white hover:bg-white hover:text-black'}`}
            >
              {f.label}
            </button>
          ))}
        </div>
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProducts.slice(0, visibleCount).map((product, idx) => (
              <div key={product.id} className="relative h-full flex flex-col">
                <Link to={`/product/${product.id}`} className="block h-full">
                  <ShopCard product={product} addToCart={addToCart} previewOnly />
                </Link>
              </div>
            ))}
          </div>
          {/* View More Button */}
          {visibleCount < filteredProducts.length && (
            <button
              onClick={() => setVisibleCount(c => c + 6)}
              className="mt-12 px-10 py-3 font-custom font-bold bg-white text-black border-2 border-white hover:bg-black hover:text-white transition-colors duration-200 text-xl shadow-lg"
            >
              View More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const ShopCard = ({ product, addToCart, previewOnly }) => {
  // Always use one size (e.g., 'M')
  const size = 'M';
  const [qty, setQty] = useState(1);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({ id: product.id, name: product.name, price: product.price, size, qty, image: product.images[0] });
  };

  return (
    <form onSubmit={handleAddToCart} className="w-full max-w-xs h-[480px] bg-white shadow-2xl flex flex-col items-center p-0 overflow-hidden border border-black/10 mx-auto">
      <div className="w-full h-64 bg-black flex items-center justify-center overflow-hidden">
        <img src={product.images[0]} alt={product.name} className="object-cover object-center w-full h-full" />
      </div>
      <div className="w-full flex flex-col items-center px-8 py-6 flex-1">
        <h2 className="text-2xl md:text-3xl font-custom font-extrabold text-black mb-2 text-center tracking-wide uppercase">{product.name}</h2>
        <p className="mb-4 font-custom text-gray-700 text-center">{product.description}</p>
        <div className="mb-4 font-custom text-2xl font-bold text-black">{product.price.toFixed(2)} MAD</div>
        {!previewOnly && <>
          {/* Only show quantity selector */}
          <div className="mb-4 flex gap-4 items-center justify-center w-full">
            <label className="font-custom text-black">Qty:</label>
            <input type="number" min={1} value={qty} onChange={e => setQty(Number(e.target.value))} className="font-custom text-black px-3 py-2 border border-black/20 focus:border-black outline-none w-20" />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-custom font-bold border border-black hover:bg-white hover:text-black transition-colors duration-200 text-lg shadow-md"
          >
            Add to Cart
          </button>
        </>}
      </div>
    </form>
  );
};

export default Shop;