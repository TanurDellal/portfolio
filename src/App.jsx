import {
  Background,
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
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Tech />
      <Experience />
      <Contact />
    </>
  );
}
