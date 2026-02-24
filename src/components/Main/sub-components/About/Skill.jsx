import styles from "./Skill.module.css";
export default function Skill({skillName}) {
    return (
        <>
        <li className={styles["skill-item"]}>
            {skillName}
        </li>
        </>
    )
}