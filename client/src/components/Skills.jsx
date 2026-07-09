import React, { useEffect, useState } from "react";
import { fetchSkills } from "../api/skills.js";
import { FALLBACK_SKILLS, SKILL_CATEGORY_ORDER } from "../utils/constants.js";

const Skills = () => {
  const [skills, setSkills] = useState(FALLBACK_SKILLS);

  useEffect(() => {
    let isMounted = true;

    fetchSkills()
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setSkills(data);
        }
      })
      .catch(() => {
        // Keep fallback data — the API may not be running locally yet.
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const grouped = SKILL_CATEGORY_ORDER.map((category) => ({
    category,
    items: skills.filter((s) => s.category === category),
  })).filter((group) => group.items.length > 0);

  return (
    <section id="skills" className="section">
      <p className="eyebrow">02. What I work with</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Skills</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {grouped.map((group) => (
          <div key={group.category} className="glass-card p-6">
            <h3 className="mb-4 font-mono text-sm uppercase tracking-wide text-primary-light">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((skill) => (
                <span
                  key={skill._id}
                  className="rounded-full border border-border bg-white/[0.03] px-4 py-1.5 text-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;