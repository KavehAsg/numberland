import React from "react";
import { socialMedias } from "../../Helpers/footerSocial";
import CopyIcon from "../../assets/copy.svg?react";


export default function ShareCard() {
  return (
    <div
      id="sharing-section"
      className="w-full mt-16 py-12 border-y-2 flex flex-col items-center gap-8"
    >
      <div
        id="socials"
        className="flex flex-col md:flex-row items-center gap-3"
      >
        <span className="text-xl font-bold inline-block">
          اشتراک گذاری مطلب:{" "}
        </span>
        <ul className="flex gap-3">
          {socialMedias.map((social) => (
            <li
              key={social.id}
              className="w-12 h-12 rounded-full fill-gray-100 flex items-center justify-center relative top-0 hover:-top-0.5 transition-all duration-300"
              style={{
                background: social.color,
              }}
            >
              <span className="inline-block w-4 md:w-5">{social.icon}</span>
            </li>
          ))}
        </ul>
      </div>

      <label
        id="copy-link"
        className="w-4/5 md:w-3/5 p-1 bg-base-300 rounded-2xl py-2 px-6 flex items-center gap-3 focus:border-gray-300"
        onClick={() => navigator.clipboard.writeText(window.location.href)}
      >
        <button type="button" id="copy-btn" className="peer">
          <CopyIcon className="w-4 fill-secondary" />
        </button>
        <span
          dir="ltr"
          className="w-full max-w-full overflow-hidden text-nowrap  peer-focus:bg-primary"
        >
          {window.location.href}
        </span>
      </label>
    </div>
  );
}
