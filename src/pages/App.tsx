import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Home } from "../components/Home";
import { NavBar } from "../components/NavBar";
import { Skills } from "../components/Skills";

export const App = () => {
  return (
    <div className=" dark:bg-gray-900/90">
      <NavBar />
      <Home />
      <AboutMe />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};
