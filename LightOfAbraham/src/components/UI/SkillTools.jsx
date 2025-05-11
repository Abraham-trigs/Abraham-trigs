// components/About/SkillTools.jsx

import React from 'react';

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
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-power">
      {tools.map((tool, index) => (
        <span
          key={index}
          className="bg-cloud px-3 py-1 rounded-lg text-center shadow-sm"
        >
          {tool}
        </span>
      ))}
    </div>
  );
};

export default SkillTools;
