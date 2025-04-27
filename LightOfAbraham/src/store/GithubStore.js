
import create from 'zustand';
import { fetchRepoContents } from '../services/githubService'; // Your Axios call

const useGithubStore = create((set) => ({
  projects: [],
  loading: false,
  error: null,
  fetchProjects: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchRepoContents(); // Call Axios function
      set({ projects: data });
    } catch (error) {
      set({ error: "Failed to fetch projects" });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useGithubStore;
