import { GraduationCap } from "lucide-react";
import { education } from "../data/education";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Timeline, { TimelineNode } from "../components/Timeline";
import { cn } from "../utils/cn";

export default function Education() {
  return (
    <section id="education" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading
          kicker="PARCOURS ACADÉMIQUE"
          title="Éducation & formation"
          description="Un parcours orienté informatique, en cohérence avec une pratique concrète du développement."
        />

        <Timeline>
          {education.map((e, i) => {
          const isRight = i % 2 === 1;
          return (
            <TimelineNode
              key={e.id}
              index={i + 1}
              icon={GraduationCap}
              side={isRight ? "right" : "left"}
              badge={e.period}
            >
              <Reveal delay={0.1}>
                <div
                  className={cn(
                    "block w-full max-w-sm break-words rounded-lg border p-6 text-left",
                    isRight ? "md:ml-0" : "md:ml-auto",
                    e.status === "en cours"
                      ? "border-ember/40 bg-ember/5"
                      : "border-ink-border bg-ink-panel/40"
                  )}
                >
                  {e.status === "en cours" && (
                    <span className="mb-3 inline-block rounded-full bg-ember px-2.5 py-1 font-mono text-[10px] font-medium tracking-wide text-ink">
                      EN COURS
                    </span>
                  )}
                  <p className="mb-1 font-mono text-xs text-ember md:hidden">{e.period}</p>
                  <h3 className="font-display text-lg font-semibold text-bone">{e.degree}</h3>
                  <p className="mt-1 font-mono text-sm text-ember">{e.school}</p>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-bone-muted">
                    {e.description}
                  </p>
                </div>
              </Reveal>
            </TimelineNode>
          );
          })}
        </Timeline>
      </div>
    </section>
  );
}
