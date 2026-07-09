import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { PERSONAL_INFO } from "../utils/constants.js";

const ROLES = ["Fresher MERN Stack Developer", "React.js Enthusiast", "Aspiring DevOps Engineer"];

const TypingEffect = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = currentRole.slice(0, text.length + 1);
        setText(next);
        if (next === currentRole) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const next = currentRole.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="font-mono text-accent">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="section grid items-center gap-12 md:grid-cols-2">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">Hi, my name is</p>
          <h1 className="text-4xl font-bold leading-tight text-text-primary sm:text-5xl md:text-6xl">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="mt-3 h-8 text-xl font-semibold sm:text-2xl">
            <TypingEffect />
          </h2>
          <p className="mt-6 max-w-lg text-text-muted">{PERSONAL_INFO.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={PERSONAL_INFO.resumeUrl} download className="btn-primary">
              <FiDownload size={18} /> Download Resume
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-text-muted transition-colors hover:text-accent"
            >
              <FiGithub size={22} />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-text-muted transition-colors hover:text-accent"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href={PERSONAL_INFO.socials.email}
              aria-label="Send email"
              className="text-text-muted transition-colors hover:text-accent"
            >
              <FiMail size={22} />
            </a>
          </div>
        </motion.div>

        {/* Right: signature terminal card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="animate-float"
        >
          <div className="glass-card mx-auto max-w-md overflow-hidden font-mono text-sm">
            <div className="flex items-center gap-2 border-b border-border bg-white/[0.02] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
              <span className="ml-2 text-xs text-text-faint">whoami.js</span>
            </div>
            <div className="space-y-1.5 px-5 py-5 text-text-muted">
              <p><span className="text-primary-light">const</span> <span className="text-accent">developer</span> = {"{"}</p>
              <p className="pl-4">name: <span className="text-green-300">'Priyadharshini Rajendren'</span>,</p>
              <p className="pl-4">role: <span className="text-green-300">'MERN Stack Developer'</span>,</p>
              <p className="pl-4">stack: [<span className="text-green-300">'React'</span>, <span className="text-green-300">'Node'</span>, <span className="text-green-300">'Express'</span>, <span className="text-green-300">'MongoDB'</span>],</p>
              <p className="pl-4">learning: [<span className="text-green-300">'Docker'</span>, <span className="text-green-300">'AWS'</span>, <span className="text-green-300">'CI/CD'</span>],</p>
              <p className="pl-4">basedIn: <span className="text-green-300">'Trichy, India'</span>,</p>
              <p className="pl-4">openToWork: <span className="text-primary-light">true</span>,</p>
              <p>{"}"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
