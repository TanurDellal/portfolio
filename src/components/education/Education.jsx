import { Typography, Box } from "@mui/material";
import { education } from "../..";
import BoxCard from "../UI/BoxCard";
import PaperCard from "../UI/PaperCard";
import SectionContentCard from "../UI/SectionContentCard";

const Education = () => {
  return (
    <BoxCard id="education">
      <SectionContentCard sectionTitle={education.title}>
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
      </SectionContentCard>
    </BoxCard>
  );
};

export default Education;
