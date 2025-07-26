import React from "react";

const About = () => {
  return (
    <section id="about" className="p-4 md:p-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

      <p className="text-lg text-gray-300 leading-relaxed mb-10 text-center">
        I'm <strong>Farhan Falaksher</strong>, a frontend developer skilled in HTML5, CSS3, JavaScript,
        and React.js. I build responsive and beautiful user interfaces with modern technologies.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
        <div className="text-center">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwXMKsG4_wlmlsOLkL7juxmJiw86IF8u7pw&s"} alt="HTML5" className="w-20 h-20 mx-auto mb-2" />
          <p>HTML5</p>
        </div>

        <div className="text-center">
          <img src={"https://images.seeklogo.com/logo-png/29/2/css-3-logo-png_seeklogo-297888.png"} alt="CSS3" className="w-20 h-20 mx-auto mb-2" />
          <p>CSS3</p>
        </div>

        <div className="text-center">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpoCEoIxcRxohRRmSa6i9b5EnZG2wwaPNNSuR9NjdZFAQ5ZwelfMxTAv0KeSZH0QXCtYc&usqp=CAU"} alt="JavaScript" className="w-20 h-20 mx-auto mb-2" />
          <p>JavaScript</p>
        </div>

        <div className="text-center">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44cBJfuW1hkbQ65rsWadxzyUTifhzD8pXoQ&s"} alt="React" className="w-20 h-20 mx-auto mb-2" />
          <p>React.js</p>
        </div>
      </div>
    </section>
  );
};

export default About;


