import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          {" "}
          <Image src="/images/logo.png" width={100} height={100} alt="img" />
        </span>
        <p className="text-gray-500 text-center text-[12px] mx-[30px] tracking-widest">
          &copy;2023 Aruby.<span className="text-[#45e6fb]">Dev</span>. All
          Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
