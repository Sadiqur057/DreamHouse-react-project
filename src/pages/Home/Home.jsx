import slider1 from "../../assets/images/slider/slider-1.jpg";
import slider2 from "../../assets/images/slider/slider-2.jpg";
import slider3 from "../../assets/images/slider/slider-3.jpg";
import slider4 from "../../assets/images/slider/slider-4.jpg";
import slider5 from "../../assets/images/slider/slider-5.jpg";

import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";


const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="h-[calc(100vh-120px)] relative">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
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
        className="mySwiper2 h-screen"
      >
        <SwiperSlide className="relative">
          <img
            src={slider1}
            className="object-cover object-center w-full h-full"
            alt="Flower 1"
          />

          <div className="w-[90%] md:w-4/6 lg:w-4/6 mx-auto ml-[50%] transform translate-x-[-50%] glass rounded-xl absolute z-50 top-24 md:top-32 xl:top-28 p-10 lg:p-14 ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:pb-2 xl:pb-3">
              Dream Homes Await
            </h1>
            <p className="text-gray-900 text-lg my-4 md:my-5 lg:my-6">
              Discover your perfect sanctuary with our wide range of
              meticulously curated properties. From cozy condos to sprawling
              estates, find the home that matches your dreams.
            </p>
            <button className="btn btn-neutral font-bold ">Find Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slider2}
            className="object-cover object-center w-full h-full"
            alt="Flower 1"
          />
                    <div className="w-[90%] md:w-4/6 lg:w-4/6 mx-auto ml-[50%] transform translate-x-[-50%] glass rounded-xl absolute z-50 top-24 md:top-32 xl:top-28 p-10 lg:p-14 ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:pb-2 xl:pb-3">
            Feel Like Vacation
            </h1>
            <p className="text-gray-900 text-lg my-4 md:my-5 lg:my-6">
            Embrace a fulfilling retirement lifestyle in our exclusive senior living communities. With resort-style amenities and personalized care, enjoy every moment in your golden years.
            </p>
            <button className="btn btn-neutral font-bold ">Find Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slider3}
            className="object-cover object-center w-full h-full"
            alt="Flower 1"
          />
                    <div className="w-[90%] md:w-4/6 lg:w-4/6 mx-auto ml-[50%] transform translate-x-[-50%] glass rounded-xl absolute z-50 top-24 md:top-32 xl:top-28 p-10 lg:p-14 ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:pb-2 xl:pb-3">
            Your Perfect Getaway
            </h1>
            <p className="text-gray-900 text-lg my-4 md:my-5 lg:my-6">
            Indulge in the ultimate vacation experience with our curated selection of vacation rentals. From beachfront villas to cozy mountain cabins, create unforgettable memories in your home away from home.
            </p>
            <button className="btn btn-neutral font-bold ">Find Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slider4}
            className="object-cover object-center w-full h-full"
            alt="Flower 1"
          />
                    <div className="w-[90%] md:w-4/6 lg:w-4/6 mx-auto ml-[50%] transform translate-x-[-50%] glass rounded-xl absolute z-50 top-24 md:top-32 xl:top-28 p-10 lg:p-14 ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:pb-2 xl:pb-3">
            Your Ideal Dwelling
            </h1>
            <p className="text-gray-900 text-lg my-4 md:my-5 lg:my-6">
            Embark on a journey to find the perfect home for you and your loved ones. Whether its a spacious townhouse, a modern apartment, or a serene senior living community, your dream home is just a click away.
            </p>
            <button className="btn btn-neutral font-bold ">Find Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slider5}
            className="object-cover object-center w-full h-full"
            alt="Flower 1"
          />
                    <div className="w-[90%] md:w-4/6 lg:w-4/6 mx-auto ml-[50%] transform translate-x-[-50%] glass rounded-xl absolute z-50 top-24 md:top-32 xl:top-28 p-10 lg:p-14 ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:pb-2 xl:pb-3">
            Exclusive Listings
            </h1>
            <p className="text-gray-900 text-lg my-4 md:my-5 lg:my-6">
            Gain access to our exclusive listings featuring prime properties in sought-after locations. Dont miss your chance to own a piece of luxury living.
            </p>
            <button className="btn btn-neutral font-bold ">Find Now</button>
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={-12}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="bottom-[20%] w-[90%]  lg:w-1/2 md:w-2/3 glass rounded-md h-20 md:h-24"
      >
        <SwiperSlide className="py-3 px-3 ">
          <img
            className="h-full w-full object-cover object-center rounded-md"
            src={slider1}
            alt="Thumb Flower 1"
          />
        </SwiperSlide>
        <SwiperSlide className="py-3 px-3 ">
          <img
            className="h-full w-full object-cover object-center rounded-md"
            src={slider2}
            alt="Thumb Flower 1"
          />
        </SwiperSlide>
        <SwiperSlide className="py-3 px-3 ">
          <img
            className="h-full w-full object-cover object-center rounded-md"
            src={slider3}
            alt="Thumb Flower 1"
          />
        </SwiperSlide>
        <SwiperSlide className="py-3 px-3 ">
          <img
            className="h-full w-full object-cover object-center rounded-md"
            src={slider4}
            alt="Thumb Flower 1"
          />
        </SwiperSlide>
        <SwiperSlide className="py-3 px-3 ">
          <img
            className="h-full w-full object-cover object-center rounded-md"
            src={slider5}
            alt="Thumb Flower 1"
          />
        </SwiperSlide>
      </Swiper>

      <div className="flex gap-4 z-50 xl:bottom-10 lg:bottom-0 md:bottom-32 bottom-10 absolute  w-full justify-center">
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

export default Home;
