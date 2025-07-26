import React from "react";
import myImage from "./assets/Farhan.webp";

const Home = () => {
  return (
    <section id="home" className="h-[80vh] bg-cover bg-center relative" style={{ backgroundImage: `url(${myImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          Farhan Falaksher — Frontend Developer
        </h1>
      </div>
    </section>
  );
};

export default Home;



