import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaJava, FaPython,
  FaNodeJs, FaPhp, FaAws, FaDocker, FaGitAlt, FaGithub
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiTypescript, SiExpress,
  SiSpringboot, SiMysql, SiMongodb, SiFirebase,
  SiJira, SiSelenium, SiApachejmeter, SiC, SiCplusplus
} from "react-icons/si";

const SkillCircle = ({ percentage, icon, name }) => {
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = percentage;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCurrentPercent(end);
        clearInterval(timer);
      } else {
        setCurrentPercent(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [percentage]);

  const sanitizedName = name.replace(/\s+/g, '-').toLowerCase();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative bg-[#0a0a0a] border border-gray-800 p-5 rounded-3xl flex flex-col items-center justify-center hover:border-rose-500/50 hover:bg-[#121212] transition-all duration-300 shadow-xl"
    >
      <div className="relative w-24 h-24 mb-3 flex items-center justify-center">
        {/* SVG Circular Progress */}
        <svg className="w-full h-full transform -rotate-90">
          <defs>
            <linearGradient id={`gradient-${sanitizedName}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#4c0519" />
            </linearGradient>
          </defs>
          <circle
            cx="48"
            cy="48"
            r="42"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            className="text-gray-800"
          />
          <motion.circle
            cx="48"
            cy="48"
            r="42"
            stroke={`url(#gradient-${sanitizedName})`}
            strokeWidth="4"
            fill="transparent"
            strokeDasharray="264"
            initial={{ strokeDashoffset: 264 }}
            whileInView={{ strokeDashoffset: 264 - (264 * percentage) / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            strokeLinecap="round"
            className="shadow-[0_0_20px_rgba(225,29,72,0.4)]"
          />
        </svg>

        {/* Icon in Center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 group-hover:text-rose-500 transition-colors duration-300">
          <div className="mb-0.5 scale-75">{icon}</div>
          <span className="text-[10px] font-bold text-white">{currentPercent}%</span>
        </div>
      </div>

      <span className="text-sm font-medium text-gray-300 group-hover:text-white mt-2">
        {name}
      </span>
    </motion.div>
  );
};

function Skills() {
  const categories = [
    {
      title: "Programming",
      skills: [
        { name: "Java", icon: <FaJava size={28} />, percentage: 90 },
        { name: "Python", icon: <FaPython size={28} />, percentage: 80 },
        { name: "C", icon: <SiC size={28} />, percentage: 85 },
        { name: "C++", icon: <SiCplusplus size={28} />, percentage: 75 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact size={28} />, percentage: 95 },
        { name: "Next.js", icon: <SiNextdotjs size={28} />, percentage: 85 },
        { name: "React Native", icon: <FaReact size={28} />, percentage: 80 },
        { name: "JavaScript", icon: <FaJsSquare size={28} />, percentage: 90 },
        { name: "TypeScript", icon: <SiTypescript size={28} />, percentage: 85 },
        { name: "HTML", icon: <FaHtml5 size={28} />, percentage: 95 },
        { name: "CSS", icon: <FaCss3Alt size={28} />, percentage: 90 },
        { name: "Tailwind", icon: <SiTailwindcss size={28} />, percentage: 95 },
      ],
    },
    {
      title: "Backend & DB",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={28} />, percentage: 85 },
        { name: "Express", icon: <SiExpress size={28} />, percentage: 85 },
        { name: "Spring Boot", icon: <SiSpringboot size={28} />, percentage: 80 },
        { name: "PHP", icon: <FaPhp size={28} />, percentage: 75 },
        { name: "MySQL", icon: <SiMysql size={28} />, percentage: 90 },
        { name: "MongoDB", icon: <SiMongodb size={28} />, percentage: 80 },
        { name: "Firebase", icon: <SiFirebase size={28} />, percentage: 75 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "AWS", icon: <FaAws size={28} />, percentage: 70 },
        { name: "Docker", icon: <FaDocker size={28} />, percentage: 75 },
        { name: "Git", icon: <FaGitAlt size={28} />, percentage: 90 },
        { name: "GitHub", icon: <FaGithub size={28} />, percentage: 90 },
        { name: "Jira", icon: <SiJira size={28} />, percentage: 85 },
        { name: "Selenium", icon: <SiSelenium size={28} />, percentage: 80 },
        { name: "JMeter", icon: <SiApachejmeter size={28} />, percentage: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24 py-20 px-6 md:px-12 bg-black text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-rose-400 text-transparent bg-clip-text text-center tracking-tight">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto rounded-full mt-2 mb-8"></div>
          <p className="text-gray-400 mb-16 text-center max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and toolsets across the software development lifecycle.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-8 text-gray-300 border-l-4 border-rose-600 pl-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {category.skills.map((skill, index) => (
                  <SkillCircle
                    key={index}
                    percentage={skill.percentage}
                    icon={skill.icon}
                    name={skill.name}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
