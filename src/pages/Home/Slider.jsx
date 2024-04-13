import slider1 from "../../assets/images/slider/slider-1.jpg";
import slider2 from "../../assets/images/slider/slider-2.jpg";
import slider3 from "../../assets/images/slider/slider-3.jpg";
import slider4 from "../../assets/images/slider/slider-4.jpg";
import slider5 from "../../assets/images/slider/slider-5.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="relative">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={0}
        navigation={{
          clickable: true,
          nextEl: ".slider-button-next",
          prevEl: ".slider-button-prev",
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Navigation, Thumbs]}
        className="mySwiper2 h-screen max-h-[850px] md:min-h-[780px] lg:min-h-screen md:max-h-[680px]"
      >
        <SwiperSlide className="relative text-white font-ubuntu">
          <img
            src={slider1}
            className="object-cover object-center w-full h-full "
            alt="Flower 1"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          <div className="w-[110%] md:w-4/6 lg:w-4/6 xl:w-[56%] mx-auto   transform mr-[50%] translate-x-[-50%] ml-[50%] rounded-xl absolute z-20 top-12 md:top-32 xl:top-28 p-10 lg:p-14 mt-6 md:mt-0 ">
            <h1
              className="text-4xl md:text-4xl lg:text-6xl xl:text-6xl font-bold  "
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              Dream Homes Await
            </h1>
            <div
              className="glass p-3 lg:p-7 my-7 rounded-sm"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <p className="md:text-lg">
                Discover your perfect sanctuary with our wide range of
                meticulously curated properties. From cozy condos to sprawling
                estates, find the home that matches your dreams. Book today and
                find amazing deals.
              </p>
            </div>
            <button
              className="btn btn-neutral font-bold rounded-sm "
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              Find Now
            </button>
          </div>
          <div className="absolute z-20 bottom-[234px] lg:bottom-0 lg:h-full lg:right-32 right-[50%] transform translate-x-[50%] flex lg:flex-col justify-center gap-10">
            <p
              className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="400"
            >
              <FaInstagram />
            </p>
            <p
              className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="400"
            >
              <FaFacebookSquare />
            </p>
            <p
              className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="400"
            >
              <FaSquareTwitter />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative text-white font-ubuntu">
          <img
            src={slider2}
            className="object-cover object-center w-full h-full "
            alt="Real Estate"
            
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          <div className="w-[110%] md:w-4/6 lg:w-4/6 xl:w-[56%] mx-auto   transform mr-[50%] translate-x-[-50%] ml-[50%] rounded-xl absolute z-20 top-12 md:top-32 xl:top-28 p-10 lg:p-14 mt-6 md:mt-0 ">
            <h1
              className="text-4xl md:text-4xl lg:text-6xl xl:text-6xl font-bold  "
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              
            >
              Feel like Vacation
            </h1>
            <div
              className="glass p-3 lg:p-7 my-7 rounded-sm"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <p className="md:text-lg">
                Embrace a fulfilling retirement lifestyle in our exclusive
                senior living communities. With resort-style amenities and
                personalized care, enjoy every moment in your golden years.
              </p>
            </div>
            <button
              className="btn btn-neutral font-bold rounded-sm "
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              Find Now
            </button>
          </div>
          <div className="absolute z-20 bottom-[234px] lg:bottom-0 lg:h-full lg:right-32 right-[50%] transform translate-x-[50%] flex lg:flex-col justify-center gap-10">
            <p
              className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="400"
            >
              <FaInstagram />
            </p>
            <p
              className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="400"
            >
              <FaFacebookSquare />
            </p>
            <p
              className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="400"
            >
              <FaSquareTwitter />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative text-white font-ubuntu">
          <img
            src={slider3}
            className="object-cover object-center w-full h-full "
            alt="Flower 1"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          <div className="w-[110%] md:w-4/6 lg:w-4/6 xl:w-[56%] mx-auto   transform mr-[50%] translate-x-[-50%] ml-[50%] rounded-xl absolute z-20 top-12 md:top-32 xl:top-28 p-10 lg:p-14 mt-6 md:mt-0 ">
            <h1
              className="text-4xl md:text-4xl lg:text-6xl xl:text-6xl font-bold  "
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              Your Perfect Getaway
            </h1>
            <div
              className="glass p-3 lg:p-7 my-7 rounded-sm"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <p className="md:text-lg">
                Indulge in the ultimate vacation experience with our curated
                selection of vacation rentals. From beachfront villas to cozy
                mountain cabins, create unforgettable memories in your home away
                from home.
              </p>
            </div>
            <button
              className="btn btn-neutral font-bold rounded-sm "
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              Find Now
            </button>
          </div>
          <div className="absolute z-20 bottom-[234px] lg:bottom-0 lg:h-full lg:right-32 right-[50%] transform translate-x-[50%] flex lg:flex-col justify-center gap-10">
            <p
              className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="400"
            >
              <FaInstagram />
            </p>
            <p
              className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="400"
            >
              <FaFacebookSquare />
            </p>
            <p
              className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="400"
            >
              <FaSquareTwitter />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative text-white font-ubuntu">
          <img
            src={slider4}
            className="object-cover object-center w-full h-full "
            alt="Flower 1"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          <div className="w-[110%] md:w-4/6 lg:w-4/6 xl:w-[56%] mx-auto   transform mr-[50%] translate-x-[-50%] ml-[50%] rounded-xl absolute z-20 top-12 md:top-32 xl:top-28 p-10 lg:p-14 mt-6 md:mt-0 ">
            <h1
              className="text-4xl md:text-4xl lg:text-6xl xl:text-6xl font-bold  "
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              Your Ideal Dwelling
            </h1>
            <div
              className="glass p-3 lg:p-7 my-7 rounded-sm"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <p className="md:text-lg">
              
