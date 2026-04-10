import { useState } from "react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const certifications = [
    {
      id: 1,
      title: "Code Without Barriers: Machine Learning",
      issuer: "Veloces",
      date: "Feb/Mar 2025",
      skills: ["AI Azure services", "Microsoft 365 Copilot", "ML Fundamentals"],
      description:
        "Comprehensive training on machine learning concepts and practical applications using Microsoft Azure AI services.",
      pdfUrl: "/certificates/Code-without-Barriers.pdf",
    },
    {
      id: 2,
      title: "Introduction to Software Engineering",
      issuer: "Coursera",
      date: "Sep 2025",
      skills: [
        "Software Development Life Cycle",
        "Agile Methodologies",
        "Software Architecture",
      ],
      description:
        "In-depth course covering software engineering principles, design patterns, and best practices.",
      pdfUrl: "/certificates/certicate-coursera.pdf",
    },
    {
      id: 3,
      title: "Full Stack Developer Bootcamp",
      issuer: "GeeksforGeeks",
      date: "Nov 2025",
      skills: ["React", "Node.js", "MongoDB", "Django", "Tailwind CSS"],
      description:
        "Comprehensive bootcamp covering full stack development with hands-on projects.",
      pdfUrl: "/certificates/Full-Stack-Development-certificate.pdf",
    },
  ];

  const filteredCerts = certifications.filter(
    (cert) =>
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section id="certifications" data-aos="fade-up">
      <h2>Certifications</h2>
      <p className="subtitle">
        Professional credentials and continuous learning achievements
      </p>

      {/* Search & Filter - Kept exactly as you had */}
      <div className="cert-filters">
        <input
          type="text"
          placeholder="Search certifications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
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
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            className="cert-card"
            onClick={() => setSelectedCert(cert)}
          >
            <h3>{cert.title}</h3>
            <p>
              {cert.issuer} • {cert.date}
            </p>
            <div className="cert-tags">
              {cert.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>

            <h2>{selectedCert.title}</h2>
            <p className="modal-issuer">
              {selectedCert.issuer} • {selectedCert.date}
            </p>

            <div className="modal-tags">
              {selectedCert.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>

            <p className="modal-description">{selectedCert.description}</p>

            {/* Real PDF Opens in New Tab */}
            <a
              href={selectedCert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn modal-btn"
            >
              View Certificate PDF →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
