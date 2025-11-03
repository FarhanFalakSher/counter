import React, { useMemo, useState, useCallback } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

/** Render one image; if it 404s, show a placeholder, then favicon */
const ProjectImage = ({ title, image, domain, className }) => {
  const [src, setSrc] = useState(image);

  const onError = useCallback(() => {
    // 1) readable placeholder
    const placeholder = "https://placehold.co/1200x800/111/AAA?text=Add+Screenshot";
    if (src !== placeholder) {
      setSrc(placeholder);
      return;
    }
    // 2) last resort: favicon
    const favicon = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(
      domain
    )}&sz=256`;
    if (src !== favicon) setSrc(favicon);
  }, [src, domain]);

  return (
    <img
      src={src}
      alt={`${title} preview`}
      loading="lazy"
      decoding="async"
      onError={onError}
      className={className}
    />
  );
};

const Projects = () => {
  const [search, setSearch] = useState("");

  // 👉 your projects (added 2 new ones at the end)
  const portfolios = useMemo(
    () => [
      {
        id: 1,
        title: "Online Quran",
        desc: "Learn, read, and explore the Quran online.",
        url: "https://online-quran-rho.vercel.app",
        image:
          "https://online-quran-rho.vercel.app/assets/quran3-CBUr-tmK.jpg",
        domain: "online-quran-rho.vercel.app",
      },
      {
        id: 2,
        title: "Alphaa Nine",
        desc: "Modern UI/UX prototype for the Alphaa Nine app.",
        url: "https://alphaa-nine.vercel.app",
        image:
          "https://alphaa-nine.vercel.app/assets/heroc2-D72T8F2c.jpg",
        domain: "alphaa-nine.vercel.app",
      },
      {
        id: 3,
        title: "Car Showcase",
        desc: "Explore cars with a sleek, responsive UI.",
        url: "https://car-psi-fawn.vercel.app",
        image:
          "https://images.unsplash.com/photo-1754004958969-ee283f1d0df3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
        domain: "car-psi-fawn.vercel.app",
      },
      {
        id: 4,
        title: "CRM Dashboard",
        desc: "Manage leads and tasks with a minimalist CRM.",
        url: "https://crm-one-blush-63.vercel.app",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSCli3QI3e--UsCfZ66YF4Adty2TOa8GJhg&s",
        domain: "crm-one-blush-63.vercel.app",
      },

      // ✅ NEW: text-livid-seven.vercel.app
      {
        id: 5,
        title: "Text App",
        desc: "Utilities for formatting and transforming text.",
        url: "https://text-livid-seven.vercel.app",
        image:
          "https://pbs.twimg.com/profile_images/470632818653921280/l5V_RKUu_400x400.png", // change to your real screenshot anytime
        domain: "text-livid-seven.vercel.app",
      },

      // ✅ NEW: dashboard-one-navy-25.vercel.app
      {
        id: 6,
        title: "Dashboard (Navy)",
        desc: "Clean analytics dashboard with charts and widgets.",
        url: "https://dashboard-one-navy-25.vercel.app",
        image:
          "https://www.geckoboard.com/uploads/customer-service-dashboard-example-geckoboard.png", // change to your real screenshot anytime
        domain: "dashboard-one-navy-25.vercel.app",
      },
    ],
    []
  );

  const filtered = portfolios.filter((p) => {
    const q = search.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.url.toLowerCase().includes(q)
    );
  });

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Link copied to clipboard!");
    } catch {
      alert("Unable to copy. Please copy manually.");
    }
  };

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
            <label htmlFor="portfolio-search" className="sr-only">
              Search portfolio
            </label>
            <input
              id="portfolio-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, description, or URL..."
              className="w-full max-w-md px-5 py-3 rounded-xl bg-zinc-800 border border-zinc-700 placeholder-purple-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Portfolio Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.length ? (
              filtered.map((project) => (
                <article
                  key={project.id}
                  className="bg-zinc-900 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition hover:scale-[1.02] overflow-hidden border border-zinc-800 hover:border-purple-600 group"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-zinc-800">
                    <ProjectImage
                      title={project.title}
                      image={project.image}
                      domain={project.domain}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-purple-300 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{project.desc}</p>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-purple-400 hover:text-purple-300 font-medium transition underline underline-offset-4"
                      >
                        Live ↗
                      </a>
                      <button
                        onClick={() => copyToClipboard(project.url)}
                        className="text-xs px-3 py-1 rounded-lg border border-zinc-700 hover:border-purple-500 bg-zinc-800/60 hover:bg-zinc-800 transition"
                      >
                        Copy Link
                      </button>
                    </div>
                  </div>
                </article>
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
          <div>
            <h4 className="text-2xl font-bold text-purple-500 mb-2">Farhan Falaksher</h4>
            <p className="text-sm text-gray-300">
              A Frontend Developer passionate about crafting elegant and responsive
              web experiences with React and Tailwind CSS.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
              <li><a href="#about" className="hover:text-purple-400">About</a></li>
              <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-3">Follow Me</h4>
            <div className="flex gap-4 text-2xl text-gray-400">
              <a href="https://www.instagram.com/itz_farhan_khan2?igsh=bDl3d3ZqMzlreHdh" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaLinkedinIn /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaGithub /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaTwitter /></a>
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
