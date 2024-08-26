import React from "react";
import { Link } from "react-router-dom";

export default function AuthorInfoCard({ imgUrl, name, bio, slug }) {
  return (
    <div
      id="card-container"
      className="w-full bg-base-300 rounded-3xl mt-28 flex flex-col items-center"
    >
      <div className="flex flex-col items-center gap-3 relative -top-12">
        <img
          src={imgUrl}
          alt="profile picture"
          className="w-[4.5rem] md:w-24 rounded-full border-2 md:border-4
         border-darkPrimary hover:brightness-75 transition-all duration-500"
        />
        {slug ? <Link to={`/blog/author/${slug}`} className="underline-effect">
          <h3 className="text-2xl md:text-3xl font-bold text-darkPrimary">{name}</h3>
        </Link> : <h3 className="text-2xl md:text-3xl font-bold text-black">{name}</h3>}
        <p className="text-neutral text-base md:text-lg text-center px-4 inline-block">{bio}</p>
      </div>
    </div>
  );
}
