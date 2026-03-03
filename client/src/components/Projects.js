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
    tags: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Melody Masters - Music Shop",
    description: "An individual project built with PHP and HTML5 to improve web development skills.",
    github: "https://github.com/HMSachi/Music-Instrument-Shop-Online-Store",
    hosted: "https://melodymasters.rf.gd",
    video: MusicShopVideo,
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with React and Tailwind CSS.",
    github: "https://github.com/HMSachi/portfolio",
    hosted: "https://portfolio-abv5.vercel.app/",
    video: PortfolioVideo,
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Chill Grand Restaurant MS",
    description: "A comprehensive restaurant management system sharing a unified database with the POS system via an Express-powered API.",
    github: "https://github.com/HMSachi/CHILL_GRAND_WEBSITE",
    hosted: "#",
    video: RestaurantVideo,
    tags: ["React", "Node.js", "Express", "Supabase"],
  },
  {
    title: "Chill Grand POS System",
    description: "A specialized POS system for Chill Grand, connected to a Supabase database and integrated with an Express backend.",
    github: "https://github.com/Pamod0504/chillgrand-restaurant-frontend",
    backend: "https://github.com/Pamod0504/chillgrand-restaurant-api",
    hosted: "#",
    video: PosVideo,
    tags: ["React", "Tailwind CSS", "REST API", "Node.js", "Python", "PostgreSQL", "Machine Learning"],
  },
  {
    title: "Easy Auto Car App",
    description: "A specialized mobile application for buying and selling cars.",
    github: "https://github.com/Pasindumi/Easy_Auto_Application_Frontend",
    backend: "https://github.com/Pasindumi/Easy_Auto_Application_Backend",
    hosted: "#",
    video: null,
    tags: ["React Native", "REST API", "Payhere", "Node.js", "PostgreSQL", "AWS S3"],
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-rose-400 text-transparent bg-clip-text">
            My Creative Works
          </h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto rounded-full mt-2"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -15 }}
              className="group relative bg-[#0a0a0a] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:border-rose-500/30 transition-all duration-500 flex flex-col h-full max-w-sm mx-auto hover:shadow-[0_20px_40px_rgba(225,29,72,0.1)]"
            >
              {/* Media Container */}
              <div className="relative h-48 overflow-hidden">
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
                    <span className="text-gray-600 italic text-xs uppercase tracking-widest">No Preview Available</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-rose-600 transition-all">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.hosted !== "#" && (
                      <a href={project.hosted} target="_blank" rel="noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-rose-600 transition-all">
                        <FaGlobe size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-gray-400 rounded-full group-hover:border-rose-500/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-rose-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-800/50 flex justify-between items-center">
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
                      className="text-rose-500 hover:text-rose-400 transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-1 bg-rose-500/10 px-3 py-1 rounded-full"
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
