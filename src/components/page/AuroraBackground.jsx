import { Suspense, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { useAuroraColours, COLOURS } from "./auroraColours";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const AuroraBackground = () => {
  const { colour, backgroundImage } = useAuroraColours();

  useEffect(() => {
    animate(colour, COLOURS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <motion.div
        style={{
          height: "100vh",
          width: "100vw",
          maxWidth: "100vw",
          overflow: "hidden",
          position: "fixed",
          zIndex: -1,
          left: 0,
          backgroundImage,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            maxWidth: "100vw",
          }}
        >
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.div>
    </Suspense>
  );
};

export default AuroraBackground;
