import React from "react";

import MegaMenu from "./MegaMenu/MegaMenu";
import LoginModal from "./LoginModal";

import { navbarMenu } from "../Helpers/navbarMenuItems";
// Menu Items - array of objects

export default function Navbar({}) {
  return (
    <div className="flex flex-row-reverse justify-between items-center pl-3 pr-3 lg:pr-6 h-13 bg-secondary-content relative text-menuItem ">
       <LoginModal />

      <MegaMenu navbarMenu={navbarMenu} />

    </div>
  );
}
