import listTechnologies from "../mocks/technologies.mock";
import "../styles/carrucel-technologies.css";

const listImages = [...listTechnologies, ...listTechnologies];

export const Skills = () => {
  return (
    <section id="skills" className="mt-10">
      <h1 className="text-5xl font-bold text-center mb-5 dark:text-white">
        Skills
      </h1>
      <div className="flex justify-center">
        <div className="slider bg-red- rounded-full">
          <div className="slider-track">
            {listImages.map(({ name, url }, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 font-bold dark:text-white card"
              >
                <img
                  className="cursor-pointer hover:scale-110 transition-all hover:drop-shadow-lg dark:hover:drop-shadow-white hover:drop-shadow-black"
                  src={url}
                  alt={name}
                />
                {/* <span className="cursor-pointer hover:underline">{name}</span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
