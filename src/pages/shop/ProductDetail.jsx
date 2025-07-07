import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../layout/Navbar';
import { productsList } from './shop';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = productsList.find(p => p.id === id);
  const [mainImg, setMainImg] = useState(product.images[0]);
  const [size, setSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);

  if (!product) return <div className="pt-24 sm:pt-28 md:pt-32 text-center font-custom text-2xl">Product not found.</div>;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({ id: product.id, name: product.name, price: product.price, size, qty, image: mainImg });
    navigate('/cart');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black pt-24 sm:pt-28 md:pt-32 px-4">
      {/* Single black container with both sides */}
      <div className="w-[90%] max-w-6xl bg-black border border-white shadow-2xl mb-16">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left side - Image Gallery (50%) */}
          <div className="w-full md:w-1/2 p-8 border-r border-white">
            <div className="flex flex-col md:flex-row gap-8 h-full">
              <div className="flex md:flex-col gap-4 md:gap-2 items-center md:items-start">
                {product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={product.name + ' thumbnail'}
                    className={`w-16 h-16 object-cover border cursor-pointer ${mainImg === img ? 'border-white' : 'border-white/30'}`}
                    onClick={() => setMainImg(img)}
                  />
                ))}
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img src={mainImg} alt={product.name} className="w-full max-w-md h-96 object-cover border border-white/10 bg-white" />
              </div>
            </div>
          </div>
          
          {/* Right side - Product Details (50%) */}
          <div className="w-full md:w-1/2 p-8">
            <form onSubmit={handleAddToCart} className="flex flex-col items-center md:items-start h-full">
              <h1 className="text-4xl font-custom font-extrabold text-white mb-2 text-left tracking-wide uppercase">{product.name}</h1>
              <div className="mb-4 font-custom text-2xl font-bold text-red-600">{product.price.toFixed(2)} MAD</div>
              <p className="mb-6 font-custom text-gray-300 text-left">{product.description}</p>
              <div className="mb-4 flex gap-4 items-center w-full">
                <label className="font-custom text-white">Size:</label>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map(s => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-4 py-2 border font-custom text-lg ${size === s ? 'bg-white text-black border-white' : 'bg-black text-white border-white/30'} transition-colors`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4 flex gap-4 items-center w-full">
                <label className="font-custom text-white">Qty:</label>
                <input type="number" min={1} value={qty} onChange={e => setQty(Number(e.target.value))} className="font-custom text-white px-3 py-2 border border-white/20 focus:border-white outline-none w-20" />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-white text-black font-custom font-bold border border-white hover:bg-black hover:text-white transition-colors duration-200 text-lg shadow-md mt-6"
              >
                Add to Cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 