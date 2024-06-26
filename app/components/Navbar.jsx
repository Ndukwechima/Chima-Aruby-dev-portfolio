"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Technology",
    path: "#technology",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#0b101f] h-[7rem]">
      <div className="flex flex-wrap items-center lg:w-[100vw] justify-between mx-auto px-4 ">
        <Link
          href={"/"}
          className=" text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            className=" mt-10 ml-7 transform scale-100 hover:scale-110 transition-transform"
            src="/images/Logo.png"
            width={100}
            height={100}
            alt="img"
          />
        </Link>
        <div className="mobile-menu block md:hidden mt-10">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <button className="h-6 w-6 text-[16px] text-center">x</button>
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto h-9" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row mt-8 mr-7 md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null} 
    </nav>
  );
};

export default Navbar;
