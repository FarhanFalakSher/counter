import React from "react";
import profilePic from "./assets/farhan.webp";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white font-sans">
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <motion.img
          src={profilePic}
          alt="Farhan FalakSher"
          className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="text-4xl font-bold mt-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hi, I'm Farhan FalakSher
        </motion.h1>

        <motion.h2
          className="text-xl text-gray-300 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          A passionate Frontend Developer
        </motion.h2>

        <motion.p
          className="mt-6 max-w-xl mx-auto text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          I love creating beautiful and responsive user interfaces using modern web
          technologies like React, Tailwind CSS, and JavaScript. I'm focused on building
          intuitive, accessible, and high-performance websites.
        </motion.p>
      </div>
    </div>
  );
};

export default App;
