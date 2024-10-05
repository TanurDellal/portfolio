import { Typography, Avatar } from "@mui/material";
import { about } from "..";
import BoxCard from "./BoxCard";
import PaperCard from "./PaperCard";

const About = () => {
  return (
    <BoxCard id="about">
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "40px" }}
      >
        About Me
      </Typography>
      {/* Picture Section */}
      <Avatar
        alt="Tanur Dellal"
        src="/src/assets/tanurdellal_photo.jpeg" // Replace with actual path to your image
        sx={{
          width: { xs: 150, md: 250 },
          height: { xs: 150, md: 250 },
          border: "5px solid #fff",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
          marginBottom: "20px", // Adds space between image and text
        }}
      />

      {/* Text Section */}
      <PaperCard
        elevation={3}
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            marginBottom: "20px",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Tanur Dellal
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            marginBottom: "20px",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          {about.description}
        </Typography>
      </PaperCard>
    </BoxCard>
  );
};

export default About;
