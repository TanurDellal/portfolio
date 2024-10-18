import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import styles from "./Hero.module.css";
import AuroraButton from "../UI/AuroraButton";

const Hero = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box component="section" className={styles.splineContainer} id="landing">
      <Box className={styles.welcomeContainer}>
        <Typography
          variant={isSmallScreen ? "h2" : "h1"}
          className={styles.welcomeText}
          sx={{ fontWeight: "800", padding: "20px" }}
          gutterBottom
        >
          Welcome!
        </Typography>
        <Typography
          variant={isSmallScreen ? "h6" : "h5"}
          color="white"
          className={styles.welcomeText}
        >
          I&apos;m Tanur, a First-Class CS Graduate
        </Typography>
        {/* <Button
          variant="contained"
          className={styles.nextButton}
          sx={{ marginTop: 4 }}
        >
          See My Work
        </Button> */}
        <AuroraButton />
      </Box>
    </Box>
  );
};

export default Hero;
