import { CiSun } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { useTheme } from "../hooks/useTheme";
import { useObserverIntersection } from "../hooks/useObserverIntersection";
import "../styles/navbar.css";

export type Theme = "dark" | "light";

export const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { refElement } = useObserverIntersection();

  return (
    <nav
      ref={refElement}
      className="text-[12px] md:text-lg py-4 md:py-5 px-5 w-full fixed top-0 flex justify-end z-20"
    >
      <ul className="flex items-center gap-3 md:gap-4 font-bold justify-end z-50">
        <li>
          <a
            className="border-2 rounded-[2px] py-1 px-2 button-nav flex items-center gap-1"
            href="#home"
          >
            <FaHome />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a
            className="border-2 rounded-[2px] py-1 px-2 button-nav flex items-center gap-1"
            href="#experience"
          >
            <GiProgression />
            <span>Experiencie</span>
          </a>
        </li>
        <li>
          <a
            className="border-2 rounded-[2px] py-1 px-2 button-nav flex items-center gap-1"
            href="#projects"
          >
            <IoFileTrayFullOutline />
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a
            className="border-2 rounded-[2px] py-1 px-2 button-nav flex items-center gap-1"
            href="#skills"
          >
            <MdCategory />
            <span>Skills</span>
          </a>
        </li>
        <li>
          <a
            className="border-2 rounded-[2px] py-1 px-2 button-nav flex items-center gap-1"
            href="#contact"
          >
            <IoMdContact />
            <span>Contact</span>
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
