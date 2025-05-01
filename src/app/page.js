// app/page.js
"use client"; // Required for hooks in Next.js App Router

import React, { useState, useEffect } from "react";

export default function Home() {
  // State management
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Async fetch function
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();
      setPosts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect to fetch data on component mount
  useEffect(() => {
    fetchPosts();
  }, []); // Empty dependency array - runs once on mount

  // Manual refresh function
  const handleRefresh = () => {
    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Next.js Async Demo - Finished
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Posts from JSONPlaceholder
            </h2>
            <button
              onClick={handleRefresh}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Refresh
            </button>
          </div>

          {/* Loading state */}
          {loading && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <span className="ml-3 text-gray-600">Loading...</span>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-700">
              Error: {error}
            </div>
          )}

          {/* Data display */}
          {!loading && !error && (
            <ul className="space-y-4">
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="border-b border-gray-200 pb-4 last:border-0"
                >
                  <h3 className="font-semibold text-lg text-gray-800">
                    {post.id}. {post.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{post.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Explanation section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            What We Implemented:
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>
              1. <strong>useState hooks</strong>: Managing data, loading, and
              error states
            </p>
            <p>
              2. <strong>async/await</strong>: Fetching data from
              JSONPlaceholder API
            </p>
            <p>
              3. <strong>useEffect</strong>: Running fetchPosts on component
              mount
            </p>
            <p>
              4. <strong>Error handling</strong>: Try/catch block for API errors
            </p>
            <p>
              5. <strong>Loading states</strong>: Visual feedback for better UX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
