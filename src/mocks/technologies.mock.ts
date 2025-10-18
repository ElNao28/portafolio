import angular from '../assets/technologies/Angular.png';
import css from '../assets/technologies/CSS3.png';
import docker from '../assets/technologies/Docker.png';
import git from '../assets/technologies/Git.png';
import html from '../assets/technologies/HTML5.png';
import ionic from '../assets/technologies/Ionic.png';
import javascript from '../assets/technologies/JavaScript.png';
import mysql from '../assets/technologies/MySQL.png';
import nest from '../assets/technologies/Nest.js.png';
import node from '../assets/technologies/Node.js.png';
import postgres from '../assets/technologies/PostgresSQL.png';
import react from '../assets/technologies/React.png';
import tailwind from '../assets/technologies/Tailwind CSS.png';
import typescript from '../assets/technologies/TypeScript.png';
import type { Technologie } from '../interfaces/technologies.interface';


const listTechnologies: Technologie[] = [
  {
    name: 'Angular',
    url: angular,
  },
  {
    name: 'CSS3',
    url: css,
  },
  {
    name: 'Docker',
    url: docker,
  },
  {
    name: 'Git',
    url: git,
  },
  {
    name: 'HTML5',
    url: html,
  },
  {
    name: 'Ionic',
    url: ionic,
  },
  {
    name: 'JavaScript',
    url: javascript,
  },
  {
    name: 'MySQL',
    url: mysql,
  },
  {
    name: 'NestJS',
    url: nest,
  },
  {
    name: 'Node.js',
    url: node,
  },
  {
    name: 'PostgreSQL',
    url: postgres,
  },
  {
    name: 'React',
    url: react,
  },
  {
    name: 'Tailwind',
    url: tailwind,
  },
  {
    name: 'TypeScript',
    url: typescript,
  },
];

export default listTechnologies;
