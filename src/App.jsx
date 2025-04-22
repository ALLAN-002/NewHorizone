import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Programs from "./Components/Programs";
import Impact from "./Components/Impact";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-white">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Contact />
      <Footer />
    </div>
  );
}

