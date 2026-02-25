import ProjectCard from "./Card"
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal website to showcase my projects.",
    reason: "Built to demonstrate my front-end skills and React knowledge.",
    note: "Hosted on Render's free tier. May take a moment to load.",
    techList: ["React", "Bootstrap", "CSS"]
  },
  {
    title: "Todo List App",
    description: "An app to manage daily tasks.",
    reason: "Helps organize tasks and learn CRUD operations.",
    note: "Using local storage to save data.",
    techList: ["React", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Weather App",
    description: "Shows current weather and forecast for any city.",
    reason: "Learned how to fetch data from APIs.",
    note: "Powered by OpenWeatherMap API.",
    techList: ["React", "API", "CSS"]
  }
];
export default function Projects(){
    return (
        <>
        <div className={`${styles["projects-section"]} container-sm d-flex flex-column  gap-3 p-4`}>
            <h2 className="fs-2 fw-bold text-center">Projects</h2>
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
        </div>
        </>
    )
}