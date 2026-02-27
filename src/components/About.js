import { motion } from "framer-motion";
import profileImage from "../assets/profile.png";
import backgroundVideo from "../assets/background.mp4";

function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-16 h-[90vh] overflow-hidden flex justify-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/70 to-black/30 z-1"></div>

      {/* Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 flex items-center h-full">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">

          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">
              About Me
            </h2>
            <div className="w-24 h-1 bg-red-600 rounded-full mb-8"></div>

            <p className="text-gray-200 text-lg leading-relaxed mb-4">
              I’m{" "}
              <span className="font-semibold text-white">
                H. M. Sachini Umayangana
              </span>
              , an enthusiastic{" "}
              <span className="text-pink-400 font-semibold">Undergraduate Student</span>{" "}
              pursuing my degree in{" "}
              <span className="text-red-400 font-semibold">Software Engineering</span>.
            </p>

            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              I’m a passionate{" "}
              <span className="text-pink-400 font-semibold">Front-End</span> and{" "}
              <span className="text-red-400 font-semibold">Back-End Developer</span>{" "}
              who loves creating interactive, responsive, and visually appealing web applications.
              I enjoy combining creativity with technology to design user-friendly interfaces and
              build powerful, efficient systems that bring ideas to life.
            </p>


            <div className="flex gap-4 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-black via-red-500 to-black text-white font-medium rounded-xl hover:scale-105 transition-transform duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-pink-500 text-pink-400 font-medium rounded-xl hover:bg-pink-600/10 hover:text-pink-300 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end items-end"
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-72 md:w-[24rem] lg:w-[28rem] h-auto object-cover rounded-3xl translate-y-6 md:translate-y-8"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
