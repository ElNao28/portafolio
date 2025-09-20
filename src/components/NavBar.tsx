interface Props {
  toggleDarkMode: () => void;
}

export const NavBar = ({ toggleDarkMode }: Props) => {
  return (
    <nav className="text-black dark:text-white py-8 px-4">
      <ul className="flex items-center gap-5 font-bold justify-end text-lg">
        <li>
          <a className="hover:underline" href="#">Home</a>
        </li>
        <li>
          <a className="hover:underline" href="aboutMe">About me</a>
        </li>
        <li>
          <a className="hover:underline" href="#">Experiencie</a>
        </li>
        <li>
          <a className="hover:underline" href="#">Projects</a>
        </li>
        <li>
          <a className="hover:underline" href="#">Technologies</a>
        </li>
        <li>
          <button className="cursor-pointer" onClick={() => toggleDarkMode()}>Toggle</button>
        </li>
      </ul>
    </nav>
  );
};
