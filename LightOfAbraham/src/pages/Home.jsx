import React from 'react';
import Logo from '../components/UI/Logo';
import Intro from '../components/UI/Intro';
import Abraham from '@/assets/images/Abraham.jpg'
import CTAButtons from '../components/UI/CTAbuttons';
import SocialLinks from '../components/UI/SocialLinks';



const Home = () => {
  return (
    <>
    <div className='grid-cols-2 items-center max-w-screen-xl mx-auto px-4  '>
      <div className="flex flex-col items-center mt-6 w-24 h-auto mx-auto">
        <Logo className=" object-contain" />
      </div>

      <Intro />


      {/* Picture */}
      <div className="flex flex-col items-center justify-center mt-3 scale-90 
            sm:scale-100">
        <div className="overflow-hidden rounded-2xl shadow-xl border-2
             border-power w-60 h-72 sm:w-72 sm:h-80 transition-all 
             duration-300 hover:scale-105">
          <img
            src={Abraham}
            alt="Abraham Bortey Danfa"
            className="mt-3 w-full h-full object-cover"
          />
        </div>
      </div>

      <div className =" flex flex-col items-center pb-8 px-6 md:px-20">
        <CTAButtons />
        <SocialLinks />
      </div>


    </div>

    </>

  );
};

export default Home;

