import Image from "next/image";
const Technology = () => {
  return (
    <div id="technology" className="mt-[5rem]">
      <section className="w-full flex justify-center flex-col items-center">
        <h4 className="text-center text-4xl font-bold mt-10  text-[#ffffff]">
          Technologies
        </h4>
        <section className="w-full mt-[5rem] flex items-center justify-center">
          <div className="w-[80vw] grid grid-cols-3  md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center ">
            <div className="bg-white py-4 px-6 rounded-md w-[5em] rotate-12 ">
              <Image
                className="  transition-transform transform scale-100 hover:scale-105 cursor-pointer  "
                src="/images/tech/html.svg"
                width={50}
                height={50}
                alt="img"
              />
            </div>
            <div className="bg-white py-4 px-6 rounded-md w-[5em]  rotate-12 ">
              <Image
                className="  transition-transform transform scale-100 hover:scale-105 cursor-pointer  "
                src="/images/tech/css.svg"
                width={50}
                height={50}
                alt="img"
              />
            </div>
            <div className="bg-white py-4 px-6 rounded-md w-[5em]  rotate-12">
              <Image
                className="  transition-transform transform scale-100 hover:scale-105 cursor-pointer  "
                src="/images/tech/javascript.svg"
                width={50}
                height={50}
                alt="img"
              />
            </div>
            <div className="bg-white py-4 px-6 rounded-md w-[5em]  rotate-12">
              <Image
                className="  transition-transform transform scale-100 hover:scale-105 cursor-pointer  "
                src="/images/tech/typescript.svg"
                width={50}
                height={50}
                alt="img"
              />
            </div>
            <div className="bg-white py-4 px-6 rounded-md w-[5em]  rotate-12 ">
              <Image
                className="  transition-transform transform scale-100 hover:scale-105 cursor-pointer  "
                src="/images/tech/tailwindcss.svg"
                width={50}
                height={50}
                alt="img"
              />
            </div>
            <div className="bg-white py-4 px-6 rounded-md w-[5em]  rotate-12">
              <Image
                className=" transition-transform transform scale-100 hover:scale-105 cursor-pointer  "
                src="/images/tech/react.svg"
                width={50}
                height={50}
                alt="img"
              />
            </div>
            <div className="bg-white py-4 px-6 rounded-md w-[5em]  rotate-12">
              <Image
                className="  transition-transform transform scale-100 hover:scale-105 cursor-pointer  "
                src="/images/tech/nextjs.svg"
                width={50}
                height={50}
                alt="img"
              />
            </div>
            <div className="bg-white py-4 px-6 rounded-md w-[5em]  rotate-12">
              <Image
                className="  transition-transform transform scale-100 hover:scale-105 cursor-pointer  "
                src="/images/tech/mui.svg"
                width={50}
                height={50}
                alt="img"
              />
            </div>
            <div className="bg-white py-4 px-6 rounded-md w-[5em]  rotate-12">
              <Image
                className=" transition-transform transform scale-100 hover:scale-105 cursor-pointer  "
                src="/images/tech/git.svg"
                width={50}
                height={50}
                alt="img"
              />
            </div>
            <div className="bg-white py-4 px-6 rounded-md w-[5em]  rotate-12">
              <Image
                className=" transition-transform transform scale-100 hover:scale-105 cursor-pointer  "
                src="/images/tech/github.svg"
                width={50}
                height={50}
                alt="img"
              />
            </div>
            <div className="bg-white py-4 px-6 rounded-md w-[5em]  rotate-12">
              <Image
                className=" transition-transform transform scale-100 hover:scale-105 cursor-pointer  "
                src="/images/tech/redux.svg"
                width={50}
                height={50}
                alt="img"
              />
            </div>
            <div className="bg-white py-4 px-6 rounded-md w-[5em]  rotate-12">
              <Image
                className=" transition-transform transform scale-100 hover:scale-105 cursor-pointer  "
                src="/images/tech/Figma.png"
                width={50}
                height={50}
                alt="img"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Technology;
