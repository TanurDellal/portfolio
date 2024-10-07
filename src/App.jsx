import {
  Hero,
  About,
  Education,
  Projects,
  Tech,
  Experience,
  Contact,
  Navbar,
  Footer,
} from "./components";
import "./App.css";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Education />
      <Projects />
      <Tech />
      <Experience />
      <Contact />
    </>
  );
}
