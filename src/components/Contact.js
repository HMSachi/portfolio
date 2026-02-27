import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const contactLinks = [
    {
      name: "Phone",
      icon: <FaPhoneAlt size={24} />,
      link: "tel:+94717299419",
      color: "hover:text-blue-500",
      label: "Call Me"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={24} />,
      link: "https://wa.me/94717299419",
      color: "hover:text-green-500",
      label: "WhatsApp"
    },
    {
      name: "Email",
      icon: <FaEnvelope size={24} />,
      link: "mailto:sachiniumayangana3@gmail.com", // Placeholder - please adjust
      color: "hover:text-red-500",
      label: "Email"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      link: "https://www.linkedin.com/in/sachini-umayangana-632109283/",
      color: "hover:text-blue-600",
      label: "LinkedIn"
    },
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      link: "https://github.com/HMSachi",
      color: "hover:text-white",
      label: "GitHub"
    }
  ];

  return (
    <section id="contact" className="scroll-mt-24 py-20 px-6 bg-black text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mt-2"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">

          {/* SOCIAL ICONS GROUP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {contactLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-2 group transition-all duration-300 ${item.color}`}
                title={item.name}
              >
                <div className="p-4 bg-[#121212] rounded-full border border-gray-800 group-hover:border-red-500 group-hover:scale-110 transition-all shadow-lg text-red-500 group-hover:text-current">
                  {item.icon}
                </div>
                <span className="text-xs font-medium text-gray-400 group-hover:text-white">{item.name}</span>
              </a>
            ))}
          </motion.div>

          {/* MESSAGE FORM - Restored to early style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full max-w-md"
          >
            <form className="flex flex-col gap-4 bg-[#121212] p-8 rounded-2xl shadow-xl border border-gray-900">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-black text-white transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-black text-white transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-black text-white transition-all resize-none"
              ></textarea>

              <button className="bg-gradient-to-r from-black via-red-500 to-black text-white p-3 rounded-xl transition duration-300 ease-in-out hover:from-gray-900 hover:via-red-600 hover:to-gray-900 font-bold tracking-wide shadow-lg">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
