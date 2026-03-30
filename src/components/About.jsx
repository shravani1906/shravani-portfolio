import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import P1 from "../assets/images/P1.png";

export default function About() {
  return (
    <section id="about" data-aos="fade-up" data-aos-delay="100">
      <h2>
        About <span>Me</span>
      </h2>

      <div className="about-container">
        {/* LEFT SIDE - CARD CONTENT */}
        <div className="about-content">
          <div className="about-card">
            <p>
              I'm a passionate and results-driven{" "}
              <strong>Full Stack Developer</strong> based in Mumbai,
              specializing in building modern, scalable, and user-friendly web
              and mobile applications.
            </p>
            <p>
              With a strong foundation in the <strong>MERN stack</strong> and
              hands-on experience in React Native, I love turning ideas into
              reality — from interactive 3D learning platforms to secure mobile
              authentication systems.
            </p>
          </div>
          <div className="about-card">
            <p>
              During my 8-month internship at{" "}
              <strong>Rapid Softech Pvt Ltd</strong>, I worked on full-stack
              applications, built and integrated RESTful APIs, improved UI
              responsiveness, and optimized performance.
            </p>
            <p>
              What drives me is solving real-world problems through technology.
              Whether it's crafting pixel-perfect interfaces or architecting
              robust backend systems, I’m always excited to learn and build
              impactful solutions.
            </p>
          </div>

          <div className="contact-info about-card contact-card">
            <p>📍 Mumbai, Maharashtra</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-visual">
          <div className="three-bg">
            <Canvas camera={{ position: [0, 0, 6] }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} />
              <Stars radius={80} depth={40} count={250} factor={3} fade />
            </Canvas>
          </div>

          <div className="floating-images">
            <img src={P1} alt="Illustration" className="float-img img1" />
          </div>
        </div>
      </div>
    </section>
  );
}
