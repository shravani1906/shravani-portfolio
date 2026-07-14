export default function Experience() {
  return (
    <section id="experience" data-aos="fade-up" data-aos-delay="100">
      <div className="exp-header">
        <span className="exp-eyebrow">Career</span>
        <h2>
          Work <span>Experience</span>
        </h2>
      </div>

      <div className="experience-timeline">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <div className="company-header">
            <h3>Full Stack Web Developer Intern</h3>
            <span className="company">
              Rapid Soft Logics Pvt. Ltd. <span>Thane, Mumbai</span>
            </span>
            <span className="date">2025 - Present • On-Site</span>
          </div>
          <ul className="highlights">
            <li>
              15+ REST API integrations across e-commerce, CMS, and scheduling
              workflows
            </li>
            <li>
              JWT authentication & role-based access control for secure CRUD
              operations
            </li>
            <li>MySQL schema design and query optimization</li>
          </ul>
          <div className="tags">
            <span>Django / DRF</span>
            <span>React.js</span>
            <span>REST APIs</span>
            <span>MySQL</span>
            <span>JWT Auth</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>

      <style>{`
        #experience {
          padding: 4rem 1.5rem;
        }

        #experience .exp-header {
          text-align: center;
          max-width: 560px;
          margin: 0 auto;
        }

        #experience .exp-eyebrow {
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

        #experience .experience-timeline {
          position: relative;
          padding-left: 2.2rem;
          margin-top: 2.8rem;
          max-width: 640px;
          margin-left: auto;
          margin-right: auto;
        }

        #experience .experience-timeline::before {
          content: "";
          position: absolute;
          left: 0.19rem;
          top: 0.4rem;
          bottom: -0.5rem;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent, #6c5ce7), transparent);
        }

        #experience .timeline-dot {
          position: absolute;
          left: -0.1rem;
          top: 0.35rem;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--accent, #6c5ce7);
          box-shadow: 0 0 0 5px rgba(108, 92, 231, 0.15);
        }

        #experience .timeline-content {
          position: relative;
          background: linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.8rem;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        #experience .timeline-content:hover {
          transform: translateY(-4px);
          border-color: rgba(108, 92, 231, 0.4);
          box-shadow: 0 12px 30px rgba(108, 92, 231, 0.16);
        }

        #experience .company-header h3 {
          font-size: 1.15rem;
          margin-bottom: 0.3rem;
        }

        #experience .company {
          display: block;
          color: var(--accent, #6c5ce7);
          font-size: 0.95rem;
          font-weight: 500;
        }

        #experience .company span {
          color: var(--text-secondary, #999);
          font-weight: 400;
        }

        #experience .date {
          display: block;
          font-size: 0.8rem;
          color: var(--text-secondary, #999);
          margin: 0.3rem 0 1.1rem;
        }

        #experience .highlights {
          list-style: none;
          padding: 0;
          margin: 0 0 1.3rem;
        }

        #experience .highlights li {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary, #ccc);
          padding-left: 1.1rem;
          position: relative;
          margin-bottom: 0.5rem;
        }

        #experience .highlights li::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: var(--accent, #6c5ce7);
        }

        #experience .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        #experience .tags span {
          font-size: 0.75rem;
          padding: 0.3rem 0.7rem;
          border-radius: 999px;
          background: rgba(108, 92, 231, 0.15);
          color: var(--accent, #6c5ce7);
        }
      `}</style>
    </section>
  );
}
