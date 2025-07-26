import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="p-4 md:p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900 rounded shadow-lg overflow-hidden">
          <img src={"https://thewebsitearchitect.com/wp-content/uploads/2021/02/school-website-project.jpg"} alt="Project 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-300 text-sm">A sample frontend UI using React and TailwindCSS.</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded shadow-lg overflow-hidden">
          <img src={"https://images01.nicepagecdn.com/page/36/68/website-template-preview-366863.jpg"} alt="Project 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-300 text-sm">Responsive layout with professional design touch.</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded shadow-lg overflow-hidden">
          <img src={"https://www.figma.com/community/resource/6daa1fe2-bf76-41bb-97b1-ebb58eab8865/thumbnail"} alt="Project 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p className="text-gray-300 text-sm">Clean and minimal UI inspired by modern portfolios.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

