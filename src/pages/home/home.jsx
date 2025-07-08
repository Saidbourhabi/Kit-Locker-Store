import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaCheckCircle, FaTruck, FaHeadset, FaChevronDown } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';
import { BsTwitterX } from 'react-icons/bs';
import CircularText from '../../components/CircularText';
import { productsList as products } from '../shop/shop';
import { useCart } from '../../layout/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper as SwiperTestimonials, SwiperSlide as SwiperSlideTestimonials } from 'swiper/react';
import { Autoplay, Navigation as NavigationTestimonials } from 'swiper/modules';

// Import jersey images
import manunite from '../../assets/images/manunited.jpg';
import { FaWhatsapp } from 'react-icons/fa';

const FAQS = [
{
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards, PayPal, and cash on delivery for local orders.'
},
{
    question: 'How long does shipping take?',
    answer: 'Shipping usually takes 2-5 business days within Morocco. International shipping times may vary.'
},
{
    question: 'When will my order ship?',
    answer: 'Orders are processed within 24 hours and shipped the next business day.'
}
];

// Testimonials data (edit here)
const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    location: 'Fez, Morocco',
    review: 'Absolutely love my new jersey! The quality is top-notch and delivery was super fast. Highly recommend ProKits!'
  },
  {
    name: 'Omar B.',
    location: 'Casablanca, Morocco',
    review: 'Great customer service and authentic products. Will definitely order again.'
  },
  {
    name: 'Lina K.',
    location: 'Rabat, Morocco',
    review: 'The best place to get official team jerseys in Morocco. 5 stars!'
  },
  {
    name: 'Youssef T.',
    location: 'Marrakech, Morocco',
    review: 'Easy checkout, fast shipping, and the jersey fits perfectly. Thank you!'
  },
];

