import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="fixed top-0 left-0 w-64 h-full bg-black text-white p-10 flex flex-col gap-6">
    <h1 className="text-2xl font-bold uppercase">FARHAN<br />FALAKSHER</h1>
    <nav className="flex flex-col gap-4 mt-10 text-lg">
      <Link to="/" className="hover:text-purple-400">Home</Link>
      <Link to="/projects" className="hover:text-purple-400">Projects</Link>
      <Link to="/about" className="hover:text-purple-400">About</Link>
      <Link to="/contact" className="hover:text-purple-400">Contact</Link>
    </nav>
  </aside>
);

export default Sidebar;
