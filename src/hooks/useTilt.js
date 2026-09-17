import { useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Effet de bascule 3D (tilt) qui suit la position du curseur — utilisé sur
 * les cartes (services, technologies, projets, certifications) pour un
 * rendu plus premium qu'un simple survol plat. Désactivé au toucher
 * (pas de pointeur précis sur mobile) et respecte prefers-reduced-motion
 * via les springs de Framer Motion (amplitude quasi nulle si l'utilisateur
 * a réduit les animations, géré globalement en CSS).
 */
export function useTilt({ max = 8, scale = 1.02 } = {}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), {
    stiffness: 220,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), {
    stiffness: 220,
    damping: 20,
  });

  function onMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return {
    ref,
    style: { rotateX, rotateY, transformPerspective: 800 },
    handlers: { onMouseMove, onMouseLeave },
    whileHover: { scale },
  };
}
