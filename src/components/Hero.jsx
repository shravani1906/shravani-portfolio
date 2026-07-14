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
      <div className="hero-glow"></div>

      <div className="hero-row">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="status-dot"></span> Open to opportunities
          </span>
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

        <div className="hero-image-side">
          <div className="profile-ring"></div>
          <div className="profile-circle">
            <img src={profile} alt="Shravani Jamsandekar" />
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding: 5rem 1.5rem;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(108, 92, 231, 0.22), transparent 70%);
          pointer-events: none;
        }

        .hero-row {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
          flex-wrap: wrap;
          max-width: 1000px;
          margin: 0 auto;
        }

        .hero-content {
          flex: 1;
          min-width: 280px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--accent, #6c5ce7);
          background: rgba(108, 92, 231, 0.1);
          border: 1px solid rgba(108, 92, 231, 0.25);
          padding: 0.4rem 0.9rem;
          border-radius: 999px;
          margin-bottom: 1.2rem;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.2);
        }

        .hero-content h1 {
          font-size: 2.4rem;
          line-height: 1.25;
          margin-bottom: 0.8rem;
        }

        .hero-content h1 span {
          color: var(--accent, #6c5ce7);
        }

        .typing {
          font-size: 1.15rem;
          color: var(--text-secondary, #ccc);
          min-height: 1.6rem;
          margin-bottom: 1.8rem;
        }

        .btn-container {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-container .btn {
          display: inline-flex;
          align-items: center;
          padding: 0.8rem 1.7rem;
          border-radius: 999px;
          background: var(--accent, #6c5ce7);
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.92rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .btn-container .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(108, 92, 231, 0.35);
        }

        .btn-container .btn-outline {
          background: transparent;
          border: 1px solid rgba(108, 92, 231, 0.4);
          color: inherit;
        }

        .btn-container .btn-outline:hover {
          background: rgba(108, 92, 231, 0.08);
          box-shadow: none;
        }

        .hero-image-side {
          position: relative;
          flex-shrink: 0;
          width: 220px;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 2px dashed rgba(108, 92, 231, 0.35);
          animation: heroSpin 18s linear infinite;
        }

        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .profile-circle {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(108, 92, 231, 0.4);
          box-shadow: 0 12px 40px rgba(108, 92, 231, 0.25);
        }

        .profile-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </section>
  );
}
