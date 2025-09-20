import imageProfile from "../assets/image-profile.png";

export const AboutMe = () => {
  return (
    <section className="bg-white">
      <div>
        <img src={imageProfile} alt="Profile picture" />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti at
          eligendi quod inventore soluta ipsa voluptatibus dolores velit harum
          optio, id quidem error ullam. Iste numquam quae minus ducimus tempora?
        </p>
      </div>
    </section>
  );
};
