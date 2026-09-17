import * as Icons from "lucide-react";
import { nav, socials, identity } from "../data/site";
import { brandIcons } from "../data/brandIcons.generated";
import { getBrandFill } from "../utils/brandColor";

function toPascalCase(str) {
  return str.split("-").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
}

function SocialIcon({ s }) {
  if (s.type === "brand") {
    const icon = brandIcons[s.slug];
    if (!icon) return <Icons.Link className="h-4 w-4" strokeWidth={1.5} />;
    return (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className="h-4 w-4">
        <path d={icon.path} fill={getBrandFill(icon.hex)} />
      </svg>
    );
  }

  if (s.type === "linkedin-badge") {
    // Le logo LinkedIn n'est plus distribué par les bibliothèques d'icônes
    // libres (lucide, simple-icons) pour des raisons de marque déposée :
    // badge simplifié "in" dans le bleu officiel, à la place d'un logo tracé.
    return (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className="h-4 w-4">
        <rect width="24" height="24" rx="4" fill="#0A66C2" />
        <text
          x="12"
          y="16.5"
          textAnchor="middle"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="700"
          fontSize="11"
          fill="#f2f1ec"
        >
          in
        </text>
      </svg>
    );
  }

  const Icon = Icons[toPascalCase(s.icon)] || Icons.Link;
  return <Icon className="h-4 w-4" strokeWidth={1.5} />;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-ink-border pt-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-8 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs tracking-wide text-bone-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-ember transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.type === "lucide" ? undefined : "_blank"}
                rel={s.type === "lucide" ? undefined : "noreferrer"}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-border transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/60"
              >
                <SocialIcon s={s} />
              </a>
            ))}
          </div>
        </div>

        <p className="border-t border-ink-borderSoft py-6 text-center font-mono text-xs text-bone-dim sm:text-left">
          © {year} — {identity.name}
        </p>
      </div>

      <div className="overflow-hidden py-2 opacity-[0.06]" aria-hidden="true">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[0, 1].map((i) => (
            <span key={i} className="mr-10 font-display text-[9rem] font-bold leading-none text-bone">
              KOULIKA KABIROU — KOULIKA KABIROU —
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
