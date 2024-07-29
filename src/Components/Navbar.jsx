import React from "react";
import LoginSvg from "../assets/Login.svg?react";
import {
  navbarMenu,
} from "../Helpers/navbarMenuItems";
import MegaMenu from "./MegaMenu/MegaMenu";

export default function Navbar({}) {

  return (
    <div className="flex flex-row-reverse justify-between items-center pl-3 pr-3 lg:pr-6 h-13 bg-secondary-content relative text-menuItem ">

      <button className="relative button-effect hover:scale-105 z-10 transition-all duration-300 overflow-hidden flex justify-between items-center rounded-[0.4rem] p-2 pr-5 lg:p4  gap-1 text-white h-8 lg:h-8">
        <LoginSvg className="w-4 lg:w-4 " />
        ورود | ثبت نام
      </button>

      <MegaMenu navbarMenu={navbarMenu}/>
    </div>
  );
}
