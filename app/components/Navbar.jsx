"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { MdClose } from "react-icons/md";


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
    <header className="w-full fixed top-0 left-0 right-0 z-10 bg-[#0b101f] h-[7rem]">
      <div className="flex max-w-[90%] mt-6 flex-wrap items-center lg:w-[100vw] justify-between mx-auto px-4 md:px-[3rem] ">
        <Link
          href={"/"}
          className=" text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            className="md:mt-8 transform scale-100 hover:scale-110 transition-transform"
            src="/images/Logo.png"
            width={100}
            height={100}
            alt="img"
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-slate-200 hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <div
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-slate-200 hover:text-white"
            >
              <button className="h-8 w-8 text-[16px] text-center">
                <MdClose />
              </button>
            </div>
          )}
        </div>
        <nav className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:p-0 md:flex-row mt-8 mr-7 md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </header>
  );
};

export default Navbar;
