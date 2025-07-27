import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-black text-white">
        {/* Sidebar */}
        <div className={`fixed z-40 inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:w-64 transition-transform duration-300 ease-in-out`}>
          <Sidebar />
        </div>

        {/* Toggle Button (Mobile Only) */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden absolute top-4 left-4 z-50 bg-purple-600 px-3 py-2 rounded text-white"
        >
          ☰
        </button>

        {/* Main Content */}
        <div className="flex-1 md:ml-64 p-4">
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
};

export default App;
