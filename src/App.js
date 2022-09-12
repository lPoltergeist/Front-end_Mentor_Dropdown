import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Navigation from "./components/Navbar/Navigation";

function App() {
  return (
    <Router>
      <Navigation/>
      <Hero/>
    </Router>
  );
}

export default App;
