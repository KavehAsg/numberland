import React, { forwardRef, useEffect, useRef, useState } from "react";

import { wbMenu } from "../../Helpers/navbarMenuItems";

import NumberLandLogo from "../../assets/NumberLand-logo.svg?react";
import SearchLogo from "../../assets/search.svg?react";
import XLogo from "../../assets/xmark.svg?react";
import BarsLogo from "../../assets/bars.svg?react";

import Banner from "../../assets/banner.webp"

import { Link } from "react-router-dom";

function WbNavbar(props , ref) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
  });

  useEffect(() => {
    const menu = menuRef.current;
    const rect = menu.getBoundingClientRect();
    setMenuPosition({ top: rect.bottom + 25 });
  } , []);

  const menuHandler = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full" ref={ref}>
      <nav // Navbar for desktop size > 768px
        className="hidden h-[160px] bg-base-100 px-10 pt-6 pb-5 lg:pb-0 md:flex justify-between items-center flex-col lg:flex-row  border-b-2"
      >
        <Link to={"/"}>
          <NumberLandLogo className="w-[260px]" />
        </Link>

        <ul className="flex gap-5 text-wbMenuItem text-xl font-extrabold">
          {wbMenu.map((item) => (
            <li
              key={item.id}
              className="hover:text-[#eba132] transition-all duration-300"
            >
              <a href={item.link} className="underline-effect">
                {item.title}
              </a>
            </li>
          ))}
          <li className="mr-8 xl:mr-20">
            <button>
              <SearchLogo className="w-4 h-4 fill-wbMenuItem" />
            </button>
          </li>
        </ul>
      </nav>

      <nav // Navbar for mobile size < 768px
        className="md:hidden h-fit bg-base-100 p-4 px-6 lg:pt-4 flex justify-between items-center flex-row lg:flex-row  border-b-2"
      >
        <button
          type="button"
          onClick={menuHandler}
          ref={menuRef}
        >
          {isMenuOpen ? (
            <XLogo className="w-7 h-7" />
          ) : (
            <BarsLogo className="w-7 h-7 -scale-x-100" />
          )}
        </button>
        <ul
          className={`absolute ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"} flex flex-col gap-4 bg-white text-wbMenuItem text-xl font-bold transition-opacity duration-150 z-30 p-8 rounded-xl shadow-custom`}
          style={{ top: menuPosition.top }}
        >
          {wbMenu.map((item) => (
            <li
              key={item.id}
              className="hover:text-[#eba132] transition-all duration-300"
            >
              <a href={item.link} className="underline-effect">
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <Link to={"/"}>
          <NumberLandLogo className="w-[200px] sm:w-[230px]" />
        </Link>
        <button>
          <SearchLogo className="w-4 h-4 fill-wbMenuItem" />
        </button>
      </nav>

      <header className="block sm:hidden lg:block w-full ">
          <img src={Banner} alt="banner" className="wfull"/>
      </header>
    </div>
  );
}

export default forwardRef(WbNavbar);