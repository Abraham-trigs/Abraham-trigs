import React from 'react';

const Intro = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center relative w-full">
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:mr-32">
        <h1 className="text-2xl md:text-3xl font-glory font-black text-bone mt-3">
         ABRAHAM BORTEY DANFA
        </h1>
        <h3 className="text-sm font-light font-tt mt-2 leading-5">
          Every Design Architechture, is Provided within the 
          <strong></strong><span style={{
            color: '#004B46',
            fontSize: '1.2rem',
            font: 'bold',

          } }> Solution</span>  and the 
          <strong style={{
            color: '#004B46',
            fontSize: '1.2rem'
          } }> Problem
          </strong>
        </h3>
      </div>
    </div>
  );
};

export default Intro;
