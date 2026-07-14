export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/shravani-jamsandekar-7aa3a9246"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/shravani1906"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:shravanijamsandekar06@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="tel:+918356049807">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      <p className="footer-tagline">Designing. Building. Improving.</p>

      <p className="footer-bottom">© 2026 Shravani Jamsandekar</p>

      <style>{`
        .footer {
          position: relative;
          text-align: center;
          padding: 3rem 1.5rem 1.8rem;
          overflow: hidden;
        }

        .footer-glow {
          position: absolute;
          top: -60%;
          left: 50%;
          transform: translateX(-50%);
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(108, 92, 231, 0.15), transparent 70%);
          pointer-events: none;
        }

        .footer .social-links {
          position: relative;
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.2rem;
        }

        .footer .social-links a {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: inherit;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
        }

        .footer .social-links a:hover {
          transform: translateY(-4px);
          border-color: rgba(108, 92, 231, 0.5);
          box-shadow: 0 8px 20px rgba(108, 92, 231, 0.25);
          color: var(--accent, #6c5ce7);
        }

        .footer-tagline {
          position: relative;
          font-size: 0.9rem;
          color: var(--text-secondary, #999);
          margin-bottom: 0.5rem;
          letter-spacing: 0.02em;
        }

        .footer-bottom {
          position: relative;
          font-size: 0.8rem;
          color: var(--text-secondary, #777);
        }
      `}</style>
    </footer>
  );
}
