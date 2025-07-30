import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

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

const techSkills = [
  { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", desc: "Semantic layout & markup." },
  { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", desc: "Responsive and styled UI." },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", desc: "Logic and interaction." },
  { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", desc: "Component-based UI." },
  { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", desc: "State management." },
  { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", desc: "React framework." },
  { name: "Tailwind CSS", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", desc: "Utility-first CSS." },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", desc: "Typed JavaScript." },
  { name: "Vite", img: "https://vitejs.dev/logo.svg", desc: "Fast build tool." },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", desc: "Version control." },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", desc: "Code hosting platform." },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", desc: "Design collaboration tool." },
];

const softSkills = [
  { title: "Creativity", percent: "90%" },
  { title: "Problem Solving", percent: "90%" },
  { title: "Teamwork", percent: "97%" },
  { title: "Communication", percent: "90%" },
];

const journey = [
  {
    year: "2021",
    title: "Started Web Development",
    desc: "Began my journey learning HTML, CSS, and JavaScript through online platforms.",
  },
  {
    year: "2022",
    title: "React & Tailwind Mastery",
    desc: "Built several projects using React.js and Tailwind CSS. Mastered responsive design.",
  },
  {
    year: "2023",
    title: "Advanced Tools & Deployment",
    desc: "Worked with Next.js, GitHub, Redux, TypeScript, and deployed apps using Vite & Netlify.",
  },
  {
    year: "2024",
    title: "Freelancing & Collaboration",
    desc: "Collaborated on real-world projects, focusing on performance, UI/UX, and clean code.",
  },
];

const About = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-5 sm:px-10">
      <style>{`
        .hover-glow:hover {
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.4), 0 0 25px rgba(236, 72, 153, 0.25);
        }
      `}</style>

      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-purple-500 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm <span className="text-purple-400 font-semibold">Farhan Falaksher</span>, a passionate <strong>Frontend Developer</strong> building elegant, scalable, and fast websites using <strong>React.js</strong>, <strong>Tailwind CSS</strong>, <strong>JavaScript</strong>, and modern tools.
        </motion.p>

        {/* Journey */}
        <motion.h3
          className="text-3xl font-bold text-purple-400 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Journey 
        </motion.h3>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {journey.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl text-left border-l-4 border-purple-500 transition-all duration-300 transform hover:scale-[1.03] hover:border-purple-400 hover-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-1">{step.year} — {step.title}</h4>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.h3
          className="text-3xl font-bold text-purple-400 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tech Stack 
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-16">
          {techSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-4 rounded-xl text-center hover:scale-[1.08] transform hover-glow transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <img src={skill.img} alt={skill.name} className="w-12 h-12 mx-auto mb-2" />
              <h4 className="text-white font-medium text-md">{skill.name}</h4>
              <p className="text-gray-400 text-xs">{skill.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Professional Skills */}
        <motion.h3
          className="text-3xl font-bold text-purple-400 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Professional Skills 
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {softSkills.map((skill, i) => {
            const radius = 36;
            const circumference = 2 * Math.PI * radius;
            const progress = (parseInt(skill.percent) / 100) * circumference;

            return (
              <motion.div
                key={i}
                className="bg-gray-800 rounded-xl p-5 flex flex-col items-center justify-center hover:scale-[1.08] hover-glow transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <svg width="100" height="100" className="mb-4">
                  <defs>
                    <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r={radius} stroke="#2d2d2d" strokeWidth="10" fill="none" />
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke={`url(#grad-${i})`}
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - progress}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    className="transition-all duration-700 ease-in-out"
                  />
                  <text x="50" y="54" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">
                    {skill.percent}
                  </text>
                </svg>
                <h4 className="text-white font-semibold text-center text-sm sm:text-base">{skill.title}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-800 pb-10">
          <div>
            <h2 className="text-2xl font-bold text-purple-500 mb-2">Farhan Falaksher</h2>
            <p className="text-gray-400 text-sm">
              Frontend Developer focused on crafting elegant and scalable web experiences with React.js & Tailwind CSS.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-3">Quick Links</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
              <li><a href="#about" className="hover:text-purple-400">About</a></li>
              <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-3">Follow Me</h3>
            <div className="flex space-x-5 text-2xl text-gray-400">
              <SocialIcon href="https://www.instagram.com/itz_farhan_khan2"><FaInstagram /></SocialIcon>
              <SocialIcon href="https://www.facebook.com/profile.php?id=61553902724344"><FaFacebookF /></SocialIcon>
              <SocialIcon href="https://www.linkedin.com"><FaLinkedinIn /></SocialIcon>
              <SocialIcon href="https://github.com"><FaGithub /></SocialIcon>
              <SocialIcon href="https://twitter.com"><FaTwitter /></SocialIcon>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Farhan Falaksher. All rights reserved.</p>
          <p>Built with <span className="text-purple-400">React</span> & <span className="text-purple-400">Tailwind CSS</span>.</p>
        </div>
      </footer>
    </section>
  );
};

export default About;
