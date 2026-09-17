import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "../utils/cn";

/**
 * Ligne verticale dont le remplissage suit la progression du scroll dans la
 * section — un seul effet de "reveal" de timeline, plutôt que par carte.
 */
export default function Timeline({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-[19px] top-0 h-full w-px bg-ink-border md:left-1/2" aria-hidden="true" />
      <motion.div
        style={{ scaleY, originY: 0 }}
        className="absolute left-[19px] top-0 h-full w-px bg-ember md:left-1/2"
        aria-hidden="true"
      />
      <div className="space-y-10">{children}</div>
    </div>
  );
}

export function TimelineNode({ index, icon: Icon, side = "left", children, badge }) {
  const isRight = side === "right";
  return (
    <div
      className={cn(
        "relative flex items-start gap-6 md:gap-0",
        "md:grid md:grid-cols-2"
      )}
    >
      <div
        className={cn(
          "absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-ember bg-ink shadow-ember md:left-1/2 md:-translate-x-1/2"
        )}
      >
        {Icon ? <Icon className="h-4 w-4 text-ember" strokeWidth={1.5} /> : (
          <span className="font-mono text-[11px] text-ember">{index}</span>
        )}
      </div>

      <div
        className={cn(
          "min-w-0 pl-16 md:row-start-1 md:pl-0",
          isRight ? "md:col-start-2 md:pl-14" : "md:col-start-1 md:pr-14 md:text-right"
        )}
      >
        {children}
      </div>
      {badge && (
        <div
          className={cn(
            "hidden min-w-0 md:row-start-1 md:flex items-center font-mono text-xs text-bone-dim",
            isRight ? "md:col-start-1 md:justify-end md:pr-14" : "md:col-start-2 md:pl-14"
          )}
        >
          {badge}
        </div>
      )}
    </div>
  );
}
