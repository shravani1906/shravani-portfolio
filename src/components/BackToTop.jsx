import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        id="back-to-top"
        className={visible ? "visible" : ""}
        onClick={scrollToTop}
      >
        <i className="fas fa-arrow-up"></i>
      </div>

      <style>{`
        #back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--accent, #6c5ce7);
          color: #fff;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transform: translateY(15px);
          transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
          z-index: 999;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
        }

        #back-to-top.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        #back-to-top:hover {
          transform: translateY(-3px);
        }
      `}</style>
    </>
  );
}
