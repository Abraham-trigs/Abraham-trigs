import React from "react";
import { Routes, Route } from 'react-router-dom';
import Hero from "./pages/hero/Hero";
import Background from "./components/UI/Background";
import ContactForm from "./pages/ContactForm/ContactForm";

function App() {
  return (
      <Background>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Background>
  );
}

export default App;
