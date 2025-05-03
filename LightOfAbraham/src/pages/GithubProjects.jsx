// components/MyGithubProjects.jsx

import React, { useEffect } from 'react';
import useGithubStore from '../store/githubStore';

const GithubProjects = () => {
  const { projects, loading, error, fetchProjects } = useGithubStore();

  useEffect(() => {
    fetchProjects(); // Trigger fetch when component mounts
  }, [fetchProjects]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>My GitHub Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.sha}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ithubProjects;
