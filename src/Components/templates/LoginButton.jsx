import React from "react";

import { FaArrowRightToBracket } from "react-icons/fa6";
import Modal from "./Modal";
import LoginForm from "./LoginForm";

export default function LoginButton() {
 
  return (
    <div>
      <button
        className="relative button-effect hover:scale-105 z-10 transition-all duration-500 overflow-hidden flex justify-between items-center rounded-md p-2 pr-5 gap-1 text-white h-8 lg:h-8 bg-secondary before:right-[-15px]"
        onClick={() => document.getElementById("login-modal").showModal()}
      >
        <FaArrowRightToBracket className="w-4 lg:w-4 " />
        ورود | ثبت نام
      </button>

      <Modal componentId="login-modal">
        <LoginForm />
      </Modal>
    </div>
  );
}
