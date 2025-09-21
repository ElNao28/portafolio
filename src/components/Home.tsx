import "../styles/typing-efect.css";
import animeGirl from "../assets/backgrounds/home-girl.png";
export const Home = () => {
  return (
    <section id="home" className="bg-gradient-to-bl to-50% from-purple-700 to-white dark:to-black">
      <img
        className="absolute top-0 w-1/2 left-10 z-0"
        src={animeGirl}
        alt="anime-girl"
      />
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <h1 className="text-8xl text-white font-bold z-10 drop-shadow-xl dark:drop-shadow-indigo-700 drop-shadow-black caprasimo-regular">Hello!</h1>
        <span className="text-white text-3xl md:text-6xl lg:text-8xl font-bold typing-text w-1/3 z-10 drop-shadow-xl dark:drop-shadow-indigo-700 drop-shadow-black caprasimo-regular">
          Welcome to my website.
        </span>
      </div>
    </section>
  );
};
