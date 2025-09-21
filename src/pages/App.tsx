import { AboutMe } from "../components/AboutMe";
import { Home } from "../components/Home";
import { NavBar } from "../components/NavBar";
import { Technologies } from "../components/Technologies";

export const App = () => {
  return (
    <div className="bg-white bg-gradient-to-bl to-10% from-purple-700 to-white dark:to-black transition-all">
      <NavBar />
      <Home />
      <AboutMe />
      <Technologies />
      <Technologies />
      <Technologies />
    </div>
  );
};
