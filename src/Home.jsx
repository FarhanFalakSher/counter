import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import farhanImage from "./assets/farhan.webp";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Home = () => {
  const texts = ["Hi, I'm Farhan Falaksher"];
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100); // Adjust speed here
      return () => clearTimeout(timeout);
    } else {
      // Reset after a delay
      const delay = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
      }, 2000);
      return () => clearTimeout(delay);
    }
  }, [charIndex, textIndex, texts]);

  return (
    <>
      <section className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex flex-col-reverse md:flex-row items-center justify-center px-6 sm:px-8 md:px-16 py-20 gap-10 relative overflow-hidden">
        {/* Blurred Gradient Background Circle */}
        <div className="absolute top-[-200px] left-[-200px] w-[400px] h-[400px] bg-purple-600 rounded-full opacity-30 blur-3xl animate-pulse"></div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 transition-all duration-700">
            <span className="text-purple-500 drop-shadow-md">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
            A creative frontend developer focused on building elegant,
            user-friendly experiences using <strong>React.js</strong> and{" "}
            <strong>Tailwind CSS</strong>.
          </p>

          <Link
            to="/projects"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          >
            View My Work
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl hover:scale-105 transition duration-500 z-10">
          <img
            src={farhanImage}
            alt="Farhan Falaksher"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

// Footer component remains the same as your original
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white pt-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-800 pb-10">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-purple-500">
            Farhan Falaksher
          </h2>
          <p className="text-gray-400 text-sm">
            A Frontend Developer passionate about crafting elegant and
            responsive web experiences with React and Tailwind CSS.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-200 mb-3">
            Quick Links
          </h3>
          <ul className="text-sm space-y-1 text-gray-400">
            <li>
              <a href="#projects" className="hover:text-purple-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-200 mb-3">
            Follow Me
          </h3>
          <div className="flex gap-5 text-2xl text-gray-400">
            <SocialIcon
              href="https://www.instagram.com/itz_farhan_khan2?igsh=bDl3d3ZqMzlreHdh"
              label="Instagram"
            >
              <FaInstagram />
            </SocialIcon>
            <SocialIcon
              href="https://www.facebook.com/profile.php?id=61553902724344"
              label="Facebook"
            >
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com" label="LinkedIn">
              <FaLinkedinIn />
            </SocialIcon>
            <SocialIcon href="https://github.com" label="GitHub">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" label="Twitter">
              <FaTwitter />
            </SocialIcon>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Farhan Falaksher. All rights reserved.</p>
        <p>
          Built with{" "}
          <span className="text-purple-400 font-semibold">React</span> &{" "}
          <span className="text-purple-400 font-semibold">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="hover:text-purple-400 hover:scale-110 transition-transform duration-300"
  >
    {children}
  </a>
);

export default Home;
