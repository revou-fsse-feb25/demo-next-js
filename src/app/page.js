"use client";

import { useState } from "react";
import Head from "next/head";
import SearchBar from "../components/SearchBar";
import AnimeCard from "../components/AnimeCard";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const searchAnime = async (query) => {
    setIsLoading(true);
    setError(null);
    setSearchPerformed(true);

    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&sfw=true`
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      const data = await response.json();
      setAnimeList(data.data || []);
    } catch (err) {
      console.error("Error fetching anime:", err);
      setError("Failed to fetch anime. Please try again later.", err.message);
      setAnimeList([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <Head>
        <title>Anime Search App</title>
        <meta
          name="description"
          content="Search for your favorite anime shows, using Jikan API"
        />
      </Head>

      <main className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Toby's Anime List
        </h1>

        <SearchBar onSearch={searchAnime} />

        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center text-red-500 py-4">{error}</div>
        ) : searchPerformed && animeList.length === 0 ? (
          <div className="text-center py-4">
            No results found. Try a different search term.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animeList.map((anime, index) => (
              <AnimeCard key={`${anime.mal_id}-${index}`} anime={anime} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
