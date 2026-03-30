import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  /* 🔥 CLOSE ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* 🔥 CLOSE ON SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);

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
        <a href="#home" className="logo">
          <i className="fa-solid fa-s"></i>
        </a>

        {/* NAV LINKS */}
        <ul
          ref={menuRef}
          className={`nav-links ${menuOpen ? "active" : ""}`}
          onMouseLeave={() => setMenuOpen(false)} // 🔥 CLOSE ON HOVER OUT
        >
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        {/* CONTROLS */}
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
