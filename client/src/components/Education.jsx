import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { EDUCATION } from "../utils/constants.js";

const Education = () => {
  return (
    <section id="education" className="section">
      <p className="eyebrow">05. My background</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Education</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {EDUCATION.map((edu) => (
          <div key={edu.degree} className="glass-card flex gap-4 p-6">
            <FiBookOpen size={24} className="mt-1 shrink-0 text-primary-light" />
            <div>
              <h3 className="font-semibold text-text-primary">{edu.degree}</h3>
              <p className="mt-1 text-sm text-text-muted">{edu.institution}</p>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="font-mono text-text-faint">{edu.duration}</span>
                <span className="rounded-full border border-border px-2.5 py-1 text-accent">{edu.detail}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
