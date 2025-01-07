"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";

import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 9,
    title: "Agribusiness landing page",
    description:
      "This is an Agribusiness landing page I designed and built for my friend. I used React.js, Typescript, and Tailwind CSS",
    image: "/images/projects/p9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ndukwechima/okenkwu",
    previewUrl: "https://okenkwu-theta.vercel.app/",
  },
  {
    id: 5,
    title: " Tasty Burger Website",
    description:
      "A simple landing page with Typescript, Next.js and Tailwind CSS",
    image: "/images/projects/p1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ndukwechima/Burger-website",
    previewUrl: "https://burger-website-kappa.vercel.app/",
  },

  {
    id: 2,
    title: "E-Commerce Website",
    description: "E-commerce website with Next.js, Typescript & Shadcn UI ",
    image: "/images/projects/p6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ndukwechima/E-shop-Next-Typescript",
    previewUrl: "https://e-shop-next-typescript.vercel.app/",
  },

  {
    id: 8,
    title: "Modern Dahboard",
    description:
      "This is a modern dashboard with Next.js, Typescript & Tailwind CSS",
    image: "/images/projects/p8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ndukwechima/Modern-React-Admin-dashboard-UI",
    previewUrl: "https://modern-react-admin-dashboard-ui.vercel.app/",
  },

  {
    id: 3,
    title: "Next.js Movie App",
    description: "This is a simple movie app built with Next.js",
    image: "/images/projects/p7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ndukwechima/Movie-Web-App",
    previewUrl: "https://movie-web-app-iota.vercel.app/",
  },

  {
    id: 4,
    title: "Advance Business Portfolio",
    description:
      "This is a business portfolio I built for a senior product designer at Opex Consulting Limited. I worked on the frontend part with Next.js Typescript and Tailwind CSS while my mentor worked on the backend.",
    image: "/images/projects/p10.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tembeushaseer/tembe-ushaseer",
    previewUrl: "https://www.ushaseer.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className=" mt-[10rem]">
      <h2 className="text-center text-4xl font-bold text-white mt-2
       mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center mx-auto py-6">
        <ul
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-[90vw]"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
