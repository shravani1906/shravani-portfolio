export default function Services() {
  return (
    <section id="services" data-aos="fade-up" data-aos-delay="400">
      <h2 style={{ textAlign: "center", marginBottom: "5rem" }}>
        My <span>Services</span>
      </h2>

      <div className="services-grid">
        {/* Web Design */}
        <div className="project-card" data-aos="fade-up" data-aos-delay="500">
          <h3>
            <i class="fa-brands fa-figma"></i> Web Design
          </h3>
          <p>
            Modern, responsive, conversion-focused websites that look premium
            and load fast.
          </p>
          <ul>
            <li>UI/UX Design (Figma)</li>
            <li>Landing Pages &amp; E-commerce</li>
            <li>Brand-aligned Design Systems</li>
          </ul>
          <a href="#contact" className="btn">
            Start a Design Project
          </a>
        </div>

        {/* Full-Stack Web Development */}
        <div className="project-card" data-aos="fade-up" data-aos-delay="600">
          <h3>
            <i class="fa-brands fa-windows"></i> Full-Stack Web Development
          </h3>
          <p>
            MERN stack websites &amp; web apps built from scratch or migrated.
          </p>
          <ul>
            <li>Custom Web Applications</li>
            <li>REST APIs + Backend</li>
            <li>Performance Optimization</li>
          </ul>
          <a href="#contact" className="btn">
            Build My Web App
          </a>
        </div>

        {/* Mobile App Development */}
        <div className="project-card" data-aos="fade-up" data-aos-delay="700">
          <h3>
            <i class="fa-brands fa-android"></i> Mobile App Development
          </h3>
          <p>React Native + Expo apps for iOS &amp; Android.</p>
          <ul>
            <li>Cross-platform Apps</li>
            <li>Authentication &amp; Dashboard</li>
            <li>Push Notifications &amp; Offline Support</li>
          </ul>
          <a href="#contact" className="btn">
            Launch My App
          </a>
        </div>
      </div>

      {/* End-to-End Consulting */}
      <div className="end-to-end">
        <h3>End-to-End Project Delivery</h3>
        <p style={{ fontSize: "1.3rem", margin: "1rem 0" }}>
          From idea → design → development → deployment → maintenance.
          <br />I handle everything so you don’t have to.
        </p>
        <a
          href="#contact"
          className="btn"
          style={{ fontSize: "1.3rem", padding: "1.2rem 3rem" }}
        >
          Book Free Consultation →
        </a>
      </div>
    </section>
  );
}
