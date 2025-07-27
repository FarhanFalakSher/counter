import React from "react";

const Contact = () => (
  <section
    id="contact"
    className="bg-black text-white py-16 px-6 md:px-12 flex items-center justify-center"
  >
    <div className="w-full max-w-2xl">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-purple-400">
        Get In Touch
      </h2>

      <form
        className="space-y-6 bg-gray-900 p-8 rounded-2xl shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message Sent!");
        }}
      >
        <div>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition-all text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:scale-105 duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
