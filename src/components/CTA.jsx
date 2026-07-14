export default function CTA() {
  return (
    <div id="cta" data-aos="fade-up">
      <div className="cta-glow"></div>
      <span className="cta-eyebrow">Let's Work Together</span>
      <h2>Ready to bring your idea to life?</h2>
      <p>
        Book a <strong>free 30-minute consultation</strong> — no pressure, just
        real talk.
      </p>
      <a
        href="https://calendly.com/shravanijamsandekar19/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        <span>Book Free Consultation Now</span>
        <i className="fas fa-arrow-right"></i>
      </a>

      <style>{`
        #cta {
          position: relative;
          max-width: 720px;
          margin: 4rem auto;
          text-align: center;
          padding: 4rem 2rem;
          border-radius: 24px;
          background: linear-gradient(160deg, #1e293b, #16213a);
          border: 1px solid #334155;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        #cta .cta-glow {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(108, 92, 231, 0.3), transparent 70%);
          pointer-events: none;
        }

        #cta .cta-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #a5b4fc;
          background: rgba(108, 92, 231, 0.15);
          border: 1px solid rgba(108, 92, 231, 0.3);
          padding: 0.35rem 1rem;
          border-radius: 999px;
          margin-bottom: 1.2rem;
          position: relative;
        }

        #cta h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          position: relative;
          color: #f1f5f9;
          max-width: 480px;
        }

        #cta p {
          font-size: 1.05rem;
          color: #94a3b8;
          margin-bottom: 2rem;
          position: relative;
          max-width: 420px;
        }

        #cta p strong {
          color: #f1f5f9;
        }

        #cta .btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          padding: 1rem 2.2rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #6c5ce7, #a29bfe);
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.98rem;
          box-shadow: 0 8px 24px rgba(108, 92, 231, 0.35);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        #cta .btn i {
          transition: transform 0.25s ease;
        }

        #cta .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 34px rgba(108, 92, 231, 0.5);
        }

        #cta .btn:hover i {
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}
