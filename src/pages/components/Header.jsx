import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  // Animation variants for navigation items
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.1, color: "#e9c46a" },
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  return (
    <header
      className={`fixed w-full !scroll-smooth z-50 transition-transform duration-300 bg-[#023047] hover:bg-[#023047be] ${
        isHeaderVisible
          ? "translate-y-0 shadow-md opacity-95"
          : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="/"
            className="group relative inline-block font-semibold text-xl uppercase rounded-md text-[#e9c46a] focus:ring-3  focus:outline-hidden"
          >
            <span className="absolute inset-0 border-2 border-[#e9c46a] rounded-md group-hover:bg-[#e9c46a] transition duration-500"></span>
            <span className="block border-2 border-[#e9c46a] rounded-md bg-[#023047] px-4 py-2 duration-500 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
              R
            </span>
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#e9c46a] focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center text-white">
          {["About", "Experience", "Work", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-white  font-mono"
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="text-[#e9c46a] mr-2 font-mono">{`0${
                index + 1
              }.`}</span>
              {item}
            </motion.a>
          ))}
          <motion.button
            className="group relative inline-block text-sm font-medium text-[#e9c46a] focus:ring-3 focus:outline-hidden cursor-pointer"
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <span className="absolute inset-0 border-2 border-[#e9c46a] rounded-md group-hover:bg-[#e9c46a] transition duration-500"></span>
            <span className="block tracking-widest border-2 border-[#e9c46a] rounded-md bg-[#023047] px-6 py-3 transition duration-500 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
              Resume
            </span>
          </motion.button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden h-screen w-full fixed top-0 z-50 right-0 bg-[#264653] flex flex-col space-y-4 p-4"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#264653] flex flex-col space-y-4 p-4">
              <div className="md:hidden relative">
                <button
                  onClick={toggleMenu}
                  className="text-[#e9c46a] focus:outline-none absolute right-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x w-8 h-8"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              {["About", "Experience", "Work", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className="text-white hover:text-[#e9c46a] font-mono"
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-[#e9c46a] mr-2 font-mono">{`0${
                    index + 1
                  }.`}</span>
                  {item}
                </motion.a>
              ))}
              <motion.button
                className="group relative inline-block text-sm font-medium text-[#e9c46a] focus:ring-3 focus:outline-hidden cursor-pointer "
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <span className="absolute inset-0 border-2 border-[#e9c46a] rounded-md group-hover:bg-[#e9c46a] transition duration-500"></span>
                <span className="block tracking-widest border-2 border-[#e9c46a] rounded-md bg-[#023047] px-6 py-3 duration-500 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Resume
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
