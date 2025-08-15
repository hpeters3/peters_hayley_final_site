import logo from './logo.svg';
import './App.css';
import React from "react";
import About from "./components/About";
import Resources from "./components/Resources";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="text-gray-400 body-font" style={{ backgroundColor: '#250902' }}>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Resources />
    </main>
  );
}

export default App;