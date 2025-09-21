import imageProfile from "../assets/image-profile.png";

export const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="w-full pb-5 flex justify-center mt-40"
    >
      <div className="md:w-2/3">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-2/4 md:w-1/4">
            <img
              src={imageProfile}
              alt="Profile picture"
              className="rounded-full w-full"
            />
          </div>
          <div className="w-3/4">
            <h1 className="text-4xl font-bold pb-5 dark:text-white">
              Who am I?
            </h1>
            <p className="text-black dark:text-white text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              at eligendi quod inventore soluta ipsa voluptatibus dolores velit
              harum optio, id quidem error ullam. Iste numquam quae minus
              ducimus tempora? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Harum aperiam sapiente fuga voluptas veniam
              tempora hic, alias placeat sed quaerat, vero repellendus,
              voluptatum maxime amet eligendi fugit officia vel natus! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Ducimus harum
              molestias at nobis optio laborum sint et. Porro dolore veniam
              error officiis maxime, cupiditate eius. Eos obcaecati at vero
              iusto?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
