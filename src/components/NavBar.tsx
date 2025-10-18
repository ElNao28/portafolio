import { CiSun } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "../hooks/useTheme";
import "../styles/navbar.css";

export type Theme = "dark" | "light";

export const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="text-[12px] md:text-lg py-4 md:py-5 px-5 w-full fixed top-0 flex justify-end backdrop-blur-[3px] z-50 border-b-2">
      <ul className="flex items-center gap-3 md:gap-4 font-bold justify-end">
        <li>
          <a
            className="border-2 rounded-[2px] py-1 px-2 button-nav"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="border-2 rounded-[2px] py-1 px-2 button-nav"
            href="#experience"
          >
            Experiencie
          </a>
        </li>
        <li>
          <a
            className="border-2 rounded-[2px] py-1 px-2 button-nav"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="border-2 rounded-[2px] py-1 px-2 button-nav"
            href="#skills"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className="border-2 rounded-[2px] py-1 px-2 button-nav"
            href="#contact"
          >
            Contact
          </a>
        </li>
        <li className="border-2 rounded-full py-2 px-2 button-nav">
          {theme === "light" ? (
            <button
              onClick={() => toggleTheme("dark")}
              className="cursor-pointer flex items-center md:text-xl"
            >
              <CiSun />
            </button>
          ) : (
            <button
              onClick={() => toggleTheme("light")}
              className="cursor-pointer flex items-center md:text-xl"
            >
              <MdDarkMode />
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};
