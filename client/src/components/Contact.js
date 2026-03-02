import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

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
      link: "mailto:sachiniumayangana3@gmail.com",
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Could not connect to server." });
    } finally {
      setLoading(false);
    }
  };

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

          {/* MESSAGE FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full max-w-md"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-[#121212] p-8 rounded-2xl shadow-xl border border-gray-900">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-black text-white transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-black text-white transition-all"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-black text-white transition-all resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`bg-gradient-to-r from-black via-red-500 to-black text-white p-3 rounded-xl transition duration-300 ease-in-out hover:from-gray-900 hover:via-red-600 hover:to-gray-900 font-bold tracking-wide shadow-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {status.message && (
                <p className={`text-center text-sm mt-2 ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
