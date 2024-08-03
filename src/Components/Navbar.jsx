import React from "react";
import LoginSvg from "../assets/Login.svg?react";
import { navbarMenu } from "../Helpers/navbarMenuItems";
import MegaMenu from "./MegaMenu/MegaMenu";
import LoginModal from "./LoginModal";

export default function Navbar({}) {
  return (
    <div className="flex flex-row-reverse justify-between items-center pl-3 pr-3 lg:pr-6 h-13 bg-secondary-content relative text-menuItem ">
       <LoginModal />

      <MegaMenu navbarMenu={navbarMenu} />

    </div>
  );
}
