import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X } from "lucide-react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

function isPlaceholder(value) {
  return !value || value.startsWith("[ADD_");
}

export default function CertificationCard({ cert, delay = 0 }) {
  const [open, setOpen] = useState(false);
  const hasImage = !isPlaceholder(cert.image);

  return (
    <>
      <Reveal delay={delay}>
        <TiltCard
          as={motion.button}
          max={5}
          liftY={-4}
          type="button"
          onClick={() => hasImage && setOpen(true)}
          className="group flex w-full flex-col overflow-hidden rounded-lg border border-ink-border bg-ink-panel/40 text-left"
        >
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-ink-soft">
            {hasImage ? (
              <img
                src={cert.image}
                alt={`Certificat : ${cert.title}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <Award className="h-8 w-8 text-bone-dim" strokeWidth={1.2} />
            )}
          </div>
          <div className="p-5">
            <h3 className="break-words font-display text-sm font-semibold text-bone">{cert.title}</h3>
            <p className="mt-1 break-words font-mono text-xs text-ember">{cert.org}</p>
            <p className="mt-1 break-words font-mono text-[11px] text-bone-dim">{cert.date}</p>
          </div>
        </TiltCard>
      </Reveal>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`Certificat ${cert.title}`}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-lg border border-ink-border bg-ink-panel"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="absolute right-3 top-3 rounded-md border border-ink-border bg-ink/70 p-2 text-bone hover:text-ember"
              >
                <X className="h-4 w-4" />
              </button>
              <img src={cert.image} alt={`Certificat : ${cert.title}`} className="w-full object-contain" />
              <div className="flex flex-wrap items-center justify-between gap-3 p-5">
                <div className="min-w-0">
                  <h3 className="break-words font-display text-base font-semibold text-bone">{cert.title}</h3>
                  <p className="break-words font-mono text-xs text-ember">{cert.org} — {cert.date}</p>
                </div>
                {!isPlaceholder(cert.verifyUrl) && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs text-bone-muted hover:text-ember"
                  >
                    Vérifier <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
