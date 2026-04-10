import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Articles from "./components/Articles";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop"; // we'll create this small component
import Services from "./components/Services";

import "./index.css";
import Education from "./components/Education";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Education />
      <Services />
      <Projects />
      <Skills />
      <Articles />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
