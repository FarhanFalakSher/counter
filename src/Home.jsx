import React from "react";
import { Link } from "react-router-dom";
import farhanImage from "./assets/farhan.webp"; // Ensure this path is correct

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex flex-col-reverse md:flex-row items-center justify-center px-6 py-12 gap-10">
      
      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Hi, I'm <span className="text-purple-400">Farhan Falaksher</span>
        </h1>
        <p className="text-gray-300 text-lg mb-6">
          A passionate Frontend Developer crafting elegant and responsive websites using React, Tailwind CSS, and modern web technologies.
        </p>

   <Link
  to="/projects"
  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
>
  View My Work
</Link>
      </div>

      {/* Image Section */}
      <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">
        <img
          src={farhanImage}
          alt="Farhan Falaksher"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Home;
