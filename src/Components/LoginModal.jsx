import React, { useEffect, useState } from "react";
import KeySvg from "../assets/key.svg?react";
import AvatarSvg from "../assets/avatar.svg?react";
import EyeSvg from "../assets/eye.svg?react";
import XMark from "../assets/xmark.svg?react";
import Sim from "../assets/simcart.svg?react";
import LoginSvg from "../assets/Login.svg?react";

export default function LoginModal() {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
    phone: "",
    showPassword: false,
  });
  const { username, password, phone, showPassword } = inputValues;

  const [loginMethod, setLoginMethod] = useState("login-usernameMethod");
  // inputs render based on this state

  const inputsChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValues((inputValues) => ({ ...inputValues, [name]: value }));
  };

  const loginMethodBtns = (event) => {
    const name = event.target.name;
    console.log(name);
    setLoginMethod(`login-${name}`);
  };


  const switchLoginMethods = () => {
    switch (loginMethod) {
      case "login-usernameMethod":
        return (
          <>
            <div className="inputs mt-5 md:mt-8 flex flex-col gap-6 select-none">
              <label
                className={`input bg-base-300 group h-16 !outline-none border-2 placeholder-shown:bg-black flex flex-row-reverse items-center gap-2 focus-within:bg-inherit focus-within:border-info transition-all duration-500 input-filled`}
              >
                <AvatarSvg className="h-6 w-6 opacity-70 group-focus-within:fill-info transition-all duration-300" />
                <input
                  dir="ltr"
                  type="text"
                  className="grow mt-1 text-base sm:text-lg"
                  placeholder="Username"
                  value={username}
                  name="username"
                  onChange={inputsChangeHandler}
                />
              </label>

              <label className="input group h-16 !outline-none border-2 bg-base-300 flex flex-row-reverse items-center gap-2 focus-within:bg-inherit focus-within:border-info transition-all duration-500">
                <KeySvg className="h-6 w-6 opacity-70 group-focus-within:fill-info transition-all duration-300" />
                <input
                  dir="ltr"
                  type={`${showPassword ? "text" : "password"}`}
                  className="grow text-left"
                  placeholder="password"
                  value={password}
                  name="password"
                  onChange={inputsChangeHandler}
                />
                <EyeSvg
                  className="h-6 w-6 opacity-70 cursor-pointer"
                  onClick={() =>
                    setInputValues({
                      ...inputValues,
                      showPassword: !showPassword,
                    })
                  }
                />
              </label>
              <div
                className="tooltip bg-red-400 w-32 mt-2 right-[calc(50%-4rem)] rounded-lg "
                data-tip="این گزینه نمایشیه:)"
              >
                <button className="relative w-full py-3 h-full button-effect rounded-lg bg-info overflow-hidden hover:scale-105 transition-all duration-500 before:right-[-10px] text-white">
                  ورود
                </button>
              </div>
            </div>
            <div className="my-3 flex w-full justify-between text-neutral cursor-pointer">
              <button name="phoneMethod" onClick={loginMethodBtns}>
                ورود با پیامک
              </button>
              <button name="phoneMethod" onClick={loginMethodBtns}>
                فراموشی رمز
              </button>
            </div>
          </>
        );
      case "login-phoneMethod":
        return (
          <>
            <div className="inputs flex flex-col gap-6 select-none">
              <label
                className={`input bg-base-300 group h-16 !outline-none border-2 placeholder-shown:bg-black flex flex-row-reverse items-center gap-2 focus-within:bg-inherit focus-within:border-info transition-all duration-500 input-filled`}
              >
                <Sim className="h-6 w-6 opacity-70 group-focus-within:fill-info transition-all duration-300" />
                <input
                  dir="ltr"
                  type="number"
                  className="grow mt-1 text-base sm:text-lg"
                  placeholder="شماره موبایل"
                  value={phone}
                  name="phone"
                  onChange={inputsChangeHandler}
                />
              </label>

              <div
                className="tooltip bg-red-400 w-32 mt-2 right-[calc(50%-4rem)] rounded-lg "
                data-tip="این گزینه نمایشیه:)"
              >
                <button className="relative w-full py-3 h-full button-effect rounded-lg bg-info overflow-hidden hover:scale-105 transition-all duration-500 before:right-[-10px] text-white">
                  دریافت کد تایید
                </button>
              </div>
            </div>
            <div className="my-3 flex w-full justify-between text-neutral cursor-pointer">
              <button name="usernameMethod" onClick={loginMethodBtns}>
                ورود با نام کاربری
              </button>
            </div>
          </>
        );
      default:
        return <span>مشکلی پیش آمد</span>;
    }
  };

  return (
    <div>
      <button
        className="relative button-effect hover:scale-105 z-10 transition-all duration-300 overflow-hidden flex justify-between items-center rounded-md p-2 pr-5 gap-1 text-white h-8 lg:h-8 bg-secondary before:right-[-15px]"
        onClick={() => document.getElementById("login-modal").showModal()}
      >
        <LoginSvg className="w-4 lg:w-4 " />
        ورود | ثبت نام
      </button>
      <dialog id="login-modal" className="modal">
        <div className="modal-box pt-5 md:pt-8 w-[95%] lg:w-[460px] px-7 md:px-14 absolute top-[5%] h-fit rounded-3xl">
          <form method="dialog">
            <button className="btn btn-circle border-none bg-inherit shadow-none hover:rotate-180 hover:bg-btnHoverBg duration-500">
              <XMark />
            </button>
          </form>
          <span className="block text-center text-xl lg:text-2xl">
            ورود / ثبت نام
          </span>

            {switchLoginMethods()}

        </div>
      </dialog>
    </div>
  );
}
