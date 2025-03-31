// import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Techstack from "./components/About/Techstack";
import Toolstack from "./components/About/Toolstack";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import "./style.css";
import "./App.css";
import FindMeOn from "./components/About/FindMeOn";
function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Projects />
        </section>
        <div id="tools" className="tech-heading">
          <h1 className="section-heading">
            Languages, Frameworks, and Libraries I Use
          </h1>
          <Techstack />
          <h1 className="section-heading">
            Tools I Use
          </h1>
          <Toolstack />
        </div>
        <FindMeOn />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
