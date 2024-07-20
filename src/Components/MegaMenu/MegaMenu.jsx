import React, { useState, useRef, useEffect } from "react";

import Dropdown from "../../assets/dropdown.svg?react";
import { Link } from "react-router-dom";
import ExpandableSubMenu from "./ExpandableSubMenu";

export default function MegaMenu({ navbarMenu }) {

  const [menuTitleHoveredIndex, setMenuTitleHoveredIndex] = useState(null);
  const [menuTitlePosition, setMenuTitlePosition] = useState({
    top: 0,
    right: 0,
  });
  const [isSubmenuHovered, setIsSubmenuHovered] = useState(false);
  const [isMenuTitleHovered, setIsMenuTitleHovered] = useState(false);
  const menuTitlesRefs = useRef([]);

  const handleMenuTitleMouseEnter = (index) => {
    const menuItem = menuTitlesRefs.current[index];
    const rect = menuItem.getBoundingClientRect();
    const rightPosition = window.innerWidth - rect.right;
    setMenuTitlePosition({ top: rect.bottom, right: rightPosition });
    setMenuTitleHoveredIndex(index);
    setIsMenuTitleHovered(true);
  };

  const handleMenuTitleMouseLeave = () => {
    setIsMenuTitleHovered(false);
  };

  const handleSubmenuMouseEnter = () => {
    setIsSubmenuHovered(true);
  };

  const handleSubmenuMouseLeave = () => {
    setIsSubmenuHovered(false);
  };

  return (
    <ul className="flex justify-between text-menuText text-xs text-menuItem  font-medium">
      {navbarMenu.map((menu) => {
        if (menu.options.length === 0) {
          return (
            <li className="menu-Item" key={menu.id}>
              <div>{menu.title}</div>
            </li>
          );
        } else if (menu.options.length > 0) {
          return (
            <li
              key={menu.id}
              className="menu-Item group"
              ref={(el) =>
                (menuTitlesRefs.current[navbarMenu.indexOf(menu)] = el)
              }
              onMouseEnter={() =>
                handleMenuTitleMouseEnter(navbarMenu.indexOf(menu))
              }
              onMouseLeave={handleMenuTitleMouseLeave}
            >
              <div className="submenu-titles">
                {menu.title}
                <Dropdown className="menu-svg" />
              </div>
            </li>
          );
        }
      })}

      <div
        className={`absolute menu-transition pt-3 rounded-lg text-sm tracking-tight font-normal ${
          !isSubmenuHovered && !isMenuTitleHovered && "pointer-events-none"
        }`}
        style={{
          top: `${menuTitlePosition.top - 5}px`,
          right: `${menuTitlePosition.right}px`,
        }}
        onMouseEnter={handleSubmenuMouseEnter}
        onMouseLeave={handleSubmenuMouseLeave}
      >
        <ul
          className={`bg-white py-4 rounded-lg shadow-custom arrow-top min-w-32 leading-7
                  ${
                    isSubmenuHovered || isMenuTitleHovered
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }
            `}
        >
          {(isSubmenuHovered || isMenuTitleHovered) &&
            navbarMenu[menuTitleHoveredIndex].options.map((item) => {
              if (item.subMenu === undefined) {
                return (
                  <li key={item.link}>
                    <Link
                      to={item.link}
                      className="hover:text-secondary transition-colors duration-100 px-5"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              } else if (item.subMenu !== undefined) {
                return (
                  <ExpandableSubMenu key={item.link} expandableMenu={item} />
                );
              }
            })}
        </ul>
      </div>
    </ul>
  );
}
