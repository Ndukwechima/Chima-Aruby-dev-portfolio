"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section className="w-full mt-[3rem] md:mt-[4rem]">
      <div
        className="w-full md:max-w-7xl mx-auto flex flex-col md:flex-row
       justify-between items-center gap-8 md:gap-0"
      >
        <motion.div
          className="place-self-center 
          text-center sm:text-left w-[80%] md:w-[40%] lg:w-[45%]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold h-[20vh] md:h-[20vh] lg:h-[20vh]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#673be6] to-[#00c0cf]">
              Hi, I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                " Chima Arubuike",
                1000,
                "Front-end",
                1000,
                "Software Developer,",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "40px", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p
            className="text-[#adb7be] w-[80vw] md:w-[30vw]  lg:w-[35vw] 
                   text-base sm:text-lg mb-6 lg:text-xl"
          >
            I am an entry-level front-end Software developer with a passion for
            creating interactive, user-friendly and responsive web applications.
          </p>
          <div>
            <a
              href="#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#673be6]  to-[#00c0cf] hover:bg-slate-200 text-white transform scale-100 hover:scale-110 transition-transform"
            >
              Hire Me
            </a>
            <button className="px-1 py-1 w-full  sm:w-fit rounded-full bg-gradient-to-br from-[#673be6] via-[#00c0cf] bg-transparent hover:bg-slate-800 text-white mt-6">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                <a href="https://drive.google.com/file/d/1UFbM6m4m5kPbJuyAIfrX-VAuJAtVM67q/view?usp=sharing">
                  Download CV
                </a>
              </span>
            </button>
          </div>
        </motion.div>
        <div>
          <div className="md:flex">
            <Image
              src="/images/rmv2.png"
              alt="hero image"
              className=""
              width={500}
              height={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
