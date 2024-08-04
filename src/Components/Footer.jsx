import React from "react";

import { useQuery } from "@apollo/client";
import { GET_FOOTER } from "../GraphQL/queries";

import { Link } from "react-router-dom";

import GitHub from "../assets/github.svg?react";

export default function Footer() {
  const { loading, error, data } = useQuery(GET_FOOTER);

  if (loading) return "Loading...";

  if (error) return <span>error</span>;
  else if (data)
    return (
      <div // Footer Container
        className="bg-white w-full p-5 pb-2 lg:p-8 lg:pb-3 text-[13px]"
      >
        {/* Footer Links Section */}
        <div id="footer-links" className="flex justify-between tracking-wide">
          <div // Countries list
            id="right-section"
            className="pl-10 w-1/2"
          >
            <h4 className="text-slimBlack">لیست کشور ها</h4>
            <ul className="mt-5 grid grid-cols-footerLinks gap-x-6	gap-y-3 text-menuItem">
              {data.countries.map((country) => {
                return (
                  <li>
                    <Link key={country.id} to={country.slug}>
                      شماره مجازی {country.countryName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div // Apps List
            id="left-section"
            className="pl-10 w-1/2"
          >
            <h4 className="text-slimBlack">لیست سرویس ها</h4>
            <ul className="mt-5 grid grid-cols-footerLinks gap-x-6	gap-y-3 text-menuItem">
              {data.apps.map((app) => {
                return (
                  <li>
                    <Link key={app.id} to={app.slug}>
                      شماره مجازی {app.appName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* End of Links Section */}

        <div // Icons and copy-right section
          id="footer-icons"
          className="mt-8 flex justify-between items-center"
        >
          <a
            href="https://numberland.ir/"
            target="_blank"
            className="text-slimBlack"
          >
            این نمونه کار صرفا یک الگوبرداری از سایت نامبرلند بوده و هیچ اعتبار
            تجاری و قانونی ندارد
          </a>

          <a
            className="tooltip"
            href="https://github.com/KavehAsg/numberland"
            target="_blank"
            data-tip="Git Hub"
          >
            <GitHub className="w-8 h-8" />
          </a>
        </div>
      </div>
    );
}
