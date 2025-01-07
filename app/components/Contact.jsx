"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
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
      className="w-full md:grid sm:grid-cols-1 
      md:grid-cols lg:flex gap-8 items-center py-8 xl:gap-16 
      sm:py-16 mt-[5rem] px-4 sm:px-0"
    >
      <section className="w-full">
        <h4
          className="text-[30px] lg:text-[30px] lg:ml-[55px] 
        text-center lg:text-start  text-[#ffffff] font-bold tracking-wider"
        >
          Contact Me
        </h4>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full justify-center items-center 
          flex flex-col lg:w-[80%] mt-11"
        >
          <input
            className="bg-transparent w-full  border border-[#ffffff]
             rounded-[3px] text-[#fbfbfb] p-1 placeholder:text-[10px]
              placeholder:text-[#ffffff] placeholder:px-[10px]"
            type="text"
            name="user_name"
            placeholder="Enter your full name..."
            required
          />
          <br />
          <input
            className="bg-transparent mt-3 w-full text-[#ffffff] 
            rounded-[3px] p-1 border border-[#ffffff] placeholder:text-[10px] 
            placeholder:text-[#ffffff] placeholder:px-[10px]
            "
            type="email"
            name="user_email"
            placeholder="Enter your email..."
            required
          />
          <br />
          <textarea
            className=" w-full h-28 mt-3 rounded-[3px]
             bg-transparent text-[#ffffff] border border-[#ffffff] py-3 
             placeholder:text-[10px] placeholder:text-[#ffffff] placeholder:px-[10px]"
            name="message"
            cols="30"
            rows="10"
            placeholder="Write your message here..."
            required
          ></textarea>

          <button
            className=" mt-5  border border-[#5116e6] tracking-widest 
            py-2 w-full text-[12px] lg:text-[16px] md:text-[14px]
             bg-[#541be4] rounded-[4px] text-[#fdfdfd]"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </section>

      <div className="w-full sm:w-[90%] mt-[3rem]">
        <h5 className="text-xl font-bold text-white my-2">
          {` Let's Connect`}
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md w-full sm:w-[90%] ">
          {` I'm currently seeking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I'll
          try my best to get back to you!`}
        </p>
        <div className="flex flex-row gap-2">
          <Link href="https://github.com/Ndukwechima">
            <FaGithub size={30} color="white" />
          </Link>
          <Link href="https://www.linkedin.com/in/ndukwe-chima-349198196/">
            <FaLinkedin size={30} color="white" />
          </Link>
          <Link href="https://twitter.com/PlutonetDesignz">
            <FaXTwitter size={30} color="white" />
          </Link>
          <Link href="https://web.facebook.com/kennethchima.kenneth">
            <FaFacebookSquare size={30} color="white" />
          </Link>
          <Link href="https://wa.link/67fdxw">
            <FaWhatsappSquare size={30} color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
