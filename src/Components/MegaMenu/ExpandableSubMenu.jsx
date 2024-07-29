import React, { useState, useRef, useEffect } from "react";
import Dropdown from "../../assets/dropdown.svg?react";
import { Link } from "react-router-dom";

export default function ExpandableSubMenu({ expandableMenu }) {
  const { name, link, subMenu } = expandableMenu;

  const [expandableMenuPosition, setSubMenuTitlePosition] = useState({
    top: 0,
    right: 0,
  });
  const [isExpandableMenuTitleHovered, setIsSubmenuTitleHovered] =
    useState(false);
  const [isExpandableMenuHovered, setIsExpandableMenuHovered] = useState(false);
  const [isBurgerTitleClicked, setIsBurgerTitleClicked] = useState(false);
  const subMenuRefs = useRef();

  const handleSubmenuTitleMouseEnter = () => {
    const menuItem = subMenuRefs.current;
    const rect = menuItem.getBoundingClientRect();
    const rightPosition = window.innerWidth - rect.right;
    setSubMenuTitlePosition({ top: rect.bottom, right: rightPosition });
    setIsSubmenuTitleHovered(true);
  };

  return (
    <>
      <li
        ref={subMenuRefs}
        className="group px-5 hidden lg:list-item"
        onMouseEnter={handleSubmenuTitleMouseEnter}
        onMouseLeave={() => setIsSubmenuTitleHovered(false)}
        key={link}
      >
        <div className="submenu-titles cursor-pointer">
          {name}
          <Dropdown className="menu-svg" />
        </div>

        <ul
          className={`absolute flex flex-col gap-2 bg-white px-5 py-4 rounded-lg transition-all duration-200 shadow-custom arrow-right min-w-44 leading-7 ${
            isExpandableMenuHovered || isExpandableMenuTitleHovered
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
          style={{
            top: `${expandableMenuPosition.top - 80}px`,
            right: `${expandableMenuPosition.right + 130}px`,
          }}
          onMouseEnter={() => setIsExpandableMenuHovered(true)}
          onMouseLeave={() => setIsExpandableMenuHovered(false)}
        >
          {subMenu.map((item) => {
            return (
              <li key={item.link}>
                <Link
                  to={item.link}
                  className="hover:text-secondary transition-colors duration-100"
                >
                  اکانت {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>

      <li className="list-item lg:hidden menu-Item">
        <div
          className=" submenu-titles px-5"
          onClick={() => setIsBurgerTitleClicked((prevState) => !prevState)}
        >
          {name}
          <Dropdown className="menu-svg" />
        </div>

        <div
          className={`w-full h-[0px] bg-base-100 rounded-md overflow-hidden transition-all duration-300
                      ${isBurgerTitleClicked && "!h-fit py-2"} `}
        >
          <ul className="flex flex-col gap-3">
            {subMenu.map((item) => {
              return (
                <li key={item.link}>
                  <Link to={item.link} className="hover:text-secondary transition-colors duration-100 pr-10">
                   اکانت {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    </>
  );
}
