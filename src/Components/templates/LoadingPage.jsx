import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-center text-lg md:text-xl lg:text-2xl font-bold text-neutral">
      <span className="loading loading-ring w-20"></span>
    </div>
  );
}
