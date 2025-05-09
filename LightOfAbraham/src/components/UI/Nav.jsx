import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { motion, AnimatePresence } from "framer-motion"; 

// Navigation component for rendering a responsive, animated navbar
const Nav = () => {
  const location = useLocation(); // Get the current path of the page
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu open/close

  // Function to toggle the mobile menu
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Array of navigation links with path and label
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/blog", label: "Blog" },
    // { path: "*", label: "NotFound" },
  ];

  // Framer Motion animation variants for the mobile menu dropdown (hidden, visible, and exit states)
  const menuVariants = {
    hidden: {
      opacity: 0, // Start with opacity 0 for hidden state
      height: 0, // Start with height 0 for hidden state
      transition: { duration: 0.3, ease: "easeInOut" }, // Smooth transition
    },
    visible: {
      opacity: 1, // Full opacity for visible state
      height: "auto", // Auto height when visible
      transition: { duration: 0.4, ease: "easeInOut" }, // Smooth transition
    },
    exit: {
      opacity: 0, // Fade out opacity for exit state
      height: 0, // Collapse height on exit
      transition: { duration: 0.2, ease: "easeInOut" }, // Smooth transition
    },
  };

  return (
    // Main nav container with layout animation for height transitions
    <motion.nav layout className="w-full text-bone py-4 px-5 z-50">
      <div className="flex items-center justify-between md:justify-center">

        {/* Hamburger toggle button with simple rotation animation */}
        <motion.button
          onClick={toggleMenu} // Toggle mobile menu on click
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle Menu"
          animate={{ rotate: isOpen ? 180 : 0 }} // Rotate button when menu is open
          transition={{ duration: 0.3 }} // Smooth rotation transition
        >
          <motion.span
            key={isOpen ? "close" : "menu"} // Key to toggle between menu and close icon
            initial={{ opacity: 0, scale: 0.8 }} // Initial opacity and scale for animation
            animate={{ opacity: 1, scale: 1 }} // Final opacity and scale for animation
            exit={{ opacity: 0, scale: 0.8 }} // Exit animation
            transition={{ duration: 0.2 }} // Transition duration for icon change
          >
            {isOpen ? "✕" : "☰"} {/* Show either "✕" or "☰" based on menu state */}
          </motion.span>
        </motion.button>
      </div>

      {/* Animate menu dropdown with Framer Motion layout */}
      <motion.div layout>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.ul
              key="mobile-menu" // Unique key for the mobile menu
              initial="hidden" // Initial state of the menu (hidden)
              animate="visible" // Animation state when visible
              exit="exit" // Exit state for the menu when it closes
              variants={menuVariants} // Apply Framer Motion variants
              className="flex flex-col items-center gap-4 mt-4 text-sm font-bold 
                  uppercase tracking-wide md:hidden overflow-hidden"
            >
              {navItems.map(({ path, label }) => (
                <li key={path} className="relative group w-full">
                  <Link
                    to={path} // Navigation link to the path
                    onClick={() => setIsOpen(false)} // Close the menu on click
                    className={`block px-4 py-2 text-center rounded transition-all duration-200 cursor-pointer 

                      ${location.pathname === path // Apply active styles if the path matches
                        ? "bg-bone text-cloud" 
                        : "hover:text-cloud"
                      }`}
                  >
                    {label} {/* Link label */}
                  </Link>

                  {/* Full-width background on hover */}
                  <span className="absolute inset-0 bg-bone opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-200 ease-in-out"></span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Static desktop menu (always visible on desktop) */}
      <ul className="hidden md:flex justify-center gap-6 mt-4 text-sm font-bold uppercase tracking-wide">
        {navItems.map(({ path, label }) => (
          <li key={path} className="relative group w-full">
            <Link
              to={path} // Navigation link to the path
              className={`block px-4 py-2 text-center rounded transition-all duration-200 cursor-pointer 
                ${location.pathname === path // Apply active styles if the path matches
                  ? "bg-bone text-cloud"
                  : "hover:text-air"
                }`}
            >
              {label} {/* Link label */}
            </Link>
            {/* Full-width background on hover */}
            <span className="absolute inset-0 bg-bone opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-200 ease-in-out"></span>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Nav;
