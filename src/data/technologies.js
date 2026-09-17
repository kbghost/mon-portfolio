// type: "brand"  -> logo en couleur, données locales (src/data/brandIcons.generated.js)
// type: "lucide" -> icône vectorielle (lucide-react), utilisée pour les concepts
//                   qui n'ont pas de logo de marque pertinent (protocoles, notions génériques)
export const techGroups = [
  {
    label: "01 — Langages",
    key: "langages",
    items: [
      { name: "JavaScript", type: "brand", slug: "javascript", desc: "Langage de programmation" },
      { name: "TypeScript", type: "brand", slug: "typescript", desc: "Langage typé" },
      { name: "Python", type: "brand", slug: "python", desc: "Scripting & Automation" },
      { name: "HTML5", type: "brand", slug: "html5", desc: "Langage de balisage" },
      { name: "CSS3", type: "brand", slug: "css3", desc: "Style & Design" },
    ],
  },
  {
    label: "02 — Frameworks",
    key: "frameworks",
    items: [
      { name: "React", type: "brand", slug: "react", desc: "Framework Frontend" },
      { name: "Node.js", type: "brand", slug: "nodedotjs", desc: "Runtime JavaScript" },
      { name: "Express", type: "brand", slug: "express", desc: "Framework API Backend" },
      { name: "Tailwind CSS", type: "brand", slug: "tailwindcss", desc: "Framework CSS Utility-First" },
    ],
  },
  {
    label: "03 — Bases de données",
    key: "databases",
    items: [
      { name: "MongoDB", type: "brand", slug: "mongodb", desc: "Base de données NoSQL" },
      { name: "PostgreSQL", type: "brand", slug: "postgresql", desc: "Base relationnelle SQL" },
      { name: "Redis", type: "brand", slug: "redis", desc: "In-Memory Cache & Store" },
    ],
  },
  {
    label: "04 — Cybersécurité",
    key: "cyber",
    items: [
      { name: "Kali Linux", type: "brand", slug: "kalilinux", desc: "Distribution pentest" },
      { name: "Burp Suite", type: "brand", slug: "burpsuite", desc: "Test d'intrusion web" },
      { name: "OWASP", type: "brand", slug: "owasp", desc: "Audit & Sécurité Web" },
      { name: "Wireshark", type: "brand", slug: "wireshark", desc: "Analyse de paquets réseau" },
    ],
  },
  {
    label: "05 — Réseaux & Infra",
    key: "network",
    items: [
      { name: "TCP/IP", type: "lucide", icon: "network", desc: "Protocole & Routage" },
      { name: "DNS", type: "lucide", icon: "waypoints", desc: "Résolution de noms" },
      { name: "HTTP/HTTPS", type: "lucide", icon: "lock", desc: "Sécurité des flux Web" },
      { name: "Linux", type: "brand", slug: "linux", desc: "Administration système" },
    ],
  },
  {
    label: "06 — DevOps & Outils",
    key: "tools",
    items: [
      { name: "Docker", type: "brand", slug: "docker", desc: "Conteneurisation" },
      { name: "Git", type: "brand", slug: "git", desc: "Gestion de versions" },
      { name: "GitHub", type: "brand", slug: "github", desc: "CI/CD & Repository" },
      { name: "VS Code", type: "lucide", icon: "square-code", desc: "Éditeur de code" },
    ],
  },
];

