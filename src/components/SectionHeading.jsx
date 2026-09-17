import Reveal from "./Reveal";
import { cn } from "../utils/cn";

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  light = false,
}) {
  const isCenter = align === "center";

  return (
    <div className={cn("mb-14 max-w-2xl", isCenter && "mx-auto text-center")}>
      <Reveal>
        <div className={cn("flex items-center gap-3 mb-4", isCenter && "justify-center")}>
          <span className="h-px w-8 bg-ember" />
          <span className="font-mono text-xs tracking-[0.25em] text-ember">{kicker}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display font-semibold leading-[1.08] text-balance",
            light ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl md:text-[2.75rem]",
            "text-bone"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p className="mt-4 text-bone-muted leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
