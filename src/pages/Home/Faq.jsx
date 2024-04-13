const Faq = () => {
  return (
    <section className="">
      <div className="container grid md:grid-cols-3 justify-center px-4 py-8 mx-auto md:p-8 gap-4 md:gap-10 font-poppins my-6">
        <div className="flex flex-col justify-center ">
          <h2 className="text-3xl font-semibold sm:text-4xl text-center">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-600 text-center">
            Got Questions? Explore Our FAQ for Quick Answers on Residential Real
            Estate!
          </p>
        </div>
        <div className="md:col-span-2">
          <div
            className="collapse collapse-arrow bg-base-200 mb-3 rounded-md "
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-offset="0"
          >
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-lg md:text-xl font-semibold">
              What types of residential properties does Dream House specialize
              in?
            </div>
            <div className="collapse-content">
              <p>
                Dream House specializes in a variety of residential properties,
                including single-family homes, townhouses, apartments, student
                housing, senior living communities, and vacation rentals.
              </p>
            </div>
          </div>
          <div
            className="collapse collapse-arrow bg-base-200 mb-3 rounded-md "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-offset="0"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg md:text-xl font-semibold">
              How can I begin the process of buying or selling a residential
              property with Dream House?
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                To start, reach out to us through phone, email, or our website
                to schedule a consultation with one of our experienced agents
                specializing in residential real estate.
              </p>
            </div>
          </div>
          <div
            className="collapse collapse-arrow bg-base-200 mb-3 rounded-md "
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="600"
            data-aos-offset="0"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg md:text-xl font-semibold">
              Does Dream House assist with financing options for residential
              properties?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely, we have established partnerships with trusted
                lenders who can offer a range of financing solutions tailored to
                your residential property needs.
              </p>
            </div>
          </div>
          <div
            className="collapse collapse-arrow bg-base-200"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
            data-aos-offset="0"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg md:text-xl font-semibold">
              What sets Dream House apart in the residential real estate market?
            </div>
            <div className="collapse-content">
              <p>
                Our focus solely on residential properties allows us to provide
                specialized expertise and dedicated attention to every client,
                ensuring a seamless experience from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
