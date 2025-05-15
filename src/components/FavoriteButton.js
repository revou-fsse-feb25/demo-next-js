"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

const FavoriteButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <button
      onClick={() => setIsFavorited(!isFavorited)}
      className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart
        className={`w-6 h-6 ${
          isFavorited
            ? "fill-red-500 stroke-red-500"
            : "stroke-gray-600 dark:stroke-gray-300"
        } transition-colors`}
      />
      <span className="text-gray-700 dark:text-gray-200 font-medium">
        {isFavorited ? "Liked!" : "Like this anime!"}
      </span>
    </button>
  );
};

export default FavoriteButton;
