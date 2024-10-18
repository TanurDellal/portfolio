import { Typography, Grid2, LinearProgress, Box } from "@mui/material";
import { tech } from "../..";
import BoxCard from "../UI/BoxCard";
import PaperCard from "../UI/PaperCard";
import { useEffect } from "react";
import { animate } from "framer-motion";

const SkillBar = ({ skill }) => {
  // useEffect(() => {
  //   animate(colour, COLOURS, {
  //     ease: "easeInOut",
  //     duration: 10,
  //     repeat: Infinity,
  //     repeatType: "mirror",
  //   });
  // }, []);

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flex: "2",
        }}
      >
        <Grid2
          container
          columns={{ xs: 2, sm: 5, md: 12 }}
          width="100%"
          spacing={2.5}
          justifyContent="center"
          alignItems="center"
        >
          {tech.skills.map((skill, index) => (
            <Grid2
              size={{ xs: 2, sm: 4, md: 4 }}
              item="true"
              width="100%"
              maxWidth="180px"
              key={index}
            >
              <SkillBar skill={skill} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </BoxCard>
  );
};

export default Tech;
