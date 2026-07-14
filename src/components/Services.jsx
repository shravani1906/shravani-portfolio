//src/components/Services.jsx
export default function Services() {
  const services = [
    {
      icon: "fa-solid fa-code",
      title: "Full-Stack Web Development",
      desc: "Scalable web applications built with Django, React, and REST APIs — from database design to deployment.",
      points: [
        "Django / DRF Backend Development",
        "React.js Frontend Interfaces",
        "MySQL / MongoDB Schema Design",
      ],
      cta: "Build My Web App",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Secure API & Backend Systems",
      desc: "JWT-authenticated, role-based backend systems with clean, well-documented REST endpoints.",
      points: [
        "JWT Auth & Role-Based Access Control",
        "REST API Design & Integration",
        "Database Optimization",
      ],
      cta: "Secure My Backend",
    },
    {
      icon: "fa-solid fa-robot",
      title: "AI-Integrated Applications",
      desc: "Adding intelligent features to web apps using LLM APIs — chatbots, recommendations, and automation.",
      points: [
        "Groq / LLM API Integration",
        "AI-Powered Dashboards",
        "Workflow Automation",
      ],
      cta: "Add AI to My App",
    },
  ];

  return (
    <section id="services" data-aos="fade-up" data-aos-delay="400">
      <div className="services-header">
        <span className="services-eyebrow">What I Offer</span>
        <h2>
          My <span> Expertise </span>
        </h2>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div
            className="service-card"
            key={i}
            data-aos="fade-up"
            data-aos-delay={500 + i * 100}
          >
            <div className="service-glow"></div>
            <div className="service-icon">
              <i className={s.icon}></i>
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <ul>
              {s.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <a href="#contact" className="btn">
              {s.cta} <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        ))}
      </div>

      <div className="end-to-end">
        <div className="end-glow"></div>
        <h3>End-to-End Project Delivery</h3>
        <p>
          From idea → design → development → deployment → maintenance.
          <br />I handle everything so you don't have to.
        </p>
        <a href="#contact" className="btn btn-large">
          Book Free Consultation →
        </a>
      </div>

      <style>{`
        #services {
          padding: 4rem 1.5rem;
        }

        #services .services-header {
          text-align: center;
          max-width: 560px;
          margin: 0 auto;
        }

        #services .services-eyebrow {
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

        #services .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        #services .service-card {
          position: relative;
          background: linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.8rem;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        #services .service-card:hover {
          transform: translateY(-6px);
          border-color: rgba(108, 92, 231, 0.5);
          box-shadow: 0 12px 30px rgba(108, 92, 231, 0.18);
        }

        #services .service-glow {
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

        #services .service-card:hover .service-glow {
          opacity: 1;
        }

        #services .service-icon {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(108, 92, 231, 0.12);
          color: var(--accent, #6c5ce7);
          font-size: 1.2rem;
          margin-bottom: 1.1rem;
        }

        #services .service-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.6rem;
        }

        #services .service-card p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary, #ccc);
          margin-bottom: 1.1rem;
        }

        #services .service-card ul {
          list-style: none;
          padding: 0;
          margin: 0 0 1.4rem;
        }

        #services .service-card ul li {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--text-secondary, #ccc);
          padding-left: 1.1rem;
          position: relative;
          margin-bottom: 0.35rem;
        }

        #services .service-card ul li::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: var(--accent, #6c5ce7);
        }

        #services .service-card .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          padding: 0.6rem 1.2rem;
          border-radius: 999px;
          background: var(--accent, #6c5ce7);
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        #services .service-card .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(108, 92, 231, 0.3);
        }

        #services .end-to-end {
          position: relative;
          text-align: center;
          margin-top: 3rem;
          padding: 3.5rem 1.5rem;
          border-radius: 20px;
          background: linear-gradient(160deg, rgba(108, 92, 231, 0.1), rgba(108, 92, 231, 0.02));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(108, 92, 231, 0.25);
          overflow: hidden;
        }

        #services .end-glow {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(108, 92, 231, 0.28), transparent 70%);
          pointer-events: none;
        }

        #services .end-to-end h3 {
          position: relative;
          font-size: 1.5rem;
          margin-bottom: 0.8rem;
        }

        #services .end-to-end p {
          position: relative;
          font-size: 1.05rem;
          color: var(--text-secondary, #ccc);
          line-height: 1.7;
          margin-bottom: 1.8rem;
        }

        #services .btn-large {
          position: relative;
          display: inline-flex;
          align-items: center;
          font-size: 1rem;
          padding: 0.9rem 2.2rem;
          border-radius: 999px;
          background: var(--accent, #6c5ce7);
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        #services .btn-large:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(108, 92, 231, 0.35);
        }
      `}</style>
    </section>
  );
}
