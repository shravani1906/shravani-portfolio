import { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Smooth Scroll Function
  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust this if needed (navbar height + padding)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    closeMenu();
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Active nav link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((sec) => {
        const sectionTop = sec.offsetTop - 180;
        if (window.scrollY >= sectionTop) {
          current = sec.getAttribute("id");
        }
      });

      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div className="nav-container">
        {/* Logo */}
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("home");
          }}
        >
          <img src={logo} alt="Shravani Jamsandekar" className="logo-img" />
        </a>

        {/* Nav Links - Icons Only */}
        <ul ref={menuRef} className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("home");
              }}
              title="Home"
            >
              <i className="fa-solid fa-house-chimney"></i>
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("about");
              }}
              title="About"
            >
              <i className="fa-regular fa-user"></i>
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("experience");
              }}
              title="Experience"
            >
              <i className="fa-solid fa-briefcase"></i>
            </a>
          </li>
          <li>
            <a
              href="#certifications"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("certifications");
              }}
              title="Certifications"
            >
              <i className="fa-solid fa-award"></i>
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("education");
              }}
              title="Education"
            >
              <i className="fa-solid fa-graduation-cap"></i>
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("services");
              }}
              title="Services"
            >
              <i className="fa-solid fa-handshake"></i>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("projects");
              }}
              title="Projects"
            >
              <i className="fa-solid fa-folder-open"></i>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("skills");
              }}
              title="Skills"
            >
              <i className="fa-solid fa-tools"></i>
            </a>
          </li>
          <li>
            <a
              href="#articles"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("articles");
              }}
              title="Articles"
            >
              <i className="fa-solid fa-newspaper"></i>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("contact");
              }}
              title="Contact"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>

        {/* Right Controls */}
        <div className="nav-controls">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i
              className={
                theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon"
              }
            ></i>
          </button>

          <button ref={hamburgerRef} className="hamburger" onClick={toggleMenu}>
            <i
              className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            ></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
