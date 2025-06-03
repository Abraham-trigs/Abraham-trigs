import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa"; // Icons for tabs

const ContactPage = () => {
  // Tracks which tab is currently selected
  const [selectedTab, setSelectedTab] = useState("form");

  // Framer Motion variants for animated tab interactions
  const tabVariants = {
    hover: { scale: 1.2, rotate: 15, transition: { duration: 0.3 } },
    tap: { scale: 0.9, rotate: -15, transition: { duration: 0.2 } },
    active: { scale: 1.2, rotate: 0, transition: { duration: 0.2 } },
  };

  // Renders content based on selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case "form":
        return (
          <div className="p-4">
            <h3 className="text-lg font-bold mb-4">Send Instant Email</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded-md"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border rounded-md"
                rows="5"
              />
              <button className="px-4 py-2 bg-bone hover:bg-air hover:text-blood shadow-sm text-white rounded-md hover:bg-blood/90 transition">
                Send
              </button>
            </form>
          </div>
        );
      case "map":
        return (
          <div className="p-4">
            <h3 className="text-lg font-bold mb-4">My Location</h3>
            <div className="map-embed w-full h-64 bg-cloud flex items-center justify-center rounded-md">
              Map will be embedded here
            </div>
          </div>
        );
      case "social":
        return (
          <div className="p-4">
            <h3 className="text-lg font-bold mb-4">Connect with Me</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-blood hover:underline">Twitter</a>
              <a href="#" className="text-blood hover:underline">LinkedIn</a>
              <a href="#" className="text-blood hover:underline">GitHub</a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="contact-page w-full max-w-3xl mx-auto">
      {/* Tab Navigation with bg-bone and responsive spacing */}
      <div className="tabs flex justify-center items-center gap-4 sm:gap-6 md:gap-10 px-4 py-2 bg-bone rounded-xl">
        {/* Form Tab */}
        <motion.button
          onClick={() => setSelectedTab("form")}
          whileHover="hover"
          whileTap="tap"
          animate={selectedTab === "form" ? "active" : ""}
          variants={tabVariants}
          className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
            selectedTab === "form" ? "bg-cloud text-blood" : "text-air"
          }`}
        >
          <FaPaperPlane className="text-xl sm:text-2xl md:text-3xl" />
          <span className="hidden md:inline ml-2 text-base font-medium">Form</span>
        </motion.button>

        {/* Map Tab */}
        <motion.button
          onClick={() => setSelectedTab("map")}
          whileHover="hover"
          whileTap="tap"
          animate={selectedTab === "map" ? "active" : ""}
          variants={tabVariants}
          className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
            selectedTab === "map" ? "bg-cloud text-blood" : "text-air"
          }`}
        >
          <FaMapMarkerAlt className="text-xl sm:text-2xl md:text-3xl" />
          <span className="hidden md:inline ml-2 text-base font-medium">Location</span>
        </motion.button>

        {/* Social Tab */}
        <motion.button
          onClick={() => setSelectedTab("social")}
          whileHover="hover"
          whileTap="tap"
          animate={selectedTab === "social" ? "active" : ""}
          variants={tabVariants}
          className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
            selectedTab === "social" ? "bg-cloud text-blood" : "text-air"
          }`}
        >
          <FaEnvelope className="text-xl sm:text-2xl md:text-3xl" />
          <span className="hidden md:inline ml-2 text-base font-medium">Social</span>
        </motion.button>
      </div>

      {/* Render the selected tab's content */}
      <div className="tab-content mt-6">{renderContent()}</div>
    </div>
  );
};

export default ContactPage;
