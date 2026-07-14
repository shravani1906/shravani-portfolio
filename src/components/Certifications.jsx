import { useState } from "react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const certifications = [
    {
      id: 1,
      title: "Azure AI & Machine Learning",
      issuer: "Ratan Tata University",
      date: "Feb 2025",
      skills: [
        "Azure AI Services",
        "Machine Learning Fundamentals",
        "Cloud AI",
      ],
      description:
        "Training on machine learning concepts and practical applications using Microsoft Azure AI services.",
      pdfUrl: "/certificates/Code-without-Barriers.pdf",
    },
    {
      id: 2,
      title: "Data Science Internship",
      issuer: "Unified Mentor",
      date: "May 2025",
      skills: ["Python", "Data Analysis", "Machine Learning", "Pandas"],
      description:
        "One-month hands-on internship covering Python, data analysis workflows, and machine learning model building.",
      pdfUrl: "/certificates/Data-Scientist-Certificate.pdf",
    },
    {
      id: 3,
      title: "Full-Stack Web Development",
      issuer: "GeekforGeeks",
      date: "Aug 2025",
      skills: ["Django", "React", "REST APIs", "MySQL"],
      description:
        "Mastering full-stack web development with Django backend, React frontend, and RESTful API integration.",
      pdfUrl: "/certificates/Full-Stack-Web-Development.pdf",
    },
    {
      id: 4,
      title: "Software Engineering",
      issuer: "coursera",
      date: "Dec 2025",
      skills: ["Software Development", "Agile", "Version Control"],
      description:
        "Comprehensive training in software engineering principles, agile methodologies, and version control systems for effective software development.",
      pdfUrl: "/certificates/Software-Engineering.pdf",
    },
  ];

  const filteredCerts = certifications.filter(
    (cert) =>
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section id="certifications" data-aos="fade-up">
      <div className="cert-header">
        <span className="cert-eyebrow">Credentials</span>
        <h2>Certifications</h2>
        <p className="subtitle">
          Professional credentials and continuous learning achievements
        </p>
      </div>

      <div className="cert-filters">
        <div className="search-wrap">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            placeholder="Search certifications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-options">
          <select className="filter-select">
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
          <select className="filter-select">
            <option>All Issuers</option>
          </select>
        </div>
      </div>

      <div className="certifications-grid">
        {filteredCerts.map((cert, idx) => (
          <div
            key={cert.id}
            className="cert-card"
            style={{ animationDelay: `${idx * 0.08}s` }}
            onClick={() => setSelectedCert(cert)}
          >
            <div className="cert-card-glow"></div>
            <div className="cert-icon">
              <i className="fas fa-award"></i>
            </div>
            <h3>{cert.title}</h3>
            <p className="cert-meta">
              {cert.issuer} <span className="dot">•</span> {cert.date}
            </p>
            <div className="cert-tags">
              {cert.skills.slice(0, 2).map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
              {cert.skills.length > 2 && (
                <span className="more-tag">+{cert.skills.length - 2}</span>
              )}
            </div>
            <div className="cert-view">
              View details <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        ))}
      </div>

      {filteredCerts.length === 0 && (
        <p className="no-results">No certifications match "{searchTerm}"</p>
      )}

      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>

            <div className="modal-icon">
              <i className="fas fa-award"></i>
            </div>

            <h2>{selectedCert.title}</h2>
            <p className="modal-issuer">
              {selectedCert.issuer} <span className="dot">•</span>{" "}
              {selectedCert.date}
            </p>

            <div className="modal-tags">
              {selectedCert.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>

            <p className="modal-description">{selectedCert.description}</p>

            <a
              href={selectedCert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn modal-btn"
            >
              View Certificate PDF{" "}
              <i className="fas fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      )}

      <style>{`
        #certifications {
          padding: 4rem 1.5rem;
        }

        #certifications .cert-header {
          text-align: center;
          max-width: 560px;
          margin: 0 auto 2.5rem;
        }

        #certifications .cert-eyebrow {
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

        #certifications .subtitle {
          color: var(--text-secondary, #999);
          margin-top: 0.5rem;
        }

        #certifications .cert-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2.5rem;
        }

        #certifications .search-wrap {
          position: relative;
          flex: 1;
          min-width: 220px;
          max-width: 320px;
        }

        #certifications .search-icon {
          position: absolute;
          left: 0.9rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.85rem;
          color: var(--text-secondary, #777);
        }

        #certifications .search-input {
          width: 100%;
          padding: 0.7rem 1rem 0.7rem 2.4rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          color: inherit;
          transition: border-color 0.25s ease, background 0.25s ease;
        }

        #certifications .search-input:focus {
          outline: none;
          border-color: var(--accent, #6c5ce7);
          background: rgba(255, 255, 255, 0.05);
        }

        #certifications .filter-options {
          display: flex;
          gap: 0.6rem;
        }

        #certifications .filter-select {
          padding: 0.7rem 1rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          color: inherit;
          cursor: pointer;
        }

        #certifications .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 1.5rem;
        }

        #certifications .cert-card {
          position: relative;
          background: linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.6rem;
          cursor: pointer;
          overflow: hidden;
          opacity: 0;
          animation: certFadeIn 0.5s ease forwards;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        @keyframes certFadeIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        #certifications .cert-card:hover {
          transform: translateY(-6px);
          border-color: rgba(108, 92, 231, 0.5);
          box-shadow: 0 12px 30px rgba(108, 92, 231, 0.18);
        }

        #certifications .cert-card-glow {
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

        #certifications .cert-card:hover .cert-card-glow {
          opacity: 1;
        }

        #certifications .cert-icon {
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

        #certifications .cert-card h3 {
          font-size: 1.05rem;
          margin-bottom: 0.4rem;
          position: relative;
        }

        #certifications .cert-meta {
          font-size: 0.85rem;
          color: var(--text-secondary, #999);
        }

        #certifications .dot {
          color: var(--accent, #6c5ce7);
          margin: 0 0.2rem;
        }

        #certifications .cert-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        #certifications .cert-tags span,
        #certifications .modal-tags span {
          font-size: 0.72rem;
          padding: 0.3rem 0.7rem;
          border-radius: 999px;
          background: rgba(108, 92, 231, 0.15);
          color: var(--accent, #6c5ce7);
        }

        #certifications .more-tag {
          background: rgba(255, 255, 255, 0.06) !important;
          color: var(--text-secondary, #999) !important;
        }

        #certifications .cert-view {
          margin-top: 1.2rem;
          font-size: 0.8rem;
          color: var(--accent, #6c5ce7);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        #certifications .cert-card:hover .cert-view {
          opacity: 1;
          transform: translateX(0);
        }

        #certifications .no-results {
          text-align: center;
          color: var(--text-secondary, #999);
          margin-top: 2rem;
        }

        #certifications .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1.5rem;
          animation: certModalFade 0.2s ease;
        }

        @keyframes certModalFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        #certifications .modal-content {
          background: #14141c;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          padding: 2.2rem;
          max-width: 480px;
          width: 100%;
          position: relative;
          animation: certModalPop 0.25s ease;
        }

        @keyframes certModalPop {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        #certifications .modal-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(108, 92, 231, 0.12);
          color: var(--accent, #6c5ce7);
          font-size: 1.3rem;
          margin-bottom: 1.2rem;
        }

        #certifications .modal-close {
          position: absolute;
          top: 1.2rem;
          right: 1.2rem;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          border: none;
          color: inherit;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.25s ease;
        }

        #certifications .modal-close:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        #certifications .modal-issuer {
          color: var(--text-secondary, #999);
          margin-bottom: 0.8rem;
        }

        #certifications .modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.2rem;
        }

        #certifications .modal-description {
          line-height: 1.7;
          font-size: 0.92rem;
          color: var(--text-secondary, #ccc);
          margin-bottom: 1.6rem;
        }

        #certifications .modal-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.3rem;
          border-radius: 999px;
          background: var(--accent, #6c5ce7);
          color: #fff;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        #certifications .modal-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(108, 92, 231, 0.35);
        }
      `}</style>
    </section>
  );
}
