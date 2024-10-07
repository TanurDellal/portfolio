import BoxCard from "../UI/BoxCard";
import SectionContentCard from "../UI/SectionContentCard";
import { experiences } from "../..";
import { Box, Typography } from "@mui/material";
import PaperCard from "../UI/PaperCard";

const Experience = () => {
  return (
    <BoxCard id="experience">
      <SectionContentCard sectionTitle={experiences.title}>
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
          {experiences.list.map((exp, index) => (
            <PaperCard key={index}>
              <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
                <img
                  src={exp.image}
                  alt={exp.title}
                  style={{
                    width: "100%",
                    maxWidth: "900px",
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    marginBottom: "10px",
                  }}
                />
              </Box>

              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                {exp.title}
              </Typography>

              <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                {exp.info}
              </Typography>
              <ul className="list">
                {exp.details.map((det, index) => (
                  <li key={index}>
                    <Typography variant="body2">{det}</Typography>
                  </li>
                ))}
              </ul>
            </PaperCard>
          ))}
        </Box>
      </SectionContentCard>
    </BoxCard>
  );
};

export default Experience;
