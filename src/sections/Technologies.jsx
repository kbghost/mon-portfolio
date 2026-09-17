import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { techGroups } from "../data/technologies";
import SectionHeading from "../components/SectionHeading";
import IconBrand from "../components/IconBrand";
import Reveal from "../components/Reveal";
import { cn } from "../utils/cn";

export default function Technologies() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  // Flatten list when "all" is selected, or filter by group key
  const allItems = useMemo(() => {
    if (activeTab === "all") {
      return techGroups.flatMap((group) =>
        group.items.map((item) => ({ ...item, categoryLabel: group.label }))
      );
    }
    const group = techGroups.find((g) => g.key === activeTab);
    return group ? group.items.map((item) => ({ ...item, categoryLabel: group.label })) : [];
  }, [activeTab]);

  // Autoplay effect - smoothly rotates cards every 3 seconds
  useEffect(() => {
    if (isPaused || allItems.length === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % allItems.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused, allItems.length]);

  function handleTabChange(key) {
    setActiveTab(key);
    setActiveIndex(0); // Reset to first element
  }

  function handlePrev() {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : allItems.length - 1));
  }

  function handleNext() {
    setActiveIndex((prev) => (prev < allItems.length - 1 ? prev + 1 : 0));
  }

  return (
    <section id="technologies" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          kicker="DOSSIER TECHNIQUE"
          title="Stack technique & outils"
          description="Les langages, frameworks et outils que j'utilise pour construire et sécuriser des applications."
        />

        {/* Category Pill Tabs matching screenshot */}
        <Reveal>
          <div className="mb-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => handleTabChange("all")}
              className={cn(
                "rounded-full px-5 py-2.5 font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-md",
                activeTab === "all"
                  ? "bg-ember text-ink shadow-ember/30 scale-105"
                  : "border border-white/10 bg-[#140a07]/60 text-bone-muted hover:border-ember/50 hover:text-bone"
              )}
            >
              Tous
            </button>
            {techGroups.map((g) => (
              <button
                key={g.key}
                type="button"
                onClick={() => handleTabChange(g.key)}
                className={cn(
                  "rounded-full px-5 py-2.5 font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-md",
                  activeTab === g.key
                    ? "bg-ember text-ink shadow-ember/30 scale-105"
                    : "border border-white/10 bg-[#140a07]/60 text-bone-muted hover:border-ember/50 hover:text-bone"
                )}
              >
                {g.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* 3D Semi-Circular Arc Carousel Stage with Autoplay */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative mx-auto my-8 h-[440px] w-full max-w-5xl flex flex-col items-center justify-center perspective-[1200px] select-none group"
        >
          {/* Controls Bar: Prev, Play/Pause Indicator, Next */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Précédent"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#160a07]/90 border border-white/20 text-bone shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-ember hover:text-ember"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Suivant"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#160a07]/90 border border-white/20 text-bone shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-ember hover:text-ember"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Cards along the semi-circle arc */}
          <div className="relative w-full h-[380px] flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {allItems.map((tech, index) => {
                const offset = index - activeIndex;
                const absOffset = Math.abs(offset);

                if (absOffset > 3) return null; // Render only visible range around active card

                // Compute 3D semi-circle arc transforms
                let translateX = offset * 220; // Horizontal spacing
                let translateY = Math.pow(absOffset, 1.8) * 22; // Downward arc curve
                let rotateY = offset * -24; // Y-axis rotation facing center
                let rotateZ = offset * 3.5; // Z-axis slight tilt
                let scale = offset === 0 ? 1.14 : Math.max(0.72, 1 - absOffset * 0.14);
                let opacity = offset === 0 ? 1 : Math.max(0.4, 1 - absOffset * 0.28);
                let zIndex = 30 - absOffset * 5;

                const isCenter = offset === 0;

                return (
                  <motion.div
                    key={tech.name}
                    onClick={() => setActiveIndex(index)}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{
                      x: translateX,
                      y: translateY,
                      rotateY: rotateY,
                      rotateZ: rotateZ,
                      scale: scale,
                      opacity: opacity,
                      zIndex: zIndex,
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 26,
                      mass: 0.8,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    className={cn(
                      "absolute top-1/2 left-1/2 -ml-32 -mt-44 w-64 h-88 rounded-3xl p-6 flex flex-col items-center justify-between cursor-pointer transition-all duration-300 border backdrop-blur-xl shadow-2xl",
                      isCenter
                        ? "bg-[#1a0a07]/95 border-ember/70 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(255,90,31,0.3)] ring-1 ring-ember/40"
                        : "bg-[#120704]/80 border-white/10 hover:border-ember/40 shadow-black/80"
                    )}
                  >
                    {/* Top Tag */}
                    <div className="w-full flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-bone-muted">
                      <span className={cn("px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5", isCenter && "text-ember border-ember/40 bg-ember/15 font-semibold")}>
                        {tech.categoryLabel || "Tech"}
                      </span>
                      <span className="text-bone-dim">#{index + 1}</span>
                    </div>

                    {/* Central Brand Icon */}
                    <div className={cn("my-auto flex items-center justify-center p-4 transition-transform duration-300", isCenter ? "scale-125" : "scale-100")}>
                      <IconBrand tech={tech} className="h-16 w-16" />
                    </div>

                    {/* Bottom Labels matching screenshot */}
                    <div className="w-full text-center">
                      <h3 className={cn("font-display font-bold tracking-tight text-bone transition-colors", isCenter ? "text-xl text-white" : "text-base text-bone-muted")}>
                        {tech.name}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-bone-dim truncate">
                        {tech.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Autoplay Status & Pagination Indicators */}
          <div className="mt-6 flex items-center gap-3 z-30">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#160a07]/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-bone-muted hover:border-ember hover:text-ember transition-colors"
            >
              {isPaused ? <Play className="h-3 w-3 text-ember" /> : <Pause className="h-3 w-3 text-ember" />}
              <span>{isPaused ? "Reprendre" : "Pause Auto"}</span>
            </button>

            {/* Dots navigation */}
            <div className="flex items-center gap-1.5">
              {allItems.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Aller à la diapositive ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === activeIndex ? "w-6 bg-ember shadow-[0_0_8px_#ff5a1f]" : "w-2 bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


