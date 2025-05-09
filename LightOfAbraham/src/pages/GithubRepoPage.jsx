
import { useEffect } from 'react'; // Importing useEffect for managing side-effects
import {useGithubRepoStore} from '../store/GithubRepoStore';
import GithubRepoCard from '../components/UI/GithubRepoCard';
import Logo from '../components/UI/Logo';
/**
 * GithubRepoPage is the main page that displays the list of GitHub repositories.
 * It uses the Zustand store to fetch and display the repositories in GitHubRepoCard components.
 * 
 * @returns {JSX.Element} Rendered GitHub repositories page.
 */
const GithubRepoPage = () => {
  // Using the Zustand store's fetchRepos method to load repositories on component mount
  const { repos, isLoading, error, fetchRepos } = useGithubRepoStore();

  useEffect(() => {
    fetchRepos(); // Fetch GitHub repos when the component is mounted
  }, [fetchRepos]); // Only run fetchRepos once on mount

  return (
  
    <div className="container mx-auto px-4 py-8">
      {/* Logo section */}
      <div className="flex flex-col items-center mt-0 w-24 h-auto mx-auto mb-3">
        <Logo className="object-contain" />
      </div>

      {/* Displaying loading state while repos are being fetched */}
      {isLoading && <p>Loading repositories...</p>}

      {/* Displaying error message if the repos couldn't be fetched */}
      {error && <p className="text-red-500">{error}</p>}


      {/* Rendering the list of repositories */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <GithubRepoCard key={repo.id} repo={repo} /> // Pass each repo object to the GithubRepoCard
        ))}
      </div>
    </div>
  );
};

export default GithubRepoPage;
