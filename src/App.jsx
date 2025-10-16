import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import DesignPhiloso from "./components/DesignPhiloso";
import SelectedWork from "./components/SelectedWork";
import OpenSourceContributions from "./components/OpenSourceContributions";
import About from "./About";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";
import Project6 from "./Project6";


import "./App.css";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <DesignPhiloso />
              <SelectedWork />
              <OpenSourceContributions />
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/project5" element={<Project5 />} />
        <Route path="/project6" element={<Project6 />} />   
      </Routes>

      <Footer />
    </>
  );
}

export default App;
