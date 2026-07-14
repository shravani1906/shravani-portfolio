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

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
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

  const navItems = [
    { id: "home", icon: "fa-solid fa-house-chimney", label: "Home" },
    { id: "about", icon: "fa-regular fa-user", label: "About" },
    { id: "experience", icon: "fa-solid fa-briefcase", label: "Experience" },
    {
      id: "certifications",
      icon: "fa-solid fa-award",
      label: "Certifications",
    },
    { id: "education", icon: "fa-solid fa-graduation-cap", label: "Education" },
    { id: "services", icon: "fa-solid fa-handshake", label: "Services" },
    { id: "projects", icon: "fa-solid fa-folder-open", label: "Projects" },
    { id: "skills", icon: "fa-solid fa-tools", label: "Skills" },
    { id: "articles", icon: "fa-solid fa-newspaper", label: "Articles" },
    { id: "contact", icon: "fa-solid fa-envelope", label: "Contact" },
  ];

  return (
    <nav>
      <div className="nav-container">
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

        <ul ref={menuRef} className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(item.id);
                }}
                title={item.label}
              >
                <i className={item.icon}></i>
              </a>
            </li>
          ))}
        </ul>

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

      <style>{`
        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(10, 10, 14, 0.6);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        nav .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0.7rem 1.5rem;
        }

        nav .logo-img {
          height: 36px;
          width: auto;
        }

        nav .nav-links {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          list-style: none;
          margin: 0;
          padding: 0.3rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        nav .nav-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          color: var(--text-secondary, #999);
          font-size: 0.9rem;
          text-decoration: none;
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }

        nav .nav-links a:hover {
          background: rgba(108, 92, 231, 0.12);
          color: var(--accent, #6c5ce7);
          transform: translateY(-2px);
        }

        nav .nav-links a.active {
          background: var(--accent, #6c5ce7);
          color: #fff;
        }

        nav .nav-controls {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        nav .theme-toggle,
        nav .hamburger {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: inherit;
          cursor: pointer;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }

        nav .theme-toggle:hover,
        nav .hamburger:hover {
          border-color: var(--accent, #6c5ce7);
          transform: translateY(-2px);
        }

        nav .hamburger {
          display: none;
        }

        @media (max-width: 768px) {
          nav .nav-links {
            position: fixed;
            top: 64px;
            right: 1.5rem;
            flex-direction: column;
            width: 200px;
            padding: 0.8rem;
            border-radius: 16px;
            background: rgba(10, 10, 14, 0.95);
            backdrop-filter: blur(14px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transform: translateY(-12px);
            opacity: 0;
            pointer-events: none;
            transition: transform 0.25s ease, opacity 0.25s ease;
          }

          nav .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          nav .nav-links li {
            width: 100%;
          }

          nav .nav-links a {
            width: 100%;
            height: auto;
            border-radius: 10px;
            justify-content: flex-start;
            gap: 0.7rem;
            padding: 0.6rem 0.8rem;
          }

          nav .hamburger {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}
