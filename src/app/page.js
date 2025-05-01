"use client";

// pages/index.js
// app/page.js
import React from 'react';

export default function Home() {
  // TODO: Add state for posts
  // TODO: Add state for loading
  // TODO: Add state for error

  // TODO: Create fetchPosts function

  // TODO: Add useEffect hook

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Next.js Async Demo - Starter
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            TODO: Implement data fetching
          </h2>
          
          <p className="text-gray-600">
            Follow these steps:
          </p>
          <ol className="list-decimal pl-5 text-gray-700 mt-4">
            <li>Add useState for posts, loading, and error</li>
            <li>Create fetchPosts async function</li>
            <li>Implement useEffect hook</li>
            <li>Add loading and error states</li>
            <li>Display the fetched data</li>
          </ol>
        </div>
      </div>
    </div>
  );
}