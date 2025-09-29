import listExperience from "../mocks/experience.mock";
import gifBackground from "../assets/backgrounds/experience.png";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-gradient-to-b dark:from-black dark:via-purple-900 dark:to-black"
    >
      <h1 className="dark:text-white text-center mt-10 md:mt-20 text-3xl md:text-6xl font-bold">
        Experience
      </h1>
      <div className="flex justify-center mt-5 md:mt-10 relative pb-10">
      <img src={gifBackground} alt="anime-girl" className="absolute z-0 left-0 bottom-0 md:h-full" />
        <div className="z-20 backdrop-blur-[5px] lg:backdrop-blur-none dark:backdrop-brightness-50 backdrop-brightness-90 dark:lg:backdrop-brightness-100 lg:backdrop-brightness-100 p-10 lg:p-0 rounded-md mx-2 md:mx-0">
          {listExperience.map(({ title, date, location, toDo }, index) => (
            <div
              key={index}
              className="dark:text-white flex items-start w-full"
              >

              <div className="flex flex-col w-1/3 relative">
                <span className="bg-purple-400 text-center py-0.5 font-bold rounded-full mr-3 text-white hover:scale-105 transition-all cursor-pointer text-[12px] md:text-base">{date}</span>
                <span className="p-1 bg-white border-4 border-purple-500 rounded-full w-4 h-4 absolute -right-2.5 top-1"></span>
              </div>

              <div className="px-5 pb-5 border-l-2 border-purple-500 w-2/3">
                <span className="text-[14px] md:text-lg font-bold">{title} - {location}</span>
                <ul className="px-5 list-disc text-[10px]">
                  {toDo.map((item, ind) => (
                    <li key={ind}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
