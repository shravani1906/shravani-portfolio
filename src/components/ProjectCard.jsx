//Src/components/ProjectCard.jsx
export default function ProjectCard({
  title,
  description,
  techs,
  delay,
  icon,
}) {
  return (
    <div className="project-card" data-aos="zoom-in-up" data-aos-delay={delay}>
      <div className="card-glow"></div>
      <div className="card-inner">
        <div className="project-icon">
          <i className={icon || "fa-solid fa-code"}></i>
        </div>
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="tech-stack">
            {techs.map((tech, i) => (
              <span key={i} className="tech">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .project-card {
          position: relative;
          background: linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.7rem;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(108, 92, 231, 0.5);
          box-shadow: 0 12px 30px rgba(108, 92, 231, 0.18);
        }

        .project-card .card-glow {
          position: absolute;
          top: -40%;
          right: -30%;
          width: 160px;
          height: 160px;
          background: radial-gradient(circle, rgba(108, 92, 231, 0.25), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .project-card:hover .card-glow {
          opacity: 1;
        }

        .project-card .project-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(108, 92, 231, 0.12);
          color: var(--accent, #6c5ce7);
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .project-card h3 {
          font-size: 1.05rem;
          margin-bottom: 0.6rem;
          line-height: 1.4;
        }

        .project-card p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary, #ccc);
          margin-bottom: 1.2rem;
        }

        .project-card .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .project-card .tech {
          font-size: 0.72rem;
          padding: 0.3rem 0.7rem;
          border-radius: 999px;
          background: rgba(108, 92, 231, 0.15);
          color: var(--accent, #6c5ce7);
        }
      `}</style>
    </div>
  );
}
