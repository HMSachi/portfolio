import {
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaJava, FaPython,
  FaNodeJs, FaPhp, FaAws, FaDocker, FaGitAlt, FaGithub
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiTypescript, SiExpress,
  SiSpringboot, SiMysql, SiPostgresql, SiMongodb, SiFirebase,
  SiJira, SiSelenium, SiApachejmeter, SiC, SiCplusplus
} from "react-icons/si";

function Skills() {
  const categories = [
    {
      title: "Programming",
      skills: [
        { name: "Java", icon: <FaJava size={28} /> },
        { name: "Python", icon: <FaPython size={28} /> },
        { name: "C", icon: <SiC size={28} /> },
        { name: "C++", icon: <SiCplusplus size={28} /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact size={28} /> },
        { name: "Next.js", icon: <SiNextdotjs size={28} /> },
        { name: "React Native", icon: <FaReact size={28} /> },
        { name: "JavaScript", icon: <FaJsSquare size={28} /> },
        { name: "TypeScript", icon: <SiTypescript size={28} /> },
        { name: "HTML", icon: <FaHtml5 size={28} /> },
        { name: "CSS", icon: <FaCss3Alt size={28} /> },
        { name: "Tailwind", icon: <SiTailwindcss size={28} /> },
      ],
    },
    {
      title: "Backend & DB",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={28} /> },
        { name: "Express", icon: <SiExpress size={28} /> },
        { name: "Spring Boot", icon: <SiSpringboot size={28} /> },
        { name: "PHP", icon: <FaPhp size={28} /> },
        { name: "MySQL", icon: <SiMysql size={28} /> },
        { name: "MongoDB", icon: <SiMongodb size={28} /> },
        { name: "Firebase", icon: <SiFirebase size={28} /> },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "AWS", icon: <FaAws size={28} /> },
        { name: "Docker", icon: <FaDocker size={28} /> },
        { name: "Git", icon: <FaGitAlt size={28} /> },
        { name: "GitHub", icon: <FaGithub size={28} /> },
        { name: "Jira", icon: <SiJira size={28} /> },
        { name: "Selenium", icon: <SiSelenium size={28} /> },
        { name: "JMeter", icon: <SiApachejmeter size={28} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24 py-20 px-6 md:px-12 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text text-center tracking-tight">
          Technical Expertise
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mt-2 mb-8"></div>
        <p className="text-gray-400 mb-16 text-center max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and toolsets across the software development lifecycle.
        </p>

        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xl font-semibold mb-8 text-gray-300 border-l-4 border-red-600 pl-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group bg-[#0a0a0a] border border-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center hover:border-red-500/50 hover:bg-[#121212] transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="text-gray-400 group-hover:text-red-500 transition-colors duration-300 mb-4">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
