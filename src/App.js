import './App.css';

import React from "react";
import About from "./components/About";
import Officers from "./components/Officers";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Officers />
      <Contact />
      <Events />
    </main>
  );
}

export default App;
