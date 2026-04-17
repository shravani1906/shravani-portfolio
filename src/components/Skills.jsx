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

  return (
    <section id="skills" data-aos="fade-up" data-aos-delay="300">
      <h2>
        Skills & <span>Expertise</span>
      </h2>

      <div className="skills-grid">
        {/* Frontend */}
        <div className="skill-category" data-aos="fade-right">
          <h3>Frontend</h3>
          <div className="skill-item">
            <div className="skill-header">
              <span>HTML5 + CSS3</span>
              <span>95%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" data-width="95"></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-header">
              <span>React.js</span>
              <span>90%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" data-width="90"></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-header">
              <span>Redux Toolkit</span>
              <span>85%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" data-width="85"></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-header">
              <span>React Native</span>
              <span>80%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" data-width="80"></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-header">
              <span>Angular</span>
              <span>70%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" data-width="70"></div>
            </div>
          </div>
        </div>

        {/* Backend & Others - FIXED */}
        <div className="skill-category" data-aos="fade-left">
          <h3>Backend & Others</h3>
          <div className="skill-item">
            <div className="skill-header">
              <span>Node.js + Express</span>
              <span>82%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" data-width="82"></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-header">
              <span>MongoDB</span>
              <span>78%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" data-width="78"></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-header">
              <span>MySQL</span>
              <span>85%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" data-width="85"></div>{" "}
              {/* ← Fixed */}
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-header">
              <span>Python / Django</span>
              <span>90%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" data-width="90"></div>{" "}
              {/* ← Fixed */}
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-header">
              <span>PostgreSQL</span>
              <span>80%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" data-width="80"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Professional & Soft Skills */}
      <div className="soft-skills-section">
        <h3>Professional & Soft Skills</h3>

        <div className="soft-skills-tags">
          <span className="skill-tag">Creative Thinking</span>
          <span className="skill-tag">Problem Solving</span>
          <span className="skill-tag">Leadership</span>
          <span className="skill-tag">Communication</span>
          <span className="skill-tag">Emotional Intelligence</span>
          <span className="skill-tag">Critical Thinking</span>
          <span className="skill-tag">Professional Etiquette</span>
        </div>
      </div>

      {/* View CV Button - Opens PDF in new tab */}
      <div className="cv-download">
        <a
          href="/SJCv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn cv-btn"
        >
          View CV
        </a>
      </div>
    </section>
  );
}
