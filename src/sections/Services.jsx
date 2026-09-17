import * as Icons from "lucide-react";
import { services } from "../data/services";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";

function toPascalCase(str) {
  return str.split("-").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="CE QUE JE FAIS"
          title="Expertises & domaines d'intervention"
          description="Cinq axes complémentaires, du code à la sécurité, pour livrer des systèmes qui fonctionnent et qui tiennent."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = Icons[toPascalCase(s.icon)] || Icons.Box;
            return (
              <Reveal key={s.index} delay={i * 0.08}>
                <TiltCard className="group relative flex h-full flex-col rounded-lg border border-ink-border bg-ink-panel/40 p-7 transition-colors duration-300 hover:border-ember/50">
                  <div className="mb-6 flex items-start justify-between" style={{ transform: "translateZ(30px)" }}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-md border border-ink-border bg-ink text-ember transition-colors duration-300 group-hover:border-ember/60">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="font-mono text-xs text-bone-dim">{s.index}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-bone">{s.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-bone-muted">
                    {s.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-ink-borderSoft px-2.5 py-1 font-mono text-[11px] text-bone-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
