import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ImageOff } from "lucide-react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { cn } from "../utils/cn";

function isPlaceholder(value) {
  return !value || value.startsWith("[ADD_");
}

export default function ProjectCard({ project, delay = 0, featured = false }) {
  const hasImage = !isPlaceholder(project.image);
  const hasDemo = !isPlaceholder(project.demo);
  const hasGithub = !isPlaceholder(project.github);
  const hasLinks = hasDemo || hasGithub;

  return (
    <Reveal delay={delay} className={cn(featured && "md:col-span-2")}>
      <TiltCard
        as={motion.article}
        max={4}
        liftY={-6}
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-ink-border bg-ink-panel/40"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-ink-soft">
          {hasImage ? (
            <img
              src={project.image}
              alt={`Aperçu du projet ${project.name}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-bone-dim">
              <ImageOff className="h-6 w-6" strokeWidth={1.5} />
              <span className="font-mono text-[11px]">Visuel à ajouter</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="break-words font-display text-lg font-semibold text-bone">
            {project.name}
          </h3>
          <p className="mt-2 break-words text-sm leading-relaxed text-bone-muted">
            {project.description}
          </p>

          {!isPlaceholder(project.problem) && (
            <p className="mt-3 break-words border-l-2 border-ember/40 pl-3 font-mono text-xs leading-relaxed text-bone-dim">
              <span className="text-ember">Problème résolu —</span> {project.problem}
            </p>
          )}

          <div className="mt-4 flex flex-1 flex-wrap items-end gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-ink-borderSoft px-2.5 py-1 font-mono text-[11px] text-bone-dim"
              >
                {tech}
              </span>
            ))}
          </div>

          {hasLinks && (
            <div className="mt-5 flex items-center gap-4 border-t border-ink-borderSoft pt-4">
              {hasDemo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-ember hover:underline"
                >
                  Voir le projet <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {hasGithub && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-bone-muted hover:text-bone"
                >
                  <Code2 className="h-3.5 w-3.5" /> Code
                </a>
              )}
            </div>
          )}
        </div>
      </TiltCard>
    </Reveal>
  );
}
