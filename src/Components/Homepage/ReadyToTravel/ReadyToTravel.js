import React from "react";
import styles from "./ReadyToTravel.module.css";
import { MdPlayCircleOutline } from "react-icons/md";
import { GiPineTree, GiParachute, GiLightBackpack } from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa";

const ReadyToTravel = () => {
  return (
    <div
      className={`${styles.bgImg} py-32 px-8 flex items-center justify-center gap-24 mb-[200px]`}
    >
      <div>
        <MdPlayCircleOutline className="text-5xl text-yellow-400 mb-8" />
        <h2 className={`${styles.readyToTravel} text-2xl text-yellow-400 mb-4`}>
          Are You Ready To Travel?
        </h2>

        <h2 className="text-4xl text-white font-bold mb-16">
          Wander Woman is a World Leading
          <br />
          Online Tour Booking Platform
        </h2>

        <div className="flex">
          <h2 className="border-2 border-white text-white text-lg font-semibold rounded-xl py-4 px-8 hover:bg-white hover:border-transparent hover:text-black duration-300 ease-in-out hover:cursor-pointer">
            Contact Us
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col items-center justify-center gap-2 p-1 bg-white w-[150px] h-[150px]">
          <div className="bg-yellow-400 rounded-full p-2">
            <GiPineTree className="text-4xl" />
          </div>
          <h2 className="font-lg font-bold text-center">Wildlife Tours</h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 p-1 bg-white w-[150px] h-[150px]">
          <div className="bg-yellow-400 rounded-full p-2">
            <GiParachute className="text-4xl" />
          </div>
          <h2 className="font-lg font-bold text-center">Parachute Tours</h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 p-1 bg-white w-[150px] h-[150px]">
          <div className="bg-yellow-400 rounded-full p-2">
            <GiLightBackpack className="text-4xl" />
          </div>
          <h2 className="font-lg font-bold text-center">Adventure Tours</h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 p-1 bg-white w-[150px] h-[150px]">
          <div className="bg-yellow-400 rounded-full p-2">
            <FaUmbrellaBeach className="text-4xl" />
          </div>
          <h2 className="font-lg font-bold text-center">Beaches Tours</h2>
        </div>
      </div>
    </div>
  );
};

export default ReadyToTravel;
