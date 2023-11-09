import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import hungary from "../../../Assets//FeaturedTours/hungary.jpg";
import UK from "../../../Assets//FeaturedTours/UK.jpg";
import australia from "../../../Assets//FeaturedTours//australia.webp";
import oman from "../../../Assets//FeaturedTours/oman.jpg";
import africa from "../../../Assets//FeaturedTours//africa.jpg";
import japan from "../../../Assets//FeaturedTours/japan.jpg";

import styles from "./FeaturedTours.module.css"; //Always remember to keep the CSS file below all swiper import, or the code won't work

const FeaturedTours = () => {
  const featuredPlaces = [
    {
      img: hungary,
      place: "Budapest, Hungary",
      title: "Wonders of the West Coast & Kimberley",
      ratings: "4.5",
      reviews: "25",
      days: "7",
      price: "520",
    },
    {
      img: UK,
      place: "Greater London, UK",
      title: "Windsor Castle and Bath from London",
      ratings: "4.3",
      reviews: "45",
      days: "5",
      price: "350",
    },
    {
      img: australia,
      place: "Perth, Australia",
      title: "Enchanting Great Barrier Reef, Aquatic Wonderland",
      ratings: "4.8",
      reviews: "60",
      days: "7",
      price: "450",
    },
    {
      img: oman,
      place: "Muscat, Oman",
      title: "Ancient Heritage and Desert Adventures",
      ratings: "4.2",
      reviews: "44",
      days: "6",
      price: "599",
    },
    {
      img: africa,
      place: "Cairo, Africa",
      title: "Beauty of the Lakeshore and the Pedest",
      ratings: "4.0",
      reviews: "52",
      days: "5",
      price: "420",
    },
    {
      img: japan,
      place: "Osaka, Japan",
      title: "Adorable Lights from the Dawn till the Dusk",
      ratings: "4.5",
      reviews: "88",
      days: "7",
      price: "520",
    },
  ];
  return (
    <div className={`bg-blue-900 py-20`}>
      <h2 className={`${styles.featured} text-white text-center text-2xl mb-4`}>
        Tours
      </h2>

      <h2 className="text-center text-white text-4xl font-bold mb-16">
        Featured Tours
      </h2>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className={`${styles.mainDiv} mySwiper`}
      >
        {featuredPlaces?.map((places, i) => {
          return (
            <SwiperSlide key={i} className="bg-white">
              <div className="relative">
                <div className="absolute top-5 right-5 hover:cursor-pointer rounded-full border-transparent bg-white hover:bg-red-500 hover:text-white duration-300 ease-in-out p-3">
                  <BsFillHeartFill className="text-lg" />
                </div>
                <img
                  src={places?.img}
                  className="w-full h-[250px] object-cover mb-2"
                  alt=""
                />

                <div className="p-5">
                  <h2 className="text-gray-500 text-lg font-medium mb-4">
                    {places?.place}
                  </h2>

                  <h2 className="text-2xl font-bold mb-4">{places?.title}</h2>

                  <div className="flex justify-between items-center gap-2 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 rounded-md bg-yellow-400 p-1">
                        <AiFillStar />
                        <h2 className="font-medium">{places?.ratings}</h2>
                      </div>

                      <h2 className="text-gray-500 font-medium">
                        {places?.reviews} reviews
                      </h2>
                    </div>

                    <div className="flex items-center gap-1">
                      <BiTimeFive className="text-gray-500 text-xl" />
                      <h2 className="text-gray-500 font-medium">
                        {places?.days} days
                      </h2>
                    </div>
                  </div>

                  <div className="flex justify-between items-center gap-2">
                    <h2 className="font-semibold">Starting from</h2>
                    <h2 className={`${styles.featured} text-2xl font-semibold`}>
                      ${places?.price}
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FeaturedTours;
