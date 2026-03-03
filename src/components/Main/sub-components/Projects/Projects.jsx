import ProjectCard from "./Card";
import styles from "./Projects.module.css";

const projects = [
  {
    image: "assets/images/file-uploader.png",
    github_url: "https://github.com/hungit-dev/file-uploader",
    demo_url: "https://file-uploader-pzv9.onrender.com/",
    title: "File Uploader Web App",
    description:
      "A full-stack web application that allows users to create, read, update, and delete folders and files, with secure user authentication.",
    reason:
      "Built to practice full-stack development with Node.js, Express.js, Passport.js, Prisma ORM, and cloud storage integration.",
    note: "Note: Hosted on Render's free tier. Initial load may take 30-60 seconds as the server wakes up.",
    techList: [
      "Node.js",
      "Express.js",
      "Passport.js",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
      "Bootstrap",
    ],
  },
  {
    image: "assets/images/coming-soon.png",
    github_url: "https://github.com/hungit-dev",
    title: "More Projects Coming Soon",
    description:
      "I'm constantly building and learning. Check out my GitHub for additional projects and experiments.",
    reason: "",
    isComingSoonCard: true,
  },
];
export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className={`${styles["projects-section"]} container d-flex flex-column  gap-3 p-4`}
      >
        <h2 className={`${styles["projects-title"]} fs-2 fw-bold text-center`}>
          {"<Projects />"}
        </h2>
        <div className={styles["cards-grid"]}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              github_url={project.github_url}
              demo_url={project.demo_url}
              title={project.title}
              description={project.description}
              reason={project.reason}
              note={project.note}
              techList={project.techList}
              isComingSoonCard={project.isComingSoonCard}
            />
          ))}
        </div>
      </section>
    </>
  );
}
