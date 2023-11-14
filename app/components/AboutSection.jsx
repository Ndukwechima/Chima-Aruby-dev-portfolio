"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript.js</li>
        <li>React.js</li>
        <li>Next.js</li>
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
        <li>Learnt web development at LearnFactory Nig.</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>Bs.certificate</li>
        <li>Web developement certificate</li>
        <li>UI/UX design certificate</li>
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
    <section className="text-white mt-[10rem]">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-full"
          src="/images/about-image.jpg"
          width={500}
          height={500}
          alt="img"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#adb7be]">
            I am a frontend web developer with a passion for creating
            interactive, user-friendly and responsive web applications. I have
            experience working with HTML, CSS, Javascript, React, Next.js,
            Tailwing css, and Git; while building personal and team projects. I
            am a quick learner and I am always looking to expand my knowledge
            and skill set to become a better web developer. I have a leadership
            skill and I am currently leading two different teams in building a
            full-stack web applications. I am a team player and I am excited to
            work with both developers, designers and others to create amazing
            applications
          </p>
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
