import { motion } from "framer-motion";
import { useTilt } from "../hooks/useTilt";
import { cn } from "../utils/cn";

/**
 * Carte avec effet de bascule 3D au survol (suit le curseur). Réutilisée par
 * les grilles de services, technologies, projets et certifications pour un
 * rendu premium cohérent.
 */
export default function TiltCard({
  children,
  className = "",
  max = 6,
  liftY = -6,
  as: Component = motion.div,
  ...rest
}) {
  const tilt = useTilt({ max });

  return (
    <Component
      ref={tilt.ref}
      onMouseMove={tilt.handlers.onMouseMove}
      onMouseLeave={tilt.handlers.onMouseLeave}
      style={{ ...tilt.style, transformStyle: "preserve-3d" }}
      whileHover={{ y: liftY, scale: tilt.whileHover.scale }}
      transition={{ duration: 0.25 }}
      className={cn("will-change-transform", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
