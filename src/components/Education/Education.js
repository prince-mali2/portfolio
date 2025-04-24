import React from "react";

function Education() {
  const educationData = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2022 - present",
      description: `Part of the prestigious Lovely Professional University (LPU), known for its world-class infrastructure, industry-aligned curriculum, and NAAC A++ accreditation.`,
    },
    {
      institution: "Physics Wallah (E-Learning)",
      degree: "JEE Mains Preparation",
      duration: "2021 - 2022",
      description: `Completed one year of intensive JEE Mains preparation, focusing on core concepts, problem-solving, and competitive exam strategies.`,
    },
  ];

  return (
    <section id="education" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Education Journey</h1>
        <p className="text-center text-lg text-gray-400 mb-12">
          My academic background and educational qualifications that have shaped my skills and knowledge.
        </p>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-500 w-1 top-0 bottom-0"></div>
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 p-6">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-2">{edu.institution}</h3>
                  <h4 className="text-xl text-blue-400 mb-2">{edu.degree}</h4>
                  <p className="text-sm text-gray-400">{edu.duration}</p>
                  <p className="text-gray-300 mt-4">{edu.description}</p>
                </div>
              </div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
