import React from 'react';
import Nav from './Nav';
import Logo from '../../components/UI/Logo';
import Intro from './Intro';
import Abraham from '@/assets/images/Abraham.jpg'
import CTAButtons from './CTAbuttons';
import SocialLinks from '../../components/UI/SocialLinks';



const Hero = () => {
  return (
    <>
    <div className=' max-w-screen-xl mx-auto px-4 m-7'>
      <div className='flex gap-x-3'>
        <Logo />
        <Nav />
      </div>

      {/* Picture */}
      <div className="flex flex-col items-center justify-center mt-3 scale-90 sm:scale-100">
        <div className="overflow-hidden rounded-2xl shadow-xl border-2
             border-gray-200 w-60 h-72 sm:w-72 sm:h-80 transition-all 
             duration-300 hover:scale-105">
          <img
            src={Abraham}
            alt="Abraham Bortey Danfa"
            className="mt-3 w-full h-full object-cover"
          />
        </div>
      </div>

      <div className =" flex flex-col items-center pb-8 px-6 md:px-20">
        <Intro />
        <CTAButtons />
        <SocialLinks />
      </div>

    </div>
    </>

  );
};

export default Hero;

