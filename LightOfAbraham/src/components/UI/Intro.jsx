import React from 'react';

const Intro = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center relative w-full">
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:mr-32">
        <h1 className="text-2xl md:text-3xl font-glory font-black text-bone mt-8">
         ABRAHAM BORTEY DANFA
        </h1>
        <h3 className="text-sm font-light font-tt mt-2 leading-5">
          Every Design Architechture, is Provided with in the 
          <span style={{
            color: '#004B46',
            fontFamily: 'TT Chocolates', 
            fontSize: '2rem'

          } }> Solution</span>  and the 
          <span style={{
            color: '#004B46',
            fontFamily: 'TT Chocolates', 
            fontSize: '2rem'

          } }> Problem</span> 
        </h3>
      </div>
    </div>
  );
};

export default Intro;
