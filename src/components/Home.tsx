import "../styles/typing-efect.css";
import animeGirl from "../assets/backgrounds/home-girl.png";
export const Home = () => {
  return (
    <section
      id="home"
      className="relative"
    >
      <img
        className="absolute top-0 w-auto h-full left-10 z-0"
        src={animeGirl}
        alt="anime-girl"
      />
      <div className="flex flex-col items-center justify-center h-[20vh] md:h-[30vh] lg:h-[100vh]">
        <h1 className=" text-3xl md:text-8xl dark:text-white font-bold z-10 drop-shadow-xl caprasimo-regular">
          Hello!
        </h1>
        <span className=" dark:text-white text-3xl lg:text-8xl font-bold typing-text w-1/3 z-10 drop-shadow-xl caprasimo-regular">
          Welcome to my website.
        </span>
      </div>
    </section>
  );
};
