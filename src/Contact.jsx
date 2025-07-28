import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_78ml04c", "template_1oecve9", form.current, {
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
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl bg-black bg-opacity-60 backdrop-blur-md p-10 rounded-3xl shadow-2xl text-white"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-6">
          Let's Connect
        </h2>
        <p className="text-center text-gray-300 mb-10">
          I'd love to hear your thoughts — drop me a message!
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <textarea
            name="message"
            placeholder="Write your message here..."
            rows="6"
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition-all rounded-xl text-white font-bold text-lg shadow-md"
          >
            🚀 Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
