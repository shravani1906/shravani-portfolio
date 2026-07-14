import React from "react";

export default function Education() {
  const educationData = [
    {
      institution: "KB College of Science & Arts, Navi Mumbai",
      degree: "B.Sc. Information Technology",
      year: "2022 - 2025",
      details:
        "CGPA: 7.65/10. Focused on full-stack web development, databases, and data structures & algorithms — building a strong foundation in software engineering principles through hands-on projects.",
    },
    {
      institution: "Sushila Devi Education Society",
      degree: "Higher Secondary in Science",
      year: "2020 - 2022",
      details:
        "Science stream with Computer Science electives, developing an early interest in programming and software development.",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="edu-header">
        <span className="edu-eyebrow">Background</span>
        <h2>
          Education <span>Timeline</span>
        </h2>
      </div>

      <div className="timeline">
        {educationData.map((edu, index) => (
          <div
            className="timeline-item"
            key={index}
            style={{ animationDelay: `${index * 0.12}s` }}
          >
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

      <style>{`
        #education {
          padding: 4rem 1.5rem;
        }

        #education .edu-header {
          text-align: center;
          max-width: 560px;
          margin: 0 auto;
        }

        #education .edu-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent, #6c5ce7);
          background: rgba(108, 92, 231, 0.1);
          padding: 0.3rem 0.9rem;
          border-radius: 999px;
          margin-bottom: 0.9rem;
        }

        #education .timeline {
          position: relative;
          margin-top: 2.8rem;
          padding-left: 2.2rem;
          max-width: 640px;
          margin-left: auto;
          margin-right: auto;
        }

        #education .timeline::before {
          content: "";
          position: absolute;
          left: 0.19rem;
          top: 0.4rem;
          bottom: 0.4rem;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent, #6c5ce7), transparent);
        }

        #education .timeline-item {
          position: relative;
          margin-bottom: 1.8rem;
          opacity: 0;
          animation: eduFadeIn 0.5s ease forwards;
        }

        @keyframes eduFadeIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        #education .timeline-dot {
          position: absolute;
          left: -2.24rem;
          top: 0.35rem;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--accent, #6c5ce7);
          box-shadow: 0 0 0 5px rgba(108, 92, 231, 0.15);
        }

        #education .timeline-content {
          background: linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.6rem 1.8rem;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        #education .timeline-content:hover {
          transform: translateY(-4px);
          border-color: rgba(108, 92, 231, 0.4);
          box-shadow: 0 12px 30px rgba(108, 92, 231, 0.16);
        }

        #education .timeline-content h3 {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }

        #education .institution {
          color: var(--accent, #6c5ce7);
          font-size: 0.95rem;
          font-weight: 500;
        }

        #education .year {
          font-size: 0.8rem;
          color: var(--text-secondary, #999);
          margin: 0.2rem 0 0.6rem;
        }

        #education .details {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary, #ccc);
        }
      `}</style>
    </section>
  );
}
