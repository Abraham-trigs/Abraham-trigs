import React from 'react';
import { motion } from 'framer-motion'; 
import Intro from '../components/UI/Intro';
import Abraham from '@/assets/images/Abraham.jpg';
import CTAButtons from '../components/UI/CTAbuttons';
import SocialLinks from '../components/UI/SocialLinks';
import Logo from '../components/UI/Logo';

const Home = () => {
  return (
    <>
      {/* Animate layout shifts for entire page smoothly */}
      <motion.div
        layout
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="grid-cols-2 items-center max-w-screen-xl mx-auto px-4"
      >
        {/* Logo section */}
        <div className="flex flex-col items-center mt-0 w-24 h-auto mx-auto">
          <Logo className="object-contain" />
        </div>

        {/* Animated intro text */}
        <motion.div
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Intro />
        </motion.div>

        {/* Animated profile picture with hover scale */}
        <div className="flex flex-col items-center justify-center mt-3 
            scale-90 sm:scale-100">
          <motion.div
            layout
            className="overflow-hidden rounded-2xl border-2 border-power shadow-2xl 
              w-60 h-72 sm:w-72 sm:h-80 transition-all duration-300 hover:scale-105"
          >
            <img
              src={Abraham}
              alt="Abraham Bortey Danfa"
              className="mt-3 w-full h-full object-cover "
            />
          </motion.div>
        </div>

        {/* Call-to-action buttons and social links */}
        <motion.div
          layout
          className="flex flex-col items-center pb-8 px-6 md:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <CTAButtons />
          <SocialLinks />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
