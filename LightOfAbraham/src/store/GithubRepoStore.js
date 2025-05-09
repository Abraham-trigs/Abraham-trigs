import { create } from 'zustand'; // Zustand for global state management
import axios from 'axios'; // Axios for HTTP requests

const GITHUB_USERNAME = 'abraham-trigs'; 

// Zustand store to manage GitHub repositories
export const useGithubRepoStore = create((set) => ({
  repos: [],           // All fetched repositories
  isLoading: false,    // Loading state for UI feedback
  error: null,         // Any error from the API

  // Fetch repos from GitHub API (excluding forks, sorted by stars)
  fetchRepos: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);

      const sortedRepos = response.data
        .filter((repo) => !repo.fork) // Ignore forks
        .sort((a, b) => b.stargazers_count - a.stargazers_count); // Sort by stars

      set({ repos: sortedRepos, isLoading: false });
    } catch (err) {
      set({ error: 'Failed to load GitHub repos', isLoading: false });
    }
  },
}));

export default useGithubRepoStore;
