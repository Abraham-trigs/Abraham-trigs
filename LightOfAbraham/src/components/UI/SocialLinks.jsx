import React from 'react';
import { FaLinkedin, FaXTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa6';

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-4">
      <a href="linked-page" target="_blank" rel="noreferrer">
        <FaLinkedin className="text-lg text-[#004B46] hover:scale-110" />
      </a>
      <a href="X.png" target="_blank" rel="noreferrer">
        <FaXTwitter className="text-lg text-[#004B46] hover:scale-110" />
      </a>
      <a href="Gmail-page" target="_blank" rel="noreferrer">
        <FaWhatsapp className="text-lg text-[#004B46] hover:scale-110" />
      </a>
      <a href="Gmail-page" target="_blank" rel="noreferrer">
        <FaEnvelope className="text-lg text-[#004B46] hover:scale-110" />
      </a>
    </div>
  );
};

export default SocialLinks;
