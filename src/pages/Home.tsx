import { useEffect } from "react";
import { AboutMe } from "../components/AboutMe";
import { NavBar } from "../components/NavBar";

export const Home = () => {

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if(!theme) return;
    document.documentElement.className = theme;
  }, [])
  

  const toggleDarkMode = (): void => {
    const theme = document.documentElement.classList.toggle("dark");
    localStorage.setItem('theme',theme ? 'dark' : 'light')
  };

  return (
    <div className="h-screen w-screen bg-white dark:bg-gray-950 transition-all flex justify-center">
      <div className="pb-5 max-w-max">
        <NavBar toggleDarkMode={toggleDarkMode} />
        <AboutMe />
      </div>
    </div>
  );
};
