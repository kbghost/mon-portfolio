# Koulika Kabirou — Portfolio

Portfolio professionnel — Cybersécurité & Développement Logiciel.
React + Vite + Tailwind CSS + Framer Motion + Lucide Icons.

## Lancer le projet en local

```bash
npm install
npm run dev
```

Le site est alors accessible sur `http://localhost:5173`.

## Build de production

```bash
npm run build
```

Le résultat est généré dans le dossier `dist/`, prêt à être déployé
(Vercel, Netlify, GitHub Pages, etc.).

```bash
npm run preview   # pour tester le build de production en local
```

## Où ajouter tes informations

Tout le contenu est centralisé dans `src/data/` — il n'y a **aucun texte
en dur** dans les composants. Cherche les valeurs `[ADD_...]` et remplace-les :

| Fichier                          | Contenu à compléter |
|-----------------------------------|----------------------|
| `src/data/site.js`                | LinkedIn, GitHub, email, WhatsApp, lien du CV (PDF) |
| `src/data/education.js`           | Années précises, intitulé exact de la formation IFRI, diplôme précédent |
| `src/data/experience.js`          | Tes vraies expériences (stages, missions freelance) — le fichier contient un gabarit à dupliquer |
| `src/data/projects.js`            | Tes projets réels — GazExpress est déjà renseigné avec les infos que tu as données ; ajoute une image dans `public/projects/` et renseigne les liens GitHub / démo |
| `src/data/certifications.js`      | Tes certifications réelles — dépose les visuels dans `public/certifications/` |
| `src/data/cyber.js`                | `cyberNote` — précise un CTF, une plateforme (TryHackMe, HackTheBox…) si tu veux l'afficher nommément |

### Ajouter ou retirer un projet

Duplique un objet dans le tableau `projects` de `src/data/projects.js`.
Aucune modification de composant n'est nécessaire : la grille s'adapte
automatiquement (le premier projet marqué `featured: true` prend toute la
largeur).

### Hero

Le Hero actuel est volontairement 100% typographique (terminal + titre),
sans photo, pour rester dans une esthétique technique sobre.

## Structure du projet

```
src/
  components/   -> composants réutilisables (Navbar, Footer, ProjectCard, Timeline, ...)
  sections/     -> une section de page = un fichier (Hero, About, Services, ...)
  data/         -> tout le contenu texte, séparé de la présentation
  hooks/        -> useActiveSection (navbar), useTypewriter (effet terminal du Hero)
  utils/        -> petits utilitaires (fusion de classes)
```

## SEO

Le titre, la meta description, les balises Open Graph / Twitter Card et le
favicon sont dans `index.html`. Pense à ajouter une vraie image `og-cover.jpg`
dans `public/` pour l'aperçu de partage sur les réseaux sociaux.

## Notes techniques

- Les logos de technologies (`src/data/brandIcons.generated.js`) sont des SVG
  colorés générés une fois depuis le paquet `simple-icons` puis stockés en
  local — aucune dépendance réseau, aucun appel CDN. Les couleurs de marque
  trop sombres pour le thème (GitHub, OWASP, Express) basculent automatiquement
  sur une teinte claire (voir `src/utils/brandColor.js`).
- Les polices (Space Grotesk, Inter, JetBrains Mono) sont chargées via
  Google Fonts dans `index.html`.
- Animations : Framer Motion (reveal au scroll, tilt 3D au survol des cartes,
  barre de progression de scroll, halo qui suit le curseur dans le Hero),
  avec respect de `prefers-reduced-motion`.
- La navigation par ancre est gérée manuellement (`src/utils/scrollToId.js`)
  plutôt que par le comportement natif du navigateur, pour rester fiable
  même quand elle est déclenchée depuis le menu mobile animé.
