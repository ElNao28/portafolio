import { AboutMe } from "../components/AboutMe";
import { NavBar } from "../components/NavBar";
import { Technologies } from "../components/Technologies";

export const Home = () => {
  return (
    <div className="bg-white dark:bg-black transition-all">
      <NavBar />
      <AboutMe />
      <Technologies />
      <Technologies />
      <Technologies />
    </div>
  );
};
