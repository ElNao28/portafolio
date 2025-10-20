import "../styles/projects.css";
import { FaAngular } from "react-icons/fa";
import { SiLoopback } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandTailwind } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";

interface Props {
  urlImage: string;
}
export const ProjectCard = ({ urlImage }: Props) => {
  return (
    <div className="card-project cursor-pointer rounded-sm bg-white">
      <img src={urlImage} alt="" />
      <h3 className="text-center font-bold commic-text text-2xl py-3">
        CRM IAagente
      </h3>
      <div className="px-5 pb-5">
        <span className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          libero blanditiis omnis et unde. Quaerat, velit laudantium quam
          aperiam similique quas, assumenda cupiditate, aspernatur omnis rem
          corrupti perferendis labore? Corrupti.
        </span>
      </div>
      <div className="px-5 pb-5">
        <ul className="flex items-center flex-wrap gap-3 justify-center">
          <li className="flex items-center gap-1 border-2 rounded-lg px-3 py-1">
            <FaAngular />
            <span>Angular</span>
          </li>
          <li className="flex items-center gap-1 border-2 rounded-lg px-3 py-1">
            <SiLoopback />
            <span>Loopback</span>
          </li>
          <li className="flex items-center gap-1 border-2 rounded-lg px-3 py-1">
            <BiLogoPostgresql />
            <span>PostgresSQL</span>
          </li>
          <li className="flex items-center gap-1 border-2 rounded-lg px-3 py-1">
            <TbBrandTailwind />
            <span>Tailwind</span>
          </li>
          <li className="flex items-center gap-1 border-2 rounded-lg px-3 py-1">
            <IoLogoGithub />
            <span>Github</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
