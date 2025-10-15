import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiReact, SiFigma } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Front-End Developer", icon: <FaReact size={30} /> },
    { name: "UI/UX Designer", icon: <SiFigma size={30} /> },
    { name: "Creative Thinker", icon: <SiReact size={30} /> },
    { name: "React", icon: <FaReact size={30} /> },
    { name: "React Native", icon: <SiReact size={30} /> },
    { name: "JavaScript", icon: <FaJsSquare size={30} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={30} /> },
    { name: "HTML", icon: <FaHtml5 size={30} /> },
    { name: "CSS", icon: <FaCss3Alt size={30} /> },
  ];

  return (
    <section id="skills" className="scroll-mt-24 py-16 px-10 bg-black text-white">
      {/* py-16 adds top and bottom padding */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-red-500 hover:text-[#fc0000]">
          Skills & Expertise
        </h2>
        <p className="text-gray-400 mb-10">
          A passionate front-end and UI/UX designer focused on building creative and user-friendly experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-[#121212] p-6 rounded-2xl shadow-md hover:shadow-red-500/50 transform hover:scale-105 transition duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center">
                {/* Icon color changes on card hover using group-hover */}
                <div className="text-red-500 group-hover:text-[#fc0000] mb-3">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
