import { Typography, Box } from "@mui/material";
import { education } from "../..";
import BoxCard from "../UI/BoxCard";
import PaperCard from "../UI/PaperCard";

const Education = () => {
  return (
    <BoxCard id="education">
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "40px" }}
      >
        {education.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {education.list.map((e, index) => (
          <PaperCard key={index}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {e.award}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "10px" }}>
              {e.institution}
            </Typography>
            <Typography variant="body1">{e.details}</Typography>
          </PaperCard>
        ))}
      </Box>
    </BoxCard>
  );
};

export default Education;
