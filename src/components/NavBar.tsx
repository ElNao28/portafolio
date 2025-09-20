interface Props {
  toggleDarkMode: () => void;
}

export const NavBar = ({ toggleDarkMode }: Props) => {
  return (
    <nav className="text-black dark:text-white py-5 px-4">
      <ul className="flex items-center gap-5 font-bold justify-end text-lg">
        <li>
          <a className="hover:underline" href="#">Home</a>
        </li>
        <li>
          <a className="hover:underline" href="#">About me</a>
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
          <button className="cursor-pointer" onClick={() => toggleDarkMode()}>Cambio</button>
        </li>
      </ul>
    </nav>
  );
};
