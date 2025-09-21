import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Home } from "../components/Home";
import { NavBar } from "../components/NavBar";
import { Skills } from "../components/Skills";

export const App = () => {
  return (
    <div className="bg-white bg-gradient-to-bl to-10% from-purple-700 to-white dark:to-black transition-all">
      <NavBar />
      <Home />
      <AboutMe />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};
