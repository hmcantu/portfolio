import type { Project } from "../types";
import viteLogo from "../assets/react.svg"; // Replace with your actual project screenshots in src/assets/projects/

export const projects: Project[] = [
  {
    id: "portfolio",
    name: "Developer Portfolio",
    description: [
      "A personal developer portfolio built with React, TypeScript, and Vite.",
      "Includes structured data, responsive styling, and GitHub Actions CI workflow integration.",
    ],
    image: viteLogo,
    githubUrl: "https://github.com/hmcantu/portfolio",
    liveUrl: "#",
  },
  {
    id: "todo-app",
    name: "Todo App",
    description: [
      "A full-stack task management web application.",
      "Features real-time task updates, task filtering, and automated client validation workflows.",
    ],
    image: viteLogo,
    githubUrl: "https://github.com/hmcantu",
    liveUrl: "#",
  },
];
