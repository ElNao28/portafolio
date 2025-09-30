import imageProfile from "../assets/image-profile.png";
import background from "../assets/backgrounds/mio-computer.png";
export const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="w-full flex justify-center pt-10 md:pt-20 lg:pt-40 relative overflow-hidden h-[100vh]"
    >
      <img
        src={background}
        alt="anime-girl"
        className="absolute right-0 bottom-0 z-0 drop-shadow-amber-200 drop-shadow-2xl"
      />
      <div className="z-10 w-[90%] lg:w-2/3">
        <h1 className="dark:text-white text-center text-3xl md:text-6xl pb-5 font-bold">
          About me
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:gap-10">
          <div className="w-4/5 md:w-3/5 lg:w-full">
            <img
              src={imageProfile}
              alt="Profile picture"
              className="rounded-full w-full"
            />
          </div>
          <div className="md:pt-10 backdrop-blur-lg lg:backdrop-blur-none p-4 lg:p-0 rounded-md">
            <h2 className="text-xl md:text-4xl font-bold pb-5 dark:text-white">
              Who am I?
            </h2>
            <p className="text-black dark:text-white text-[15px] md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              at eligendi quod inventore soluta ipsa voluptatibus dolores velit
              harum optio, id quidem error ullam. Iste numquam quae minus
              ducimus tempora? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Harum aperiam sapiente fuga voluptas veniam
              tempora hic, alias placeat sed quaerat, vero repellendus,
              voluptatum maxime amet eligendi fugit officia vel natus! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Ducimus harum
              molestias at nobis optio laborum sint et. Porro dolore veniam
              error officiis maxime, cupiditate eius. Eos obcaecati at vero
              iusto?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
