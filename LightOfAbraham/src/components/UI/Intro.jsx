import React from 'react';

const Intro = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center relative w-full">
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:mr-32">
        <h1 className="text-2xl md:text-3xl font-glory font-black text-bone mt-8">
         ABRAHAM BORTEY DANFA
        </h1>
        <h3 className="text-sm font-light font-tt mt-2 leading-5">
          Hey, I’m Abraham — I fuse creativity with code to build bold, intuitive web
          experiences.
        </h3>
      </div>
    </div>
  );
};

export default Intro;
