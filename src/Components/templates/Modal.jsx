import React from "react";
import XMark from "../../assets/xmark.svg?react";


export default function Modal({ children , componentId }) {
  return (
    <dialog id={componentId} className="modal">
      <div className="modal-box pt-5 md:pt-8 w-[95%] lg:w-[460px] px-7 md:px-14 absolute top-[5%] h-fit rounded-3xl">
        <form method="dialog">
          <button className="btn btn-circle border-none bg-inherit shadow-none hover:rotate-180 hover:bg-btnHoverBg duration-500">
            <XMark />
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
}
