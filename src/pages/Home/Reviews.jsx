const Reviews = () => {
  return (
    <section className="bg-cool  font-poppins">
      <div className="container px-6 py-8 lg:py-12 mx-auto">
        <div className="grid items-center md:gap-4 xl:grid-cols-6">
          <div className="max-w-xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold ">
              Success Stories Straight from Our Clients!
            </h2>
            <p>
              Listen to the experiences of those who found their dream homes and
              success through our services..
            </p>
          </div>
          <div className="md:p-6 xl:col-span-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                {/* review 1 */}
                <div
                  className="container flex flex-col w-full max-w-lg p-[10px] lg:p-6 mx-auto divide-y shadow-md rounded-md bg-base-100"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  data-aos-duration="600"
                  data-aos-offset="0"
                >
                  <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                      <div>
                        <img
                          src="https://source.unsplash.com/100x100/?portrait"
                          alt=""
                          className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">Sarah Johnson</h4>
                        <p className="text-sm dark:text-gray-600">
                          CEO, Johnson Enterprises.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-red-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                      </svg>
                      <span className="text-xl font-bold">5.0</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 dark:text-gray-600">
                    <p>
                      Dream House made our Residential property acquisition
                      seamless. Their expertise and attention to detail ensured
                      a smooth transaction, exceeding our expectations. Highly
                      recommended for any real estate needs.
                    </p>
                  </div>
                </div>

                <div
                  className="p-[10px] lg:p-6 rounded shadow-md bg-base-100"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  data-aos-offset="0"
                >
                  <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                      <div>
                        <img
                          src="https://source.unsplash.com/100x100/?portrait"
                          alt=""
                          className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">David Smith</h4>
                        <p className="text-sm dark:text-gray-600">
                          Director of Operations, Smith & Co.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-red-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                      </svg>
                      <span className="text-xl font-bold">4.7</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 dark:text-gray-600">
                    <p>
                      Dream House helped us find the perfect residential
                      apartment tailored to our needs. Their professionalism and
                      dedication made the entire process stress-free. We are
                      grateful for their exceptional service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div
                  className="p-[10px] lg:p-6 rounded shadow-md bg-base-100"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-duration="600"
                  data-aos-offset="0"
                >
                  <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                      <div>
                        <img
                          src="https://source.unsplash.com/100x100/?portrait"
                          alt=""
                          className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">Emily Rodriguez</h4>
                        <p className="text-sm dark:text-gray-600">
                          CFO, Rodriguez Investments
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-red-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                      </svg>
                      <span className="text-xl font-bold">4.9</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 dark:text-gray-600">
                    <p>
                      Dream House provided invaluable guidance throughout our
                      investment property purchase. Their teams knowledge and
                      commitment ensured we made a sound investment decision.
                      Thank you for your outstanding support.
                    </p>
                  </div>
                </div>

                <div
                  className="p-[10px] lg:p-6 rounded shadow-md bg-base-100"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="600"
                  data-aos-offset="0"
                >
                  <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                      <div>
                        <img
                          src="https://source.unsplash.com/100x100/?portrait"
                          alt=""
                          className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">Michael Thompson</h4>
                        <p className="text-sm dark:text-gray-600">
                          President, Thompson Realty Group
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-red-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                      </svg>
                      <span className="text-xl font-bold">5.0</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 dark:text-gray-600">
                    <p>
                      Working with Dream House was a pleasure. Their
                      personalized approach and deep understanding of the market
                      helped us find the ideal residential properties for our
                      clients. Trustworthy and reliable, they are our go-to real
                      estate partner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
