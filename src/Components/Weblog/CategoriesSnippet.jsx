import React from "react";
import { Link } from "react-router-dom";

export default function CategoriesSnippet({ type, categories }) {
  if (type == "blogCard") {
    return (
      <div className="categories flex w-full justify-center gap-3 relative z-20 top-5">
        {categories.map((category) => (
          <Link
            key={category.blogCategoryId}
            to={`/blog/category/${category.blogCategorySlug}`}
            className={`inline-block bg-red-500 py-1 px-3 rounded-2xl text-white font-bold relative top-0 hover:-translate-y-1 transition-all duration-300`}
            style={{
              background: `${category.colorCode}`,
            }}
          >
            {category.blogCategoryName}
          </Link>
        ))}
      </div>
    );
  } else if (type == "blogPage") {
    return (
      <div className="categories mr-10 hidden md:flex w-full md:w-5/6 lg:w-4/6 justify-start gap-4 relative z-20 top-16">
        {categories.map((category) => (
          <Link
            key={category.blogCategoryId}
            to={`/blog/category/${category.blogCategorySlug}`}
            className={`inline-block py-1 px-4 rounded-2xl text-white font-bold relative top-0 hover:-translate-y-1 transition-all duration-300 bg-red-400`}
            style={{
              background: `${category.colorCode}`,
            }}
          >
            {category.blogCategoryName}
          </Link>
        ))}
      </div>
    );
  }
}
