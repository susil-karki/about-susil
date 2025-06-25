import React, { useEffect } from "react";
import Typed from "react-typed";
import AOS from "aos";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
