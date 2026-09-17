import { motion } from "framer-motion";

/**
 * Wrapper d'animation au scroll. `delay` permet de créer des séquences décalées
 * (staggered) quand plusieurs Reveal sont utilisés côte à côte (ex : cartes).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  as: Component = motion.div,
  once = true,
  ...rest
}) {
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}
