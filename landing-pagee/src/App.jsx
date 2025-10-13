import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home";
import "./styles/global.css";

// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </Router>

    </>
  )
}

export default App
