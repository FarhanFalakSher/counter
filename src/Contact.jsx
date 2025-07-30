import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_v1jkmqg", "template_1oecve9", form.current, {
        publicKey: "9UYMBIe0T9UTT_SYw",
      })
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("❌ FAILED...", error);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-16 sm:py-20 bg-gradient-to-br from-black via-zinc-900 to-black text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl bg-zinc-900 border border-zinc-800 rounded-3xl shadow-lg p-6 sm:p-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-purple-400 mb-4 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-center text-gray-400 mb-10 text-sm sm:text-base">
            Open to freelance work, collaboration, and discussions. Drop your message below!
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Form Fields */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your Name"
                required
                className="w-full sm:flex-1 px-5 py-3 bg-zinc-800 text-white rounded-xl border border-zinc-700 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition shadow-md"
              />
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Your Email"
                required
                className="w-full sm:flex-1 px-5 py-3 bg-zinc-800 text-white rounded-xl border border-zinc-700 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition shadow-md"
              />
              <input
                type="text"
                name="phone"
                autoComplete="tel"
                placeholder="Phone Number"
                required
                className="w-full sm:flex-1 px-5 py-3 bg-zinc-800 text-white rounded-xl border border-zinc-700 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition shadow-md"
              />
            </div>

            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="6"
              required
              className="w-full px-5 py-3 bg-zinc-800 text-white rounded-xl border border-zinc-700 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition shadow-md"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 transition-all rounded-xl text-white font-bold text-lg shadow-xl"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-black via-zinc-900 to-black text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h4 className="text-2xl font-bold text-purple-500 mb-2 text-center sm:text-left">Farhan Falaksher</h4>
            <p className="text-sm text-gray-300 text-center sm:text-left">
              A Frontend Developer passionate about crafting elegant and responsive web
              experiences with React and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold text-lg mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
              <li><a href="#about" className="hover:text-purple-400">About</a></li>
              <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold text-lg mb-3">Follow Me</h4>
            <div className="flex justify-center sm:justify-start flex-wrap gap-4 text-2xl text-gray-400">
              {[
                { href: "https://www.instagram.com/itz_farhan_khan2?igsh=bDl3d3ZqMzlreHdh", icon: <FaInstagram />, label: "Instagram" },
                { href: "https://www.facebook.com/", icon: <FaFacebookF />, label: "Facebook" },
                { href: "https://linkedin.com", icon: <FaLinkedinIn />, label: "LinkedIn" },
                { href: "https://github.com", icon: <FaGithub />, label: "GitHub" },
                { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="hover:text-purple-400 p-2 rounded-full transition-all bg-zinc-800 hover:bg-zinc-700"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 pt-5 pb-8 px-4 sm:px-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto text-center sm:text-left">
          <span>© {new Date().getFullYear()} Farhan Falaksher. All rights reserved.</span>
          <span className="mt-2 sm:mt-0">
            Built with <span className="text-purple-400">React</span> &{" "}
            <span className="text-purple-400">Tailwind CSS</span>.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Contact;
