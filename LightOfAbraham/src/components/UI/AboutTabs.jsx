import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaTools, FaLightbulb } from "react-icons/fa";
import About from "./About";
import SkillTools from "./SkillTools";

const AboutTabs = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState("about");

  // Tab animation effects for interaction
  const tabVariants = {
    hover: { scale: 1.15, rotate: 8, transition: { duration: 0.2 } },
    tap: { scale: 0.95, rotate: -8, transition: { duration: 0.15 } },
    active: { scale: 1.15, rotate: 0, transition: { duration: 0.15 } },
  };

  // Determine which component to show based on tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "skills":
        return <SkillTools />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      {/* Tab Navigation */}
      <div className="flex justify-center items-center gap-6 bg-bone p-4 rounded-xl">
        {/* About Tab */}
        <motion.button
          onClick={() => setActiveTab("about")}
          whileHover="hover"
          whileTap="tap"
          animate={activeTab === "about" ? "active" : ""}
          variants={tabVariants}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
            activeTab === "about" ? "bg-cloud text-blood" : "text-power"
          }`}
        >
          <FaUser className="text-xl" />
          <span className="ml-2 font-medium hidden sm:inline">About Me</span>
        </motion.button>

        {/* SkillTools Tab */}
        <motion.button
          onClick={() => setActiveTab("skills")}
          whileHover="hover"
          whileTap="tap"
          animate={activeTab === "skills" ? "active" : ""}
          variants={tabVariants}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
            activeTab === "skills" ? "bg-cloud text-blood" : "text-power"
          }`}
        >
          <FaTools className="text-xl" />
          <span className="ml-2 font-medium hidden sm:inline">My Stack</span>
        </motion.button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">{renderTabContent()}</div>
    </div>
  );
};

export default AboutTabs;
