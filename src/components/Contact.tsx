
export const Contact = () => {
  return (
    <section id="contact">
      <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-center mb-10">
        Contact
      </h1>
      <div className="flex justify-center items-center w-full pb-10 gap-20 overflow-hidden relative">
        <form className="w-[95%] md:w-[80%] lg:w-[30%] z-20">
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
            <button
              type="button"
              className="bg-purple-500 text-white px-6 py-2 rounded-md font-bold text-lg cursor-pointer hover:bg-purple-400"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
