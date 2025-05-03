import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import LogoImg from '@/assets/images/Logo.png';

const Logo = () => {
  const controls = useAnimation();

  // Spin on interval (every 5 minutes)
  useEffect(() => {
    const interval = setInterval(() => {
      spinOnce();
    }, 5 * 60 * 1000); // 5 minutes
    return () => clearInterval(interval);
  }, []);

  const spinOnce = async () => {
    await controls.start({
      rotateY: 360,
      transition: { duration: 1, ease: 'linear' },
    });
    controls.set({ rotateY: 0 }); // reset after spin
  };

  return (
    <div className="flex justify-center items-center">
      <motion.img
        src={LogoImg}
        alt="Personal Logo"
        className="w-full max-w-[200px] h-auto cursor-pointer"
        animate={controls}
        onClick={spinOnce}
        whileHover={{
          rotateY: 360,
          transition: { duration: 1, ease: 'linear' },
        }}
      />
    </div>
  );
};

export default Logo;
