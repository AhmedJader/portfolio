import React from "react";
import { motion } from "framer-motion";

const circleVariants = {
  animate4: {
    scale: [0.5, 1, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const BlurBackground = () => {
  return (
    <div className="blur-background">
      <div className="bg-slate-900 w-[380px] h-[280px] rounded-full"></div>
    </div>
  );
};


export default BlurBackground;
