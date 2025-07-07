import React from 'react';
// Import placeholders for store and owner images (to be updated later)
// import storeImg from '../../assets/images/store.jpg';
// import ownerImg from '../../assets/images/owner.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-black pt-24 sm:pt-28 md:pt-32 px-4 flex flex-col items-center justify-center">
      {/* Single black container with both sides */}
      <div className="w-[90%] max-w-6xl bg-black border border-white shadow-2xl mb-16">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left side - Store Story & Details (50%) */}
          <div className="w-full md:w-1/2 p-8 border-r border-white">
            <div className="flex flex-col items-center md:items-start justify-center h-full gap-6">
              <h1 className="text-6xl md:text-8xl font-extrabold leading-none uppercase text-center md:text-left font-custom text-white">
                ABOUT US
              </h1>
              
              {/* Store Image Placeholder */}
              <div className="w-full h-64 bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-white/60 font-custom">Store Image</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-custom font-bold text-white mb-4">Our Story</h2>
                  <p className="font-custom text-white/90 leading-relaxed">
                    Founded in 2020, PK Roster began as a small passion project in the heart of Morocco. 
                    What started as a local shop for football enthusiasts has grown into one of the most 
                    trusted names in official sports merchandise across the country.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-custom font-bold text-white mb-4">Our Mission</h2>
                  <p className="font-custom text-white/90 leading-relaxed">
                    We're dedicated to bringing authentic, high-quality sports jerseys and merchandise 
                    to fans across Morocco. Every product we offer is officially licensed, ensuring 
                    you get the real deal with premium quality and authentic designs.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-custom font-bold text-white mb-4">What We Offer</h2>
                  <ul className="font-custom text-white/90 space-y-2">
                    <li>• Official team jerseys from top European leagues</li>
                    <li>• National team jerseys from around the world</li>
                    <li>• Authentic sports merchandise and accessories</li>
                    <li>• Fast delivery across Morocco</li>
                    <li>• Secure payment and easy returns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Owner & Store Details (50%) */}
          <div className="w-full md:w-1/2 p-8">
            <div className="flex flex-col items-center md:items-start h-full gap-6">
              <h2 className="text-4xl font-custom font-bold text-white mb-6">Meet Our Founder</h2>
              
              {/* Owner Image Placeholder */}
              <div className="w-48 h-48 bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-white/60 font-custom text-center">Owner Image</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-custom font-bold text-white mb-3">Ayoub Sassi</h3>
                  <p className="font-custom text-white/90 leading-relaxed">
                    A lifelong football enthusiast and entrepreneur, Ayoub founded PK Roster with a 
                    simple vision: to make authentic sports merchandise accessible to every fan in Morocco. 
                    With over 15 years of experience in retail and a deep passion for the beautiful game, 
                    he ensures every product meets the highest standards of quality and authenticity.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-custom font-bold text-white mb-3">Our Values</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-white font-bold">✓</span>
                      <span className="font-custom text-white/90">Authenticity - Only official licensed products</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-white font-bold">✓</span>
                      <span className="font-custom text-white/90">Quality - Premium materials and craftsmanship</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-white font-bold">✓</span>
                      <span className="font-custom text-white/90">Customer Service - Dedicated support team</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-white font-bold">✓</span>
                      <span className="font-custom text-white/90">Community - Supporting local football culture</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-custom font-bold text-white mb-3">Store Information</h3>
                  <div className="space-y-2 font-custom text-white/90">
                    <p><strong>Address:</strong> 123 Sports Street, Casablanca, Morocco</p>
                    <p><strong>Phone:</strong> +212 6XX XXX XXX</p>
                    <p><strong>Email:</strong> info@pkroster.com</p>
                    <p><strong>Hours:</strong> Mon-Sun: 9:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
