import * as Icons from "lucide-react";
import { brandIcons } from "../data/brandIcons.generated";
import { getBrandFill } from "../utils/brandColor";
import { cn } from "../utils/cn";

function toPascalCase(str) {
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

/**
 * Affiche un logo de marque en couleur (données locales extraites de
 * simple-icons — pas d'appel réseau, donc pas de dépendance externe et un
 * rendu identique en dev, en test et en production), ou une icône lucide
 * teintée pour les concepts sans logo de marque pertinent.
 */
export default function IconBrand({ tech, className = "" }) {
  if (tech.type === "brand") {
    const icon = brandIcons[tech.slug];
    if (!icon) return null;
    return (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={tech.name}
        className={cn("h-8 w-8 transition-transform duration-300 group-hover:scale-110", className)}
      >
        <path d={icon.path} fill={getBrandFill(icon.hex)} />
      </svg>
    );
  }

  const LucideIcon = Icons[toPascalCase(tech.icon)] || Icons.Boxes;
  return (
    <LucideIcon
      className={cn(
        "h-8 w-8 text-signal transition-transform duration-300 group-hover:scale-110",
        className
      )}
      strokeWidth={1.5}
    />
  );
}
