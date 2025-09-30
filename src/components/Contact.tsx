import contactImage from "../assets/elements/computer-two.gif";
export const Contact = () => {
  return (
    <section
      id="contact"
      className=""
    >
      <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-center mb-10">
        Contact
      </h1>
      <div className="flex justify-center items-center w-full pb-10 gap-20 overflow-hidden relative">
          <img src={contactImage} alt="contact" className="absolute bottom-32 lg:static z-0" />
        <form className="w-[95%] md:w-[80%] lg:w-[30%] z-20 dark:backdrop-brightness-50 p-5 lg:backdrop-brightness-100 lg:p-2 rounded-md overflow-hidden backdrop-blur-[4px]">
          <div className="dark:text-white flex flex-col gap-2 mb-8">
            <label className="font-bold text-lg" htmlFor="name">
              Name and last name
            </label>
            <input
              className="ring-1 ring-gray-700 rounded-md p-2 outline-0 focus:outline-2 outline-purple-300"
              placeholder="Example: Jonh doe"
              type="text"
              id="name"
            />
          </div>
          <div className="dark:text-white flex flex-col gap-2 mb-8">
            <label className="font-bold text-lg" htmlFor="email">
              Email
            </label>
            <input
              className="ring-1 ring-gray-700 rounded-md p-2 outline-0 focus:outline-2 outline-purple-300"
              placeholder="Example: Jonh doe"
              type="email"
              id="email"
            />
          </div>
          <div className="dark:text-white flex flex-col gap-2 mb-8">
            <label className="font-bold text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              className="ring-1 ring-gray-700 rounded-md p-2 outline-0 focus:outline-2 outline-purple-300"
              name="message"
              id="message"
              rows={10}
            ></textarea>
          </div>

          <div className="">
            <button type="button" className="bg-purple-500 text-white px-6 py-2 rounded-md font-bold text-lg cursor-pointer hover:bg-purple-400">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
