import React from "react";


const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "School Website",
      desc: "A professional school UI using React and TailwindCSS.",
      image:
        "https://thewebsitearchitect.com/wp-content/uploads/2021/02/school-website-project.jpg",
    },
    {
      id: 2,
      title: "Modern Portfolio",
      desc: "Responsive design layout inspired by modern portfolios.",
      image:
        "https://images01.nicepagecdn.com/page/36/68/website-template-preview-366863.jpg",
    },
    {
      id: 3,
      title: "Figma UI",
      desc: "Clean UI concept based on Figma community designs.",
      image:
        "https://www.figma.com/community/resource/6daa1fe2-bf76-41bb-97b1-ebb58eab8865/thumbnail",
    },
  ];

  return (
    <section id="projects" className="px-4 py-12 md:px-10 bg-gray-950 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-400">
        My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-lg shadow-xl overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
              <a
                href="#"
                className="inline-block text-purple-400 hover:text-purple-500 font-medium"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
