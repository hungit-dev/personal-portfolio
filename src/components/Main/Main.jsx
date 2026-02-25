import Hero from "./sub-components/Hero/Hero"
import About from "./sub-components/About/About"
import Projects from "./sub-components/Projects/Projects"
export default function Main() {
    return (
        <>
        <div className="p-5">
        <Hero />
        <About />
        <Projects />
        </div>
        </>
    )
}