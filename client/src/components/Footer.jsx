import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { PERSONAL_INFO } from "../utils/constants.js";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:px-10 md:text-left">
        <p className="font-mono text-xs text-text-faint">
          © {year} {PERSONAL_INFO.name}. Built with the MERN stack.
        </p>

        <div className="flex items-center gap-5">
          <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-text-muted hover:text-accent">
            <FiGithub size={18} />
          </a>
          <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-text-muted hover:text-accent">
            <FiLinkedin size={18} />
          </a>
          <a href={PERSONAL_INFO.socials.email} aria-label="Email" className="text-text-muted hover:text-accent">
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
