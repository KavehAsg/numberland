import React, { useState, useRef, useEffect } from "react";
import Dropdown from "../../assets/dropdown.svg?react";
import { Link } from "react-router-dom";

export default function ExpandableSubMenu({ expandableMenu }) {
  const { name, link, subMenu } = expandableMenu;

  const [subMenuTitlePosition, setSubMenuTitlePosition] = useState({
    top: 0,
    right: 0,
  });
  const [isSubmenuTitleHovered, setIsSubmenuTitleHovered] = useState(false);
  const [isExpandableMenuHovered, setIsExpandableMenuHovered] = useState(false);
  const subMenuRefs = useRef();

  const handleSubmenuTitleMouseEnter = () => {
    const menuItem = subMenuRefs.current;
    const rect = menuItem.getBoundingClientRect();
    const rightPosition = window.innerWidth - rect.right;
    setSubMenuTitlePosition({ top: rect.bottom, right: rightPosition });
    setIsSubmenuTitleHovered(true);
  };

  const handleSubmenuTitleLeave = () => {
    setIsSubmenuTitleHovered(false);
  };

  const handleExpandableSubmenuMouseEnter = () => {
    setIsExpandableMenuHovered(true);
  };

  const handleExpandableSubmenuMouseLeave = () => {
    setIsExpandableMenuHovered(false);
  };

  return (
    <li
      ref={subMenuRefs}
      className="group px-5"
      onMouseEnter={ handleSubmenuTitleMouseEnter}
      onMouseLeave={handleSubmenuTitleLeave}
      key={link}
    >
      <div className="submenu-titles">
        {name}
        <Dropdown className="menu-svg" />
      </div>

      <ul
        className={`absolute bg-white px-5 py-4 rounded-lg transition-all duration-200 shadow-custom arrow-right min-w-44 leading-7 ${
          isExpandableMenuHovered || isSubmenuTitleHovered
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          top: `${subMenuTitlePosition.top - 70}px`,
          right: `${subMenuTitlePosition.right + 140}px`,
        }}
        onMouseEnter={handleExpandableSubmenuMouseEnter}
        onMouseLeave={handleExpandableSubmenuMouseLeave}
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
  );
}
