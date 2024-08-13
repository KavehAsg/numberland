import React from "react";

export default function SocialMediaCards({
  socialMedia: { icon, name, info },
}) {
  return (
    <div className="w-full rounded-2xl card-container flex gap-20 justify-between items-center py-2 px-5 bg-[#E5ECF5] hover:bg-[#75859C] transition-all duration-300 group">
      <div>
        <h5 className="text-lg font-bold text-[#75859C] group-hover:text-gray-200">{name}</h5>
        <span className="text-xs text-[#75859C]  group-hover:text-gray-200">{info}</span>
      </div>
      <div className="w-6 fill-[#75859C] group-hover:fill-gray-200">{icon}</div>
    </div>
  );
}
