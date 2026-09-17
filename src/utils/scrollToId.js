const NAVBAR_OFFSET = 88;

/**
 * Scroll fiable vers une section par id, en tenant compte de la hauteur de la
 * navbar fixe. Utilisé à la place du comportement natif des ancres, qui entre
 * en conflit avec la fermeture animée du menu mobile (voir Navbar.jsx).
 */
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });

  if (window.history?.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  }
}
