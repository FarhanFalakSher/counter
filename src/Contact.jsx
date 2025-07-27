import React from "react";

const Contact = () => (
  <section
    id="contact"
    className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 md:px-10 flex items-center justify-center"
  >
    <div className="w-full max-w-2xl">
      <h2 className="text-center text-5xl font-extrabold text-purple-500 mb-8 drop-shadow">
        Let's Connect
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Got a project or idea? I’d love to hear from you!
      </p>

      <form
        className="bg-gray-800 p-8 rounded-3xl shadow-2xl space-y-6 border border-purple-500"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message Sent!");
        }}
      >
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-purple-300">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-purple-300">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-purple-300">Message</label>
          <textarea
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded-lg bg-gray-700 text-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-transform hover:scale-105 shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
