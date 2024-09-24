import { Box, Button, Typography } from "@mui/material";
import SplineCanvas from "./SplineCanvas";

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100vw",
        maxWidth: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="landing"
    >
      <SplineCanvas />
      <Box
        sx={{
          position: "absolute",
          zIndex: 1, // Ensures it is above the Spline component
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" color="white" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" color="white">
          I&apos;m Tanur, a Software Engineer
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 4 }}>
          See My Work
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
