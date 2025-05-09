import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigate hook

const CTAButtons = () => {
  const navigate = useNavigate(); // Initialize the navigation function

  return (
    <div className="flex gap-4 mt-6">
      <button className="bg-bone text-cloud px-4 py-2 rounded-md font-bold text-sm">
        HIRE ME
      </button>
      <button
        onClick={() => navigate('/Github')}
        className="bg-cloud text-bone px-4 py-2 rounded-md font-bold text-sm"
      >
        VIEW PORTFOLIO
      </button>
    </div>
  );
};

export default CTAButtons;
