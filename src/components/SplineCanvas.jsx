import { Box } from "@mui/material";
import { Suspense, lazy } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

const SplineCanvas = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          maxWidth: "100vw",
          overflow: "hidden",
          position: "absolute",
          zIndex: 0,
          left: 0,
        }}
      >
        <Spline scene="https://prod.spline.design/WldTCk4WUUZcPLsr/scene.splinecode" />
      </Box>
    </Suspense>
  );
};

export default SplineCanvas;
