import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <Navbar expand="lg" className={`${styles.navbar} p-3`}>
        <Container>
          <Navbar.Brand href="#home" className={styles.logo}>
            {"<HenryHuynh />"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="mt-2 mt-lg-0">
            <Nav className="ms-auto gap-lg-2  ">
              <Nav.Link href="#home" className={styles["nav-link-item"]}>Home</Nav.Link>
              <Nav.Link href="#about" className={styles["nav-link-item"]}>About</Nav.Link>
              <Nav.Link href="#project" className={styles["nav-link-item"]}>Project</Nav.Link>
              <Nav.Link href="#contact" className={styles["nav-link-item"]}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
