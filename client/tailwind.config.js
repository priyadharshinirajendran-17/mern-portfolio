/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0B0E17",
          soft: "#10141F",
          card: "#141826",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
        },
        primary: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          dark: "#6D28D9",
        },
        accent: {
          DEFAULT: "#22D3EE",
          light: "#67E8F9",
          dark: "#0891B2",
        },
        text: {
          primary: "#E7E9EF",
          muted: "#8B93A7",
          faint: "#5B6377",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.12), transparent 40%)",
        "gradient-brand": "linear-gradient(90deg, #8B5CF6 0%, #22D3EE 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(139,92,246,0.25)",
        card: "0 10px 30px rgba(0,0,0,0.35)",
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: 1 },
          "50.01%, 100%": { opacity: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
