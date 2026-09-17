import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { contact } from "../data/site";
import Reveal from "../components/Reveal";

const lines = [
  { text: "CONSTRUISONS", fill: true },
  { text: "QUELQUE CHOSE", fill: false },
  { text: "DE SOLIDE.", fill: true, accent: true },
];

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-32 lg:py-40">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-30"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="mb-8 font-mono text-xs tracking-[0.3em] text-ember">
            UN PROJET EN TÊTE ?
          </p>
        </Reveal>

        <div className="select-none leading-[0.92]">
          {lines.map((line, i) => (
            <Reveal key={line.text} delay={i * 0.12} y={40}>
              <h2
                className={
                  "font-display text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl " +
                  (line.fill
                    ? line.accent
                      ? "text-ember"
                      : "text-bone"
                    : "text-transparent [-webkit-text-stroke:1.5px_#a3a2ab]")
                }
              >
                {line.text}
              </h2>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <motion.a
            href={`mailto:${contact.email}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="group relative mt-14 inline-flex items-center gap-2.5 overflow-hidden rounded-md bg-ember px-8 py-4 font-medium text-ink shadow-ember"
          >
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              aria-hidden="true"
            />
            <Mail className="relative h-4 w-4" />
            <span className="relative">Me contacter</span>
            <ArrowUpRight className="relative h-4 w-4" />
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
