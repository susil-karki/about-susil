import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For demo: just reset & show success
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section
      id="contact"
      className="py-24"
      data-aos="fade-up"
    >
      <h2
        className="text-4xl font-bold mb-12 text-cyberGreen"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        Contact Me
      </h2>
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col gap-6"
        >
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              className="peer placeholder-transparent w-full border-b-2 border-gray-500 bg-transparent py-2 text-gray-300 focus:outline-none focus:border-cyberGreen"
              placeholder="Your Name"
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-6 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
            >
              Your Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              className="peer placeholder-transparent w-full border-b-2 border-gray-500 bg-transparent py-2 text-gray-300 focus:outline-none focus:border-cyberGreen"
              placeholder="Your Email"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-6 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
            >
              Your Email
            </label>
          </div>
          <div className="relative">
            <textarea
              name="message"
              id="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="peer placeholder-transparent w-full border-b-2 border-gray-500 bg-transparent py-2 text-gray-300 focus:outline-none focus:border-cyberGreen resize-none"
              placeholder="Your Message"
            />
            <label
              htmlFor="message"
              className="absolute left-0 -top-6 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
            >
              Your Message
            </label>
          </div>
          <button
            type="submit"
            className="bg-cyberPink hover:bg-pink-600 transition-colors text-white py-3 rounded font-semibold"
          >
            Send Message
          </button>
        </form>
      ) : (
        <p className="text-center text-cyberGreen text-xl font-semibold">
          Thanks for reaching out! I’ll get back to you soon.
        </p>
      )}
    </section>
  );
}
