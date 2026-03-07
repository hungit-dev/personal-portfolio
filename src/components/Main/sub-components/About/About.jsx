import styles from "./About.module.css";
import TechStack from "./TechStack";

const skills = [
  // Core Languages
  "JavaScript",
  "Python",
  "C#",
  // Frontend
  "HTML",
  "CSS",
  "React",
  "Bootstrap",
  "Tailwind",
  // Backend
  "Node.js",
  "Express.js",
  "Django",
  "Passport.js",
  // Templating
  "EJS",
  "Jinja2",
  // Database
  "PostgreSQL",
  // Testing / Architecture
  "Jest",
  "Babel",
  "TDD",
  "ES Modules",
  // Tools
  "Git",
];

export default function About({ isDarkMode }) {
  return (
    <>
      <section
        id="about"
        className={`${styles["about-section"]} container d-flex flex-column   gap-3 p-4`}
      >
        <h2 className={`${styles["about-title"]} fs-2 fw-bold text-center`}>
          {"<About Me />"}
        </h2>
        <p>
          I'm a passionate software developer focused on building clean,
          functional applications. My journey into coding started with curiosity
          and has grown into a commitment to crafting quality software that
          solves real-world problems.
        </p>
        <p>
          I am currently a student at NAIT in Edmonton, Alberta, and a student
          of The Odin Project, where I continue to expand my skills through
          hands-on projects. I enjoy tackling challenges, learning new
          technologies, and creating software that makes an impact.
        </p>
        <TechStack isDarkMode={isDarkMode} />
      </section>
    </>
  );
}
