import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "./Hero.module.css";
export default function Hero() {
  const fullText = "Aspiring Full Stack Developer";
  const [text, setText] = useState("");
  const typingSpeed = 60;
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section
        id="home"
        className={`${styles["hero-section"]} d-flex align-items-center justify-content-center flex-column p-3`}
      >
        <h1 className="hero-title fs-1 fw-bold me-2">
          {" "}
          <span
            className={`${styles["gradient-text"]} ${styles["span-marker"]}`}
          >
            {">"}
          </span>
          Hi, I'm Henry Huynh
        </h1>
        <p className={`${styles["gradient-text"]} fs-4 ms-1 ms-sm-5`}>{text}</p>
        <p className="fs-5 text-center">
          Building scalable software applications with modern technologies
        </p>
        <a href="#projects">
          <Button variant="primary" className="p-2">
            View my work
          </Button>
        </a>
        <span className={styles["arrow-down-icon"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={`bi bi-arrow-down ${styles["arrow-down-svg"]}`}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
            />
          </svg>
        </span>
      </section>
    </>
  );
}
