import listTechnologies from "../mocks/technologies.mock";
import "../styles/carrucel-technologies.css";

const listOne = [...listTechnologies, ...listTechnologies];
export const Skills = () => {
  return (
    <section id="skills" className="h-screen relative border-b-2">
      <div className="flex justify-center items-center h-full">
        <div className="w-5/6 flex flex-col gap-10">
        <h1 className="text-center commic-text text-6xl mb-10">Skills</h1>
          <div className="slider-container">
            <div className="slider-track">
              {listOne.map((technologie, index) => {
                return (
                  <div className="item-slider" key={index}>
                    <technologie.url className="w-full h-full" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="slider-container">
            <div className="slider-track-right">
              {listOne.map((technologie, index) => {
                return (
                  <div className="item-slider" key={index}>
                    <technologie.url className="w-full h-full" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="slider-container">
            <div className="slider-track">
              {listOne.map((technologie, index) => {
                return (
                  <div className="item-slider" key={index}>
                    <technologie.url className="w-full h-full" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="slider-container">
            <div className="slider-track-right">
              {listOne.map((technologie, index) => {
                return (
                  <div className="item-slider" key={index}>
                    <technologie.url className="w-full h-full" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
