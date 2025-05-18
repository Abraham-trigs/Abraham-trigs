// components/About/Education.jsx

import React from 'react';
import { motion } from 'framer-motion';

// Education tab: Formal education & professional certifications
const Education = () => {
  const alxPrograms = [
    {
      title: 'African Leadership Experience (ALX Africa)',
      subtitle: 'Software Engineering – Front-End Web Development',
      description:
        'Completed an intensive, project-based program focused on core web technologies and front-end engineering.',
    },
    {
      title: 'A.I Kit Starter – ALX Africa',
      subtitle: '',
      description:
        'Foundations in artificial intelligence, prompt engineering, and ethical AI use cases.',
    },
    {
      title: 'Professional Foundation – ALX Africa',
      subtitle: '',
      description:
        'Training in personal leadership, career readiness, and remote collaboration.',
    },
  ];

  const otherEducation = [
    {
      title: 'PDMCP',
      subtitle: 'Certificate (Digital Marketing)',
      year: '2023',
    },
    {
      title: 'IPMC',
      subtitle: 'Diploma in Graphic Designing',
      year: '2014',
    },
    {
      title: 'IPMC',
      subtitle: 'Foundation – Intro to Computer & Desktop Publication',
      year: '2012 – 2013',
    },
    {
      title: 'Franceben Computers',
      subtitle: 'Certificate in Basic Hardware, Software + Microsoft Office',
      year: '2011 – 2012',
    },
    {
      title: 'Dannaks Senior High School',
      subtitle: 'WASSCE – General Arts',
      year: '2009 – 2012',
    },
    {
      title: 'Disciple’s International School',
      subtitle: 'BECE – Basic Education Certificate Examination',
      year: '2006 – 2009',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Slide + fade in
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="grid gap-6 text-sm text-power mt-8"
    >
      {/* ALX Programs */}
      <div>
        <h3 className="text-md font-semibold text-blood mb-2">ALX Africa Programs</h3>
        <div className="grid gap-3">
          {alxPrograms.map((item, index) => (
            <motion.div
              key={index}
              className="bg-cloud px-2 py-2 rounded-lg text-center shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 180 }}
            >
              <p className="font-semibold">{item.title}</p>
              {item.subtitle && <p className="text-sm">{item.subtitle}</p>}
              <p className="text-xs mt-1 text-power">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Other Education */}
      <div>
        <h3 className="text-md font-semibold text-blood mb-2">Certificates & Academic Background</h3>
        <div className="grid gap-3">
          {otherEducation.map((item, index) => (
            <motion.div
              key={index}
              className="bg-cloud px-2 py-2 rounded-lg text-center shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 180 }}
            >
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm">{item.subtitle}</p>
              <p className="text-xs mt-1 text-power">{item.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
