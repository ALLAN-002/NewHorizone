// Impact.jsx
import React from "react";

export default function Impact() {
  return (
    <section id="impact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-blue-800 mb-6">Our Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h4 className="text-2xl font-semibold text-blue-700">5,000+</h4>
            <p className="text-gray-600">Youths Empowered</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h4 className="text-2xl font-semibold text-blue-700">3,200+</h4>
            <p className="text-gray-600">Medical Outreach Beneficiaries</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h4 className="text-2xl font-semibold text-blue-700">1,000+</h4>
            <p className="text-gray-600">Students Supported</p>
          </div>
        </div>
      </div>
    </section>
  );
}
