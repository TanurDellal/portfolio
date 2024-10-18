// sharedStyles.js
import { useMotionValue, useMotionTemplate } from "framer-motion";

export const COLOURS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const useAuroraColours = () => {
  const colour = useMotionValue(COLOURS[0]);
  const border = useMotionTemplate`2px solid ${colour}`;
  const boxShadow = useMotionTemplate`0 4px 24px ${colour}`;
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${colour})`;

  return { colour, border, boxShadow, backgroundImage };
};
