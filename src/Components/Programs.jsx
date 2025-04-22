// Programs.jsx
import React from "react";

export default function Programs() {
  return (
    <section id="programs" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-blue-800 mb-6">Our Programs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold text-blue-700 mb-2">Youth Empowerment</h4>
            <p className="text-gray-600">
              We provide vocational training, mentorship, and life skills to help youth unlock their potential and thrive.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold text-blue-700 mb-2">Health Outreach</h4>
            <p className="text-gray-600">
              Our medical camps and health awareness campaigns bring essential services to underserved communities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold text-blue-700 mb-2">Education Support</h4>
            <p className="text-gray-600">
              We offer scholarships, school supplies, and support systems to keep children in school and help them succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
