import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const App = () => (
  <Router>
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full bg-black text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
