import React from "react";
import { Link } from "react-router-dom";

import DateSnippet from "./DateSnippet";
import CategoriesSnippet from "./CategoriesSnippet";

export default function ({
  blogData: {
    blogSlug,
    blogFeaturedImagePath,
    blogCategories,
    publishedAt,
    blogTitle,
    preview,
  },
}) {
  return (
    <div>
      <CategoriesSnippet type={"blogCard"} categories={blogCategories} />

      <div className="card-container rounded-2xl shadow-lg overflow-hidden">
        <img
          src={`${import.meta.env.VITE_BASE_URL}/${blogFeaturedImagePath}`}
          alt={`cover image of ${blogSlug}`}
          className="max-w-full hover:brightness-50 transition-all duration-500"
        />

        <div className="info-section flex flex-col items-center gap-3 p-5 pb-8">
          <DateSnippet publishDate={publishedAt} />

          <div className="w-full text-center">
            <Link
              to={`/blog/article/${blogSlug}`}
              className="text-black font-semibold text-xl lg:text-2xl underline-effect leading-9"
            >
              {blogTitle}
            </Link>
          </div>
          <p className="line-clamp-2 text-base lg:text-lg font-light text-center tracking-wider">
            {preview}
          </p>
        </div>
      </div>
    </div>
  );
}
