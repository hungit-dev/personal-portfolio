import ProjectCard from "./Card";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal website to showcase my projects.",
    reason: "Built to demonstrate my front-end skills and React knowledge.",
    note: "Hosted on Render's free tier. May take a moment to load.",
    techList: ["React", "Bootstrap", "CSS"],
  },
  {
    title: "Todo List App",
    description: "An app to manage daily tasks.",
    reason: "Helps organize tasks and learn CRUD operations.",
    note: "Using local storage to save data.",
    techList: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Weather App",
    description: "Shows current weather and forecast for any city.",
    reason: "Learned how to fetch data from APIs.",
    note: "Powered by OpenWeatherMap API.",
    techList: ["React", "API", "CSS"],
  },
  {
  title: "Task Manager App",
  description: "Allows users to create, edit, and delete daily tasks.",
  reason: "Practiced state management and component reusability.",
  note: "Data is stored using localStorage.",
  techList: ["React", "JavaScript", "Bootstrap"],
},
{
  title: "Movie Search App",
  description: "Searches movies and displays detailed information like ratings and release dates.",
  reason: "Improved skills in working with APIs and handling async data.",
  note: "Powered by the TMDB API.",
  techList: ["React", "API", "Bootstrap"],
},
];
export default function Projects() {
  return (
    <>
      <section id="projects"
        className={`${styles["projects-section"]} container d-flex flex-column  gap-3 p-4`}
      >
        <h2 className={`${styles["projects-title"]} fs-2 fw-bold text-center`}>
          {"<Projects />"}
        </h2>
        <div className={styles["cards-grid"]}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              reason={project.reason}
              note={project.note}
              techList={project.techList}
            />
          ))}
        </div>
      </section>
    </>
  );
}
