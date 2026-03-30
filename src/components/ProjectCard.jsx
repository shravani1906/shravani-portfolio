export default function ProjectCard({
  title,
  description,
  techs,

  delay,
}) {
  return (
    <div className="project-card" data-aos="zoom-in-up" data-aos-delay={delay}>
      <div className="card-inner">
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
    </div>
  );
}
