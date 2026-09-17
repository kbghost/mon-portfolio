import { Briefcase } from "lucide-react";
import { experience } from "../data/experience";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Timeline, { TimelineNode } from "../components/Timeline";
import { cn } from "../utils/cn";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading
          kicker="CE QUE J'AI ACCOMPLI"
          title="Expérience professionnelle"
          description="Missions réelles, stages et contributions techniques. Section à compléter au fil des expériences."
        />

        <Timeline>
          {experience.map((e, i) => {
            const isRight = i % 2 === 1;
            return (
              <TimelineNode
                key={e.id}
                index={i + 1}
                icon={Briefcase}
                side={isRight ? "right" : "left"}
                badge={e.period}
              >
                <Reveal delay={0.1}>
                  <div
                    className={cn(
                      "block w-full max-w-md break-words rounded-lg border border-ink-border bg-ink-panel/40 p-6 text-left",
                      isRight ? "md:ml-0" : "md:ml-auto"
                    )}
                  >
                    <p className="mb-1 font-mono text-xs text-ember md:hidden">{e.period}</p>
                    <h3 className="font-display text-lg font-semibold text-bone">{e.title}</h3>
                    <p className="mt-1 font-mono text-sm text-bone-dim">{e.company}</p>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-bone-muted">
                      {e.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {e.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-ink-borderSoft px-2.5 py-1 font-mono text-[11px] text-bone-dim"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
