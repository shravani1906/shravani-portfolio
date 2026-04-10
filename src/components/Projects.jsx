import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" data-aos="fade-up" data-aos-delay="200">
      <h2>
        My <span>Projects</span>
      </h2>

      <div className="projects-grid">
        <ProjectCard
          title="Wick&Weave - E-commerce Platform for Handcrafted Goods"
          description="Full-stack e-commerce platform with React.js frontend, Node.js/Express backend, and MongoDB database, featuring user authentication, product management, and secure payment integration."
          techs={[
            "Tailwind CSS",
            "React.js",
            "Redux Toolkit",
            "Node.js",
            "Express",
            "MongoDB",
          ]}
          delay={300}
        />
        <ProjectCard
          title="Cosmo Learn – Interactive Space Learning Platform"
          description="Full-stack space learning platform with 3D planet exploration and cinematic UI using Three.js."
          techs={[
            "React.js",
            "Redux Toolkit",
            "Node.js",
            "Express.js",
            "Three.js",
            "REST APIs",
          ]}
          delay={100}
        />

        <ProjectCard
          title="Full-Stack Mobile Authentication & Dashboard App"
          description="JWT auth, React Native (Expo) frontend + Django REST backend with MySQL."
          techs={[
            "React Native",
            "Expo",
            "Django",
            "Django REST Framework",
            "MySQL",
            "JWT",
          ]}
          delay={200}
        />

        <ProjectCard
          title="Airbnb Clone – Full-Stack Vacation Rental Platform"
          description="Full-stack Airbnb clone with React.js frontend, Node.js/Express backend, and MongoDB database."
          techs={["React.js", "Node.js", "Express", "MongoDB"]}
          delay={300}
        />
      </div>
    </section>
  );
}
