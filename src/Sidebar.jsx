import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Ensure `lucide-react` is installed

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 text-white bg-purple-600 p-2 rounded-md md:hidden hover:bg-purple-700 transition"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-black via-gray-900 to-black text-white p-8 pt-14 z-40 
        transition-transform duration-300 ease-in-out shadow-lg 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:block`}
      >
        {/* Logo/Name */}
        <h1 className="text-2xl font-bold uppercase tracking-wide border-b border-purple-600 pb-4">
          <span className="text-purple-400">Farhan</span> <br /> Falaksher
        </h1>

        {/* Nav Links */}
        <nav className="mt-10 flex flex-col gap-6 text-lg font-medium">
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`transition duration-200 hover:text-purple-400 ${
                location.pathname === to ? "text-purple-500 font-semibold" : ""
              }`}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Optional Footer/Contact */}
        <div className="mt-auto pt-10 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Farhan. All rights reserved.
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
