import { Box } from "@mui/material";
import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SplineBackground = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          maxWidth: "100vw",
          overflow: "hidden",
          position: "fixed",
          zIndex: 0,
          left: 0,
        }}
      >
        <Spline scene="https://prod.spline.design/xXll2C6YWS6Ds-cd/scene.splinecode" />

        {/* https://prod.spline.design/xXll2C6YWS6Ds-cd/scene.splinecode */}

        {/* https://prod.spline.design/4fAvcW2i5Uz15Y95/scene.splinecode } */}
      </Box>
    </Suspense>
  );
};

export default SplineBackground;
