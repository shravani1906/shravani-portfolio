// src/components/Articles.jsx
import React from "react";

export default function Articles() {
  const articles = [
    {
      title: "Building a Django REST Backend with JWT Auth",
      date: "Jun 2026",
      tag: "Backend",
      content: `Designed a secure Django REST Framework backend with JWT authentication and role-based access control, exposing 10+ CRUD endpoints. Focused on clean serializer design, permission classes, and MySQL schema optimization for scalable data models.`,
    },
    {
      title: "Integrating AI into a Django CMS",
      date: "May 2026",
      tag: "AI Integration",
      content: `Built a full-featured CMS in Django with content publishing, media management, and an AI chatbot powered by the Groq LLM API. Covered CRUD workflows, search/pagination, and analytics dashboards across multiple modules.`,
    },
    {
      title: "Automated Attendance System with React + DRF",
      date: "Mar 2026",
      tag: "Full Stack",
      content: `Built a full-stack attendance platform using Django REST Framework and React with JWT authentication. Implemented automated attendance calculations, duplicate-entry prevention, and department-wise reporting across 15+ backend endpoints.`,
    },
    {
      title: "Debugging an Infinite Re-render Loop in React",
      date: "Dec 2025",
      tag: "Frontend",
      content: `A production UI froze due to a useEffect dependency bug causing an infinite loop. Fixed it by tightening dependency arrays and adding conditional guards — a good reminder to understand React's render cycle before reaching for side effects.`,
    },
  ];

  return (
    <section id="articles" className="articles-section">
      <div className="articles-header">
        <span className="articles-eyebrow">Writing</span>
        <h2>
          Latest <span>Articles</span>
        </h2>
      </div>

      <div className="articles-container">
        {articles.map((article, index) => (
          <div
            className="article-card"
            key={index}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="article-card-glow"></div>
            <div className="article-top">
              <span className="article-tag">{article.tag}</span>
              <p className="article-date">{article.date}</p>
            </div>
            <h3>{article.title}</h3>
            <p className="article-content">{article.content}</p>
            <div className="article-read">
              Read more <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        #articles.articles-section {
          padding: 4rem 1.5rem;
        }

        #articles .articles-header {
          text-align: center;
          max-width: 560px;
          margin: 0 auto;
        }

        #articles .articles-eyebrow {
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

        #articles .articles-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        #articles .article-card {
          position: relative;
          background: linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.6rem;
          overflow: hidden;
          opacity: 0;
          animation: articleFadeIn 0.5s ease forwards;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        @keyframes articleFadeIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        #articles .article-card:hover {
          transform: translateY(-6px);
          border-color: rgba(108, 92, 231, 0.5);
          box-shadow: 0 12px 30px rgba(108, 92, 231, 0.18);
        }

        #articles .article-card-glow {
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

        #articles .article-card:hover .article-card-glow {
          opacity: 1;
        }

        #articles .article-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.8rem;
        }

        #articles .article-tag {
          font-size: 0.72rem;
          padding: 0.3rem 0.7rem;
          border-radius: 999px;
          background: rgba(108, 92, 231, 0.15);
          color: var(--accent, #6c5ce7);
        }

        #articles .article-date {
          font-size: 0.78rem;
          color: var(--text-secondary, #999);
        }

        #articles .article-card h3 {
          font-size: 1.05rem;
          margin-bottom: 0.7rem;
          position: relative;
        }

        #articles .article-content {
          font-size: 0.9rem;
          line-height: 1.65;
          color: var(--text-secondary, #ccc);
        }

        #articles .article-read {
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

        #articles .article-card:hover .article-read {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </section>
  );
}
