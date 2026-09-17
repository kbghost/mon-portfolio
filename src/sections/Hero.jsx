import { useRef } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Terminal, MessageSquare } from "lucide-react";
import { identity } from "../data/site";
import { useTypewriter } from "../hooks/useTypewriter";
import { scrollToId } from "../utils/scrollToId";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function handleNavClick(e, id) {
  e.preventDefault();
  scrollToId(id);
}

export default function Hero() {
  const { displayText } = useTypewriter(identity.typewriterRoles, {
    typeSpeed: 65,
    deleteSpeed: 40,
    pauseTyped: 2400,
    pauseDeleted: 350,
  });

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24 bg-transparent text-bone"
    >
      {/* Subtle radial orange lighting glow for Hero area */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] lg:h-[650px] lg:w-[650px] rounded-full bg-[#ff5a1f]/20 blur-[130px]"
        aria-hidden="true"
      />

      {/* Hero content container floating OVER the fixed background image */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: Identity, Typewriter & CTAs (Overlapping left side of background image) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header tag line: HELLO, I AM ——— */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold tracking-[0.25em] uppercase text-bone-muted drop-shadow">
                {identity.greeting}
              </span>
              <span className="h-0.5 w-12 bg-ember rounded-full shadow-[0_0_8px_#ff5a1f]" />
            </motion.div>

            {/* Giant Stacked Title */}
            <motion.div variants={itemVariants} className="relative mb-4">
              <h1 className="font-display font-black tracking-tight text-bone uppercase leading-[0.9] text-5xl sm:text-7xl xl:text-[5.5rem] drop-shadow-2xl">
                <span className="block drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">{identity.firstName}</span>
                <span className="block text-bone drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">{identity.lastName}</span>
              </h1>

              {/* Floating terminal icon badge like Image 2 */}
              <div className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#180d09]/90 border border-white/20 text-bone shadow-2xl backdrop-blur-md hover:border-ember transition-colors">
                <Terminal className="h-5 w-5 text-ember" />
              </div>
            </motion.div>

            {/* Subtitle Headline */}
            <motion.p variants={itemVariants} className="font-display text-sm sm:text-base font-semibold text-bone-muted tracking-wide mb-2 drop-shadow-md">
              {identity.roleHeadline}
            </motion.p>

            {/* Typewriter Effect Line (Fullstack / Cybersécurité) */}
            <motion.div variants={itemVariants} className="mb-6 h-10 flex items-center">
              <span className="font-display font-extrabold text-2xl sm:text-4xl text-ember tracking-tight drop-shadow-[0_0_15px_rgba(255,90,31,0.5)]">
                {displayText}
                <span className="ml-1 inline-block w-1.5 h-7 sm:h-9 bg-ember animate-blink align-middle shadow-[0_0_12px_#ff5a1f]" />
              </span>
            </motion.div>

            {/* Tagline Paragraph */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-bone-muted leading-relaxed mb-8 max-w-xl drop-shadow-md bg-[#0a0403]/40 backdrop-blur-xs p-3 rounded-xl border border-white/5">
              {identity.tagline}
            </motion.p>

            {/* CTA Button & Social Buttons Row */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              {/* Primary Orange Pill CTA */}
              <a
                href={identity.cvUrl || "#cta"}
                download
                className="group inline-flex items-center gap-2.5 rounded-full bg-ember px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-ink shadow-xl shadow-ember/30 transition-all duration-300 hover:scale-105 hover:bg-[#ff6e38]"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                Download CV (PDF)
              </a>

              {/* Round Social Icon Buttons */}
              <div className="flex items-center gap-2.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#160a07]/80 backdrop-blur-md text-bone-muted transition-all duration-300 hover:border-ember hover:text-ember hover:bg-ember/20"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#160a07]/80 backdrop-blur-md text-bone-muted transition-all duration-300 hover:border-ember hover:text-ember hover:bg-ember/20"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#160a07]/80 backdrop-blur-md text-bone-muted transition-all duration-300 hover:border-ember hover:text-ember hover:bg-ember/20"
                >
                  <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#160a07]/80 backdrop-blur-md text-bone-muted transition-all duration-300 hover:border-ember hover:text-ember hover:bg-ember/20"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z" />
                  </svg>
                </a>
                <a
                  href="#cta"
                  onClick={(e) => handleNavClick(e, "cta")}
                  title="Email"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#160a07]/80 backdrop-blur-md text-bone-muted transition-all duration-300 hover:border-ember hover:text-ember hover:bg-ember/20"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Quote Card Block - Image 2 Style (Overlapping right side of background image) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              variants={itemVariants}
              className="relative rounded-2xl bg-[#140a07]/80 border border-white/15 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/80"
            >
              {/* Vertical Orange Line accent */}
              <div className="absolute left-0 top-6 bottom-6 w-1 bg-ember rounded-r-full shadow-[0_0_14px_#ff5a1f]" />

              <div className="pl-4">
                {/* Quote Symbol */}
                <span className="block font-serif text-4xl leading-none text-ember/90 mb-2">“</span>

                {/* Main Quote Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-bone leading-snug mb-4">
                  {identity.heroQuote?.title || "Good design gets noticed. Great design gets remembered."}
                </h3>

                <div className="h-0.5 w-12 bg-white/20 mb-4" />

                {/* Sub Quote Description */}
                <p className="text-xs sm:text-sm text-bone-muted leading-relaxed">
                  {identity.heroQuote?.subtitle || "Je transforme vos idées en expériences numériques claires, utiles, sécurisées et profondément humaines."}
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* Floating Chat Widget Button - Image 2 Bottom Right Corner */}
      <a
        href="#cta"
        onClick={(e) => handleNavClick(e, "cta")}
        className="fixed bottom-6 right-6 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-[#180c09] border border-white/20 text-bone shadow-2xl shadow-black transition-all duration-300 hover:scale-110 hover:border-ember hover:text-ember group p-3.5"
        title="Discuter / Me contacter"
      >
        <MessageSquare className="h-6 w-6 text-bone group-hover:text-ember transition-colors" />
      </a>
    </section>
  );
}


