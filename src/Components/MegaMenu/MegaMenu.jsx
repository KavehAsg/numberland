import React, { useState, useRef, useEffect, useReducer } from "react";

import Dropdown from "../../assets/dropdown.svg?react";
import CloseIcon from "../../assets/xmark.svg?react";
import { Link } from "react-router-dom";
import ExpandableSubMenu from "./ExpandableSubMenu";

function menuReducer(state, action) {
  switch (action.type) {
    case "menuTitle-mouseEnter":
      return { ...state, isMenuTitleHovered: true };
    case "menuTitle-mouseLeave":
      return { ...state, isMenuTitleHovered: false };
    case "burgerMenuTitle-click":
      return { ...state, isBurgerMenuTitleClicked: action.state };
    case "set-menuTitle-HoveredIndex":
      return { ...state, menuTitleHoveredIndex: action.hoveredIndex };
    case "set-burgerTitle-clickedIndex":
      return { ...state, burgerMenuTitleClickedIndex: action.clickedIndex };
    case "submenu-mouseEnter":
      return { ...state, isSubmenuHovered: true };
    case "submenu-mouseLeave":
      return { ...state, isSubmenuHovered: false };
    case "burgerMenu-open":
      return { ...state, isBurgerMenuClicked: true };
    case "burgerMenu-close":
      return { ...state, isBurgerMenuClicked: false };
    case "set-menuTitle-Position":
      return { ...state, menuTitlePosition: action.position };
  }
  throw Error("Unknown action: " + action.type);
}

const menuFirstInit = {
  menuTitleHoveredIndex: null,
  isMenuTitleHovered: false,
  menuTitlePosition: {
    top: 0,
    right: 0,
  },
  isSubmenuHovered: false,
  isBurgerMenuClicked: false,
  isBurgerMenuTitleClicked: false,
  burgerMenuTitleClickedIndex: null,
};

