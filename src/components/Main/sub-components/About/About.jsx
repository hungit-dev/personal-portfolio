import styles from "./About.module.css";
import Skill from "./Skill";
export default function About() {
  return (
    <>
      <div
        className={`${styles["about-section"]} container d-flex flex-column   gap-3 p-4`}
      >
        <h2 className="fs-2 fw-bold text-center">{"<About Me />"}</h2>
        <p>
          I'm a passionate web developer focused on building clean, functional
          applications with JavaScript. My journey into coding started with
          curiosity and has grown into a commitment to crafting quality
          software.
        </p>
        <p>
          I work primarily with vanilla JavaScript, HTML, and CSS, and I'm
          constantly expanding my skills through hands-on projects. I believe in
          writing code that's readable, maintainable, and solves real problems.
        </p>
        <h3 className="fs-4 fw-bold">Skills & Tools</h3>
        <ul
          className={`${styles["skills-list"]} d-flex flex-wrap gap-2 flex-md-row flex-column`}
        >
          <Skill skillName="JavaScript" />
          <Skill skillName="HTML" />
          <Skill skillName="CSS" />
          <Skill skillName="Git & GitHub" />
          <Skill skillName="VS Code" />
          <Skill skillName="Bootstrap" />
        </ul>
      </div>
    </>
  );
}
