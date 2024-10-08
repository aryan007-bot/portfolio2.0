"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag"; // Ensure you create a ProjectTag component
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Xora - A SaaS landing page with modern UI",
    description: "Xora is a Modern UI/UX SaaS website developed using React.js and Tailwind CSS that exemplifies modern UI/UX principles.",
    imgUrl: "/1.svg.png",
    gitUrl: "https://github.com/yourusername/xora",
    previewUrl: "https://xora-bo7q.vercel.app/",
    tag: "Web",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    description: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    imgUrl: "/2.png",
    gitUrl: "https://github.com/yourusername/yoom",
    previewUrl: "https://yoom-git-main-aryan-s-projects-ab121786.vercel.app/",
    tag: "Web",
  },
  {
    id: 3,
    title: "Animated Apple iPhone 3D Website",
    description: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    imgUrl: "/3.png",
    gitUrl: "https://github.com/yourusername/apple-3d-website",
    previewUrl: "https://apple-three-psi.vercel.app/",
    tag: "Web",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Filtering logic: If tag is "All", show all projects
  const filteredProjects = tag === "All" 
    ? projectsData 
    : projectsData.filter((project) => project.tag === tag);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              imgUrl={project.imgUrl}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
