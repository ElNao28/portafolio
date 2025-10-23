import { CiSun } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FaHamburger } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import { useObserverResize } from "../hooks/useObserverResize";
import { useState } from "react";
import "../styles/navbar.css";

export type Theme = "dark" | "light";

export const NavBar = () => {
  // const { refElement } = useObserverIntersection();
  const { isResolution } = useObserverResize({ idElement: "navbar" });
  const { theme, toggleTheme } = useTheme();
  const [viewNavBar, setviewNavBar] = useState<boolean>(false);

  const toggleNavBar = () => {
    setviewNavBar((value) => (value = !value));
  };

  return (
    <nav
      id="navbar"
      className="text-[10px] md:text-lg w-full fixed top-0 flex justify-end z-20 backdrop-blur-[3px]"
    >
      {isResolution === "IsSm" ? (
        <div className="w-full p-3">
          <div className="flex justify-between">
            <div>
              {theme === "light" ? (
                <button
                  onClick={() => toggleTheme("dark")}
                  className="text-2xl cursor-pointer"
                >
                  <CiSun />
                </button>
              ) : (
                <button
                  onClick={() => toggleTheme("light")}
                  className="text-2xl cursor-pointer"
                >
                  <MdDarkMode />
                </button>
              )}
            </div>
            <button
              className="text-2xl cursor-pointer"
              type="button"
              onClick={toggleNavBar}
            >
              <FaHamburger />
            </button>
          </div>
          {viewNavBar && (
            <ul className="flex flex-col gap-3 pt-3 text-lg mobile-nav z-50">
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
            </ul>
          )}
        </div>
      ) : (
        <ul className="flex items-center gap-3 md:gap-4 font-bold justify-end z-50 py-5 px-5">
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
      )}
    </nav>
  );
};
