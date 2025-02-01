import React from "react";

export default function PanelButton({
  title,
  icon,
  setSelectedPanel,
  selectedPanel,
  panelName,
}) {
  return (
    <li>
      <button
        onClick={() => setSelectedPanel(panelName)}
        className={`w-32 py-4 text-right bg-base-100 text-neutral flex flex-col items-center gap-2 text-md rounded-lg font-bold transition-all duration-300 ${
          selectedPanel === panelName ? "bg-primary text-white" : ""
        }`}
      >
        {icon}
        {title}
      </button>
    </li>
  );
}
