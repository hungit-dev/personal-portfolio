import Button from 'react-bootstrap/Button';
import styles from "./Hero.module.css";
export default function Hero() {
    return (
        <>
        <section id='home' className={`${styles["hero-section"]} d-flex align-items-center justify-content-center flex-column p-3`}>
            <h1 className="hero-title fs-1 fw-bold"> <span className={`${styles["gradient-text"]} ${styles["span-marker"]}`}>{">"}</span>Hi, I'm Henry Huynh</h1>
            <p className={`${styles["gradient-text"]} fs-4`}>Aspiring Full Stack Developer</p>
            <p className='fs-5 text-center'>Building scalable web applications with modern technologies</p>
            <Button variant="primary" className='p-2'>View my work</Button>
        </section>
        </>
    )
}