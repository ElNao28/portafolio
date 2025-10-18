import projectImg from "../assets/projects_images/portafolio.png";
import { ProjectCard } from "./Project-card";

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Projects = () => {
  return (
    <section id="projects" className="h-screen pt-40">
      <h1 className="text-center commic-text text-6xl font-bold">Projects</h1>
      {/* project cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-4 w-[80%] gap-5">
          {testArray.map((item) => {
            return <ProjectCard key={item} urlImage={projectImg} />;
          })}
        </div>
      </div>
    </section>
  );
};
