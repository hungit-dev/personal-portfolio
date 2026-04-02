import styles from "./TechStack.module.css";
import StackIcon from "tech-stack-icons";

const techStacks = {
  frontend: [
    { name: "html5", label: "HTML" },
    { name: "css3", label: "CSS" },
    { name: "js", label: "JavaScript" },
    { name: "react", label: "React" },
    { name: "bootstrap5", label: "Bootstrap" },
    { name: "tailwindcss", label: "Tailwind CSS" },
  ],
  backend: [
    { name: "nodejs", label: "Node.js" },
    { name: "expressjs", label: "Express.js" },
    { name: "django", label: "Django" },
    { name: "passport", label: "Passport.js" },
    { name: "postgresql", label: "PostgreSQL" },
    { name: "prisma", label: "Prisma ORM" },
    { name: "net", label: ".NET" },
  ],
  tools: [
    { name: "linux", label: "Linux" },
    { name: "git", label: "Git" },
    { name: "github", label: "GitHub" },
  ],
};
export default function TechStack({ isDarkMode }) {
  return (
    <>
      <section>
        <h3 className="fs-4 fw-bold">Tech Stack</h3>
        <div className={`${styles["container"]} gap-5 p-3 mt-3`}>
          <div
            className={`${styles["tech-skills-container"]} d-flex flex-column text-center gap-3`}
          >
            <h4 className="fs-5">Frontend</h4>
            <div
              className={
                "d-flex flex-wrap justify-content-center align-items-center gap-5"
              }
            >
              {techStacks.frontend.map((tech) => (
                <div
                  key={tech.name}
                  className={"d-flex flex-column align-items-center gap-2"}
                >
                  <StackIcon
                    name={tech.name}
                    className={styles.icon}
                    variant={isDarkMode ? "dark" : "light"}
                  />
                  <p className="m-0 fs-6">{tech.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`${styles["tech-skills-container"]} d-flex flex-column text-center gap-3`}
          >
            <h4 className="fs-5">Backend</h4>
            <div
              className={
                "d-flex flex-wrap justify-content-center align-items-center gap-5"
              }
            >
              {techStacks.backend.map((tech) => (
                <div
                  key={tech.name}
                  className={"d-flex flex-column align-items-center gap-2"}
                >
                  <StackIcon
                    name={tech.name}
                    className={styles.icon}
                    variant={isDarkMode ? "dark" : "light"}
                  />
                  <p className="m-0 fs-6">{tech.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`${styles["tech-skills-container"]} ${styles["systems-tools-container"]} d-flex flex-column text-center gap-3`}
          >
            <h4 className="fs-5">Systems & Tools</h4>
            <div
              className={
                "d-flex flex-wrap justify-content-center align-items-center gap-5"
              }
            >
              {techStacks.tools.map((tech) => (
                <div
                  key={tech.name}
                  className={"d-flex flex-column align-items-center gap-2"}
                >
                  <StackIcon
                    name={tech.name}
                    className={styles.icon}
                    variant={isDarkMode ? "dark" : "light"}
                  />
                  <p className="m-0 fs-6">{tech.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
