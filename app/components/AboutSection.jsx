"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript.js</li>
         <li>Typescript</li>
        <li>React.js</li>
        <li>Next.js</li>
         <li>Zustand and Redux Toolkit</li>
        <li>Tailwind css</li>
        <li>Git & Github</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Nnamdi Azikiwe Univedrsity</li>
        <li>Learnt web development at LearnFactory, Aba City.</li>
         <li>Six months Internship at PORA TECH ACADEMY, Logos City.</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>Bs.certificate</li>
        <li>Front-end Software developement certificates.</li>
        <li>UI/UX design certificate.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white mt-[10rem]">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 1,
            type: "spring",
            stiffness: 120,
          }}
        >
          <Image
            className="rounded-full"
            src="/images/about.jpg"
            width={500}
            height={500}
            alt="img"
          />
        </motion.div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <motion.h2
            className="text-4xl font-bold text-white mb-4 text-center lg:text-start mt-12"
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-base lg:text-lg text-[#adb7be]"
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 2,
            }}
          >
            I am a junior front-end web developer with a passion for creating
            interactive, user-friendly, and responsive web applications. I have
            experience working with HTML, CSS, Javascript, React, Tailwind CSS,
            and Git; while building personal and team projects. I have also
            started learning Next.js and Typescript as both are highly needed in
            building a better applications. I am a fast learner and I am always
            looking foward to expand my knowledge and skill set to become a
            better web developer. I am a team player and I will be excited to
            work with developers, designers, and others to create amazing
            applications.
          </motion.p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
