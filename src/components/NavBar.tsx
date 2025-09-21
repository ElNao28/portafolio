import { CiSun } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "../hooks/useTheme";

export type Theme = "dark" | "light";

export const NavBar = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="text-black text-sm md:text-lg dark:text-white py-8 px-4 w-full fixed top-0 flex justify-center backdrop-blur-[3px] z-50">
      <ul className="flex items-center gap-5 font-bold justify-end">
        <li>
          <a className="hover:underline" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#aboutMe">
            About me
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            Experiencie
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            Projects
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            Technologies
          </a>
        </li>
        <li>
          {
            theme === 'light' ?
            <button onClick={() => toggleTheme('dark')} className="cursor-pointer flex items-center text-xl">
            <CiSun />
          </button>
          :
          <button onClick={() => toggleTheme('light')} className="cursor-pointer flex items-center text-xl">
            <MdDarkMode />
          </button>}
        </li>
      </ul>
    </nav>
  );
};
