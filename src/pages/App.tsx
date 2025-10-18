import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Home } from "../components/Home";
import { NavBar } from "../components/NavBar";
import { Skills } from "../components/Skills";

export const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};
