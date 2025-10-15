import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <section style={{ padding: "4rem 1rem", textAlign: "center" }}>
        <h1>About Me</h1>
        <p style={{ maxWidth: "600px", margin: "1rem auto", color: "#aaa" }}>
          Hey there 👋 I'm Josephine, a frontend developer passionate about
          crafting user-focused experiences that feel effortless and intuitive.
          This is the About page — fully routed without reloading!
        </p>
      </section>
      <Footer />
    </>
  );
}

export default About;
