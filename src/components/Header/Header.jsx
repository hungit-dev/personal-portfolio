import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";
import { motion, useScroll } from "motion/react";
import { useState, useEffect } from "react";

export default function Header({ toggleTheme, isDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  //useScroll for scroll progress indicator (motion)\
  const { scrollYProgress } = useScroll();
  // implement scrollspy to highlight the active section in the navbar
  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "contact"];
    const NAVBAR_OFFSET = 120;
    const updateActiveSection = () => {
      const atBottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) return setActiveSection("contact");
      const anchor = window.scrollY + NAVBAR_OFFSET;
      const active =
        sectionIds.findLast(
          (id) =>
            (document.getElementById(id)?.offsetTop ?? Infinity) <= anchor,
        ) ?? sectionIds[0];

      setActiveSection(active);
    };
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);
  //when user scrolls down, navbar becomes glassy, when user scrolls back to top, navbar becomes normal
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed-top">
      <Navbar
        expand="lg"
        className={`${styles.navbar} ${isScrolled ? styles.glassy : ""} p-3 `}
      >
        <Container>
          <Navbar.Brand href="#home" className={styles.logo}>
            {"<Henry Huynh />"}
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="mt-2 mt-lg-0">
            <Nav className="ms-auto gap-lg-2  ">
              <Nav.Link
                href="#home"
                className={styles["nav-link-item"]}
                active={activeSection === "home"}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={styles["nav-link-item"]}
                active={activeSection === "about"}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={styles["nav-link-item"]}
                active={activeSection === "projects"}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={styles["nav-link-item"]}
                active={activeSection === "contact"}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div
            className={`d-flex gap-3 ${styles["toggler-hamburger-container"]}`}
          >
            <span
              onClick={toggleTheme}
              className={`d-flex align-items-center ${styles["theme-toggler"]} ms-2`}
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-moon"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-sun"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              )}
            </span>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
        </Container>
      </Navbar>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          originX: 0,
          background: "linear-gradient(90deg, #265dad, #37c5f0)",
        }}
      />
    </header>
  );
}
