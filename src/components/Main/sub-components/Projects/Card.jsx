import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from "./Card.module.css";
export default function ProjectCard({ title="Project Title", description="Project Description",reason="Reasons",note="Note",techList = [] }){
    return (
        <>
    <Card >
        <Card.Img variant="top" src="https://external-preview.redd.it/Gvoie4igJZoCko89KahEI7BpLvkO2aqIvTL0MJkpACQ.jpg?width=1080&crop=smart&auto=webp&s=b12a39d0572f148250b143bc2166e8cc19485e50" className={styles["card-img"]}/>
        <Card.Body>
            <Card.Title className='fs-4 fw-bold'>{title}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            <Card.Text>
            {reason}
            </Card.Text>
            <div className={styles["note"]}>
               {note}
            </div>
            <div className={styles["tech-stack"]}>
                {techList.map((tech, index) => (
                    <span key={index} className={styles["tech-tag"]}>{tech}</span>
                ))}
            </div>
            <div className={styles["buttons-group"]}>
                 <Button  className={`${styles["card-github-button"]} me-2`}>Github</Button>
                 <Button  className={styles["card-live-button"]}>Demo &rarr;</Button>
            </div>
        </Card.Body>
    </Card>
        </>
    )
}