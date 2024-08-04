import React, { useState } from "react";
import { close, logo, menu } from "../assets/";

type NavbarType = {
  data?: any;
};

type NavItemType = {
  id?: string;
  title?: string;
};

const Navbar: React.FC<NavbarType> = ({ data }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const { navLinks = [] } = data;

  const navItemCls = (nav: any, index: number) => {
    return `font-poppins font-normal cursor-pointer text-[16px] ${
      active === nav.title ? "text-white" : "text-dimWhite"
    } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`;
  };

  const menuWrapperCls = `${
    !toggle ? "hidden" : "flex"
  } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`;

  const menuItemCls = (nav: NavItemType, index: number) => {
    return `font-poppins font-medium cursor-pointer text-[16px] ${
      active === nav.title ? "text-white" : "text-dimWhite"
    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`;
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav: NavItemType, index: number) => (
          <li
            key={nav.id}
            className={navItemCls(nav, index)}
            onClick={() => setActive(nav.title || "Home")}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div className={menuWrapperCls}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav: NavItemType, index: number) => (
              <li
                key={nav.id}
                className={menuItemCls(nav, index)}
                onClick={() => setActive(nav.title || "Home")}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
