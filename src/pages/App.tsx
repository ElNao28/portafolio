import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Home } from "../components/Home";
import { NavBar } from "../components/NavBar";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { SocialMedia } from "../components/SocialMedia";

export const App = () => {
  return (
    <div className="dark:bg-gray-950/80">
      <NavBar />
      <SocialMedia />
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};
