import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

const TimelineItem = ({ item, isLast }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className={`relative pl-10 ${isLast ? "" : "pb-10"} ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
      {!isLast && <span className="absolute left-[7px] top-4 h-full w-px bg-border" />}
      <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-bg" />

      <div className="glass-card p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-semibold text-text-primary">{item.role}</h3>
          <span className="font-mono text-xs text-text-faint">{item.duration}</span>
        </div>
        <p className="mt-1 text-sm text-primary-light">{item.company}</p>
        <ul className="mt-3 list-inside space-y-1.5 text-sm text-text-muted">
          {item.points.map((point, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Timeline = ({ items }) => (
  <div className="mt-10">
    {items.map((item, i) => (
      <TimelineItem key={i} item={item} isLast={i === items.length - 1} />
    ))}
  </div>
);

export default Timeline;
