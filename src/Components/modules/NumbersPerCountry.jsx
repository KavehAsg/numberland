import React from "react";

export default function NumbersPerCountry({ country }) {
  console.log(country)
  return (
    <tr className="w-full px-2 py-2 text-sm rounded-lg align-baseline">
      <td className="pr-4 py-2 tooltip" data-tip={`پیش شماره: ${country.countryCode}+`}>
        <img
          src={country.countryFlag.url}
          alt="flag"
          className="inline-block w-7 h-4 rounded-sm"
        />
        <span className="mr-1 text-base">{country.countryName}</span>
      </td>
      <td id="price" className="pr-4 py-2">
        <span>{country.price.toLocaleString("en", { useGrouping: true })}</span>
        <span className="text-gray-400 text-xs mr-1">تومان</span>
      </td>
      <td id="numbers-quantity" className="pr-4 py-2">
        <div className="flex items-center ">
          <span>
            {country.tempNumbers.length.toLocaleString("en", {
              useGrouping: true,
            })}
          </span>
          <span className="text-gray-400 text-xs mr-1">عدد</span>
          <button
            className="text-[0.7rem] sm:text-sm mr-auto relative button-effect z-10 transition-all duration-1000 overflow-hidden rounded-md text-white bg-primary before:right-[-50px] px-[6px] md:px-4 lg:px-2 
          py-[2px] pt-1 opacity-70 "
          >
            دریافت شماره
          </button>
        </div>
      </td>
    </tr>
  );
}
