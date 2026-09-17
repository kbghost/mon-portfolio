import { useEffect, useState } from "react";

/**
 * Observe les sections passées et renvoie l'id de celle actuellement visible,
 * pour surligner l'item correspondant dans la navigation.
 */
export function useActiveSection(ids) {
  // Pas de section active par défaut : tant que l'observateur n'a rien
  // détecté (ex : on est encore dans le Hero, avant la première section
  // suivie), aucun item de nav ne doit être surligné à tort.
  const [active, setActive] = useState("");

  useEffect(() => {
    if (!ids || ids.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
