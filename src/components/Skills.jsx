//src/components/Skills.jsx
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            progressBars.forEach((bar) => {
              bar.style.width = bar.getAttribute("data-width") + "%";
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );

    const section = document.querySelector("#skills");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const frontend = [
    { name: "React.js", value: 90 },
    { name: "HTML5 + CSS3", value: 95 },
    { name: "Tailwind CSS", value: 88 },
    { name: "JavaScript", value: 88 },
    { name: "Redux Toolkit", value: 82 },
  ];

  const backend = [
    { name: "Python / Django", value: 90 },
    { name: "Django REST Framework", value: 88 },
    { name: "MySQL", value: 85 },
    { name: "Node.js + Express", value: 78 },
    { name: "MongoDB", value: 75 },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Critical Thinking",
    "Communication",
    "Adaptability",
    "Ownership & Accountability",
  ];

  return (
    <section id="skills" data-aos="fade-up" data-aos-delay="300">
      <div className="skills-header">
        <span className="skills-eyebrow">Toolbox</span>
        <h2>
          Skills & <span>Expertise</span>
        </h2>
      </div>

      <div className="skills-grid">
        <div className="skill-category" data-aos="fade-right">
          <h3>
            <i className="fa-solid fa-display"></i> Frontend
          </h3>
          {frontend.map((skill, i) => (
            <div className="skill-item" key={i}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="progress">
                <div className="progress-bar" data-width={skill.value}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skill-category" data-aos="fade-left">
          <h3>
            <i className="fa-solid fa-server"></i> Backend & Databases
          </h3>
          {backend.map((skill, i) => (
            <div className="skill-item" key={i}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="progress">
                <div className="progress-bar" data-width={skill.value}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="soft-skills-section">
        <h3>Professional & Soft Skills</h3>
        <div className="soft-skills-tags">
          {softSkills.map((skill, i) => (
            <span className="skill-tag" key={i}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="cv-download">
        <a
          href="/Shravani_Jamsandekar_FullStack-Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn cv-btn"
        >
          View CV <i className="fas fa-arrow-up-right-from-square"></i>
        </a>
      </div>

      <style>{`
        #skills {
          padding: 4rem 1.5rem;
        }

        #skills .skills-header {
          text-align: center;
          max-width: 560px;
          margin: 0 auto;
        }

        #skills .skills-eyebrow {
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

        #skills .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        #skills .skill-category {
          background: linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.8rem;
        }

        #skills .skill-category h3 {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.05rem;
          margin-bottom: 1.4rem;
          color: var(--accent, #6c5ce7);
        }

        #skills .skill-item {
          margin-bottom: 1.1rem;
        }

        #skills .skill-item:last-child {
          margin-bottom: 0;
        }

        #skills .skill-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          margin-bottom: 0.4rem;
          color: var(--text-secondary, #ccc);
        }

        #skills .progress {
          height: 6px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          overflow: hidden;
        }

        #skills .progress-bar {
          height: 100%;
          width: 0%;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--accent, #6c5ce7), #a29bfe);
          transition: width 1.1s ease;
        }

        #skills .soft-skills-section {
          margin-top: 2.5rem;
          text-align: center;
        }

        #skills .soft-skills-section h3 {
          font-size: 1.05rem;
          margin-bottom: 1.2rem;
        }

        #skills .soft-skills-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
        }

        #skills .skill-tag {
          font-size: 0.82rem;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          background: rgba(108, 92, 231, 0.1);
          border: 1px solid rgba(108, 92, 231, 0.25);
          color: var(--accent, #6c5ce7);
        }

        #skills .cv-download {
          text-align: center;
          margin-top: 2.5rem;
        }

        #skills .cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          border-radius: 999px;
          background: var(--accent, #6c5ce7);
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        #skills .cv-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(108, 92, 231, 0.35);
        }
      `}</style>
    </section>
  );
}
