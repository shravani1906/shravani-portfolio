export default function Contact() {
  return (
    <section id="contact" data-aos="fade-up" data-aos-delay="400">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-eyebrow">Get In Touch</span>
          <h2>
            Let's <span>Connect</span>
          </h2>
          <p className="contact-subtitle">
            Open to full-stack roles, freelance projects, and interesting ideas.
            Drop a message — I'll get back to you quickly ♡
          </p>
        </div>

        <div className="contact-glow"></div>
        <form action="https://formspree.io/f/meeryjqn" method="POST">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            autoComplete="email"
          />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            placeholder="Your message... describe your project or opportunity"
            required
          ></textarea>
          <button type="submit" className="btn btn-submit">
            <span>Send Message</span>
            <i className="fas fa-paper-plane"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() =>
              window.open(
                "https://calendly.com/shravanijamsandekar19/30min",
                "_blank",
              )
            }
          >
            <span>Book Free Consultation Call</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>
      </div>

      <style>{`
        #contact {
          padding: 4rem 1.5rem;
        }

        #contact .contact-container {
          position: relative;
          max-width: 620px;
          margin: 0 auto;
          background: linear-gradient(160deg, #1e293b, #16213a);
          border: 1px solid #334155;
          border-radius: 24px;
          padding: 3rem 2.2rem;
          overflow: hidden;
        }

        #contact .contact-glow {
          position: absolute;
          top: -30%;
          right: -20%;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(108, 92, 231, 0.22), transparent 70%);
          pointer-events: none;
        }

        #contact .contact-header {
          text-align: center;
          position: relative;
        }

        #contact .contact-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #a5b4fc;
          background: rgba(108, 92, 231, 0.15);
          border: 1px solid rgba(108, 92, 231, 0.3);
          padding: 0.35rem 1rem;
          border-radius: 999px;
          margin-bottom: 1rem;
        }

        #contact h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #f1f5f9;
        }

        #contact h2 span {
          color: #a5b4fc;
        }

        #contact .contact-subtitle {
          font-size: 1rem;
          margin: 0.8rem auto 2.2rem;
          color: #94a3b8;
          line-height: 1.7;
          max-width: 460px;
        }

        #contact form {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        #contact input,
        #contact textarea {
          padding: 0.85rem 1.1rem;
          border-radius: 10px;
          border: 1px solid #334155;
          background: #0f172a;
          color: #f1f5f9;
          font-family: inherit;
          font-size: 0.95rem;
          transition: border-color 0.25s ease, background 0.25s ease;
        }

        #contact input::placeholder,
        #contact textarea::placeholder {
          color: #64748b;
        }

        #contact textarea {
          min-height: 130px;
          resize: vertical;
        }

        #contact input:focus,
        #contact textarea:focus {
          outline: none;
          border-color: #6c5ce7;
          background: #16213a;
        }

        #contact .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.9rem 1.5rem;
          border-radius: 999px;
          border: none;
          font-family: inherit;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        #contact .btn-submit {
          background: linear-gradient(135deg, #6c5ce7, #a29bfe);
          color: #fff;
          box-shadow: 0 8px 22px rgba(108, 92, 231, 0.35);
        }

        #contact .btn-submit:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(108, 92, 231, 0.45);
        }

        #contact .btn-outline {
          background: transparent;
          border: 1px solid #334155;
          color: #f1f5f9;
        }

        #contact .btn-outline:hover {
          border-color: #6c5ce7;
          color: #a5b4fc;
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
}
