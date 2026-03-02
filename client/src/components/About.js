import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logoImage from "../assets/logo.jpeg";

function About() {

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const roles = ["Software Developer", "Undergraduate Student", "Software Engineering Student"];
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="about"
      className="relative scroll-mt-16 min-h-[90vh] md:h-[90vh] overflow-hidden flex justify-center py-20 md:py-0 bg-black"
    >
      {/* Background Video (Hidden as per request for black background) */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video> */}

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black/90 to-black/80 z-1"></div>

      {/* Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 flex items-center h-full">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">

          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <h4 className="text-rose-500 font-bold tracking-[0.2em] mb-4 text-sm md:text-base uppercase">Welcome !</h4>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white">
              Hi, I'm <span className="text-rose-600">Sachini Umayangana</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-300 min-h-[1.5em]">
              a <span className="text-white border-r-2 border-rose-600 pr-1 animate-pulse">{displayText}</span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              I am an undergraduate <span className="text-rose-400 font-semibold">Software Engineer</span> with a passion for creating innovative solutions and learning new technologies. I enjoy combining creativity with technology to design user-friendly interfaces and build powerful, efficient systems.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <a
                href="#contact"
                className="px-8 py-3.5 border-2 border-rose-600/50 text-rose-500 font-bold rounded-xl hover:bg-rose-600/10 hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] transition-all duration-300 uppercase tracking-widest text-sm"
              >
                Find Me In
              </a>
              <a
                href="http://localhost:5000/api/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-gradient-to-r from-[#4c0519] via-[#e11d48] to-[#4c0519] text-white font-bold rounded-xl hover:scale-105 hover:shadow-[0_0_25px_rgba(225,29,72,0.4)] transition-all duration-300 uppercase tracking-widest text-sm border border-rose-400/20"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 md:order-2 flex justify-center items-center relative"
          >
            {/* Pulsing Glow Rings */}
            <div className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full border border-rose-600/30 animate-ping"></div>
            <div className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full border border-rose-500/20 animate-pulse delay-75"></div>

            <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-rose-600 via-transparent to-rose-400 shadow-[0_0_40px_rgba(225,29,72,0.3)]">
              <div className="w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-black/50 bg-black flex items-center justify-center">
                <img
                  src={logoImage}
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 opacity-70"
                />
              </div>
            </div>

            {/* Floating Decoration */}
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 text-rose-600/20 text-5xl md:text-7xl font-mono select-none">
              {"</>"}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
