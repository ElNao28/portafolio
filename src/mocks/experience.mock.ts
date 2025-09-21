import type { Experience } from "../interfaces/experience.interface";

const listExperience: Experience[] = [
  {
    title: 'Frontend Developer Intern',
    date: 'Ene 2020 - Abr 2020',
    location: 'Monterrey, N.L.',
    toDo: [
      'Create landing page',
      'Implement responsive design with CSS3 and Flexbox',
      'Optimize images and resources to improve loading speed',
    ],
  },
  {
    title: 'Fullstack Developer',
    date: 'May 2020 - Dic 2020',
    location: 'Ciudad de México, CDMX',
    toDo: [
      'Develop APIs with Node.js and Express',
      'Integrate PostgreSQL database',
      'Deploy applications on Docker containers',
    ],
  },
  {
    title: 'Mobile Developer',
    date: 'Ene 2021 - Jul 2021',
    location: 'Guadalajara, Jalisco',
    toDo: [
      'Build hybrid apps using Ionic + Angular',
      'Consume REST APIs from backend services',
      'Publish applications to Google Play Store',
    ],
  },
  {
    title: 'Frontend Angular Developer',
    date: 'Ago 2021 - Dic 2021',
    location: 'Remote',
    toDo: [
      'Migrate legacy codebase to Angular 12',
      'Use RxJS for state management and API calls',
      'Write unit tests with Jasmine and Karma',
    ],
  },
  {
    title: 'React Developer',
    date: 'Ene 2022 - May 2022',
    location: 'Querétaro, Qro.',
    toDo: [
      'Develop SPA with React and TypeScript',
      'Style components using Tailwind CSS',
      'Implement authentication with JWT',
    ],
  },
  {
    title: 'Backend Developer',
    date: 'Jun 2022 - Nov 2022',
    location: 'Remote',
    toDo: [
      'Design and normalize relational database in MySQL',
      'Develop REST API using NestJS',
      'Integrate Swagger for API documentation',
    ],
  },
];

export default listExperience;
