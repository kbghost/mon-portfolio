import { certifications } from "../data/certifications";
import SectionHeading from "../components/SectionHeading";
import CertificationCard from "../components/CertificationCard";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="CERTIFICATIONS"
          title="Certifications professionnelles"
          description="Des certifications à ajouter au fil de l'obtention — clique sur une carte pour l'agrandir."
        />

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <CertificationCard key={c.id} cert={c} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
