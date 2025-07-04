import React from "react";
import { Typewriter } from "react-simple-typewriter";


export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center"
      style={{ fontFamily: "'Orbitron', sans-serif" }}
    >
      <h1 className="text-5xl md:text-7xl font-bold text-cyberGreen mb-6">
        Hi, I’m Susil
      </h1>
 <p className="text-2xl md:text-3xl text-cyberPink font-semibold">
  <Typewriter
    words={[
      "Crypto trader.",
      "Web developer.",
      "Cybersecurity enthusiast.",
      "AI & blockchain explorer.",
    ]}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={60}
    deleteSpeed={40}
    delaySpeed={1500}
  />
</p>

      <div className="mt-16 animate-bounce text-cyberGreen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
