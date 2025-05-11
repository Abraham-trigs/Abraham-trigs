import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Background from "./components/UI/Background";
import Nav from "./components/UI/Nav";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import GithubRepoCard from "./components/UI/GithubRepoCard";
import GithubRepoPage from "./pages/GithubRepoPage";

function App() {
  return (
    <Background>
      {/* Navigation bar is always rendered */}
      <Nav />

      {/* Scrollable page content container */}
      <div className="relative z-10 h-screen overflow-y-auto">
        {/* Defining routes for different pages */}
        <Routes>
          {/* Route for Home page */}
          <Route path="/" element={<Home />} />
          
          {/* Route for About page */}
          <Route path="/About" element={<AboutPage />} />
          
          {/* Route for Contact page */}
          <Route path="/Contact" element={<ContactPage />} />
          
          {/* Route for Blog page */}
          <Route path="/Blog" element={<Blog />} />
          
          {/* Route for handling 404 errors (Page not found) */}
          <Route path="*" element={<NotFound />} />
          
          {/* Route for Github repositories page */}
          <Route path="/Github" element={<GithubRepoPage />} />
          
          {/* Route for displaying a single GitHub repository card */}
          <Route path="/Git" element={<GithubRepoCard />} />
        </Routes>
      </div>
    </Background>
  );
}

export default App;
