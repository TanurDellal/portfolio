import { Typography, Avatar } from "@mui/material";
import { about } from "../../index.js";
import BoxCard from "../UI/BoxCard.jsx";
import PaperCard from "../UI/PaperCard.jsx";
import SectionContentCard from "../UI/SectionContentCard.jsx";
import img from "../../assets/images/profilePhoto/tanurdellal_photo.jpeg";

const About = () => {
  return (
    <BoxCard id="about">
      <SectionContentCard sectionTitle={about.title}>
        <Avatar
          alt="Tanur Dellal"
          src={img}
          sx={{
            width: { xs: 150, md: 250 },
            height: { xs: 150, md: 250 },
            border: "5px solid #fff",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
            marginBottom: "40px", // Adds space between image and text
          }}
        />

        {/* Text Section */}
        <PaperCard elevation={3}>
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
              padding: "0 10px",
            }}
          >
            {about.details}
          </Typography>
        </PaperCard>
      </SectionContentCard>
    </BoxCard>
  );
};

export default About;
