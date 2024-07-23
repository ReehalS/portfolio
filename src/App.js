import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import {
  // BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  MemoryRouter
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import HomeLayout from "./components/Layouts/homeLayout";
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);


  return (
    <MemoryRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/portfolio" element={<HomeLayout/>}>
            <Route index element={<Home/>} />
            <Route path="home" element={<Home />} />
            <Route path="project" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Navigate to="/portfolio"/>} />
          </Route>
          <Route path="*" element={<Navigate to="/portfolio"/>} />
        </Routes>
        <Footer />
      </div>
    </MemoryRouter>
  );
}

export default App;
