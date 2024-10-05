import { Box, Typography, Grid2, LinearProgress, Paper } from "@mui/material";
import { tech } from "..";
import BoxCard from "./BoxCard";
import PaperCard from "./PaperCard";

const SkillBar = ({ skill }) => {
  const [proficiencyName, proficiencyValue] = skill.proficiency;

  return (
    <PaperCard elevation={3} sx={{ marginBottom: "20px" }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginBottom: "10px" }}
      >
        {skill.name}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={proficiencyValue}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: "#e0e0e0",
          "& .MuiLinearProgress-bar": {
            background: `linear-gradient(90deg, #ff6b6b ${proficiencyValue}%, #00d4ff)`, // Colorful gradient
          },
        }}
      />
      <Typography
        variant="body2"
        sx={{ marginTop: "10px", textAlign: "right" }}
      >
        {proficiencyName}
      </Typography>
    </PaperCard>
  );
};

const Tech = () => {
  return (
    <BoxCard id="tech">
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "40px" }}
      >
        {tech.title}
      </Typography>

      <Grid2
        container
        width="100%"
        spacing={2.5}
        justifyContent="center"
        alignItems="center"
      >
        {tech.skills.map((skill, index) => (
          <Grid2 item xs={12} md={6} width="160px" key={index}>
            <SkillBar skill={skill} />
          </Grid2>
        ))}
      </Grid2>
    </BoxCard>
  );
};

export default Tech;
