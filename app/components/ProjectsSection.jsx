"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";

import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React News Website",
    description: "Project 1 description",
    image: "/images/projects/p2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ndukwechima/News-Blog-Website-React.js",
    previewUrl: "/",
  },
  {
    id: 2,
    title: " Fast-Hands Website",
    description: "Project 2 description",
    image: "/images/projects/p1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ndukwechima/Fast-hand-project",
    previewUrl: "https://fast-hand-project.vercel.app/",
  },
  {
    id: 3,
    title: "Uloma Real-Estate Website",
    description: "Project 3 description",
    image: "/images/projects/p3.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/Ndukwechima/Uloma-Real-Estate-Management-Project",
    previewUrl:
      "https://uloma-real-estate-management-project-jf6ocpzbi-chimandukwer.vercel.app/",
  },
  {
    id: 4,
    title: "My Favorite Food Website",
    description: "Project 4 description",
    image: "/images/projects/p4.png",
    tag: ["All", "design"],
    gitUrl: "https://github.com/Ndukwechima/My-Favorite-Food-Website",
    previewUrl: "https://my-favorite-food-website.vercel.app/",
  },
  {
    id: 5,
    title: "React-Typescript Simple Fitness website",
    description: "Project 5 description",
    image: "/images/projects/p5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ndukwechima/Flex-fit-react-typescript/",
    previewUrl: "",
  },
  {
    id: 6,
    title: "E-commerce Website",
    description: "Project 5 description",
    image: "/images/projects/p6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ndukwechima/E-commerce-website",
    previewUrl: "https://e-commerce-website-eight-gold.vercel.app/",
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
