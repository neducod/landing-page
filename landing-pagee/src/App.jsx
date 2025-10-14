import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import OpenSource from "./components/OpenSourceContributions";
import SelectedWork from "./components/Selectedwork";
// import DesignPhilosophy from "./components/DesignPhilosophy"
import Hero from "./components/Hero";
import DesignPhil from "./components/DesignPhi";
import Designprinciples from "./components/Designprinciples";
import DesignPhiloso from "./components/DesignPhiloso";

import "./App.css";
import "./styles/global.css";
import OpenSourceContributions from "./components/OpenSourceContributions";

function App() {
  return (
    <>
       <Navbar />
       <Hero />
       <DesignPhiloso />
       {/* <DesignPhil /> */}
       {/* <Designprinciples /> */}

       <SelectedWork />
       <OpenSourceContributions />
       <Footer />
       
       

    </>
  );
}

export default App;
