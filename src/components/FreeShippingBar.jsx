import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const marqueeText = [
  'Free shipping on all orders!',
  '10% off your first purchase!',
  'Secure payment & easy returns',
  'Fast delivery across Morocco',
];

const buildMarquee = () =>
  marqueeText.map((t, i) => (
    <span key={i} className="mx-2 sm:mx-4 md:mx-6 lg:mx-8">
      {t}
      {i !== marqueeText.length - 1 && <span className="mx-2 sm:mx-4 md:mx-6 lg:mx-8">|</span>}
    </span>
  ));

const FreeShippingBar = () => {
  const controls = useAnimation();
  const marqueeRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setTextWidth(marqueeRef.current.scrollWidth / 2); // since we render two copies
    }
  }, []);

  useEffect(() => {
    if (textWidth > 0) {
      controls.start({
        x: [0, -textWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        },
      });
    }
  }, [controls, textWidth]);

  return (
    <div className="fixed top-0 left-0 w-full z-[60] bg-black h-6 sm:h-7 md:h-8 flex items-center overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap min-w-full"
        animate={controls}
        initial={{ x: 0 }}
        ref={marqueeRef}
        style={{ willChange: 'transform' }}
      >
        <div className="flex text-white font-custom font-semibold text-xs sm:text-sm md:text-base lg:text-lg tracking-wide">
          {buildMarquee()}
        </div>
        <div className="flex text-white font-custom font-semibold text-xs sm:text-sm md:text-base lg:text-lg tracking-wide">
          {buildMarquee()}
        </div>
      </motion.div>
    </div>
  );
};

export default FreeShippingBar; 