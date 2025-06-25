import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 flex flex-col md:flex-row items-center gap-12"
      data-aos="fade-up"
    >
      <div className="md:w-1/2 text-left space-y-6">
        <h2
          className="text-4xl font-bold text-cyberGreen"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I’m Susil, a passionate crypto futures trader and web developer from Nepal. I
          specialize in building modern web applications and have a deep interest in
          cybersecurity, AI, and blockchain technologies.
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          I love to create clean, functional, and beautiful digital experiences that
          solve real-world problems and push the boundaries of tech.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://i.imgur.com/2FZQ6Ke.png"
          alt="Susil Profile"
          className="rounded-lg border-4 border-cyberPink shadow-lg"
        />
      </div>
    </section>
  );
}
