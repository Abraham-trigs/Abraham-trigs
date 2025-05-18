import React, { useState } from 'react';
import { FaLinkedin, FaXTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  const navigate = useNavigate();
  const [spinning, setSpinning] = useState(false); // Tracks whether the icon is currently spinning

  // Handles envelope click → triggers spin, then redirects after 2 seconds
  const handleClick = () => {
    if (spinning) return; // Prevent multiple clicks during spin
    setSpinning(true);    // Start spin animation
    setTimeout(() => {
      navigate('/contact'); // Navigate to Contact page after delay
    }, 2000); // 2 second delay
  };

  return (
    <>
      {/* Social Icons Row */}
      <div className="flex gap-4 mt-4">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/abrahamtrigs/" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-lg text-cloud hover:scale-110" />
        </a>
        {/* Twitter (X) */}
        <a href="https://x.com/trigs_98" target="_blank" rel="noreferrer">
          <FaXTwitter className="text-lg text-cloud hover:scale-110" />
        </a>
        {/* WhatsApp */}
        <a
          href="https://wa.me/233208660068?text=Hi%20there!%20I%E2%80%99m%20Abraham%2C%20a%20Front-End%20Developer%20and%20Graphic%20Designer%20crafting%20sleek%20interfaces%20and%20visually%20compelling%20experiences."
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp className="text-lg text-cloud hover:scale-110" />
        </a>
      </div>

      {/* Envelope Icon with Delayed Entrance + Y-axis Spin on Click */}
      <motion.div
        onClick={handleClick} // Trigger spin + navigate on click
        initial={{ opacity: 0, y: 20 }} // Start hidden and offset down
        animate={{ opacity: 1, y: 0 }} // Fade in and slide up
        transition={{ delay: 2, duration: 0.6 }} // Delay entrance by 2s
        whileHover={{ scale: 1.2, rotate: 5 }} // On hover: slight tilt and scale up
        whileTap={{ scale: 0.95, rotate: -5 }} // On tap: slight scale down and reverse tilt
        className="w-16 py-6 cursor-pointer perspective-[800px]" // Enable 3D perspective
      >
        {/* Inner animated icon - Spins horizontally on Y-axis */}
        <motion.div
          animate={spinning ? { rotateY: 360 } : { rotateY: 0 }} // Trigger full spin if `spinning` is true
          transition={{
            repeat: spinning ? Infinity : 0, // Loop spin animation
            repeatType: "loop",
            duration: 1, // 1 second per full spin
            ease: "easeInOut"
          }}
          style={{ transformStyle: 'preserve-3d' }} // Enables proper 3D rendering
        >
          <FaEnvelope className="w-14 h-auto text-lg text-cloud" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default SocialLinks;
