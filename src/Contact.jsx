import React from "react";

const Contact = () => (
  <section id="contact" className="p-4 md:p-10 max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-800 text-white rounded" />
      <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 text-white rounded" />
      <textarea placeholder="Your Message" rows="5" className="w-full p-3 bg-gray-800 text-white rounded"></textarea>
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Send
      </button>
    </form>
  </section>
);

export default Contact;

