// import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import "./style.css";
import "./App.css";
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
      </main>
      <Footer />
    </Router>
  );
}

export default App;