const Home = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const circularTextRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(null);
    const { addToCart } = useCart();
    const sectionHeadlineGroups = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        // GSAP animations
        const tl = gsap.timeline();

        // Animate hero section
        tl.fromTo(heroRef.current, 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        )
        .fromTo(textRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
            "-=0.5"
        )
        .fromTo(imageRef.current,
            { opacity: 0, x: 50, scale: 0.9 },
            { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power2.out" },
            "-=0.6"
        )
        .fromTo(circularTextRef.current,
            { opacity: 0, rotation: -180 },
            { opacity: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" },
            "-=0.3"
        );

        // Animate section headline groups (accent line + headline)
        sectionHeadlineGroups.forEach((ref) => {
            if (ref.current) {
                gsap.fromTo(ref.current,
                    { x: -80, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ref.current,
                            start: "top 80%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            }
        });

        // Hover animations for buttons
        const buttons = document.querySelectorAll('.hero-btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
            });
        });

        return () => {
            // Cleanup
            buttons.forEach(btn => {
                btn.removeEventListener('mouseenter', () => {});
                btn.removeEventListener('mouseleave', () => {});
            });
        };
    }, []);

    return (
        <div className="min-h-screen bg-black pt-24 sm:pt-28 md:pt-32 px-4 flex flex-col items-center justify-center overflow-x-hidden">
            {/* Main Hero Container */}
            <div ref={heroRef} className="w-[90%] max-w-6xl bg-black mb-16 relative px-2 sm:px-8">
                {/* Circular Text in Corner */}
                <div ref={circularTextRef} className="absolute top-8 right-8 z-40 hidden lg:block">
                    <CircularText
                        text="THE*KIT*LOCKER*"
                        onHover="speedUp"
                        spinDuration={25}
                        className="w-32 h-32"
                    />
                </div>

                <div className="flex flex-col lg:flex-row h-full">
                    {/* Left Side - Welcome Text */}
                    <div ref={textRef} className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-custom font-bold text-white mb-6">
                                Welcome to
                                <span className="block text-green-500">ProKits</span>
                            </h1>
                            
                            <p className="text-lg sm:text-xl text-white/80 font-custom mb-8 leading-relaxed">
                                Discover the finest collection of authentic sports jerseys. 
                                From legendary clubs to national teams, we bring you premium 
                                quality merchandise that celebrates your passion for the game.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link 
                                    to="/shop" 
                                    className="hero-btn px-8 py-3 bg-white text-black font-custom font-bold border border-white hover:bg-black hover:text-white transition-colors duration-200 text-center"
                                >
                                    Shop Now
                                </Link>
                                <Link 
                                    to="/about" 
                                    className="hero-btn px-8 py-3 bg-transparent text-white font-custom font-bold border border-white hover:bg-white hover:text-black transition-colors duration-200 text-center"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Image */}
                    <div ref={imageRef} className="w-full lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
                        <div className="relative w-full max-w-md">
                            <motion.img 
                    src={manunite} 
                                alt="Manchester United Jersey" 
                                className="w-full h-auto object-cover border border-white shadow-2xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Horizontal line */}
            <div className="w-[90%] max-w-6xl border-t border-white/20 my-8" />

            {/* Carousel Section */}
            <div className="w-[90%] max-w-6xl bg-black mb-16 py-12 px-2 sm:px-8">
                <div ref={sectionHeadlineGroups[0]} className="flex items-center mb-8 opacity-0">
                    <div className="h-10 w-1 bg-white mr-4 rounded" />
                    <h2 className="text-3xl sm:text-4xl font-custom font-bold text-white">Featured Jerseys</h2>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={32}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    navigation={{
                        nextEl: '.swiper-next-btn',
                        prevEl: '.swiper-prev-btn',
                    }}
                    className="w-full"
                >
                    {/* 
                      Carousel Cards Customization Guide:

                      - To change the number of cards shown:
                          .slice(0, 6)
                          // Change 6 to any number you want to show more or fewer cards

                      - To change which category of products appears:
                          .filter(p => p.category === 'teams')
                          // Change 'teams' to another category, e.g. 'international'
                          // Remove this filter to show all products

                      - To show specific products by ID:
                          .filter(p => ['jersey-1', 'jersey-5'].includes(p.id))
                          // Replace the array with the IDs you want

                      - To change what clicking the product name does:
                          <Link to={`/product/${product.id}`}>...</Link>
                          // Change the route or make the whole card clickable if you want

                      - To change the Add to Cart button behavior:
                          // Edit the onSubmit handler or button as needed

                      - To change the card style:
                          // Edit the className values in the form and its children

                      - To change the product info shown (name, price, etc.):
                          // Edit the JSX inside the card

                      - To change the carousel navigation:
                          // Edit the Swiper settings or the Prev/Next button code below the Swiper

                      // If you need more help, just ask!
                    */}
                    {products
                    .filter(p => p.category === 'teams') // Change 'teams' to another category if needed
                    .slice(0, 6) // Change 6 to show more or fewer cards
                    .map(product => (
                        <SwiperSlide key={product.id} className="flex justify-center">
                            <form onSubmit={e => { e.preventDefault(); addToCart({ id: product.id, name: product.name, price: product.price, size: 'M', qty: 1, image: product.images[0] }); }} className="w-full max-w-xs h-[480px] bg-white shadow-2xl flex flex-col items-center p-0 overflow-hidden border border-black/10 mx-auto">
                                <div className="w-full h-64 bg-black flex items-center justify-center overflow-hidden">
                                    <img src={product.images[0]} alt={product.name} className="object-cover object-center w-full h-full" />
                                </div>
                                <div className="w-full flex flex-col items-center px-8 py-6 flex-1">
                                    <h2 className="text-2xl md:text-3xl font-custom font-extrabold text-black mb-2 text-center tracking-wide uppercase">
                                        <Link to={`/product/${product.id}`} className="hover:underline hover:text-red-600 transition-colors duration-200 focus:outline-none focus:underline cursor-pointer">{product.name}</Link>
                                    </h2>
                                    <p className="mb-4 font-custom text-gray-700 text-center">{product.description}</p>
                                    <div className="mb-4 font-custom text-2xl font-bold text-red-600">{product.price.toFixed(2)} MAD</div>
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-black text-white font-custom font-bold border border-black hover:bg-white hover:text-black transition-colors duration-200 text-lg shadow-md"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </form>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Navigation Buttons */}
                <div className="flex justify-center gap-8 mt-8">
                    <button className="swiper-prev-btn px-6 py-2 bg-white text-black font-custom font-bold border border-white hover:bg-black hover:text-white transition-colors duration-200">Prev</button>
                    <button className="swiper-next-btn px-6 py-2 bg-white text-black font-custom font-bold border border-white hover:bg-black hover:text-white transition-colors duration-200">Next</button>
                </div>
            </div>

            {/* Horizontal line */}
            <div className="w-[90%] max-w-6xl border-t border-white/20 my-8" />

            {/* Additional Features Section */}
            <div className="w-[90%] max-w-6xl bg-black mb-16 px-2 sm:px-8">
                <div className="p-8">
                    <div ref={sectionHeadlineGroups[1]} className="flex items-center mb-8 opacity-0">
                        <div className="h-10 w-1 bg-white mr-4 rounded" />
                        <h2 className="text-3xl font-custom font-bold text-white">Why Choose ProKits?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaCheckCircle className="text-2xl text-black" />
                            </div>
                            <h3 className="text-xl font-custom font-bold text-white mb-2">Authentic Quality</h3>
                            <p className="text-white/80 font-custom">Official licensed merchandise from top brands</p>
                        </motion.div>
                        
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaTruck className="text-2xl text-black" />
                            </div>
                            <h3 className="text-xl font-custom font-bold text-white mb-2">Fast Delivery</h3>
                            <p className="text-white/80 font-custom">Quick shipping across Morocco</p>
                        </motion.div>
                        
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaHeadset className="text-2xl text-black" />
                            </div>
                            <h3 className="text-xl font-custom font-bold text-white mb-2">24/7 Support</h3>
                            <p className="text-white/80 font-custom">Always here to help you</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Horizontal line */}
            <div className="w-[90%] max-w-6xl border-t border-white/20 my-8" />

            {/* FAQ Section */}
            <div className="w-[90%] max-w-6xl bg-black mb-16 px-2 sm:px-8">
                <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <span className="bg-white/10 text-white font-custom font-bold px-4 py-2 mb-4 w-fit">FAQS</span>
                        <div ref={sectionHeadlineGroups[2]} className="flex items-center mb-8 opacity-0">
                            <div className="h-10 w-1 bg-white mr-4 rounded" />
                            <h2 className="text-3xl sm:text-4xl font-custom font-bold text-white">Frequently Asked Questions</h2>
                        </div>
                        <p className="text-white/70 font-custom mb-6">If you didn't find an answer to your question here, you can contact us</p>
                        <Link to="/contact" className="w-fit px-8 py-3 bg-red-600 text-white font-custom font-bold border border-white hover:bg-black hover:text-white transition-colors duration-200 text-center rounded-none">Contact Us</Link>
                    </div>
                    {/* Right Side: Accordion */}
                    <div className="md:w-1/2 flex flex-col gap-4">
                        {FAQS.map((faq, idx) => (
                            <div key={idx} className="border-b border-white/20">
                                <button
                                    className="w-full flex justify-between items-center py-5 px-4 bg-white/5 hover:bg-white/10 transition-colors duration-200 font-custom text-lg text-white text-left focus:outline-none"
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                >
                                    <span>{faq.question}</span>
                                    <span className={`ml-4 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                                        <FaChevronDown className="text-xl" />
                                    </span>
                                </button>
                                {openIndex === idx && (
                                    <div className="px-4 pb-5 text-white/80 font-custom animate-fade-in">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Horizontal line */}
            <div className="w-[90%] max-w-6xl border-t border-white/20 my-8" />

            {/* Testimonials Section */}
            <div className="w-[90%] max-w-6xl bg-black mb-16 py-12 px-2 sm:px-8">
                <div ref={sectionHeadlineGroups[3]} className="flex items-center mb-8 opacity-0">
                    <div className="h-10 w-1 bg-white mr-4 rounded" />
                    <h2 className="text-3xl sm:text-4xl font-custom font-bold text-white">Testimonials</h2>
                </div>
                <SwiperTestimonials
                    modules={[Autoplay, NavigationTestimonials]}
                    spaceBetween={32}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                    }}
                    navigation={{
                        nextEl: '.swiper-next-testimonial',
                        prevEl: '.swiper-prev-testimonial',
                    }}
                    // fales its on true is off 
                    autoplay={{ delay: 7000, disableOnInteraction: false }}
                    className="w-full"
                >
                    {TESTIMONIALS.map((t, idx) => (
                        <SwiperSlideTestimonials key={idx} className="flex justify-center">
                            <div className="w-full max-w-md bg-white shadow-2xl flex flex-col items-center p-8 border border-black/10 mx-auto">
                                <h3 className="font-custom font-bold text-xl text-black mb-1 text-center">{t.name}</h3>
                                <div className="font-custom text-gray-500 text-sm mb-3 text-center">{t.location}</div>
                                <p className="font-custom text-black text-center text-lg">“{t.review}”</p>
                            </div>
                        </SwiperSlideTestimonials>
                    ))}
                </SwiperTestimonials>
                {/* Navigation Buttons */}
                <div className="flex justify-center gap-8 mt-8">
                    <button className="swiper-prev-testimonial px-6 py-2 bg-white text-black font-custom font-bold border border-white hover:bg-black hover:text-white transition-colors duration-200">Prev</button>
                    <button className="swiper-next-testimonial px-6 py-2 bg-white text-black font-custom font-bold border border-white hover:bg-black hover:text-white transition-colors duration-200">Next</button>
                </div>
            </div>

            {/* Horizontal line */}
            <div className="w-[90%] max-w-6xl border-t border-white/20 my-8" />

            {/* Follow Us Section */}
            <div className="w-[90%] max-w-6xl bg-black mb-16 px-2 sm:px-8">
                <div className="p-8 flex flex-col items-center">
                    <div ref={sectionHeadlineGroups[4]} className="flex items-center mb-8 opacity-0">
                        <div className="h-10 w-1 bg-white mr-4 rounded" />
                        <h2 className="text-2xl font-custom font-bold text-white">Follow Us</h2>
                    </div>
                    <div className="flex gap-6 justify-center">
                        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors duration-200 text-3xl font-custom" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors duration-200 text-3xl font-custom" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://wa.me/212682575642" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition-colors duration-200 text-3xl font-custom" aria-label="WhatsApp">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.threads.net/@yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors duration-200 text-3xl font-custom" aria-label="Threads">
                            <SiThreads />
                        </a>
                        <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-200 text-3xl font-custom" aria-label="X (Twitter)">
                            <BsTwitterX />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;