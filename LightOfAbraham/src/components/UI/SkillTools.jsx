// components/About/SkillTools.jsx

import React from 'react';
import { motion } from 'framer-motion';

// Reusable SkillTools component to showcase stack/tools
const SkillTools = () => {
  const tools = [
    'React',
    'Vite',
    'Tailwind CSS',
    'Zustand',
    'UI/UX Design',
    'Wireframing',
    'API Integration',
    'Framer Motion',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Start invisible + slide up
      whileInView={{ opacity: 1, y: 0 }} // Animate into place
      transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth entry
      viewport={{ once: true }} // Only run once per scroll
      className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-power"
    >
      {tools.map((tool, index) => (
        <motion.span
          key={index}
          className="bg-cloud px-2 py-2 rounded-lg text-center shadow-sm"
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          {tool}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SkillTools;
