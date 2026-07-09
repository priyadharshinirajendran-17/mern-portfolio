import React from "react";
import { EXPERIENCE } from "../utils/constants.js";
import Timeline from "./Timeline.jsx";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <p className="eyebrow">03. Where I've worked</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Experience</h2>
      <Timeline items={EXPERIENCE} />
    </section>
  );
};

export default Experience;
