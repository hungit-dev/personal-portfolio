import Button from 'react-bootstrap/Button';
import styles from "./Hero.module.css";
export default function Hero() {
    return (
        <>
        <div className={`${styles["hero-section"]} d-flex align-items-center justify-content-center flex-column p-3`}>
            <h1 className="hero-title fs-1 fw-bold">Hi, I'm Henry Huynh</h1>
            <p className='fs-4'>Aspiring Full Stack Developer</p>
            <p className='fs-5 text-center'>Building scalable web applications with modern technologies</p>
            <Button variant="primary" className='p-2'>View my work</Button>
        </div>
        </>
    )
}