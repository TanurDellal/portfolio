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

export default function App() {
  return (
    <BrowserRouter>
      <Hero />

      {/* Projects Section */}
      <Box
        component="section"
        id="projects"
        sx={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          py: 8,
          backgroundColor: "#f4f4f9",
        }}
      >
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            My Projects
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Explore the projects I&apos;ve worked on.
          </Typography>
          <Grid2 container spacing={4}>
            {/* Replace these Grid items with actual project details */}
            <Grid2 item xs={12} sm={6} md={4}>
              <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 2 }}>
                <Typography variant="h6">Project 1</Typography>
                <Typography variant="body2">
                  Description of project 1.
                </Typography>
              </Box>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4}>
              <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 2 }}>
                <Typography variant="h6">Project 2</Typography>
                <Typography variant="body2">
                  Description of project 2.
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box
        component="section"
        id="experience"
        sx={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          py: 8,
          backgroundColor: "#ffffff",
        }}
      >
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Experience
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Learn more about my professional experience.
          </Typography>
          {/* Add Experience content here */}
        </Container>
      </Box>

      {/* Education Section */}
      <Box
        component="section"
        id="education"
        sx={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          py: 8,
          backgroundColor: "#f4f4f9",
        }}
      >
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Education
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Here is my educational background.
          </Typography>
          {/* Add Education content here */}
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        component="section"
        id="contact"
        sx={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          py: 8,
          backgroundColor: "#ffffff",
        }}
      >
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Feel free to reach out to me.
          </Typography>
          <Box textAlign="center">
            <Button variant="contained" color="primary">
              Send a Message
            </Button>
          </Box>
        </Container>
      </Box>
    </BrowserRouter>
  );
}
