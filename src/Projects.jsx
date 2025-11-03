import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Projects = () => {
  const [search, setSearch] = useState("");

  const portfolios = [
    {
      id: 1,
      title: "Personal Portfolio",
      desc: "A sleek personal portfolio site using React and Tailwind.",
      image: "https://picsum.photos/id/1011/800/600",
    },
    {
      id: 2,
      title: "Developer Portfolio",
      desc: "Responsive and animated dev portfolio using Framer Motion.",
      image: "https://picsum.photos/id/1012/800/600",
    },
    {
      id: 3,
      title: "Creative Agency",
      desc: "Creative landing page for agency portfolio in React.",
      image: "https://picsum.photos/id/1013/800/600",
    },
    {
      id: 4,
      title: "UI Designer Portfolio",
      desc: "Minimal design portfolio using Figma concepts.",
      image: "https://picsum.photos/id/1014/800/600",
    },
    {
      id: 5,
      title: "Freelancer Portfolio",
      desc: "Modern freelancer showcase built with Next.js and Tailwind.",
      image: "https://picsum.photos/id/1015/800/600",
    },
    {
      id: 6,
      title: "Photography Showcase",
      desc: "Elegant gallery layout built for photographers.",
      image: "https://picsum.photos/id/1016/800/600",
    },
    {
      id: 8,
      title: "Marketing Portfolio",
      desc: "Bright and engaging portfolio for marketing campaigns.",
      image: "https://picsum.photos/id/1018/800/600",
    },
    {
      id: 9,
      title: "Minimal Portfolio",
      desc: "Clean minimalist portfolio for personal branding.",
      image: "https://picsum.photos/id/1019/800/600",
    },
    {
      id: 10,
      title: "UX Designer Portfolio",
      desc: "UX case study site with interactive prototypes.",
      image: "https://picsum.photos/id/1020/800/600",
    },
  ];

  const filteredPortfolios = portfolios.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Projects Section */}
      <section
        id="projects"
        className="px-4 sm:px-6 md:px-12 py-16 bg-gradient-to-br from-black via-zinc-900 to-black text-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-purple-400 mb-8">
            My Portfolios 💼
          </h2>

          {/* Search Input */}
          <div className="flex justify-center mb-10">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search portfolio..."
              className="w-full max-w-md px-5 py-3 rounded-xl bg-zinc-800 border border-zinc-700 placeholder-purple-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Portfolio Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPortfolios.length ? (
              filteredPortfolios.map((project) => (
                <div
                  key={project.id}
                  className="bg-zinc-900 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition hover:scale-[1.02] overflow-hidden border border-zinc-800 hover:border-purple-600 group"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-purple-300 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{project.desc}</p>
                    <a
                      href="#"
                      className="inline-block text-purple-400 hover:text-purple-500 font-medium transition"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 col-span-full">
                No portfolios found.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-black via-zinc-900 to-black text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h4 className="text-2xl font-bold text-purple-500 mb-2">
              Farhan Falaksher
            </h4>
            <p className="text-sm text-gray-300">
              A Frontend Developer passionate about crafting elegant and responsive web
              experiences with React and Tailwind CSS.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
              <li><a href="#about" className="hover:text-purple-400">About</a></li>
              <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-3">Follow Me</h4>
            <div className="flex gap-4 text-2xl text-gray-400">
              <a
                href="https://www.instagram.com/itz_farhan_khan2?igsh=bDl3d3ZqMzlreHdh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-5 pb-8 px-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <span>© {new Date().getFullYear()} Farhan Falaksher. All rights reserved.</span>
          <span className="mt-2 md:mt-0">
            Built with <span className="text-purple-400">React</span> &{" "}
            <span className="text-purple-400">Tailwind CSS</span>.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Projects;
