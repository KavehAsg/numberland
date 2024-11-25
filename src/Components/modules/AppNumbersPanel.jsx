import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { GET_TEMP_NUMBERS_BY_APP } from "../../GraphQL/queries.js";
import NumbersPerCountry from "./NumbersPerCountry.jsx";
import { PiCurrencyDollar } from "react-icons/pi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";

export default function AppNumbersPanel({ app }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const [getNumbers, { loading, error, data }] = useLazyQuery(
    GET_TEMP_NUMBERS_BY_APP
  );

  return (
    <div
      className={`collapse ${
        data && isPanelOpen && !error ? "collapse-open" : "collapse-close"
      } min-h-fit border-none outline-none rounded-none`}
    >
      <div
        className={`py-[6px] px-5 text-lg font-medium text-neutral flex flex-row-reverse items-center justify-end gap-3 bg-base-200 hover:bg-base-300 transition-all duration-300 rounded-xl  ${
          isPanelOpen ? "border-blue-300 border-[1.4px]" : "border-none"
        } select-none`}
        onClick={() => {
          setIsPanelOpen((prev) => !prev);
          getNumbers({ variables: { appSlug: app.slug } });
        }}
      >
        <AiOutlineLeft
          className={`mr-auto text-gray-400 ${
            isPanelOpen ? "-rotate-90" : "rotate-0"
          } transition-all duration-300`}
        />

        {loading && (
          <div className="text-[10px] flex">
            کمی صبر کنید...
            <span className="loading loading-dots loading-xs mr-2 bg-secondary"></span>
          </div>
        )}
        {error && (
          <span className="text-[10px] flex text-red-500">
            سرویس با خطایی مواجه شده است
          </span>
        )}
        {app.appName}
        <img src={app.appIcon.url} alt="app-icon" />
      </div>

      <table
        id="numbers-section"
        className="collapse-content duration-500 [&>*:nth-child(odd)]:bg-white
[&>*:nth-child(even)]:bg-base-300 px-0 pt-10"
      >
        <caption className="my-2">jsgadjs</caption>
        <thead id="list-header" className="text-right text-darkPrimary">
          <tr className=" text-right rounded-xl">
            <td className="pr-3 py-2 bg-lightBlue rounded-s-lg">
              <span className="inline-block box-border relative top-1">
                <SlGlobe className="" />
              </span>
              <p className="inline-block mr-1 text-lg">کشور</p>
            </td>
            <td className="pr-2 py-2 bg-lightBlue">
              <span className="inline-block box-border relative top-1">
                <PiCurrencyDollar />
              </span>
              <p className="inline-block mr-1 text-lg">قیمت</p>
            </td>
            <td className="pr-2 py-2 bg-lightBlue rounded-e-lg">
              <span className="inline-block box-border relative top-1">
                <IoCheckmarkSharp />
              </span>
              <p className="inline-block mr-1 text-lg">ترتیب</p>
            </td>
          </tr>
        </thead>

        <tbody>
          {data &&
            !error &&
            data.countries.map((country) => (
              <NumbersPerCountry key={country.id} country={country} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
