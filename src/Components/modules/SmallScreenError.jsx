import React from "react";

import SadIcon from "../../assets/sadIcon.svg?react";

export default function ({message}) {
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-full">
      <SadIcon className="w-20 h-20 fill-neutral" />
      <span className="text-warning text-center text-lg font-bold">{message}</span>
    </div>
  );
}
