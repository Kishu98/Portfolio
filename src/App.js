import React from "react";
import Navbar from "./Components/Navbar.js";
import "./App.css";
import Slideshow from "./Components/Slideshow.js";
import Foot from "./Components/Foot.js";
import Intro from "./Components/Intro.js";
import AboutMe from "./Components/AboutMe.js";
import Works from "./Components/Works.js";
import Skills from "./Components/Skills.js";

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Works></Works>
      <Skills></Skills>
      <Foot></Foot>
    </div>
  );
}

export default App;
