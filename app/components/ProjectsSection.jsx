"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";

import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 5,
    title: " Tasty Burger Website",
    description: "This project is to learn typescript with Next.js",
    image: "/images/projects/p1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ndukwechima/Burger-website",
    previewUrl: "https://burger-website-kappa.vercel.app/",
  },

  {
    id: 2,
    title: "E-Commerce Website",
    description: "This is a React E-commerce website with Bootstrap",
    image: "/images/projects/p6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ndukwechima/Shopping-store-website",
    previewUrl:
      "https://shopping-store-website-7uci5l2by-chimandukwer.vercel.app/",
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
    id: 1,
    title: "Food category Website",
    description: "This is a simple UI food category website",
    image: "/images/projects/p4.png",
    tag: ["All", "design"],
    gitUrl: "https://github.com/Ndukwechima/My-Favorite-Food-Website",
    previewUrl: "https://my-favorite-food-website.vercel.app/",
  },

  // {
  //   id: 4,
  //   title: "React News Website",
  //   description: "This is my first React project built while learning react",
  //   image: "/images/projects/p2.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/Ndukwechima/News-Blog-Website-React.js",
  //   previewUrl: "/",
  // },

  {
    id: 6,
    title: "React Typescript Fitness Website",
    description: "This is a React and Typescript Simple fitnes website",
    image: "/images/projects/p5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ndukwechima/Flex-fit-react-typescript/",
    previewUrl:
      "https://flex-fit-react-typescript-otl2scyrp-chimandukwer.vercel.app/",
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
    <section id="projects" className="mt-[10rem]">
      <h2 className="text-center text-4xl font-bold text-white mt-2 mb-8 md:mb-12">
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
