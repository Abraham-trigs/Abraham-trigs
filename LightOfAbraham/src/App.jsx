import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Background from "./components/UI/Background";
import Nav from "./components/UI/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Background>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Background>  );
}

export default App;
