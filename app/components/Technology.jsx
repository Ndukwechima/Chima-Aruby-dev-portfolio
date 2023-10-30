"use client";
import React from "react";
import Image from "next/image";

const Technology = () => {
  return (
    <div id="technology" className="mt-[5rem]">
      <section className="w-screen flex justify-center flex-col items-center min-h-[40vh]">
        <h4 className="text-center text-4xl font-bold mt-10 ml-[-5rem]  text-[#ffffff]">
          Technologies
        </h4>
        <section className="w-[100vw] flex justify-center items-center mt-[7rem]">
          <main className="w-[100vw] lg:h-[40vh] ">
            <div className="flex justify-around">
              <Image
                className="w-[40px] h-[40px]  transition-transform transform scale-100 hover:scale-105 cursor-pointer  "
                src="/images/tech/HTML.png"
                width={50}
                height={50}
              />
              <Image
                className="w-[40px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[40px]"
                src="/images/tech/CSS.png"
                width={50}
                height={50}
              />
              <Image
                className="w-[35px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[35px]"
                src="/images/tech/javascript.png"
                width={50}
                height={50}
              />
              <Image
                className="w-[35px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[35px]"
                src="/images/tech/React.png"
                width={50}
                height={50}
              />
              <Image
                className="w-[35px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[35px]"
                src="/images/tech/Next.jpeg"
                width={50}
                height={50}
              />
              <Image
                className="w-[35px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[35px]"
                src="/images/tech/Tailwind.png"
                width={50}
                height={50}
              />
            </div>
            <div className="flex justify-around mt-[3rem]">
              <Image
                className="w-[40px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[30px]"
                src="/images/tech/bootstrap.jpg"
                width={50}
                height={50}
              />
              <Image
                className="w-[40px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[40px]"
                src="/images/tech/Figma.png"
                width={50}
                height={50}
              />
              <Image
                className="w-[40px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[40px]"
                src="/images/tech/Photoshop.jpg"
                width={50}
                height={50}
              />
              <Image
                className="w-[25px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[28px]"
                src="/images/tech/Illustrator.jpg"
                width={50}
                height={50}
              />
              <Image
                className="w-[38px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[38px]"
                src="/images/tech/XD.webp"
                width={50}
                height={50}
              />
              <Image
                className="w-[38px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[38px]"
                src="/images/tech/Graphql.png"
                width={50}
                height={50}
              />
            </div>
          </main>
        </section>
      </section>
    </div>
  );
};

export default Technology;
