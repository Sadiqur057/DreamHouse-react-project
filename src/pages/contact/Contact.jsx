const Contact = () => {
  return (
    <section className="bg-base-200 pt-14 lg:pt-0 lg:min-h-[760px] min-h-screen lg:h-screen flex items-center bg-cool">
      <div className="grid max-w-6xl grid-cols-1 mx-auto md:grid-cols-2 md:divide-x md:glass my-10">
        <div className="p-10 self-center  glass lg:md-transparent md:h-full flex flex-col justify-center mb-6 md:mb-0">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Fake address, 9999 City</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>123456789</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>contact@business.com</span>
            </p>
          </div>
        </div>
        <form noValidate="" className="w-full max-w-xl p-8 mx-auto space-y-6 flex-1 bg-base-100 self-end ">
          <div>
            <label htmlFor="name" className="block mb-1 ml-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              required=""
              className="block w-full p-2 rounded  bg-gray-100 outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 ml-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              required=""
              className="block w-full p-2 rounded focus:outline-none bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 ml-1">
              Message
            </label>
            <textarea
              id="message"
              type="text"
              placeholder="Message..."
              className="block w-full p-2 rounded resize-none focus:outline-none bg-gray-100"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold  shadow focus:outline-none btn btn-neutral rounded-sm text-white text-base"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
