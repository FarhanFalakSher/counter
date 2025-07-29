import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  // Optional: lock scroll when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

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

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Sidebar (Mobile & Desktop) */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-black via-gray-900 to-black text-white p-8 pt-14 z-40 
        transition-transform duration-300 ease-in-out shadow-lg
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:block overflow-y-auto`}
      >
        {/* Logo */}
        <h1 className="text-2xl font-bold uppercase tracking-wide border-b border-purple-600 pb-4">
          <span className="text-purple-400">Farhan</span> <br /> Falaksher
        </h1>

        {/* Navigation */}
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

        {/* Footer */}
        <div className="mt-auto pt-10 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Farhan. All rights reserved.
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
