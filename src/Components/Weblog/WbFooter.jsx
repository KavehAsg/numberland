import React from "react";
import { Link } from "react-router-dom";

import ZarinLogo from "../../assets/zarin-logo.svg?react";

import { socialMedias } from "../../Helpers/footerSocial";
import SocialMediaCards from "./SocialMediaCards.jsx";

export default function WbFooter() {
  return (
    <div className="footer-container mt-24 py-16 px-10">
      {/* first section - headers and social media - only appear in large screens > 1024 */}
      <div className="hidden lg:flex gap-8 ">
        {/* ------------------------------------ */}

        <div className="flex-1">
          <h3 className="text-3xl font-bold text-primary">
            نامبرلند چکار میکنه؟
          </h3>
          <div className="divider mb-8"></div>
          <p className="tracking-wider leading-7 font-light">
            نامبرلند مرجع تخصصی ارائه شماره مجازی ایران هست، میتونید از نامبرلند
            هر تعداد شماره تلفن اینترنتی از هر کشوری که دوست داری داشته باشی و
            باهاش همه جا ثبت نام کنی. به راحتی محدودیت ها و تحریم ها رو دور بزن
            و حریم خصوصی خودت رو حفظ کن!
          </p>
          <Link
            to={"/contact-us"}
            className="text-black font-bold text-lg underline-effect"
          >
            تماس با ما
          </Link>
        </div>

        {/* ------------------------------------ */}

        <div className="flex-1">
          <h3 className="text-3xl font-bold text-primary">
            چگونه اطمینان کنیم؟
          </h3>
          <div className="divider mb-8"></div>
          <ZarinLogo />
        </div>

        {/* ------------------------------------ */}

        <div className="flex-1">
          <h3 className="text-3xl font-bold text-primary">فالوو فراموش نشه!</h3>
          <div className="divider mb-8"></div>
          <div className="flex flex-col gap-3">
            {socialMedias.map((socialMedia) => (
              <SocialMediaCards
                key={socialMedia.id}
                socialMedia={socialMedia}
              ></SocialMediaCards>
            ))}
          </div>
        </div>

        {/* ------------------------------------ */}
      </div>
      {/* end of first section */}

      {/* footer copy right */}
      <span className="block -mt-10 lg:mt-24 text-center text-neutral  text-sm md:text-base">تمامی حقوق برای نامبرلند محفوظ است.</span>
    </div>
  );
}
