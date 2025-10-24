import "../styles/home.css";
import profile from "../assets/image-profile.png";
import { FaFileDownload } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import cv from "../assets/documents/CV_Luis_Jair_Escalante_Cruz.pdf";
const downloadCv = () => {
  const element = document.createElement("a");
  element.href = cv;
  element.target = "_blank";
  element.download = "Luis_Jair_Escalante_Cruz_CV.pdf";
  element.click();
};

export const Home = () => {
  return (
    <section id="home" className="h-screen border-b-2 overflow-hidden relative">
      <div className="flex flex-col items-center pt-20 md:pt-40">
        {/* card presentation */}
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 w-[75%] md:w-2/3 p-5">
          <div className="w-3/6 lg:w-2/6">
            <img src={profile} alt="profile picture" className="rounded-full" />
          </div>
          <div className="lg:w-4/6">
            <h1
              className="text-center lg:text-start text-xl md:text-4xl font-bold pb-2 lg:pb-5 commic-text"
              id="card-presentation"
            >
              Hi! Welcome to my website
            </h1>
            <p className="font-semibold text-[13px] md:text-[18px]">
              Hi, I'm Luis Jair Escalante Cruz, a 22-year-old web developer
              passionate about building clean, efficient, and user-friendly web
              applications. I work with JavaScript and TypeScript to develop
              both frontend and backend systems, using frameworks such as
              Angular, NestJS, LoopBack 4, and Express. I also have strong
              experience with relational databases, especially PostgreSQL. I
              enjoy solving complex problems, learning new technologies, and
              turning ideas into functional products that make a real impact.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-20 md:pt-40 gap-4 md:gap-10">
        <button
          className="rounded-md px-4 py-2 md:px-10 md:py-5 font-bold md:text-xl cursor-pointer button-download flex items-center gap-2"
          onClick={downloadCv}
        >
          <FaFileDownload />
          <span>Descargar CV</span>
        </button>
        <a
          href="http://github.com/ElNao28"
          target="_blank"
          className="rounded-md px-4 py-2 md:px-10 md:py-5 font-bold md:text-xl cursor-pointer button-download flex items-center gap-2"
        >
          <IoLogoGithub />
          <span>Repositorio</span>
        </a>
      </div>
    </section>
  );
};
