import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Technologies from "./sections/Technologies";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import CyberSecurity from "./sections/CyberSecurity";
import Certifications from "./sections/Certifications";
import CTA from "./sections/CTA";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#070302] text-bone overflow-x-hidden">
      {/* 1. PERSISTENT FIXED BACKGROUND IMAGE LAYER (Brighter & Clearer) */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
        <div className="relative w-full max-w-6xl h-full flex justify-center items-center">
          <img
            src="/profile.jpg"
            alt="Koulika Kabirou Portrait Background"
            className="h-full w-full max-h-screen object-cover object-top filter brightness-[0.95] contrast-[1.05] opacity-90 sm:opacity-95 transition-all duration-500"
          />
        </div>
      </div>

      {/* 2. PERSISTENT FIXED LIGHTER RADIAL GRADIENT OVERLAY LAYER */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_85%_85%_at_50%_35%,rgba(230,74,25,0.25)_0%,rgba(24,10,6,0.48)_55%,rgba(7,3,2,0.85)_100%)]"
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#070302]/30 via-[#070302]/50 to-[#070302]/85" />

      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ember focus:px-4 focus:py-2 focus:text-ink"
      >
        Aller au contenu principal
      </a>

      <Navbar />
      <ScrollProgress />

      {/* 3. MAIN CONTENT SCROLLING ABOVE FIXED BACKGROUND */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Education />
        <Experience />
        <Projects />
        <CyberSecurity />
        <Certifications />
        <CTA />
      </main>

      <Footer className="relative z-10" />
    </div>
  );
}

