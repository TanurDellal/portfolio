import { Container, Typography, Box, Button, Grid2 } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  About,
  Projects,
  Tech,
  Experience,
  Contact,
  Navbar,
  Footer,
} from "./components";
import "./App.css";
import Education from "./components/Education";

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
