import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import profileImage from "../assets/logo.jpeg"; // small profile icon

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 
  bg-gradient-to-b from-[#660000] via-black to-black shadow-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

          {/* LOGO WITH PROFILE IMAGE */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full border-2 border-red-500 shadow-md" />
            <span className="font-bold text-lg bg-gradient-to-r from-red-700 via-red-500 to-red-400 text-transparent bg-clip-text">
              H. M. Sachini Umayangana
            </span>

          </motion.div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-8 text-red-500 font-medium">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="relative group transition-colors duration-300 hover:text-[#FF3333]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-red-500 hover:text-[#fc0000] transition-colors duration-300 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gradient-to-b from-[#660000] to-black text-red-500 px-6 py-5 space-y-4 rounded-b-xl shadow-lg"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium hover:text-[#FF3333] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </header>



      {/* SPACER */}
      <div className="h-16 md:h-16"></div>
    </>
  );
}

export default Header;
