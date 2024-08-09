import React from "react";
import WbNavbar from "../../Components/Weblog/WbNavbar";
import { Outlet } from "react-router-dom";
import WbFooter from "../../Components/Weblog/WbFooter";

export default function BlogLayout() {
  return (
    <div className="w-full font-numberland ">
      <WbNavbar />
      <main>
        <Outlet />
      </main>
      <WbFooter />
    </div>
  );
}
