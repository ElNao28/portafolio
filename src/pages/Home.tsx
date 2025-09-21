import { AboutMe } from "../components/AboutMe";
import { NavBar } from "../components/NavBar";
import { Technologies } from "../components/Technologies";

export const Home = () => {
  return (
    <div className="bg-white bg-gradient-to-bl to-10% from-purple-700 to-white dark:to-black transition-all">
      <NavBar />
      <AboutMe />
      <Technologies />
    </div>
  );
};
