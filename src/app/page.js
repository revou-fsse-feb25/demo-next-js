"use client";

import { useState, useEffect } from "react";
import productImage from "../assets/image-product-desktop.jpg"; 
import productImageMobile from "../assets/image-product-mobile.jpg";

export default function Home() {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if we're on mobile viewport
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f2ed] p-4 md:p-8">
      <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row max-w-4xl w-full mx-auto">
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px]">
          {/* Using the appropriate image based on screen size */}
          <img
            src={isMobile ? productImageMobile.src : productImage.src}
            alt="Chanel Gabrielle Perfume"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-6 md:p-10 flex flex-col justify-between w-full md:w-1/2">
          <div>
            <h2 className="uppercase text-gray-400 tracking-widest text-sm mb-4">
              Perfume
            </h2>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="text-gray-500 mb-6 md:mb-8 text-sm md:text-base">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <span className="text-[#4a7563] text-3xl font-bold font-serif">
                $149.99
              </span>
              <span className="text-gray-500 line-through text-sm">
                $169.99
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full bg-[#4a7563] hover:bg-[#3a5a4e] text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2 ${
                isAddedToCart ? "opacity-80" : ""
              }`}
              disabled={isAddedToCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {isAddedToCart ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}