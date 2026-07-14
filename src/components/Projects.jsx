//src/components/Projects.jsx
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" data-aos="fade-up" data-aos-delay="200">
      <div className="projects-header">
        <span className="projects-eyebrow">Portfolio</span>
        <h2>
          My <span>Projects</span>
        </h2>
      </div>

      <div className="projects-grid">
        <ProjectCard
          title="CarePlus – Django Clinic Management System"
          description="Full-stack clinic platform with RBAC, doctor self-portal, double-booking prevention, Chart.js analytics, PDF invoicing, and a complete DRF REST API with token auth."
          techs={[
            "Django",
            "DRF",
            "MySQL",
            "Chart.js",
            "ReportLab",
            "REST API",
          ]}
          icon="fa-solid fa-briefcase-medical"
          delay={100}
        />
        <ProjectCard
          title="AI-Powered Content Management System"
          description="Complete CMS with authentication, content publishing, media management, and an AI chatbot integration using the Groq LLM API."
          techs={["Django", "Tailwind CSS", "Groq LLM", "MySQL", "REST API"]}
          icon="fa-solid fa-robot"
          delay={200}
        />
        <ProjectCard
          title="AI Attendance Tracking System"
          description="Full-stack attendance platform with Django REST Framework and React, featuring JWT auth, role-based access, and automated department-wise reporting."
          techs={["Django", "DRF", "React", "MySQL", "JWT"]}
          icon="fa-solid fa-clipboard-check"
          delay={300}
        />
        <ProjectCard
          title="Wick & Weave – E-Commerce Platform"
          description="Fully responsive e-commerce frontend with smooth cart flows, Redux Toolkit state management, and RESTful API integration for product and order data."
          techs={["React.js", "Redux Toolkit", "Tailwind CSS", "Node.js"]}
          icon="fa-solid fa-cart-shopping"
          delay={100}
        />
      </div>

      <style>{`
        #projects .projects-header {
          text-align: center;
          max-width: 560px;
          margin: 0 auto;
        }

        #projects .projects-eyebrow {
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

        #projects .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 1.5rem;
          margin-top: 2.5rem;
        }
      `}</style>
    </section>
  );
}
