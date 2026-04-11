export default function About() {
  return (
    <section id="about" data-aos="fade-up" data-aos-delay="100">
      <h2>
        About <span>Me</span>
      </h2>

      <div className="about-left">
        <div className="about-content">
          <p>
            I'm a passionate and results-driven{" "}
            <strong>Full Stack Developer</strong> based in Mumbai, specializing
            in building modern, scalable, and user-friendly web and mobile
            applications.
          </p>

          <p>
            With a strong foundation in the <strong>MERN stack</strong> and
            hands-on experience in React Native, I love turning ideas into
            reality — from interactive 3D learning platforms to secure mobile
            authentication systems.
          </p>

          <p>
            During my present internship at{" "}
            <strong>Rapid SofLogic Pvt Ltd</strong>, I am working on full-stack
            applications, built and integrated RESTful APIs, improved UI
            responsiveness, and optimized performance. I take pride in writing
            clean, maintainable code and following industry best practices.
          </p>
        </div>
      </div>

      {/* Career Interests - Centered under left & right */}

      <div className="career-interests-card">
        <h2>
          Career <span>Interest</span>
        </h2>
        <p className="subtitle">
          Areas I'm passionate about and opportunities I'm seeking
        </p>

        <div className="interest-list">
          <div className="interest-item">
            <span className="interest-icon">
              <i class="fa-solid fa-display"></i>
            </span>
            Application of AI in Web & Mobile Development
          </div>
          <div className="interest-item">
            <span className="interest-icon">
              <i class="fa-solid fa-atom"></i>
            </span>
            UI Performance Optimization & User Experience
          </div>
          <div className="interest-item">
            <span className="interest-icon">
              <i class="fa-solid fa-cloud-meatball"></i>
            </span>
            Scalable Full-Stack Architecture & Cloud Deployment
          </div>
          <div className="interest-item">
            <span className="interest-icon">
              <i class="fa-solid fa-cube"></i>
            </span>
            End-to-End Project Ownership & Leadership Roles
          </div>
        </div>
      </div>
    </section>
  );
}
