import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Volume2, Globe } from "lucide-react";
import { nav } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToId } from "../utils/scrollToId";
import { cn } from "../utils/cn";

const NAV_IDS = nav.map((item) => item.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pendingId, setPendingId] = useState(null);
  const [muted, setMuted] = useState(true);
  const active = useActiveSection(NAV_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(e, href) {
    e.preventDefault();
    const id = href.replace("#", "");
    if (open) {
      setPendingId(id);
      setOpen(false);
    } else {
      scrollToId(id);
    }
  }

  function handleMobileMenuExitComplete() {
    if (pendingId) {
      scrollToId(pendingId);
      setPendingId(null);
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-[#0c0503]/85 backdrop-blur-md border-b border-white/10 shadow-2xl" : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo Monogram Image 2 Style */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="group flex shrink-0 items-center gap-3 font-display font-bold text-bone text-lg tracking-wider"
        >
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ff5a1f] via-[#c63d0f] to-[#4a1205] p-0.5 shadow-lg shadow-ember/30 group-hover:scale-105 transition-transform">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-[#120704] text-ember font-extrabold text-sm tracking-tighter border border-ember/30">
              KK
            </span>
          </div>
          <span className="hidden sm:flex flex-col text-xs font-mono uppercase tracking-widest text-bone leading-tight">
            <span className="font-bold text-bone">KOULIKA</span>
            <span className="text-ember">KABIROU</span>
          </span>
        </a>

        {/* Center Pill Menu - Image 2 Style */}
        <div className="hidden lg:flex items-center rounded-full bg-[#180e0b]/80 border border-white/10 px-6 py-2.5 backdrop-blur-lg shadow-xl shadow-black/40">
          <ul className="flex items-center gap-7 font-mono text-xs uppercase tracking-widest font-semibold">
            {nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "relative whitespace-nowrap py-1 transition-colors duration-200",
                      isActive ? "text-ember font-bold" : "text-bone-muted hover:text-bone"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-ember shadow-[0_0_8px_#ff5a1f]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right CTA Button & Action Icons */}
        <div className="flex items-center gap-3">
          <a
            href="#cta"
            onClick={(e) => handleNavClick(e, "#cta")}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-ember/50 bg-[#ff5a1f]/10 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-bone transition-all duration-300 hover:bg-ember hover:text-ink hover:shadow-ember"
          >
            LET'S BUILD SOMETHING
            <ArrowUpRight className="h-4 w-4" />
          </a>

          {/* Action icon buttons on top right edge like Image 2 */}
          <div className="hidden xl:flex items-center gap-2 pl-2 border-l border-white/10">
            <button
              type="button"
              onClick={() => setMuted((v) => !v)}
              title="Son d'ambiance"
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#160a07] text-bone-muted transition-all hover:border-ember hover:text-ember",
                !muted && "text-ember border-ember/50 bg-ember/10"
              )}
            >
              <Volume2 className="h-4 w-4" />
            </button>
            <button
              type="button"
              title="Changer de langue"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#160a07] text-bone-muted transition-all hover:border-ember hover:text-ember"
            >
              <Globe className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-bone p-2.5 rounded-full border border-white/10 bg-[#180e0b]"
          >
            {open ? <X className="h-5 w-5 text-ember" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence onExitComplete={handleMobileMenuExitComplete}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden overflow-hidden bg-ink border-b border-ink-border"
          >
            <ul className="flex flex-col px-6 py-4 gap-1 font-mono text-sm">
              {nav.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = active === id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "block py-3 border-b border-ink-borderSoft last:border-none transition-colors",
                        isActive ? "text-ember" : "text-bone-muted hover:text-ember"
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="#cta"
                  onClick={(e) => handleNavClick(e, "#cta")}
                  className="mt-2 inline-flex items-center gap-1.5 text-ember"
                >
                  Me contacter <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
