import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef();
  const leftRef = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          stagger: 0.18,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: leftRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setError(null);
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID', 
      form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        setSent(true);
        setSending(false);
      }, (error) => {
        setError('Failed to send. Please try again.');
        setSending(false);
      });
  };

  return (
    <div className="min-h-screen bg-black pt-24 sm:pt-28 md:pt-32 px-4 flex flex-col items-center justify-center">
      {/* Single black container with both sides */}
      <div className="w-[90%] max-w-6xl bg-black border border-white shadow-2xl mb-16">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left side - Heading and info (50%) */}
          <div ref={leftRef} className="w-full md:w-1/2 p-8 border-r border-white">
            <div className="flex flex-col items-center md:items-start justify-center h-full gap-6">
              <h1 className="text-6xl md:text-8xl font-extrabold leading-none uppercase text-center md:text-left font-custom text-white">
                CONTACT US
              </h1>
              <p className="font-custom text-lg text-white max-w-md text-center md:text-left">
                Contact us if you have any questions and we will get back to you as soon as possible. You can also check our help and FAQ section.
              </p>
            </div>
          </div>
          
          {/* Right side - Contact Form (50%) */}
          <div className="w-full md:w-1/2 p-8">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center md:items-start h-full" autoComplete="off">
              <div className="w-full mb-4">
                <label className="block mb-2 font-custom font-semibold text-white" htmlFor="name">Full Name</label>
                <input className="w-full px-4 py-2 bg-black border border-white font-custom text-white placeholder-white focus:outline-none focus:border-white" type="text" id="name" name="user_name" placeholder="Full Name" required />
              </div>
              <div className="w-full mb-4">
                <label className="block mb-2 font-custom font-semibold text-white" htmlFor="email">Email</label>
                <input className="w-full px-4 py-2 bg-black border border-white font-custom text-white placeholder-white focus:outline-none focus:border-white" type="email" id="email" name="user_email" placeholder="Email Address" required />
              </div>
              <div className="w-full mb-4">
                <label className="block mb-2 font-custom font-semibold text-white" htmlFor="subject">Subject</label>
                <input className="w-full px-4 py-2 bg-black border border-white font-custom text-white placeholder-white focus:outline-none focus:border-white" type="text" id="subject" name="subject" placeholder="Subject" required />
              </div>
              <div className="w-full mb-6">
                <label className="block mb-2 font-custom font-semibold text-white" htmlFor="message">Message</label>
                <textarea className="w-full px-4 py-2 bg-black border border-white font-custom text-white placeholder-white focus:outline-none focus:border-white" id="message" name="message" rows="5" placeholder="Type your message here..." required></textarea>
              </div>
              <button type="submit" disabled={sending} className="w-full py-3 font-custom font-bold transition-colors duration-200 bg-white text-black border border-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                {sending ? 'Sending...' : 'SEND'}
              </button>
              {sent && <p className="mt-4 text-green-400 font-custom">Message sent successfully!</p>}
              {error && <p className="mt-4 text-red-400 font-custom">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
