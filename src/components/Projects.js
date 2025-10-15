import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa"; // icons for GitHub & hosted site
import CarVideo from "../assets/car.mp4";
import PortfolioVideo from "../assets/protfolio.mp4";
import WeatherVideo from "../assets/car.mp4";
import TodoVideo from "../assets/car.mp4";
import ChatVideo from "../assets/car.mp4";

// Project data
const projects = [
  {
    title: "Car Sale App",
    description: "A mobile app to buy and sell cars easily.",
    github: "https://github.com/yourusername/car-sale-app",
    hosted: "https://yourapp.com/car-sale",
    video: CarVideo,
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with React.",
    github: "https://github.com/yourusername/portfolio",
    hosted: "https://yourportfolio.com",
    video: PortfolioVideo,
  },
  {
    title: "Weather App",
    description: "Shows weather information using an API.",
    github: "https://github.com/yourusername/weather-app",
    hosted: "https://yourapp.com/weather",
    video: WeatherVideo,
  },
  {
    title: "To-Do App",
    description: "A simple To-Do list app with local storage.",
    github: "https://github.com/yourusername/todo-app",
    hosted: "https://yourapp.com/todo",
    video: TodoVideo,
  },
  {
    title: "Chat App",
    description: "A real-time chat app using Firebase.",
    github: "https://github.com/yourusername/chat-app",
    hosted: "https://yourapp.com/chat",
    video: ChatVideo,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-16 px-8 bg-black text-white"
    >
      <h2 className="text-3xl font-bold mb-12 text-red-500 text-center">
        My Projects
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#121212] border border-black rounded-2xl shadow-md hover:shadow-red-500/50 transition transform hover:-translate-y-2 p-5 flex flex-col items-center"
          >
            {/* Video preview */}
            {project.video && (
              <video
                src={project.video}
                controls
                className="rounded-2xl mb-4 w-full h-56 object-cover"
              />
            )}

            {/* Title & description */}
            <h3 className="text-lg font-semibold mb-2 text-[#fc0000] text-center">
              {project.title}
            </h3>
            <p className="mb-4 text-gray-300 text-center text-sm">
              {project.description}
            </p>

            {/* Icon links */}
            <div className="flex gap-6 mt-auto">
              {/* GitHub link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition transform hover:scale-125"
                title="View on GitHub"
              >
                <FaGithub size={28} />
              </a>

              {/* Hosted App link */}
              <a
                href={project.hosted}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#fc0000] transition transform hover:scale-125"
                title="View Live App"
              >
                <FaGlobe size={28} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Projects;
