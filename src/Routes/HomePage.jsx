import React, { useState } from "react";

import NumberLandLogo from "../assets/NumberLand-logo.svg?react";
import { Link, Outlet } from "react-router-dom";

import { FaCheck } from "react-icons/fa6";
import { FaSimCard } from "react-icons/fa";
import { HiOutlineStar } from "react-icons/hi";
import { PiSealPercent } from "react-icons/pi";
import { BsClock } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa6";
import { AiOutlineSafety } from "react-icons/ai";
import { PiHeadset } from "react-icons/pi";
import { FaRegCheckCircle } from "react-icons/fa";
import { PiCaretLeftBold } from "react-icons/pi";
import { BsQuestionCircle } from "react-icons/bs";

import ZarinLogo from "../assets/zarin-logo.svg?react";
import SamandehiLogo from "../assets/samandehi.webp";

export default function HomePage() {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  return (
    <div className="flex flex-col items-center py-10 gap-16 px-2 sm:px-8 ">
      
      <div
        id="main-container"
        className="w-full max-w-[1050px] bg-white sm:px-2 py-8 rounded-xl flex flex-col lg:flex-row-reverse lg:justify-center"
      >
        <div
          id="content"
          className="relative w-full lg:w-7/12 flex flex-col justify-start items-start gap-4 px-2 md:px-4 mobbuydis"
        >
          <span className="text-accent flex justify-center gap-2 w-full">
            <FaCheck />
            <h6>نامبرلند؛ حرفه ای ترین و ارزان ترین پنل شماره مجازی</h6>
          </span>

          <section id="section1">
            <span className="text-primary text-lg flex gap-1">
              <div className="w-7 h-7 bg-primary text-gray-100 flex justify-center items-center rounded-md">
                <FaSimCard className="w-4 h-4" />
              </div>
              <h3 className="font-bold">شماره مجازی چیست؟</h3>
            </span>

            <p className="text-justify text-base leading-7 mt-3 text-neutral px-4">
              تصور کنید قصد ساخت حساب جهت استفاده از شبکه های اجتماعی همانند
              تلگرام، اینستاگرام، تویتر، فیسبوک و سایتها و نرم افزارهای مختلف
              هستید، اما جهت ساخت و تکمیل ثبت نام نیاز به وارد کردن شماره موبایل
              و تأیید پیامکی هستید! مخصوصا زمانی که امکان استفاده از شماره شخصی
              شما برایتان مقدور نیست و یا تمایل به استفاده از آن ندارید و یا
              برای استفاده های شخصی و تجاری نیاز به ساخت تعداد زیادی حساب کاربری
              دارد؛ پنل شماره مجازی نامبرلند این امکان را به شما میدهد که به
              صورت نامحدود از بیش از 160 کشور مختلف جهان از جمله کشورهای اروپائی
              و آسیائی و ... اقدام به دریافت شماره با هزینه بسیار کم کنید. شماره
              هایی که امکان دریافت پیامک حاوی کد فعالسازی جهت ساخت اکانت در هر
              سرویسی را دارا هستند.
            </p>

            <ul className="w-full homepage-options grid grid-cols-hpListSm sm:grid-cols-hpListXl gap-4 px-4 mt-6">
              <li className="hp-listItem">
                <PiSealPercent className="hp-listItem-icon" />
                <span>قیمت ارزان</span>
              </li>
              <li className="hp-listItem">
                <HiOutlineStar className="hp-listItem-icon" />
                <span>کیفیت بالا</span>
              </li>
              <li className="hp-listItem">
                <BsClock className="hp-listItem-icon" />
                <span>تحویل فوری</span>
              </li>
              <li className="hp-listItem">
                <FaRegCreditCard className="hp-listItem-icon" />
                <span>پرداخت آنلاین</span>
              </li>
              <li className="hp-listItem">
                <AiOutlineSafety className="hp-listItem-icon" />
                <span>امنیت بالا</span>
              </li>
              <li className="hp-listItem">
                <PiHeadset className="hp-listItem-icon" />
                <span>پشتیبانی آنلاین</span>
              </li>
            </ul>
          </section>

          <section id="section2" className="mt-2">
            <span className="text-accent text-lg flex gap-1">
              <div className="w-7 h-7 bg-accent text-gray-100 flex justify-center items-center rounded-md">
                <FaRegCheckCircle className="w-4 h-4" />
              </div>
              <h3 className="font-bold">با اطمیـنان خریـد کنید</h3>
            </span>

            <p className="text-justify text-base leading-7 mt-3 text-neutral px-4">
              نامبرلند، دارای نماد رسمی اعتماد الکترونیک ، نماد ساماندهی ، گواهی
              پرداخت امن آنلاین می‌باشد، برای مشاهده روی نمادها کلیک کنید.
            </p>

            <div
              id="logos-section"
              className="w-full mt-5 flex justify-center flex-wrap gap-6"
            >
              <div className="w-28 bg-base-200 h-32 rounded-xl flex justify-center items-center hover:bg-base-300 transition-all duration-300 group">
                <ZarinLogo className="w-16 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="w-28 bg-base-200 h-32 rounded-xl flex justify-center items-center hover:bg-base-300 transition-all duration-300 group">
                <img
                  src={SamandehiLogo}
                  alt="samandehi-logo"
                  className="w-24 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            <div id="Collapse-questions" className="">
              <div
                className="mt-8 px-5 py-4 text-neutral text-xl font-medium bg-base-200 hover:bg-base-300 transition-all duration-500 rounded-lg flex justify-start items-center gap-2 select-none"
                onClick={() => setIsCollapseOpen((prev) => !prev)}
              >
                <BsQuestionCircle />
                <span>ســوالات متداول</span>
                <PiCaretLeftBold
                  className={`mr-auto ${
                    isCollapseOpen ? "-rotate-90" : "rotate-0"
                  } transition-all duration-300`}
                />
              </div>
              <div
                className={`common-questions py-4 px-8 ${
                  isCollapseOpen ? "scale-y-200 max-h-[1200px] md:max-h-[800px]" : "scale-y-0 max-h-0"
                } transition-all duration-500 origin-top`}
              >
                <h6>
                  شماره بدون ریپورت یعنی چه و کدام شماره ها این خصوصیت را دارند؟
                </h6>
                <p>
                  منظور از شماره مجازی بدون ریپورت، شماره ای است که محدودیتی
                  برای استفاده نداشته باشد، منظور این است که آن شماره مجازی
                  قابلیت ارسال پیام به شخصی افراد را داراست
                </p>
                <h6>شماره تا چه زمان در اختیار ماست؟</h6>
                <p>
                  شماره ها با بهترین کیفیت موجود تهیه شده و اختصاصی هستند، لذا
                  در اغلب اوقات تا زمانی که از اکانت خود خارج نشوید می توانید از
                  آن استفاده کنید
                </p>
                <h6>
                  آیا شماره در اختیار ما بوده و همیشه می توانیم کد تأیید بگیریم؟
                </h6>
                <p>
                  دقت داشته باشید که شماره ها فقط یکبار کد ورود را داده ولی تا
                  زمانی که از حساب خود خارج نشوید معمولا امکان استفاده از شماره
                  بوده و مشکلی نخواهید داشت
                </p>
                <h6>تفاوت شماره کشورهای مختلف چیست؟</h6>
                <p>
                  عدد مقابل کشورهای مختلف بیانگر اپراتورهای مخابراتی مختلفی است
                  که شماره های آنها ارائه میشود، از لحاظ کیفیت معمولا تفاوتی
                  نداشته و فقط به جهت تنوع و موجود بودن همیشگی شماره، از
                  اپراتورهای متفاوت اضافه شده است
                </p>
                <h6>آیا شماره‌ها امن هستند؟</h6>
                <p>
                  شماره هایی که دریافت می کنید از طرف نامبرلند به هیچ کس دیگری
                  واگذار نمی شود و فقط در اختیار شماست، اما برای حفظ امنیت بیشتر
                  نکات ایمنی سرویس خود را رعایت کنید، مثلا رمز دو مرحله ای تعریف
                  کنید، در صورتی وجود رمز دو مرحله ای حتی اگر شخص به شماره
                  دسترسی پیدا کند تا زمانی که رمز انتخابی شما را نداشته باشد به
                  هیچ وجه نمی تواند به اطلاعات شما دسترسی پیدا کند
                </p>
              </div>
            </div>
          </section>
        </div>

        <Outlet id="number-section"/>

      </div>
    </div>
  );
}
