"use client";
// app/page.js
import React, { useEffect, useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([
    {
      id: 0,
      title: "tes",
    },
  ]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((json) => setData(json));
  }

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("error", error);
  // console.log("data", data);
  console.log("loading", loading);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Next.js Async Demo - Starter
        </h1>
        <div>
          <h1 className="text-gray-800">{counter}</h1>
          <button
            onClick={() => setCounter(counter + 1)}
            className="text-gray-800"
          >
            +
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          {loading && (
            <div>
              <h1 className="text-9xl text-gray-900">Loading dulu bos</h1>
            </div>
          )}
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            {/* khusus jika datanya adalah array of object */}
            {/* [1,2,3] */}
            {/* {item: 1, post: "new post"} */}
            {/* [{item: 1, post: "new post"}, {item: 2, post: "new post"}] */}
            {data.map((item, index) => (
              <div key={index}>
                <h1>{item.title}</h1>
              </div>
            ))}
          </h2>

          <p className="text-gray-600">Follow these steps:</p>
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
