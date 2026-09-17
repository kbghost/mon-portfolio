/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#09090b",
          soft: "#0f0f12",
          panel: "#141417",
          border: "#232327",
          borderSoft: "#1c1c20",
        },
        bone: {
          DEFAULT: "#f2f1ec",
          muted: "#a3a2ab",
          dim: "#68666f",
        },
        ember: {
          DEFAULT: "#ff5a1f",
          soft: "#ff7a3d",
          dim: "#a83c14",
          glow: "rgba(255, 90, 31, 0.35)",
        },
        signal: {
          DEFAULT: "#3ee089",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      boxShadow: {
        ember: "0 0 0 1px rgba(255,90,31,0.4), 0 8px 40px -12px rgba(255,90,31,0.35)",
      },
      keyframes: {
        blink: {
          "0%, 45%": { opacity: 1 },
          "50%, 95%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        scan: "scan 6s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
