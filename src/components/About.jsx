// About.jsx
export default function About() {
  return (
    <section id="about" data-aos="fade-up" data-aos-delay="100">
      <div className="about-header">
        <span className="about-eyebrow">Introduction</span>
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="about-left">
        <div className="about-glow"></div>
        <div className="about-content">
          <p>
            I'm a <strong>Full Stack Developer</strong> based in Navi Mumbai,
            building scalable web applications with the{" "}
            <strong>Django / React / MERN</strong> stack — from REST APIs and
            authentication systems to AI-integrated dashboards.
          </p>

          <p>
            At <strong>Rapid Soft Logics Pvt. Ltd.</strong>, I've shipped 15+
            REST API integrations, built JWT-secured backends with role-based
            access control, and developed responsive React/Tailwind interfaces
            optimized for performance across devices.
          </p>

          <p>
            I enjoy the full lifecycle — designing MySQL/MongoDB schemas,
            writing clean maintainable code, and shipping features end-to-end,
            with a growing focus on AI-powered tooling and data-driven products.
          </p>
        </div>
      </div>

      <div className="career-interests-card">
        <h2>
          Career <span>Interest</span>
        </h2>
        <p className="subtitle">
          Areas I'm passionate about and opportunities I'm seeking
        </p>

        <div className="interest-list">
          <div className="interest-item" style={{ animationDelay: "0s" }}>
            <span className="interest-icon">
              <i className="fa-solid fa-display"></i>
            </span>
            AI Integration in Web & Mobile Applications
          </div>
          <div className="interest-item" style={{ animationDelay: "0.08s" }}>
            <span className="interest-icon">
              <i className="fa-solid fa-server"></i>
            </span>
            Scalable Backend Architecture & REST API Design
          </div>
          <div className="interest-item" style={{ animationDelay: "0.16s" }}>
            <span className="interest-icon">
              <i className="fa-solid fa-gauge-high"></i>
            </span>
            Frontend Performance & UI/UX Optimization
          </div>
          <div className="interest-item" style={{ animationDelay: "0.24s" }}>
            <span className="interest-icon">
              <i className="fa-solid fa-cube"></i>
            </span>
            End-to-End Product Ownership
          </div>
        </div>
      </div>

      <style>{`
        #about {
          padding: 4rem 1.5rem;
        }

        #about .about-header {
          text-align: center;
          max-width: 560px;
          margin: 0 auto 2rem;
        }

        #about .about-eyebrow {
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

        #about .about-left {
          position: relative;
          background: linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 2rem;
          overflow: hidden;
        }

        #about .about-glow {
          position: absolute;
          top: -40%;
          right: -20%;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, rgba(108, 92, 231, 0.2), transparent 70%);
          pointer-events: none;
        }

        #about .about-content {
          position: relative;
        }

        #about .about-content p {
          line-height: 1.75;
          margin-bottom: 1.1rem;
          color: var(--text-secondary, #ccc);
          font-size: 0.98rem;
        }

        #about .about-content strong {
          color: inherit;
        }

        #about .career-interests-card {
          margin-top: 3rem;
          text-align: center;
        }

        #about .career-interests-card .subtitle {
          color: var(--text-secondary, #999);
          margin-top: 0.5rem;
        }

        #about .interest-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }

        #about .interest-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 1rem 1.1rem;
          border-radius: 14px;
          background: linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.92rem;
          text-align: left;
          opacity: 0;
          animation: aboutFadeIn 0.5s ease forwards;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        @keyframes aboutFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        #about .interest-item:hover {
          transform: translateY(-4px);
          border-color: rgba(108, 92, 231, 0.5);
          box-shadow: 0 12px 26px rgba(108, 92, 231, 0.16);
        }

        #about .interest-icon {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: rgba(108, 92, 231, 0.12);
          color: var(--accent, #6c5ce7);
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
}
