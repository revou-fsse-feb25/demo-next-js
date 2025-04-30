"use client"
// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  // State for the counter example
  const [count, setCount] = useState(0);
  
  // State for popup visibility
  const [showPopup, setShowPopup] = useState(false);
  
  // State for mouse hover
  const [isHovering, setIsHovering] = useState(false);
  
  // State for keyboard events
  const [lastKeyPressed, setLastKeyPressed] = useState('');
  const [showKeyMessage, setShowKeyMessage] = useState(false);
  
  // State for the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // State to track if the form has been submitted
  const [submitted, setSubmitted] = useState(false);
  
  // Effect to clear the key message after 2 seconds
  useEffect(() => {
    if (showKeyMessage) {
      const timer = setTimeout(() => {
        setShowKeyMessage(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [showKeyMessage]);
  
  // Event handler for incrementing counter
  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  // Event handler for showing popup
  const handleShowPopup = () => {
    setShowPopup(true);
  };
  
  // Event handler for closing popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  // Mouse event handlers
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  // Keyboard event handler
  const handleKeyDown = (e) => {
    setLastKeyPressed(e.key);
    
    // Show message if spacebar is pressed
    if (e.key === ' ' || e.key === 'Spacebar') {
      setShowKeyMessage(true);
    }
  };
  
  // Event handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Update the form data state while preserving other field values
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Form submission handler
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    
    // Here you would typically send the data to an API
    console.log('Form submitted with data:', formData);
    
    // Set submitted state to true to show the submission data
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <Head>
        <title>Next.js Events Demo</title>
        <meta name="description" content="Learning about events in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Next.js Events Demo
        </h1>

        {/* Click Events Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Click Events</h2>
          <div className="flex flex-col gap-4">
            <div>
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
                onClick={handleIncrement}
              >
                Increment Counter
              </button>
              <p className='font-bold text-blue-600'>Current count: {count}</p>
            </div>
            
            <div>
              <button 
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors"
                onClick={handleShowPopup}
              >
                Show Popup
              </button>
            </div>
          </div>
        </section>

        {/* Popup Component */}
        {showPopup && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4 border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Popup Message</h3>
                <button 
                  className="text-gray-400 hover:text-gray-600"
                  onClick={handleClosePopup}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mb-4">This is a popup triggered by a button click event!</p>
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors w-full"
                onClick={handleClosePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Mouse Events Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Mouse Events</h2>
          <div 
            className={`h-32 flex items-center justify-center border-2 border-dashed rounded-lg transition-colors ${
              isHovering ? 'bg-blue-100 border-blue-500' : 'border-gray-300'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovering ? (
              <p className="text-blue-600 font-medium">Mouse is over the area!</p>
            ) : (
              <p className="text-gray-600">Hover over this area</p>
            )}
          </div>
        </section>

        {/* Keyboard Events Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Keyboard Events</h2>
          <div className="mb-4">
            <p className="mb-2">Press the spacebar to trigger an event</p>
            <input 
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Click here and press a key"
              onKeyDown={handleKeyDown}
            />
            
            {lastKeyPressed && (
              <p className="mt-2 text-gray-600">Last key pressed: "{lastKeyPressed}"</p>
            )}
            
            {showKeyMessage && (
              <div className="mt-2 p-2 bg-green-100 text-green-700 rounded border border-green-200">
                Spacebar detected! Great job!
              </div>
            )}
          </div>
        </section>

        {/* Form Handling Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Form Handling</h2>
          <form 
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
            >
              Submit Form
            </button>
          </form>
          
          {submitted && (
            <div className="mt-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Form Submission Data:</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Name:</span> {formData.name}</p>
                <p><span className="font-medium">Email:</span> {formData.email}</p>
                <p><span className="font-medium">Message:</span> {formData.message}</p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}