export default function MegaMenu({ navbarMenu }) {
  const [states, dispatch] = useReducer(menuReducer, menuFirstInit);
  const {
    menuTitleHoveredIndex,
    isMenuTitleHovered,
    menuTitlePosition,
    isSubmenuHovered,
    isBurgerMenuClicked,
    isBurgerMenuTitleClicked,
    burgerMenuTitleClickedIndex,
  } = states;

  const menuTitlesRefs = useRef([]);

  const handleMenuTitleMouseEnter = (index) => {
    const menuItem = menuTitlesRefs.current[index];
    const rect = menuItem.getBoundingClientRect();
    const rightPosition = window.innerWidth - rect.right;
    dispatch({
      type: "set-menuTitle-Position",
      position: { top: rect.bottom, right: rightPosition },
    });
    dispatch({ type: "set-menuTitle-HoveredIndex", hoveredIndex: index });
    dispatch({ type: "menuTitle-mouseEnter" });
  };

  const handleBurgerTitlesClick = (index) => {
    if (
      index == burgerMenuTitleClickedIndex &&
      isBurgerMenuTitleClicked == true
    )
      dispatch({ type: "burgerMenuTitle-click", state: false });
    else if (
      index == burgerMenuTitleClickedIndex &&
      isBurgerMenuTitleClicked == false
    )
      dispatch({ type: "burgerMenuTitle-click", state: true });
    else {
      dispatch({ type: "set-burgerTitle-clickedIndex", clickedIndex: index });
      dispatch({ type: "burgerMenuTitle-click", state: true });
    }
  };

  return (
    <>
      {/* Mega menu for desktop size */}
      <ul
        id="menu-container"
        className="lg:flex gap-2 justify-between text-menuText text-[17px] text-menuItem hidden"
      >
        {navbarMenu.map((menu) => {
          if (menu.options.length === 0) {
            return (
              <li key={menu.id} className="cursor-pointer">
                <Link to={menu.link} className="menu-Item inline-block">{menu.title}</Link>
              </li>
            );
          } else if (menu.options.length > 0) {
            return (
              <li
                key={menu.id}
                className="menu-Item group cursor-pointer"
                ref={(el) =>
                  (menuTitlesRefs.current[navbarMenu.indexOf(menu)] = el)
                }
                onMouseEnter={() =>
                  handleMenuTitleMouseEnter(navbarMenu.indexOf(menu))
                }
                onMouseLeave={() => dispatch({ type: "menuTitle-mouseLeave" })}
              >
                <div className="submenu-titles">
                  {menu.title}
                  <Dropdown className="menu-svg" />
                </div>
              </li>
            );
          }
        })}

        {/* submenu container */}
        <div
          className={`absolute menu-transition pt-3 rounded-lg text-base tracking-tight font-normal ${
            !isSubmenuHovered && !isMenuTitleHovered && "pointer-events-none"
          }`}
          style={{
            top: `${menuTitlePosition.top - 2}px`,
            right: `${menuTitlePosition.right}px`,
          }}
          onMouseEnter={() => dispatch({ type: "submenu-mouseEnter" })}
          onMouseLeave={() => dispatch({ type: "submenu-mouseLeave" })}
        >
          <ul
            className={`bg-white flex flex-col gap-[0.35rem] py-4 rounded-lg text-slimBlack shadow-custom arrow-top min-w-36 leading-7
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
        {/* End of submenu container */}
      </ul>
      {/* End of Mega menu for desktop size */}

      <div
        className="hamburgerMenu flex lg:hidden h-full items-center gap-2 hover:pr-1 transition-all"
        onClick={() => dispatch({ type: "burgerMenu-open" })}
      >
        <div id="bars-icon" className="w-4 flex flex-col justify-center gap-1">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span id="bars-title" className="text-primary">
          فهرست
        </span>
      </div>

      <div
        className={`absolute overflow-hidden flex w-screen h-dvh max-h-lvh top-0 right-[-100%] 
        ${
          isBurgerMenuClicked && "right-[0%]"
        } transition-all duration-300 z-10`}
      >
        <div
          className={`w-3/5 text-sm max-w-[320px] h-full overflow-y-scroll overflow-x-hidden bg-white z-20 pt-4 flex flex-col items-end ${
            isBurgerMenuClicked && "shadow-burgerShadow"
          }`}
        >
          <CloseIcon
            className={`w-7 mt-2 ml-4 ${!isBurgerMenuClicked && "rotate-90"} `}
            onClick={() => dispatch({ type: "burgerMenu-close" })}
          />

          <ul className="w-full">
            {navbarMenu.map((menu) => {
              if (menu.options.length === 0) {
                return (
                  <li className="menu-Item cursor-pointer" key={menu.id}>
                    <Link to={menu.link} className="px-4">
                      {menu.title}
                    </Link>
                    <div
                      className={`w-full h-[1px] bg-base-100 rounded-md`}
                    ></div>
                  </li>
                );
              } else if (menu.options.length > 0) {
                return (
                  <li key={menu.id} className="menu-Item group cursor-pointer">
                    <div
                      className="submenu-titles px-4"
                      onClick={() =>
                        handleBurgerTitlesClick(navbarMenu.indexOf(menu))
                      }
                    >
                      {menu.title}
                      <Dropdown className="menu-svg" />
                    </div>
                    <div
                      className={`w-full flex flex-col  h-[1px] bg-base-100 rounded-md overflow-hidden transition-all duration-300
                      ${
                        isBurgerMenuTitleClicked &&
                        burgerMenuTitleClickedIndex ==
                          navbarMenu.indexOf(menu) &&
                        "!h-fit py-2"
                      } `}
                    >
                      <ul>
                        {menu.options.map((item) => {
                          if (item.subMenu != undefined)
                            return (
                              <ExpandableSubMenu
                                key={item.link}
                                expandableMenu={item}
                              />
                            );
                          else if (item.subMenu === undefined) {
                            return (
                              <li key={item.link} className="menu-Item">
                                <Link
                                  to={item.link}
                                  className="hover:text-secondary transition-colors duration-100 px-5"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            );
                          }
                        })}
                      </ul>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>

        <div
          className={`w-2/5 h-full z-20 `}
          onClick={() => dispatch({ type: "burgerMenu-close" })}
        ></div>
      </div>
    </>
  );
}
