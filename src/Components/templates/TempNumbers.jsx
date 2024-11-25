import { useState } from "react";

import { LuMessageSquarePlus } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbClockBolt } from "react-icons/tb";
import { PiRepeatBold } from "react-icons/pi";
import { TbMessageCircleOff } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { MdBlockFlipped } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { useQuery } from "@apollo/client";
import { GET_APPS } from "../../GraphQL/queries.js";
import Loading from "../modules/Loading.jsx";
import ErrorPage from "./ErrorPage.jsx";
import AppNumbersPanel from "../modules/AppNumbersPanel.jsx";

export default function TempNumbers() {
  const [isCollapseInfoOpen, setIsCollapseInfoOpen] = useState(false);

  const { error, loading, data } = useQuery(GET_APPS);

  if (loading) return <Loading />;

  if (error) return <ErrorPage error={error} />;

  if (data) {
    const { apps } = data;
    return (
      <div id="temp-numbers" className="sm:px-2">
        <div
          id="collapse-info"
          className={`collapse bg-[#FBFAEE] text-justify ${
            isCollapseInfoOpen && "collapse-open"
          }`}
        >
          <input type="checkbox" />
          <div className="collapse-title [&_span]:flex [&_span]:justify-start [&_span]:items-start [&_span]:gap-3 [&_span]:text-neutral [&_span]:text-sm [&_span]:leading-7 [&_span]:mb-2 bg-[#FBFAEE] py-3 px-4 text-justify rounded-md">
            <span>
              <LuMessageSquarePlus className="w-5 h-5 flex-shrink-0 text-gray-400" />
              هر شماره عادی برای یک سرویس قابل استفاده است. (مثلا فقط تلگرام)
            </span>
            <span>
              <FaRegHeart className="w-5 h-5 flex-shrink-0 text-gray-400" />
              شماره مجازی عادی، بسیار پرطرفدار و ارزان و مقرون به صرفه است.
            </span>
            <span>
              <RxHamburgerMenu className="w-5 h-5 flex-shrink-0 text-gray-400" />
              نرم‌افزار یا سایت مورد نظر را از لیست زیر انتخاب کنید؛ کشورها و
              قیمت‌ها نمایش داده می‌شود. برای همه سرویس‌ها شماره موجود است.
            </span>
          </div>
          <div className="collapse-content [&_span]:flex [&_span]:justify-start [&_span]:items-start [&_span]:gap-3 [&_span]:text-neutral [&_span]:text-sm [&_span]:leading-7 [&_span]:mb-2 bg-[#FBFAEE] px-4">
            <span>
              <TbClockBolt className="w-5 h-5 flex-shrink-0 text-gray-400" />
              این شماره‌ها تنها در محدوده زمانی 10 الی 20 دقیقه قادر به دریافت
              پیامک هستند و در صورتی که پیامکی دریافت نشود هزینه به کیف پول شما
              عودت داده می‌شود و می‌توانید شماره دیگری بگیرد.
            </span>
            <span>
              <PiRepeatBold className="w-5 h-5 flex-shrink-0 text-gray-400" />
              کشورهائی که جلوی آن‌ها عدد 1 و 2 و 5 و 6 هستند در این تایم قادر به
              دریافت پیامک مجدد نیز هستند، اما بقیه شماره‌ها فقط یکبار کد دریافت
              می‌کنند که همان یکبار نیز برای راه اندازی نرم افزار یا ساخت اکانت
              در سایت مورد نظرتان کافی است.
            </span>
            <span>
              <TbMessageCircleOff className="w-5 h-5 flex-shrink-0 text-gray-400" />
              پس از گذشت 10 الی 20 دقیقه قادر به دریافت کد مجدد نخواهید بود، اما
              این ضمانت را به شما خواهیم داد اگر شماره پیامکی دریافت نکرد لغو
              شده و در همان لحظه هزینه به کیف پول شما عودت داده می‌شود.
            </span>
            <span>
              <RxAvatar className="w-5 h-5 flex-shrink-0 text-gray-400" />
              زمانی که با این شماره‌های مجازی حسابی را راه اندازی کنید تا زمانی
              که از آن خارج نشوید امکان استفاده از آن حساب وجود دارد و این
              شماره‌ها بنا بر تعهد اپراتورهای مخابراتی خارج از کشور به شخص دیگری
              واگذار نمی‌شوند، هرچند که در موارد خیلی کمی این مسأله مشاهده شده.
            </span>
            <span>
              <MdBlockFlipped className="w-5 h-5 flex-shrink-0 text-gray-400" />
              در مواردی ممکن است نرم افزاری که قصد استفاده از شماره مجازی در آن
              را دارید نسبت به شماره مجازی شما حساسیت به خرج داده و حتی شماره را
              مسدود کند (این مسأله به جهت قوانین خود نرم افزار و سایت می‌باشد)
              که با رعایت نکات گفته شده در قسمت آموزش‌ها سایت این مشکل به حداقل
              می‌رسد، و نامبرلند برای رضایت حداکثری مشتری قیمت‌ها را بسیار
              پائینتر از قیمت واقعی در اختیار شما قرار می‌دهد تا کم‌ترین ضرر
              متوجه مشتری بشود.
            </span>
          </div>

          {isCollapseInfoOpen ? (
            <button
              className="flex flex-row-reverse gap-3 items-center justify-center mb-2 text-primary "
              onClick={() => setIsCollapseInfoOpen(false)}
            >
              <FaAngleUp />
              توضیحات کمتر
            </button>
          ) : (
            <button
              className="flex flex-row-reverse gap-3 items-center justify-center mb-2 text-primary "
              onClick={() => setIsCollapseInfoOpen(true)}
            >
              <FaAngleDown />
              توضیحات بیشتر
            </button>
          )}
        </div>

        <div id="apps-panels-section" className="flex flex-col gap-3 mt-8">
          {apps.map((app) => {
            return <AppNumbersPanel key={app.id} app={app} />;
          })}
        </div>

      </div>
    );
  }
}
