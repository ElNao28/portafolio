import contactGirl from "../assets/backgrounds/mio-computer.png";
import computer from "../assets/elements/computer-two.gif";
export const Contact = () => {
  return (
    <section id="contact" className="h-screen pt-20 relative">
      <img
        src={contactGirl}
        alt="contact"
        className="absolute right-0 bottom-0 -z-50"
      />
      <div className="rounded-full border-2 bg-black absolute left-0 bottom-0 -z-50 overflow-hidden">
        <img src={computer} alt="contact" />
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-6xl font-bold commic-text text-center mb-10">
          Contact
        </h1>
        <form className="w-2/5">
          <div className="flex flex-col gap-2 mb-3">
            <label htmlFor="name" className="text-xl font-bold">
              Name and lastname
            </label>
            <input
              id="name"
              type="text"
              className="border-2 rounded-sm p-3"
              placeholder="Exap: Jonh Doe"
            />
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <label htmlFor="email" className="text-xl font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="border-2 rounded-sm p-3"
              placeholder="Exap: example@mail.com"
            />
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <label htmlFor="phone" className="text-xl font-bold">
              Cellphone
            </label>
            <input
              id="phone"
              type="text"
              className="border-2 rounded-sm p-3"
              placeholder="Exap: 8101000100"
            />
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <label htmlFor="message" className="text-xl font-bold">
              Message
            </label>
            <textarea
              id="message"
              className="border-2 rounded-sm p-3"
              placeholder="Exap: Description message"
              rows={10}
            ></textarea>
          </div>
          <div>
            <button
              type="button"
              className="border-2 rounded-lg cursor-pointer bg-black text-white py-3 w-full font-bold text-2xl"
            >
              Send Information
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
