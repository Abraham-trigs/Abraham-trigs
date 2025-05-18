import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaTools, FaLightbulb, FaBalanceScale, FaPalette, FaCommentDots } from "react-icons/fa";
import About from "./About";
import SkillTools from "./SkillTools";
import Journey from "./Journey";

// Optional future components (can be filled in later)
// const Journey = () => <div className="p-4">Journey timeline goes here</div>;
const Principles = () => <div className="p-4">Core values and work ethics listed here</div>;
const DesignEthos = () => <div className="p-4">Design philosophy and inspirations go here</div>;
const Testimonials = () => <div className="p-4">Client and peer feedback will show here</div>;

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
      case "journey":
        return <Journey />;
      case "principles":
        return <Principles />;
      case "design":
        return <DesignEthos />;
      case "testimonials":
        return <Testimonials />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center items-center gap-4 bg-bone p-4 rounded-xl">
        {/* About Tab */}
        <motion.button
          onClick={() => setActiveTab("about")}
          whileHover="hover"
          whileTap="tap"
          animate={activeTab === "about" ? "active" : ""}
          variants={tabVariants}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
            activeTab === "about" ? "bg-cloud text-blood" : "text-air"
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
            activeTab === "skills" ? "bg-cloud text-blood" : "text-air"
          }`}
        >
          <FaTools className="text-xl" />
          <span className="ml-2 font-medium hidden sm:inline">My Stack</span>
        </motion.button>

        {/* Journey Tab */}
        <motion.button
          onClick={() => setActiveTab("journey")}
          whileHover="hover"
          whileTap="tap"
          animate={activeTab === "journey" ? "active" : ""}
          variants={tabVariants}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
            activeTab === "journey" ? "bg-cloud text-blood" : "text-air"
          }`}
        >
          <FaLightbulb className="text-xl" />
          <span className="ml-2 font-medium hidden sm:inline">Journey</span>
        </motion.button>

        {/* Principles Tab */}
        <motion.button
          onClick={() => setActiveTab("principles")}
          whileHover="hover"
          whileTap="tap"
          animate={activeTab === "principles" ? "active" : ""}
          variants={tabVariants}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
            activeTab === "principles" ? "bg-cloud text-blood" : "text-air"
          }`}
        >
          <FaBalanceScale className="text-xl" />
          <span className="ml-2 font-medium hidden sm:inline">Principles</span>
        </motion.button>

        {/* Design Ethos Tab */}
        <motion.button
          onClick={() => setActiveTab("design")}
          whileHover="hover"
          whileTap="tap"
          animate={activeTab === "design" ? "active" : ""}
          variants={tabVariants}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
            activeTab === "design" ? "bg-cloud text-blood" : "text-air"
          }`}
        >
          <FaPalette className="text-xl" />
          <span className="ml-2 font-medium hidden sm:inline">Design Ethos</span>
        </motion.button>

        {/* Testimonials Tab */}
        <motion.button
          onClick={() => setActiveTab("testimonials")}
          whileHover="hover"
          whileTap="tap"
          animate={activeTab === "testimonials" ? "active" : ""}
          variants={tabVariants}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
            activeTab === "testimonials" ? "bg-cloud text-blood" : "text-air"
          }`}
        >
          <FaCommentDots className="text-xl" />
          <span className="ml-2 font-medium hidden sm:inline">Testimonials</span>
        </motion.button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">{renderTabContent()}</div>
    </div>
  );
};

export default AboutTabs;
