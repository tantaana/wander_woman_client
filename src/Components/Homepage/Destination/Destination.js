import React from "react";
import styles from "./Destination.module.css";

import { AiOutlineArrowRight } from "react-icons/ai";

import UK from "../../../Assets/Destination/UK.jpg";
import turkey from "../../../Assets/Destination/turkey.webp";
import thailand from "../../../Assets/Destination/thailand.jpg";
import france from "../../../Assets/Destination/france.webp";

const Destination = () => {
  return (
    <div className="mx-10 mb-[200px] flex flex-col md:flex-row justify-center">
      <div>
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className={`${styles.destination} text-2xl text-sky-800 mb-4`}>
              Destination
            </h2>

            <h2 className="text-4xl font-bold">Top Destinations</h2>
          </div>

          <div className="hidden sm:flex items-center gap-3 hover:text-orange-500 duration-300 ease-in-out hover:cursor-pointer">
            <h2 className="text-lg font-bold">See All</h2>
            <AiOutlineArrowRight className="text-xl font-bold" />
          </div>
        </div>

        {/* Card */}
        <div
          className={`${styles.divContainer} flex flex-wrap justify-center gap-4 lg:gap-6 xl:gap-10 2xl:gap-16`}
        >
          <div className="hover:bg-yellow-200 duration-300 ease-in-out hover:cursor-pointer p-3">
            <div className={`${styles.imgContainer}`}>
              <img src={UK} alt="" />
            </div>
            <h2 className="text-xl font-bold mb-1">United Kingdom</h2>
            <h2 className="text-gray-500 font-medium">1,74,688 Travellers</h2>
          </div>

          <div className="hover:bg-yellow-200 duration-300 ease-in-out hover:cursor-pointer p-3">
            <div className={`${styles.imgContainer}`}>
              <img src={turkey} alt="" />
            </div>
            <h2 className="text-xl font-bold mb-1">Turkey</h2>
            <h2 className="text-gray-500 font-medium">2,60,128 Travellers</h2>
          </div>

          <div className="hover:bg-yellow-200 duration-300 ease-in-out hover:cursor-pointer p-3">
            <div className={`${styles.imgContainer}`}>
              <img src={thailand} alt="" />
            </div>
            <h2 className="text-xl font-bold mb-1">Thailand</h2>
            <h2 className="text-gray-500 font-medium">4,34,587 Travellers</h2>
          </div>

          <div className="hover:bg-yellow-200 duration-300 ease-in-out hover:cursor-pointer p-3">
            <div className={`${styles.imgContainer}`}>
              <img src={france} alt="" />
            </div>
            <h2 className="text-xl font-bold mb-1">France</h2>
            <h2 className="text-gray-500 font-medium">3,25,220 Travellers</h2>
          </div>
        </div>
      </div>

      <div className="mt-10 flex sm:hidden justify-center items-center gap-3 hover:text-orange-500 duration-300 ease-in-out hover:cursor-pointer">
        <h2 className="text-lg font-bold">See All</h2>
        <AiOutlineArrowRight className="text-xl font-bold" />
      </div>
    </div>
  );
};

export default Destination;
