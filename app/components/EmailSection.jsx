"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aga2ful",
        "template_dejcph2",
        form.current,
        "MmJgOb79ALHOPHVyo"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="w-[100vw] md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mt-[5rem]"
    >
      <section className=" lg:w-[60vw]">
        <h4 className="ml-[50px] text-[20px] text-[#ffffff] font-bold tracking-wider">
          Contact Me
        </h4>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-[50px] flex flex-col lg:w-[10vw]"
        >
          <input
            className="bg-transparent w-[40vw] lg:w-[30vw] border border-[#ffffff] rounded-[3px] text-[#fbfbfb] p-1 placeholder:text-[10px] placeholder:text-[#ffffff] placeholder:px-[10px]"
            type="text"
            name="user_name"
            placeholder="Enter your full name..."
            required
          />
          <br />
          <input
            className="bg-transparent mt-3 w-[40vw] lg:w-[30vw] text-[#ffffff] rounded-[3px] p-1 border border-[#ffffff] placeholder:text-[10px] placeholder:text-[#ffffff] placeholder:px-[10px]
            "
            type="email"
            name="user_email"
            placeholder="Enter your email..."
            required
          />
          <br />
          <textarea
            className=" w-[40vw] h-[20vh] mt-3 rounded-[3px] lg:w-[30vw] bg-transparent text-[#ffffff] border border-[#ffffff] py-3 placeholder:text-[10px] placeholder:text-[#ffffff] placeholder:px-[10px]"
            name="message"
            cols="30"
            rows="10"
            placeholder="Write your message here..."
            required
          ></textarea>

          <button
            className=" mt-5  border border-[#5116e6] tracking-widest py-2 w-[40vw] lg:w-[30vw] text-[12px] lg:text-[16px] md:text-[14px] bg-[#541be4] rounded-[4px] text-[#fdfdfd]"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </section>

      <div className="w-[40vw] ml-[5rem]">
        <h5 className="text-xl font-bold text-white my-2">
          {" "}
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE]  mb-4 max-w-md ">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
