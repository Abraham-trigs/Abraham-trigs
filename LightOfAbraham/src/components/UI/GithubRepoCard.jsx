// src/components/GithubRepoCard.jsx

import { FiExternalLink } from 'react-icons/fi';

/**
 * GithubRepoCard is a UI component that displays key details about a GitHub repository.
 *
 * @param {Object} repo - The repository data.
 * @returns {JSX.Element} The rendered repository card.
 */
const GithubRepoCard = ({ repo }) => {
  return (
    <div className="bg-cloud dark:bg-power rounded-2xl shadow-md p-5 hover:scale-[1.02] transition-all duration-200 border border-[#004B46]">
      <h3 className="text-xl font-semibold text-power dark:text-cloud mb-2">{repo.name}</h3>
      <p className="text-[#004B46] dark:text-cloud text-sm line-clamp-3">
        {repo.description || 'No description provided.'}
      </p>
      <div className="flex flex-wrap items-center gap-2 mt-4 text-sm">
        {repo.language && <span className="bg-[#004B46] text-cloud px-2 py-1 rounded-md">{repo.language}</span>}
        <span className="text-[#AE0204]">⭐ {repo.stargazers_count}</span>
        <span className="text-gray-500 dark:text-cloud/70">Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
      </div>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm text-[#AE0204] hover:underline"
      >
        View on GitHub <FiExternalLink size={14} />
      </a>
    </div>
  );
};

export default GithubRepoCard;
