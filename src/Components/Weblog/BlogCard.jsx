import React from "react";
import { Link } from "react-router-dom";

import DateDisplay from "./DateDisplay";

export default function ({
  blogData : {
    slug,
    coverImage,
    wbCategory,
    publishDate,
    title,
    preview,
  },
}) {

  return (
    <>
      <div className="categories flex w-full justify-center gap-3 relative z-20 top-5">
        {wbCategory.map((category) => (
          <Link
            key={category.id}
            to={`/blog/category/${category.slug}`}
            className={`inline-block py-1 px-3 rounded-2xl text-white font-bold relative top-0 hover:-top-0.5 transition-all duration-300`}
            style={{
              background: `${category.color.hex}`,
            }}
          >
            {category.title}
          </Link>
        ))}
      </div>

      <div className="card-container rounded-2xl shadow-lg overflow-hidden">
        <img
          src={coverImage.url}
          alt={`cover image of ${slug}`}
          className="max-w-full hover:brightness-50 transition-all duration-500"
        />

        <div className="info-section flex flex-col items-center gap-3 p-5 pb-8">
         <DateDisplay publishDate={publishDate} />

          <div className="w-full text-center">
            <Link
              to={`/blog/article/${slug}`}
              className="text-black font-semibold text-xl lg:text-2xl underline-effect leading-9"
            >
              {title}
            </Link>
          </div>
          <p className="line-clamp-2 text-base lg:text-lg font-light text-center tracking-wider">{preview}</p>
        </div>
      </div>
    </>
  );
}
