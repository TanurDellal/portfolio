import { Typography, Grid2, Button } from "@mui/material";
import PaperCard from "./PaperCard";
import { projects } from "..";
import styles from "./Projects.module.css";
import BoxCard from "./BoxCard";

const Projects = () => {
  return (
    <BoxCard id="projects">
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "40px" }}
      >
        {projects.title}
      </Typography>

      <Grid2 container spacing={4} justifyContent="center">
        {projects.list.map((project, index) => (
          <Grid2 item xs={12} md={6} key={index}>
            <PaperCard>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontStyle: "italic", marginBottom: "10px" }}
              >
                {project.info}
              </Typography>
              <ul className={styles.list}>
                {project.description.map((desc, idx) => (
                  <li key={idx}>
                    <Typography variant="body1">{desc}</Typography>
                  </li>
                ))}
              </ul>
              <Button variant="contained" color="primary" href={project.link}>
                View Project
              </Button>
            </PaperCard>
          </Grid2>
        ))}
      </Grid2>
    </BoxCard>
  );
};

export default Projects;
