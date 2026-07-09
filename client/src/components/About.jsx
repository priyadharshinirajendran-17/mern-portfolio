import React from "react";
import { motion } from "framer-motion";
import { ABOUT } from "../utils/constants.js";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="section">
      <p className="eyebrow">01. Get to know me</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">About Me</h2>

      <div
        ref={ref}
        className={`mt-8 grid gap-8 md:grid-cols-5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        <div className="space-y-4 text-text-muted md:col-span-3">
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="glass-card flex flex-col justify-center gap-3 p-6 md:col-span-2">
          <div className="flex justify-between border-b border-border pb-2 text-sm">
            <span className="text-text-faint">Location</span>
            <span>Trichy, Tamil Nadu</span>
          </div>
          <div className="flex justify-between border-b border-border pb-2 text-sm">
            <span className="text-text-faint">Focus</span>
            <span>MERN + Cloud/DevOps</span>
          </div>
          <div className="flex justify-between border-b border-border pb-2 text-sm">
            <span className="text-text-faint">Education</span>
            <span>MCA (2024–2026)</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-faint">Status</span>
            <span className="text-accent">Open to opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
