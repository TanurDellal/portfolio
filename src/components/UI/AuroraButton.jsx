// ButtonComponent.js
import { motion, animate } from "framer-motion";
import { useAuroraColours, COLOURS } from "../page/auroraColours";
import { useEffect } from "react";

const AuroraButton = () => {
  const { colour, border, boxShadow } = useAuroraColours();

  // Apply animation for the button
  useEffect(() => {
    animate(colour, COLOURS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [colour]);

  return (
    <motion.button
      style={{
        padding: "10px 20px",
        border,
        boxShadow,
        color: "#fff",
        backgroundColor: "#020617",
        cursor: "pointer",
        borderRadius: "25px",
        marginTop: "40px",
      }}
    >
      Hover Me
    </motion.button>
  );
};

export default AuroraButton;
