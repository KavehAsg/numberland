import React from "react";
import { Link } from "react-router-dom";

export default function AuthorSnippet({ imgUrl, name, slug }) {
  return (
    <div id="author" className="flex items-center gap-2">
      <img
        src={`${import.meta.env.VITE_BASE_URL}/${imgUrl}`}
        alt={name}
        className="w-9 rounded-full shadow-custom"
      />
      <Link
        to={`/blog/author/${slug}`}
        className="hidden md:inline-block font-bold hover:text-secondary transition-all duration-300"
      >
        {name}
      </Link>
    </div>
  );
}
