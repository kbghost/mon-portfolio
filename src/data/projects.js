// Architecture data-driven : ajoute ou retire un projet simplement en éditant ce tableau.
// "image" attend un chemin dans /public (ex: "/projects/gazexpress.jpg") ou une URL.
export const projects = [
  {
    id: "gazexpress",
    name: "GazExpress",
    featured: true,
    description:
      "Plateforme web de commande et de livraison de gaz : suivi de commande, gestion des livreurs et interface pensée pour un usage rapide en conditions réelles.",
    problem:
      "Simplifier et fiabiliser le processus de commande de gaz, de la demande du client jusqu'à la livraison.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "REST API"],
    image: "[ADD_PROJECT_IMAGE:/projects/gazexpress.jpg]",
    github: "[ADD_GITHUB_URL]",
    demo: "[ADD_LIVE_DEMO_URL]",
  },
  {
    id: "project-template-1",
    name: "[ADD_PROJECT_NAME]",
    featured: false,
    description: "[ADD_PROJECT_DESCRIPTION]",
    problem: "[ADD_PROBLEM_SOLVED]",
    stack: ["[ADD_TECH_1]", "[ADD_TECH_2]"],
    image: "[ADD_PROJECT_IMAGE]",
    github: "[ADD_GITHUB_URL]",
    demo: "[ADD_LIVE_DEMO_URL]",
  },
  {
    id: "project-template-2",
    name: "[ADD_PROJECT_NAME]",
    featured: false,
    description: "[ADD_PROJECT_DESCRIPTION]",
    problem: "[ADD_PROBLEM_SOLVED]",
    stack: ["[ADD_TECH_1]", "[ADD_TECH_2]"],
    image: "[ADD_PROJECT_IMAGE]",
    github: "[ADD_GITHUB_URL]",
    demo: "[ADD_LIVE_DEMO_URL]",
  },
];
