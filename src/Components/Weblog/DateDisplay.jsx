import React from "react";

import { makeDateLocalized } from "../../Helpers/dateLocalizer";

import CalenderLogo from "../../assets/calender.svg?react";

export default function DateDisplay({ publishDate, children }) {
  return (
    <span className="publish-Date flex gap-1 font-light items-center ">
      <CalenderLogo className="w-4 fill-[#eba132] mb-1" />
      <span className="font-bold">{children}</span>
      {makeDateLocalized(publishDate)}
    </span>
  );
}
