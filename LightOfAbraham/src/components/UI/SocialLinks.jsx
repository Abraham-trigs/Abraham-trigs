import React from 'react';
import { FaLinkedin, FaXTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-4">
      <a href="https://www.linkedin.com/in/abrahamtrigs/" target="_blank" rel="noreferrer">
        <FaLinkedin className="text-lg text-cloud hover:scale-110" />
      </a>
      <a href="https://x.com/trigs_98" target="_blank" rel="noreferrer">
        <FaXTwitter className="text-lg text-cloud hover:scale-110" />
      </a>
      <a
        href="https://wa.me/233208660068?text=Hi%20there!%20I%E2%80%99m%20Abraham%2C%20a%20Front-End%20Developer%20and%20Graphic%20Designer%20crafting%20sleek%20interfaces%20and%20visually%20compelling%20experiences."
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className="text-lg text-cloud hover:scale-110" />
      </a>
      <Link to="/contact">
        <FaEnvelope className="text-lg text-cloud hover:scale-110" />
      </Link>
    </div>
  );
};

export default SocialLinks;
