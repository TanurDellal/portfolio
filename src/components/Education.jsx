import { Typography, Grid2 } from "@mui/material";
import { education } from "..";
import BoxCard from "./BoxCard";
import PaperCard from "./PaperCard";

const Education = () => {
  return (
    <BoxCard id="education">
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "40px" }}
      >
        {education.title}
      </Typography>

      <Grid2 container spacing={4} justifyContent="center">
        {education.list.map((e, index) => (
          <Grid2
            item
            key={index}
            xs={12}
            md={6}
            spacing={4}
            justifyContent="center"
            width="100%"
            maxWidth="1000px"
          >
            <PaperCard>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {e.award}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontStyle: "italic", marginBottom: "10px" }}
              >
                {e.institution}
              </Typography>
              <Typography variant="body1">{e.description}</Typography>
            </PaperCard>
          </Grid2>
        ))}
      </Grid2>
    </BoxCard>
  );
};

export default Education;
