"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section className="mt-[3rem]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left w-[80vw] md:w-[40vw] lg:w-[45vw]">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold h-[20vh] md:h-[20vh] lg:h-[20vh]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#673be6] to-[#00c0cf]">
              Hello, I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                " Chima, Aruby",
                1000,
                "Frontend",
                1000,
                "Web Developer,",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "40px", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] w-[80vw] md:w-[30vw]  lg:w-[35vw] text-base sm:text-lg mb-6 lg:text-xl">
            I am a frontend web developer with a passion for creating
            interactive, user-friendly and responsive web applications.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#673be6]  to-[#00c0cf] hover:bg-slate-200 text-white transform scale-100 hover:scale-110 transition-transform">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full  sm:w-fit rounded-full bg-gradient-to-br from-[#673be6] via-[#00c0cf] bg-transparent hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                {" "}
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#6c33e9] w-[250px] h-[250px]  lg:h[400px] hidden md:flex lg:flex relative">
            <Image
              src="/images/hero-image.jpg"
              alt="hero image"
              className="absolute  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full transform scale-100 hover:scale-110 transition-transform"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
