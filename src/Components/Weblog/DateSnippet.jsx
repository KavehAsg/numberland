import React from "react";

import { makeDateLocalized } from "../../Helpers/dateLocalizer";

import CalenderLogo from "../../assets/calender.svg?react";

export default function DateSnippet({ publishDate, children, icon }) {
  return (
    <span className="publish-Date flex gap-1 font-light items-center justify-center ">
      {icon && <CalenderLogo className="w-4 fill-[#eba132] mb-1" />}
      <span className="font-bold">{children}</span>
      <span className="text-center">{makeDateLocalized(publishDate)}</span>
    </span>
  );
}
