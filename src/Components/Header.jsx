import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <h1 className="text-2xl font-bold text-blue-800">New Horizon CBO</h1>
      </div>
      <nav className="space-x-4">
        <a href="#about" className="text-blue-700 hover:underline">About</a>
        <a href="#programs" className="text-blue-700 hover:underline">Programs</a>
        <a href="#impact" className="text-blue-700 hover:underline">Impact</a>
        <a href="#contact" className="text-blue-700 hover:underline">Contact</a>
      </nav>
    </header>
  );
}

