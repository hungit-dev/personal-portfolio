import styles from "./About.module.css";
import Skill from "./Skill";
export default function About() {
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
        <h3 className="fs-4 fw-bold">Skills & Tools</h3>
        <ul
          className={`${styles["skills-list"]} d-flex flex-wrap gap-2 flex-md-row flex-column`}
        >
          <Skill skillName="JavaScript" />
          <Skill skillName="Python" />
          <Skill skillName="HTML" />
          <Skill skillName="CSS" />
          <Skill skillName="React" />
          <Skill skillName="Node.js" />
          <Skill skillName="Express.js" />
          <Skill skillName="Django" />
          <Skill skillName="C#" />
          <Skill skillName="Blazor" />
          <Skill skillName="Bootstrap" />
          <Skill skillName="Tailwind" />
          <Skill skillName="EJS" />
          <Skill skillName="Jinja2" />
          <Skill skillName="Passport.js" />
          <Skill skillName="PostgreSQL" />
          <Skill skillName="Git" />
        </ul>
      </section>
    </>
  );
}
