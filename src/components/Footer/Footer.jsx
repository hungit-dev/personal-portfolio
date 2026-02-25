import Contact from "./sub-components/Contact/Contact"
import styles from "./Footer.module.css";
export default function Footer(){
    return (
        <>
        <footer className={styles["footer-section"]}>
            <Contact />
            <p className={`text-center p-1`}>@lamnhathunghuynh</p>
        </footer>
        </>
    )
}