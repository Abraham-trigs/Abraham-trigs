// src/components/GithubRepoCard.jsx

import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

/**
 * GithubRepoCard is a UI component that displays key details about a GitHub repository.
 *
 * @param {Object} repo - The repository data object containing metadata like name, description, language, stars, and URL.
 * @returns {JSX.Element} - A styled card with motion animations and repository details.
 */
const GithubRepoCard = ({ repo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        type: 'spring',
        stiffness: 90,
        damping: 12,
        mass: 0.8,
        duration: 0.6,
      }}
      whileHover={{ scale: 1.03, rotateZ: 1 }}
      whileTap={{ scale: 0.98 }}
      className="bg-air rounded-2xl shadow-lg p-5 border border-bone transition-all duration-300 hover:bg-blood-800 hover:bg-opacity-0"
    >
      {/* Repository name displayed prominently */}
      <h3 className="text-xl font-semibold text-cloud p-2 bg-blood rounded-lg text-center hover:bg-power mb-2">
        {repo.name}
      </h3>

      {/* Repository description, with fallback if not provided */}
      <p className="text-[#004B46] text-bone text-sm line-clamp-3">
        {repo.description || 'No description provided.'}
      </p>

      {/* Repo metadata section: language, stars, and last update date */}
      <div className="flex flex-wrap items-center gap-2 mt-4 text-sm">
        {repo.language && (
          <span className="bg-bone text-cloud hover:bg-power hover:text-cloud px-2 py-1 rounded-md">
            {repo.language}
          </span>
        )}
        <span className="text-bone">⭐ {repo.stargazers_count}</span>
        <span className="text-bone ">
          Updated {new Date(repo.updated_at).toLocaleDateString()}
        </span>
      </div>

      {/* GitHub external link button with icon */}
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm text-bone hover:underline"
      >
        View on GitHub <FiExternalLink size={14} />
      </a>
    </motion.div>
  );
};

export default GithubRepoCard;