Embark on a journey to find the perfect home for you 
and your loved ones. Whether its a spacious townhouse, 
a modern apartment, or a serene senior living community, 
your dream home is just a click away.
              </p>
            </div>
            <button
              className="btn btn-neutral font-bold rounded-sm "
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              Find Now
            </button>
          </div>
          <div className="absolute z-20 bottom-[234px] lg:bottom-0 lg:h-full lg:right-32 right-[50%] transform translate-x-[50%] flex lg:flex-col justify-center gap-10">
            <p
              className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="400"
            >
              <FaInstagram />
            </p>
            <p
              className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="400"
            >
              <FaFacebookSquare />
            </p>
            <p
              className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="400"
            >
              <FaSquareTwitter />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative text-white font-ubuntu">
          <img
            src={slider5}
            className="object-cover object-center w-full h-full "
            alt="Flower 1"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          <div className="w-[110%] md:w-4/6 lg:w-4/6 xl:w-[56%] mx-auto   transform mr-[50%] translate-x-[-50%] ml-[50%] rounded-xl absolute z-20 top-12 md:top-32 xl:top-28 p-10 lg:p-14 mt-6 md:mt-0 ">
            <h1
              className="text-4xl md:text-4xl lg:text-6xl xl:text-6xl font-bold  "
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              Exclusive Listings
            </h1>
            <div
              className="glass p-3 lg:p-7 my-7 rounded-sm"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <p className="md:text-lg">
                Gain access to our exclusive listings featuring prime properties
                in sought-after locations. Dont miss your chance to own a piece
                of luxury living.
              </p>
            </div>
            <button
              className="btn btn-neutral font-bold rounded-sm "
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              Find Now
            </button>
          </div>
          <div className="absolute z-20 bottom-[234px] lg:bottom-0 lg:h-full lg:right-32 right-[50%] transform translate-x-[50%] flex lg:flex-col justify-center gap-10">
            <p
              className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="400"
            >
              <FaInstagram />
            </p>
            <p
              className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="400"
            >
              <FaFacebookSquare />
            </p>
            <p
              className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="400"
            >
              <FaSquareTwitter />
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={-10}
        loop={true}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className=" w-[90%] absolute -top-36 md:-top-28 lg:w-1/2 md:w-2/3 glass rounded-md h-16 md:h-24 -mb-20"
        data-aos="zoom-in-up"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-offset="10"
      >
        <SwiperSlide className="p-2 md:p-3 ">
          <img
            className="h-full w-full object-cover object-center rounded-md"
            src={slider1}
            alt="Thumb Flower 1"
            data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-duration="600"
            data-aos-offset="10"
          />
        </SwiperSlide>
        <SwiperSlide className="p-2 md:p-3  ">
          <img
            className="h-full w-full object-cover object-center rounded-md"
            src={slider2}
            alt="Thumb Flower 1"
            data-aos="zoom-in"
            data-aos-delay="1100"
            data-aos-duration="600"
            data-aos-offset="10"
          />
        </SwiperSlide>
        <SwiperSlide className="p-2 md:p-3 ">
          <img
            className="h-full w-full object-cover object-center rounded-md"
            src={slider3}
            alt="Thumb Flower 1"
            data-aos="zoom-in"
            data-aos-delay="1200"
            data-aos-duration="600"
            data-aos-offset="10"
          />
        </SwiperSlide>
        <SwiperSlide className="p-2 md:p-3 ">
          <img
            className="h-full w-full object-cover object-center rounded-md"
            src={slider4}
            alt="Thumb Flower 1"
            data-aos="zoom-in"
            data-aos-delay="1300"
            data-aos-duration="600"
            data-aos-offset="10"
          />
        </SwiperSlide>
        <SwiperSlide className="p-2 md:p-3 ">
          <img
            className="h-full w-full object-cover object-center rounded-md"
            src={slider5}
            alt="Thumb Flower 1"
            data-aos="zoom-in"
            data-aos-delay="1400"
            data-aos-duration="600"
            data-aos-offset="10"
          />
        </SwiperSlide>
      </Swiper>

      <div className="flex gap-4 z-50 bottom-60 md:bottom-56 absolute  w-full justify-center"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  data-aos-duration="500"
                  data-aos-offset="10">
        <div className="slider-button-prev cursor-pointer  rounded-full p-2 bg-base-200">
          <GrFormPrevious className="text-2xl" />
        </div>
        <div className="slider-button-next cursor-pointer p-2 rounded-full  bg-base-200">
          <MdNavigateNext className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
