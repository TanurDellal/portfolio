import { Container, Typography } from "@mui/material";
import BoxCard from "./BoxCard";

const Experience = () => {
  return (
    <BoxCard id="experience">
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Experience
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Learn more about my professional experience.
        </Typography>
        {/* Add Experience content here */}
      </Container>
    </BoxCard>
  );
};

export default Experience;
