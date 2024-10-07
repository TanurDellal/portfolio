import { BrowserRouter } from "react-router-dom";
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
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
