"use client"
// pages/index.js
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  // Pre-implemented state for popup modal (special feature)
  const [showPopup, setShowPopup] = useState(false);
  
  // Pre-implemented popup handlers
  const handleShowPopup = () => {
    setShowPopup(true);
  };
  
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  // TODO: Create state variables for the counter, hover state, and keyboard events
  // Hint: Use useState to track various interaction states

  // TODO: Create an event handler for button clicks to increment counter
  // Hint: This function should increment the counter

  // TODO: Create mouse event handlers (hover)
  // Hint: These functions should update hover state

  // TODO: Create keyboard event handler
  // Hint: This function should detect specific key presses

  // TODO: Create an event handler for form input changes
  // Hint: This function should update the form data state

  // TODO: Create a form submission handler
  // Hint: This function should prevent default form behavior and process the submission

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
              <p className="mb-2">Current count: {/* TODO: Display counter value here */}</p>
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
                // TODO: Add onClick event handler to increment counter
              >
                Increment Counter
              </button>
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

        {/* Popup Component - Pre-implemented as requested */}
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
            className="h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg"
            // TODO: Add onMouseEnter and onMouseLeave handlers
          >
            {/* TODO: Show different text based on hover state */}
            <p className="text-gray-600">Hover over this area</p>
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
              // TODO: Add onKeyDown event handler
            />
            {/* TODO: Display message when spacebar is pressed */}
          </div>
        </section>

        {/* Form Handling Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Form Handling</h2>
          <form 
            className="space-y-4"
            // TODO: Add onSubmit event handler
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
                // TODO: Add value and onChange event handler
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
                // TODO: Add value and onChange event handler
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
                // TODO: Add value and onChange event handler
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
            >
              Submit Form
            </button>
          </form>
          
          {/* TODO: Display submitted form data when available */}
        </section>
      </main>
    </div>
  );
}
