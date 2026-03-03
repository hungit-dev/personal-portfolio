import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./Card.module.css";
export default function ProjectCard({
  image = "https://static.vecteezy.com/system/resources/previews/048/910/778/non_2x/default-image-missing-placeholder-free-vector.jpg",
  github_url,
  demo_url,
  title,
  description,
  reason,
  note,
  techList,
  isComingSoonCard,
}) {
  return (
    <>
      <article>
        <Card>
          {image && (
            <Card.Img
              variant="top"
              src={image}
              className={styles["card-img"]}
            />
          )}
          <Card.Body>
            {title && (
              <Card.Title as={"h3"} className="fs-4 fw-bold">
                {title}
              </Card.Title>
            )}
            {description && <Card.Text>{description}</Card.Text>}
            {reason && <Card.Text>{reason}</Card.Text>}
            {note && <div className={styles["note"]}>{note}</div>}
            {techList && (
              <div className={styles["tech-stack"]}>
                {techList.map((tech, index) => (
                  <span key={index} className={styles["tech-tag"]}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <div
              className={styles["buttons-group"]}
              style={isComingSoonCard ? { justifyContent: "center" } : {}} //isComingSoonCard will have button aligned
            >
              {github_url && (
                <a
                  href={github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isComingSoonCard ? "" : "w-50"}
                  style={isComingSoonCard ? { width: "90%" } : {}} //isComingSoonCard will have a button with 90% width of its container
                >
                  <Button
                    className={`${styles["card-github-button"]} me-2 w-100`}
                    style={isComingSoonCard ? { width: "100%" } : {}} //only isComingSoonCard has a button with 100% width
                  >
                    {isComingSoonCard ? "View All Repositories" : "Github"}
                  </Button>
                </a>
              )}
              {demo_url && (
                <a
                  href={demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-50"
                >
                  <Button className={`${styles["card-live-button"]} w-100`}>
                    Demo{" "}
                  </Button>
                </a>
              )}
            </div>
          </Card.Body>
        </Card>
      </article>
    </>
  );
}
