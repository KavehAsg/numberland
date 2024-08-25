import React from "react";

export default function CategoryInfoCard({ imgUrl, title, description }) {
  return (
    <div
      id="card-container"
      className="w-full bg-base-300 rounded-3xl mt-28 flex flex-col items-center"
    >
      <div className="flex flex-col items-center gap-5 relative -top-12">
        <div className="flex justify-center items-center w-20 h-20 md:w-24 md:h-24 bg-darkPrimary rounded-full">
          <img
            src={imgUrl}
            alt="profile picture"
            className="w-8 md:w-12 "
          />
        </div>
        <h3 className="text-2xl md:text-4xl font-bold text-neutral">{title}</h3>
        <p className="text-neutral text-base md:text-lg text-center px-4 inline-block">{description}</p>
      </div>
    </div>
  );
}
