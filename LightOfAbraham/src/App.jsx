import {React} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Background from "./components/UI/Background";
import Nav from "./components/UI/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import GithubRepoCard from "./components/UI/GithubRepoCard";
import GithubRepoPage from "./pages/GithubRepoPage";

function App() {
  return (
    <Background>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} /> 
        <Route path="/Github" element={<GithubRepoPage />} /> 
        <Route path="/Git" element={<GithubRepoCard />} /> 

      </Routes>
    </Background>  );
}

export default App;
