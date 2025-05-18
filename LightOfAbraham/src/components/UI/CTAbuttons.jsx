import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigate hook

const CTAButtons = () => {
  const navigate = useNavigate(); // Initialize the navigation function

  return (
    <div className="flex gap-4 mt-2">
      {/* <button className="bg-bone text-cloud px-4 py-2 rounded-md font-tt text-xs">
        Hire Me
      </button> */}
      <button
        onClick={() => navigate('/Github')}
        className="bg-bone text-air shadow-xl px-4 py-2 rounded-md font-tt text-sm
                  hover:bg-air hover:text-bone"
      >
        View Portfolio
      </button>
    </div>
  );
};

export default CTAButtons;
