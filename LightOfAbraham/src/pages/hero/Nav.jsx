import React from 'react';

const Nav = () => {
  return (
    <>
    <div className=''>

      {/* Navigation */}
      <nav>
        <ul className=" flex gap-2 font-bold text-xs ">
          <li className="hover:bg-black hover:text-white cursor-pointer">Home</li>
          <li className="hover:bg-black hover:text-white cursor-pointer">About</li>
          <li className="hover:bg-black hover:text-white cursor-pointer">Contact</li>
          <li className="hover:bg-black hover:text-white cursor-pointer">Blog</li>
          <li className="hover:bg-black hover:text-white cursor-pointer">Help</li>
        </ul>
      </nav>
    </div>
    
    </>

  );
};

export default Nav;
