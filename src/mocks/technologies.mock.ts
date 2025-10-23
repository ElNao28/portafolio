import type { Technologie } from "../interfaces/technologies.interface";
import {
  IoLogoCss3,
  IoLogoGithub,
  IoLogoIonic,
  IoLogoJavascript,
} from "react-icons/io";
import { FaAngular, FaDocker, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { SiMysql, SiNestjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";

const listTechnologies: Technologie[] = [
  {
    name: "Angular",
    url: FaAngular,
  },
  {
    name: "CSS3",
    url: IoLogoCss3,
  },
  {
    name: "Docker",
    url: FaDocker,
  },
  {
    name: "Git",
    url: IoLogoGithub,
  },
  {
    name: "HTML5",
    url: FaHtml5,
  },
  {
    name: "Ionic",
    url: IoLogoIonic,
  },
  {
    name: "JavaScript",
    url: IoLogoJavascript,
  },
  {
    name: "MySQL",
    url: SiMysql,
  },
  {
    name: "NestJS",
    url: SiNestjs,
  },
  {
    name: "Node.js",
    url: FaNode,
  },
  {
    name: "PostgreSQL",
    url: DiPostgresql,
  },
  {
    name: "React",
    url: FaReact,
  },
  {
    name: "Tailwind",
    url: SiTailwindcss,
  },
  {
    name: "TypeScript",
    url: SiTypescript,
  },
];

export default listTechnologies;
