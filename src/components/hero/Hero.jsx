import { Box, Button, Typography } from "@mui/material";
import SplineCanvas from "./SplineCanvas";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <Box component="section" className={styles.splineContainer} id="landing">
      <SplineCanvas />
      <Box className={styles.welcomeContainer}>
        <Typography
          variant="h2"
          className={styles.welcomeText}
          sx={{ fontWeight: "800", padding: "20px" }}
          gutterBottom
        >
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" color="white" className={styles.welcomeText}>
          I&apos;m Tanur, a First-Class CS Graduate
        </Typography>
        <Button
          variant="contained"
          className={styles.nextButton}
          sx={{ marginTop: 4 }}
        >
          See My Work
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
