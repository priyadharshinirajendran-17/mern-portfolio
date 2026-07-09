import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

const SkillBar = ({ name, level }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-text-primary">{name}</span>
        <span className="font-mono text-xs text-text-faint">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-gradient-brand transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
