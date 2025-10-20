import "../styles/home.css";
import profile from "../assets/image-profile.png";
import { FaFileDownload } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

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
            <h1 className="text-center lg:text-start text-xl md:text-4xl font-bold pb-2 lg:pb-5 commic-text" id="card-presentation">
              Hi! I'm Luis Jair Escalante Cruz
            </h1>
            <p className="font-semibold text-[13px] md:text-[18px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non cum
              quia, ipsam quos atque reiciendis sunt accusantium nam voluptatem
              aliquid, at ab aspernatur nobis, excepturi minima sit. Sunt,
              explicabo ipsum! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Natus exercitationem soluta dolores minima
              tempore necessitatibus praesentium perferendis ipsa aut molestias
              voluptatem laudantium totam adipisci architecto velit cum, ex iste
              reiciendis? Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Ab mollitia cumque delectus vero alias sapiente nihil neque
              voluptates explicabo maiores. Beatae doloribus deleniti deserunt,
              rerum eius facilis expedita est quibusdam.
            </p>
          </div>
        </div>


      </div>
      <div className="flex justify-center items-center pt-20 md:pt-40 gap-4 md:gap-10">
        <button className="rounded-md px-4 py-2 md:px-10 md:py-5 font-bold md:text-xl cursor-pointer button-download flex items-center gap-2">
          <FaFileDownload />
          <span>Descargar CV</span>
        </button>
        <button className="rounded-md px-4 py-2 md:px-10 md:py-5 font-bold md:text-xl cursor-pointer button-download flex items-center gap-2">
          <IoLogoGithub />
          <span>Repositorio</span>
        </button>
      </div>
    </section>
  );
};
