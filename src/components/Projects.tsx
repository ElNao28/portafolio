import projectImg from "../assets/projects_images/portafolio.png";
import { ProjectCard } from "./Project-card";

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen pt-20">
      <h1 className="text-center commic-text text-6xl font-bold pb-10">Projects</h1>
      {/* project cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 w-[85%] gap-10">
          {testArray.map((item) => {
            return <ProjectCard key={item} urlImage={projectImg} />;
          })}
        </div>
      </div>
    </section>
  );
};
