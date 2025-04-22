// Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-blue-800 mb-4">Get in Touch</h3>
        <p className="text-gray-600 mb-6">We would love to hear from you! Reach out for partnerships or volunteering opportunities.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg p-3" />
          <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-lg p-3" />
          <textarea placeholder="Your Message" className="w-full border border-gray-300 rounded-lg p-3" rows="4"></textarea>
          <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">Send Message</button>
        </form>
      </div>
    </section>
  );
}
