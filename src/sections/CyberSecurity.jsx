import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { cyberFocus, cyberNote } from "../data/cyber";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

function toPascalCase(str) {
  return str.split("-").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
}

export default function CyberSecurity() {
  return (
    <section id="cyber" className="relative overflow-hidden py-28 lg:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-40"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-ember/10 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="TRAVAIL TECHNIQUE"
          title="Cybersécurité"
          description="Un intérêt sérieux pour la sécurité, entretenu par une pratique régulière — au-delà du développement."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cyberFocus.map((f, i) => {
            const Icon = Icons[toPascalCase(f.icon)] || Icons.Shield;
            return (
              <Reveal key={f.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ borderColor: "rgba(255,90,31,0.5)" }}
                  className="flex h-full items-start gap-4 rounded-lg border border-ink-border bg-ink-panel/40 p-6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-ink-border text-signal">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-bone">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-bone-muted">{f.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-8 rounded-md border border-dashed border-ink-border p-4 font-mono text-xs leading-relaxed text-bone-dim">
            {cyberNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
