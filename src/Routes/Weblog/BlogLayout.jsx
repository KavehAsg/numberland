import React, { useRef } from "react";
import { Outlet } from "react-router-dom";

import WbNavbar from "../../Components/Weblog/WbNavbar";
import WbFooter from "../../Components/Weblog/WbFooter";

import ArrowIcon from "../../assets/arrow.svg?react";

export default function BlogLayout() {
  const navbarRef = useRef(null);

  const scrollToTop = () =>
    navbarRef.current.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <div id="container" className="w-full flex justify-center">
      <div className="w-full font-numberland max-w-[1300px] flex flex-col items-center">
        <WbNavbar ref={navbarRef} />
        <main className="w-full  flex justify-center ">
          <Outlet />
        </main>
        <WbFooter />

        <button
          id="scroll-to-top"
          className="btn fixed bottom-8 left-8 btn-ghost btn-circle bg-black hover:bg-neutral z-50"
          onClick={scrollToTop}
        >
          <ArrowIcon className="w-3 h-3 -rotate-90 fill-white" />
        </button>
      </div>
    </div>
  );
}
