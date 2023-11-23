import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer w-full border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex-col lg:flex justify-between ">
        <Link
          href={"/"}
          className="flex justify-center items-center md:flex md:justify-between lg:flex lg:justify-between "
        >
          <Image src="/images/Logo.png" width={100} height={100} alt="img" />
        </Link>
        <p className="text-gray-500 text-center text-[12px] mx-[30px] tracking-widest">
          &copy;2023 Aruby.<span className="text-[#45e6fb]">Dev</span>. All
          right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
