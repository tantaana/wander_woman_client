import React from "react";
import styles from "./WhyChooseUs.module.css";
import man from "../../../Assets/WhyChooseUs/man.png";
import balloon from "../../../Assets/WhyChooseUs/balloon.png";

import { TiTick } from "react-icons/ti";

const WhyChooseUs = () => {
  return (
    <div className="mx-4 mb-[200px] relative">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
        <div className="bg-blue-600 w-[300px] h-[300px] sm:min-w-[450px] sm:min-h-[450px] flex flex-col items-end gap-2">
          <div className="bg-yellow-400 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px]">
            <img
              src={man}
              className="w-[250px] sm:w-[400px] relative bottom-8 sm:bottom-12 right-4 sm:right-6"
              alt=""
            />
          </div>

          <div className="flex items-center gap-3 w-[250px] sm:min-w-[400px]">
            <h2 className={`${styles.whyChoose} text-3xl text-white`}>10+</h2>
            <h2 className="text-white font-medium">Years of Experience</h2>
          </div>
        </div>

        <div className="max-w-[400px] z-40">
          <h2 className={`${styles.whyChoose} text-2xl text-sky-800 mb-4`}>
            Why Choose Us
          </h2>

          <h2 className="text-4xl font-bold mb-8">
            Plan Your Trip
            <br />
            with Wander Woman
          </h2>

          <h2 className="text-gray-500 font-medium mb-8">
            Holisticly optimize proactive strategic theme areas rather than
            effective manufactured products create.
          </h2>

          <div className="grid grid-cols-2 gap-2 mb-10">
            <div className="flex items-center gap-2">
              <TiTick className="text-2xl" />
              <h2 className="text-lg font-semibold">Travel Plan</h2>
            </div>

            <div className="flex items-center gap-2">
              <TiTick className="text-2xl" />
              <h2 className="text-lg font-semibold">Cheap Rates</h2>
            </div>

            <div className="flex items-center gap-2">
              <TiTick className="text-2xl" />
              <h2 className="text-lg font-semibold">Hand-picked Tour</h2>
            </div>

            <div className="flex items-center gap-2">
              <TiTick className="text-2xl" />
              <h2 className="text-lg font-semibold">Private Guide</h2>
            </div>
          </div>

          <div className="flex">
            <h2 className="border-2 border-sky-800 text-sky-800 text-lg font-semibold rounded-xl py-4 px-8 hover:bg-sky-800 hover:border-transparent hover:text-white duration-300 ease-in-out hover:cursor-pointer">
              Contact Us
            </h2>
          </div>
        </div>
      </div>

      <div className="absolute right-12 bottom-5 opacity-60 z-30">
        <img src={balloon} className="w-[80px]" alt="" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
