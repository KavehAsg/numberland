import React from "react";
import LoginSvg from "../assets/Login.svg?react";
import {
  navbarMenu,
} from "../Helpers/navbarMenuItems";
import MegaMenu from "./MegaMenu/MegaMenu";

export default function Navbar() {

  return (
    <div className="flex flex-row-reverse justify-between items-center pl-2 pr-6 h-10 bg-secondary-content relative text-menuItem ">
      <button className="relative button-effect hover:scale-105 z-10 transition-all duration-300 overflow-hidden flex justify-between items-center text-xs  rounded-md p-2 pb-3 pr-4 gap-1 text-white h-6 tracking-tight">
        <LoginSvg className="w-3 mt-1" />
        ورود | ثبت نام
      </button>

      <MegaMenu navbarMenu={navbarMenu} />
    </div>
  );
}
