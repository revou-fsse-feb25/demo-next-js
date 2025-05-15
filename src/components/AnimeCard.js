"use client";
import Link from "next/link";

export default function AnimeCard({ anime }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col p-4">
      <div className="relative h-[250px] w-full">
        <img
          src={anime.images.jpg.image_url || "/placeholder.jpg"}
          alt={anime.title}
          className="w-full h-full object-contain"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
          <span className="text-yellow-400 mr-1">★</span>
          <span>{anime.score || "N/A"}</span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <Link href={`/anime/${anime.mal_id}`}>
          <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {anime.title}
          </h3>
        </Link>

        <div className="text-sm text-gray-600 dark:text-gray-300 mb-3 flex flex-wrap gap-2">
          <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            {anime.type}
          </span>
          <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            {anime.episodes ? `${anime.episodes} episodes` : "Unknown episodes"}
          </span>
          <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            {anime.status}
          </span>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 flex-1">
          {anime.synopsis || "No synopsis available."}
        </p>
      </div>
    </div>
  );
}
