import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaReact, FaJsSquare, FaHtml5, FaJava, FaPython,
  FaNodeJs, FaAws, FaDocker,
  FaGraduationCap, FaCertificate, FaExternalLinkAlt, FaAward,
  FaUsers, FaCode
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiTypescript,
  SiSpringboot, SiMysql, SiMongodb,
  SiC, SiCplusplus, SiFigma
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
        <svg className="w-full h-full transform -rotate-90">
          <defs>
            <linearGradient id={`gradient-${sanitizedName}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
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
            className="text-gray-900"
          />
          <motion.circle
            cx="48"
            cy="48"
            r="42"
            stroke={`url(#gradient-${sanitizedName})`}
            strokeWidth="5"
            fill="transparent"
            strokeDasharray="264"
            initial={{ strokeDashoffset: 264 }}
            whileInView={{ strokeDashoffset: 264 - (264 * percentage) / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            strokeLinecap="round"
            className="shadow-[0_0_20px_rgba(244,63,94,0.3)]"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 group-hover:text-rose-400 transition-colors duration-300">
          <div className="mb-0.5 scale-75">{icon}</div>
          <span className="text-[10px] font-bold text-gray-300">{currentPercent}%</span>
        </div>
      </div>

      <span className="text-sm font-medium text-gray-400 group-hover:text-white mt-2">
        {name}
      </span>
    </motion.div>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12 text-center"
  >
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <div className="w-12 h-1 bg-rose-500/50 mx-auto rounded-full mb-4"></div>
    {subtitle && <p className="text-gray-400 max-w-xl mx-auto">{subtitle}</p>}
  </motion.div>
);

function Skills() {
  const [activeTab, setActiveTab] = useState("technical");

  const tabs = [
    { id: "technical", label: "Technical Skills", icon: <FaCode /> },
    { id: "education", label: "Education & Experience", icon: <FaGraduationCap /> },
    { id: "certifications", label: "Certifications", icon: <FaCertificate /> },
  ];

  const technicalCategories = [
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
        { name: "JavaScript", icon: <FaJsSquare size={28} />, percentage: 90 },
        { name: "TypeScript", icon: <SiTypescript size={28} />, percentage: 85 },
        { name: "HTML/CSS", icon: <FaHtml5 size={28} />, percentage: 95 },
        { name: "Tailwind", icon: <SiTailwindcss size={28} />, percentage: 95 },
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={28} />, percentage: 85 },
        { name: "Spring Boot", icon: <SiSpringboot size={28} />, percentage: 80 },
        { name: "MySQL", icon: <SiMysql size={28} />, percentage: 90 },
        { name: "MongoDB", icon: <SiMongodb size={28} />, percentage: 80 },
        { name: "AWS", icon: <FaAws size={28} />, percentage: 70 },
        { name: "Docker", icon: <FaDocker size={28} />, percentage: 75 },
      ],
    },
    {
      title: "Tools & Methodologies",
      skills: [
        { name: "Figma", icon: <SiFigma size={28} />, percentage: 85 },
        { name: "Agile Practice", icon: <FaUsers size={28} />, percentage: 90 },
      ],
    },
  ];

  const certifications = [
    {
      title: "Getting Started with Full Stack Development",
      provider: "Simplilearn",
      id: "9798586",
      date: "Feb 2026",
      link: "https://simpli-web.app.link/e/f8AsdX1Gs0b",
      skills: ["Full-Stack Development"],
      logo: "https://www.simplilearn.com/ice9/new_navigation_images/simplilearn-logo.svg"
    },
    {
      title: "Introduction to JIRA",
      provider: "Simplilearn",
      id: "9796053",
      date: "Feb 2026",
      link: "https://simpli-web.app.link/e/ld9CMjIPr0b",
      skills: ["Jira"],
      logo: "https://www.simplilearn.com/ice9/new_navigation_images/simplilearn-logo.svg"
    },
    {
      title: "SQL Analytics and BI on Databricks",
      provider: "Simplilearn",
      id: "9785684",
      date: "Jan 2026",
      link: "https://simpli-web.app.link/e/fMwQdYqwn0b",
      skills: ["SQL", "Databricks"],
      logo: "https://www.simplilearn.com/ice9/new_navigation_images/simplilearn-logo.svg"
    },
    {
      title: "Free DevOps Course Certification",
      provider: "Intellipaat",
      id: "31679-1655-320460",
      date: "Jan 2026",
      link: "https://intellipaat.com/academy/certificate-link/?Yz0xNjU1JnU9MzIwNDYwJmV4dD0x",
      skills: ["DevOps"],
      logo: "https://intellipaat.com/wp-content/themes/intellipaat/images/intellipaat-logo.png"
    },
    {
      title: "Free AWS Certification Course",
      provider: "Intellipaat",
      id: "31679-1654-320460",
      date: "Jan 2026",
      link: "https://intellipaat.com/academy/certificate-link/?Yz0xNjU0JnU9MzIwNDYwJmV4dD0x",
      skills: ["Amazon Web Services (AWS)"],
      logo: "https://intellipaat.com/wp-content/themes/intellipaat/images/intellipaat-logo.png"
    }
  ];

  return (
    <section id="skills" className="scroll-mt-24 py-20 px-6 md:px-12 bg-black text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-gray-500 text-transparent bg-clip-text tracking-tight">
            Qualifications & Skills
          </h2>
          <div className="w-16 h-1 bg-rose-500/30 mx-auto rounded-full mb-8"></div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 border ${activeTab === tab.id
                ? "bg-rose-500/10 border-rose-500/50 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.15)]"
                : "bg-transparent border-gray-800 text-gray-500 hover:border-gray-700 hover:text-gray-300"
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === "technical" && (
              <div className="space-y-16">
                {technicalCategories.map((category, catIndex) => (
                  <div key={catIndex}>
                    <SectionHeader title={category.title} />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
                      {category.skills.map((skill, index) => (
                        <SkillCircle
                          key={index}
                          percentage={skill.percentage}
                          icon={skill.icon}
                          name={skill.name}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "education" && (
              <div className="max-w-4xl mx-auto space-y-12">
                <div className="bg-[#0a0a0a] border border-gray-900 p-8 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-rose-500/10 transition-all duration-500"></div>
                  <SectionHeader title="Education" />
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="bg-[#121212] p-4 rounded-2xl border border-gray-800">
                      <FaGraduationCap className="text-rose-400/80 text-5xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-200 mb-1">Bachelor's degree, Software Engineering</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-rose-400/80 font-semibold text-lg">CINEC Campus</p>
                        <span className="text-gray-700">|</span>
                        <span className="text-gray-500 text-sm font-medium">2023 - Present</span>
                        <span className="text-[10px] bg-rose-500/10 text-rose-400/70 px-2 py-0.5 rounded-full border border-rose-500/20 uppercase tracking-wider">Undergraduate Student</span>
                      </div>
                      <p className="text-gray-500 leading-relaxed">Comprehensive study of software architecture, data structures, algorithms, and full-stack development methodologies.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0a0a0a] border border-gray-900 p-8 rounded-3xl">
                  <SectionHeader title="Leadership & Activities" />
                  <div className="space-y-8">
                    {[
                      {
                        role: "Treasurer",
                        org: "Techstrike Club – CINEC Campus",
                        period: "2025 – 2026",
                        desc: "Managed budgets for 5+ events with 100% financial accuracy.",
                        icon: <FaAward className="text-rose-400/70" />
                      },
                      {
                        role: "Web Development & IoT Coordinator",
                        org: "Techstrike Club",
                        period: "2024 – 2025",
                        desc: "Mentored 15+ students and improved project delivery timelines.",
                        icon: <FaCode className="text-rose-400/70" />
                      },
                      {
                        role: "Student Committee Member",
                        org: "6th CINEC International Research Symposium",
                        period: "2025",
                        desc: "Coordinated research presentations and event logistics.",
                        icon: <FaUsers className="text-rose-400/70" />
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 group">
                        <div className="mt-1 bg-[#121212] p-3 rounded-xl border border-gray-800 group-hover:border-rose-400/30 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-x-3 mb-1">
                            <h5 className="text-lg font-bold text-gray-200">{item.role}</h5>
                            <span className="text-gray-700">|</span>
                            <span className="text-rose-400/70 font-medium">{item.period}</span>
                          </div>
                          <p className="text-gray-400 mb-1">{item.org}</p>
                          <p className="text-gray-500 text-sm">• {item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "certifications" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-[#0a0a0a] border border-gray-900 p-6 rounded-3xl group flex flex-col justify-between hover:border-gray-700 transition-all duration-300"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="h-10 w-auto flex items-center bg-white/5 px-3 rounded-lg border border-gray-800">
                          <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{cert.provider}</span>
                        </div>
                        <span className="text-gray-600 text-[10px] font-bold bg-gray-900/50 px-2 py-1 rounded border border-gray-800">{cert.date}</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-200 mb-2 leading-tight group-hover:text-rose-400/80 transition-colors">{cert.title}</h4>
                      <p className="text-gray-600 text-[10px] mb-3 font-mono tracking-tighter">CREDENTIAL ID: {cert.id}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {cert.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full border border-gray-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#121212] border border-gray-800 rounded-xl text-sm font-semibold text-gray-400 hover:text-white hover:bg-rose-500/20 hover:border-rose-500/40 transition-all duration-300"
                    >
                      Show Credential
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Skills;

