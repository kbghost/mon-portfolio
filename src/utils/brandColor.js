const LIGHT_FALLBACK = "#f2f1ec";

/**
 * Certaines couleurs de marque "officielles" sont quasi noires (GitHub,
 * OWASP, Express…) : pensées pour un fond clair, elles deviendraient
 * invisibles sur notre thème sombre. On bascule ces cas-là sur une teinte
 * claire neutre plutôt que de reproduire une couleur illisible.
 */
export function getBrandFill(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.14 ? LIGHT_FALLBACK : hex;
}
