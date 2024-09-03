import React, { useState } from "react";

import { BsChatSquareText } from "react-icons/bs";
import { GoClock } from "react-icons/go";
import { GoStar } from "react-icons/go";

export default function SelectService() {
  const [service, setService] = useState("temp-numbers");
  const btnClickHandler = (event) => {
    let name = event.target.name;
    setService(name);
  };


  return (
    <section className="w-full lg:w-5/12 bg-base-100 sm:bg-white pt-8 sm:pt-0 flex flex-col items-center">
      <span className="block text-center mb-8 text-error sm:hidden">
        نوع شماره مجازی را برای خرید انتخاب کنید:
      </span>

      <div className="w-full sticky top-0 z-10 bg-base-100 sm:bg-white pt-3 shadow-selectServiceShadow">
        <div
          id="dropdown-buttons"
          className="w-full flex justify-around text-gray-500 text-lg sm:text-xl"
        >
          <button
            id="temp-numbers"
            name="temp-numbers"
            className={`hover:text-primary transition-all duration-300 flex gap-1 ${
              service === "temp-numbers" && "clickedServiceBtn"
            } relative`}
            onClick={btnClickHandler}
          >
            <BsChatSquareText className="select-none pointer-events-none" />
            شماره عادی
          </button>
          <button
            id="rental-numbers"
            name="rental-numbers"
            className={`hover:text-primary transition-all duration-300 flex gap-1 ${
              service === "rental-numbers" && "clickedServiceBtn"
            } relative`}
            onClick={btnClickHandler}
          >
            <GoClock className="select-none pointer-events-none" />
            شماره اجاره ای
          </button>
          <button
            id="permanent-numbers"
            name="permanent-numbers"
            className={`hover:text-primary transition-all duration-300 flex gap-1 ${
              service === "permanent-numbers" && "clickedServiceBtn"
            } relative`}
            onClick={btnClickHandler}
          >
            <GoStar className="select-none pointer-events-none" />
            شماره دائمی
          </button>
        </div>
        <div className="w-full h-[2px] bg-gray-200 mt-3 mb-0"></div>
      </div>

      <div
        id="temp-section"
        className={`origin-top ${
          service === "temp-numbers"
            ? "scale-y-200 max-h-[1200px] py-4"
            : "scale-y-0 max-h-0"
        } transition-all duration-300`}
      >
        temp
      </div>
      <div
        id="rental-section"
        className={`origin-top ${
          service === "rental-numbers"
            ? "scale-y-200 max-h-[1200px] py-4"
            : "scale-y-0 max-h-0"
        } transition-all duration-300`}
      >
        rent
      </div>
      <div
        id="permanent-section"
        className={`origin-top ${
          service === "permanent-numbers"
            ? "scale-y-200 max-h-[1200px] py-4"
            : "scale-y-0 max-h-0"
        } transition-all duration-300`}
      >
        permanent
      </div>
    </section>
  );
}
