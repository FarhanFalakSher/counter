import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 text-purple-400">
          About Me
        </h2>

        {/* Bio */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-12 px-2">
          Hello! I'm <span className="font-semibold text-purple-400">Farhan Falaksher</span>, a passionate <strong>Frontend Developer</strong> who loves turning creative designs into fully functional web experiences.
          I specialize in building responsive, fast-loading, and pixel-perfect websites using modern technologies like <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and <strong>JavaScript</strong>.
          With a strong foundation in HTML and CSS, I ensure clean, reusable, and scalable code.
        </p>

        {/* Skills Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
          {/* Skill Cards */}
          {[
            {
              name: "HTML5",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwXMKsG4_wlmlsOLkL7juxmJiw86IF8u7pw&s",
            },
            {
              name: "CSS3",
              img: "https://images.seeklogo.com/logo-png/29/2/css-3-logo-png_seeklogo-297888.png",
            },
            {
              name: "JavaScript",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpoCEoIxcRxohRRmSa6i9b5EnZG2wwaPNNSuR9NjdZFAQ5ZwelfMxTAv0KeSZH0QXCtYc&usqp=CAU",
            },
            {
              name: "React.js",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44cBJfuW1hkbQ65rsWadxzyUTifhzD8pXoQ&s",
            },
          ].map((skill) => (
            <div
              key={skill.name}
              className="text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-20 sm:w-24 h-20 sm:h-24 object-contain mx-auto mb-3"
              />
              <p className="text-base sm:text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
