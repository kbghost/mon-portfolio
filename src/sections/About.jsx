import { motion } from "framer-motion";
import { Hammer, ShieldCheck, Puzzle, TrendingUp } from "lucide-react";
import { identity } from "../data/site";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const pillars = [
  { icon: Hammer, label: "Construire", desc: "Des applications complètes, du frontend au backend." },
  { icon: ShieldCheck, label: "Sécuriser", desc: "Une attention constante aux failles et aux risques." },
  { icon: Puzzle, label: "Résoudre", desc: "Une approche méthodique face aux problèmes techniques." },
  { icon: TrendingUp, label: "Améliorer", desc: "Un code qui évolue, se maintient et se documente." },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading kicker="INGÉNIERIE CRÉATIVE" title="Construire, sécuriser, résoudre." />

        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <Reveal delay={0.1}>
            <p className="text-balance text-xl leading-relaxed text-bone-muted sm:text-2xl">
              {identity.statement}
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.label} delay={0.15 + i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="h-full rounded-lg border border-ink-border bg-ink-panel/50 p-5"
                >
                  <p.icon className="mb-4 h-5 w-5 text-ember" strokeWidth={1.5} />
                  <h3 className="font-display text-base font-semibold text-bone">{p.label}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-bone-dim">{p.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
