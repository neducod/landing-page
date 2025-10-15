import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import OpenSource from "./components/OpenSourceContributions";
import SelectedWork from "./components/Selectedwork";
// import Hero from "./Hero";
import Hero from "./components/Hero";
import DesignPhil from "./components/DesignPhi";
import Designprinciples from "./components/Designprinciples";
import DesignPhiloso from "./components/DesignPhiloso";

import "./App.css";
import "./styles/global.css";
import OpenSourceContributions from "./components/OpenSourceContributions";


// import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <DesignPhiloso />
      <SelectedWork />
      <OpenSourceContributions />
      <Footer />
    </>
  );
};

export default App;
