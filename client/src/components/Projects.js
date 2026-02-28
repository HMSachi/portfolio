import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import TechsVideo from "../assets/techs.mp4";
import MusicShopVideo from "../assets/music_shop.mp4";
import RestaurantVideo from "../assets/resturant.mp4";
import PosVideo from "../assets/pos.mp4";
import PortfolioVideo from "../assets/protfolio.mp4";

const projects = [
  {
    title: "Techstrike Club Official Website",
    description: "Official website for Techstrike Club, developed between Sep 2025 and Jan 2026.",
    github: "https://github.com/Pasindumi/Techstrike_WebSite",
    hosted: "https://techstrike.vercel.app",
    video: TechsVideo,
    tags: ["React", "Vercel", "Web"],
  },
  {
    title: "Melody Masters - Music Shop",
    description: "An individual project built with PHP and HTML5 to improve web development skills.",
    github: "https://github.com/HMSachi/Music-Instrument-Shop-Online-Store",
    hosted: "https://melodymasters.rf.gd",
    video: MusicShopVideo,
    tags: ["PHP", "SQL", "E-commerce"],
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with React and Tailwind CSS.",
    github: "https://github.com/HMSachi/portfolio",
    hosted: "#",
    video: PortfolioVideo,
    tags: ["React", "Tailwind", "Motion"],
  },
  {
    title: "Chill Grand Restaurant MS",
    description: "A comprehensive restaurant management system, currently in development.",
    github: "https://github.com/HMSachi/CHILL_GRAND_WEBSITE",
    hosted: "#",
    video: RestaurantVideo,
    tags: ["Management", "Full-Stack"],
  },
  {
    title: "Chill Grand POS System",
    description: "A specialized POS system for Chill Grand, featuring microservices architecture.",
    github: "https://github.com/Pamod0504/chillgrand-restaurant-frontend",
    backend: "https://github.com/Pamod0504/chillgrand-restaurant-api",
    hosted: "#",
    video: PosVideo,
    tags: ["POS", "Backend", "Frontend"],
  },
  {
    title: "Easy Auto Mobile App",
    description: "A specialized mobile application for buying and selling cars.",
    github: "https://github.com/Pasindumi/Easy_Auto_Application_Frontend",
    backend: "https://github.com/Pasindumi/Easy_Auto_Application_Backend",
    hosted: "#",
    video: null,
    tags: ["Mobile", "React Native"],
  },
];

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 px-6 md:px-12 bg-black text-white overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">
            My Creative Works
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mt-2"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#0a0a0a] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:border-gray-600 transition-all duration-500 flex flex-col h-full max-w-sm mx-auto"
            >
              {/* Media Container */}
              <div className="relative h-40 overflow-hidden">
                {project.video ? (
                  <video
                    src={project.video}
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                    <span className="text-gray-600 italic text-[10px]">No Preview Available</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-gray-600 transition-colors">
                        <FaGithub size={16} />
                      </a>
                    )}
                    {project.hosted !== "#" && (
                      <a href={project.hosted} target="_blank" rel="noreferrer" className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-gray-600 transition-colors">
                        <FaGlobe size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags?.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-zinc-800/50 border border-zinc-700 text-gray-400 rounded group-hover:border-red-500/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-800 flex justify-between items-center">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-semibold"
                    >
                      <FaGithub size={18} /> {project.backend ? "Frontend" : "Source"}
                    </a>
                    {project.backend && (
                      <a
                        href={project.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-semibold"
                      >
                        <FaGithub size={18} /> Backend
                      </a>
                    )}
                  </div>
                  {project.hosted !== "#" && (
                    <a
                      href={project.hosted}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-400 transition-colors text-xs font-bold uppercase tracking-tighter flex items-center gap-1"
                    >
                      Live <FaGlobe size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
