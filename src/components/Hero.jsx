import { useEffect } from "react";
import profile from "../assets/images/profile.jpeg"; // ← Put your real photo here
import Typed from "typed.js";

export default function Hero() {
  useEffect(() => {
    const typed = new Typed("#typed", {
      strings: [
        "Full-Stack Developer",
        "React & React Native Enthusiast",
        "Building beautiful & scalable apps in Python & JavaScript",
        "Always learning new things ^1000",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="hero" id="home" data-aos="fade-up">
      <div className="hero-row">
        {" "}
        {/* ← Only this wrapper added */}
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Shravani Jamsandekar</span>
          </h1>
          <div className="typing" id="typed"></div>
          <div className="btn-container">
            <a href="#projects" className="btn">
              View My Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Connect
            </a>
          </div>
        </div>
        {/* Right Side Image */}
        <div className="hero-image-side">
          <div className="profile-circle">
            <img
              src={profile} // ← Put your real photo here
              alt="Shravani Jamsandekar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
