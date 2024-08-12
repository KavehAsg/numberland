import React from "react";
import { Link } from "react-router-dom";
import CalenderLogo from "../../assets/calender.svg?react";

export default function ({
  blogData: {
    slug,
    coverImage,
    postCategories,
    publishDate,
    title,
    preview,
  },
}) {
  const makeDateLocalized = () => {
    const splittedDate = publishDate.split("-"); // make it separate to match the Date input
    const newDate = new Date(
      Date.UTC(+splittedDate[0], +splittedDate[1], +splittedDate[2]) // year , month , day
    );

    const localizedDate = newDate.toLocaleDateString("fa-IR", {
      day: "numeric",
      year: "numeric",
      month: "long",
    }); // invert the Date to persian

    const splittedLocalDate = localizedDate.split(" "); // order the date to match persian format => year,month,day to display
    return splittedLocalDate.join().replaceAll(",", " "); // remove the ,
  };


  return (
    <>
      <div className="categories flex w-full justify-center gap-3 relative z-20 top-5">
        {postCategories.map((category) => (
          <Link
            key={category.id}
            to={category.slug}
            className={`inline-block py-1 px-3 rounded-2xl text-white font-bold relative top-0 hover:-top-1 transition-all duration-300`}
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
          <span className="publish-Date flex gap-2 font-light">
            <CalenderLogo className="w-4 fill-[#eba132]" />
            {makeDateLocalized()}
          </span>

          <div className="w-full text-center">
            <Link
              to={slug}
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
