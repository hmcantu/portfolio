import type { Project } from "../types";
import flashcardsImg from "../assets/flashcards.png";
import meshAiImg from "../assets/mesh-ai.png";
import portfolioImg from "../assets/portfolio.png";

export const projects: Project[] = [
  {
    id: "ai-flashcards",
    name: "AI Flashcards App",
    description: [
      "An interactive study application featuring flashcard decks and spaced learning tools.",
      "Deploys automatically to GitHub Pages for seamless accessibility.",
    ],
    image: flashcardsImg,
    githubUrl: "https://github.com/hmcantu/ai-se_project_flashcards",
    liveUrl: "https://hmcantu.github.io/ai-se_project_flashcards/",
  },
  {
    id: "ai-mesh",
    name: "AI Engineering Mesh App",
    description: [
      "A web application featuring AI-assisted workflows and automated processing.",
      "Built with modern frontend technologies and integrated backend services.",
    ],
    image: meshAiImg,
    githubUrl: "https://github.com/hmcantu/ai-se_project_mesh-ai",
    liveUrl: "https://haileyengapp.twilightparadox.com/",
  },
  {
    id: "portfolio",
    name: "Developer Portfolio",
    description: [
      "A personal developer portfolio built with React, TypeScript, and Vite.",
      "Includes structured data, responsive styling, and GitHub Actions CI workflow integration.",
    ],
    image: portfolioImg,
    githubUrl: "https://github.com/hmcantu/portfolio",
    liveUrl: "https://portfolio-git-sprint-12-cantu3.vercel.app",
  },
];
