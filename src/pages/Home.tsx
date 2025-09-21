import { AboutMe } from "../components/AboutMe";
import { NavBar } from "../components/NavBar";

export const Home = () => {

  return (
    <div className="h-screen w-screen bg-white dark:bg-gradient-to-b from-purple-950 to-black to-80% transition-all flex justify-center">
      <div className="pb-5 max-w-[65vw]">
        <NavBar />
        <AboutMe />
      </div>
    </div>
  );
};
