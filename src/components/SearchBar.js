"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-8">
        <div className="flex items-center border border-solid border-black/[.08] dark:border-white/[.145] rounded-full overflow-hidden shadow-sm focus-within:shadow-md transition-shadow">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for anime..."
            className="flex-grow py-3 px-5 outline-none bg-transparent"
          />
          <button
            type="submit"
            className="bg-foreground text-background py-3 px-6 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}
