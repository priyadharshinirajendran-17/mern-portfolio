import React from "react";
import { FiAward } from "react-icons/fi";
import { CERTIFICATIONS } from "../utils/constants.js";

const Certifications = () => {
  return (
    <section id="certifications" className="section !pt-0">
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATIONS.map((cert) => (
          <div key={cert.name} className="glass-card p-5">
            <FiAward size={20} className="text-accent" />
            <h4 className="mt-3 text-sm font-semibold text-text-primary">{cert.name}</h4>
            <p className="mt-1 text-xs text-text-muted">{cert.issuer}</p>
            <p className="mt-2 font-mono text-xs text-text-faint">{cert.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
