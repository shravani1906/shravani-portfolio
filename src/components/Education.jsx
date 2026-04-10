import React from "react";

export default function Education() {
  const educationData = [
    {
      institution: "Mumbai University",
      degree: "B.Sc. Information Technology",
      year: "2022 - 2025",
      details:
        "Focused on full-stack web development, data structures, and algorithms. Graduating with a strong foundation in software engineering principles, project experience, and a passion for continuous learning.",
    },
    {
      institution: "Sushila Devi Education Society",
      degree: "Higher Secondary in Science",
      year: "2020 - 2022",
      details:
        "Specialized in Science stream with Computer Science electives and achieved efficient grades in programming  and IT subjects. Developed a strong interest in technology and software development during this period.",
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2>
        Education <span>Timeline</span>
      </h2>

      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="year">{edu.year}</p>
              <p className="details">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
