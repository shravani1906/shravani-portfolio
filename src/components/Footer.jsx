export default function Footer() {
  return (
    <footer className="footer">
      {/* SOCIAL */}
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/shravani-jamsandekar-7aa3a9246"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:shravanijamsandekar19@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="tel:+918356049807">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      {/* TAGLINE */}
      <p className="footer-tagline">Designing. Building. Improving.</p>

      {/* COPYRIGHT */}
      <p className="footer-bottom">© 2026 Shravani Jamsandekar</p>
    </footer>
  );
}
