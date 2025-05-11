import React from 'react';

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Layers */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-air z-0" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blood z-0" />
      
      {/* Foreground Content */}
      <div className="relative z-10">
        {children}

      </div>
    </div>
  );
};

export default Background;
