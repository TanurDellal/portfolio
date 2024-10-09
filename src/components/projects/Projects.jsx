import {
  Typography,
  Button,
  Box,
  DialogContent,
  DialogTitle,
  IconButton,
  Dialog,
  Paper,
} from "@mui/material";
import PaperCard from "../UI/PaperCard";
import { projects } from "../..";
import "./Projects.css";
import BoxCard from "../UI/BoxCard";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import img from "../../assets/images/projects/cats.jpg";

const Projects = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const handleOpenDetails = (project) => {
    setSelectedProject(project); // Set the current project details
    setOpenDetails(true); // Open the dialog
  };

  const handleCloseDetails = () => {
    setOpenDetails(false); // Close the dialog
    setSelectedProject(null); // Clear the project
  };

  return (
    <BoxCard id="projects">
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "40px" }}
      >
        {projects.title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        {projects.list.map((project, index) => (
          <PaperCard key={index}>
            <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
              <img
                src={img}
                alt={project.title}
                style={{
                  width: "auto",
                  height: "100%",
                  maxHeight: "300px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  marginBottom: "10px",
                }}
              />
            </Box>

            <Box
              sx={{
                marginBottom: "20px",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                {project.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: "10px",
                }}
              >
                {project.techStack.map((tech, index) => (
                  <Paper
                    key={index}
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "5px 10px",
                      borderRadius: "8px",
                      background: "linear-gradient(90deg, #ff6b6b, #00d4ff)",
                      backgroundSize: "200% 200%",
                      animation: "gradientFlow 10s ease infinite",
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "#fff" }}>
                      {tech}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Box>
            <Typography variant="body2" sx={{ marginBottom: "10px" }}>
              {project.info}
            </Typography>
            <Typography variant="b" sx={{ marginBottom: "10px" }}>
              What is it about?
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "10px" }}>
              {project.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                columnGap: "20px",
                marginTop: "20px",
              }}
            >
              <Button variant="contained" color="primary" href={project.link}>
                View Project
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleOpenDetails(project)}
              >
                View Details
              </Button>
            </Box>
          </PaperCard>
        ))}
      </Box>
      <Dialog
        open={openDetails}
        onClose={handleCloseDetails}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          {selectedProject?.title} - Details
          <IconButton
            aria-label="close"
            onClick={handleCloseDetails}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <ul className="list">
            {selectedProject?.details.map((det, index) => (
              <li key={index}>
                <Typography variant="body2">{det}</Typography>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </BoxCard>
  );
};

export default Projects;
