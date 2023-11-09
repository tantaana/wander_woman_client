import React from "react";
import styles from "./LatestTravelGuide.module.css";
import { AiFillInstagram } from "react-icons/ai";

import update1 from "../../../Assets/LatestTravelUpdates/update_1.webp";
import update2 from "../../../Assets/LatestTravelUpdates/update_2.webp";
import update3 from "../../../Assets/LatestTravelUpdates/update_3.webp";
import update4 from "../../../Assets/LatestTravelUpdates/update_4.jpg";

import travel1 from "../../../Assets/LatestTravelUpdates/travel_1.jpg";
import travel2 from "../../../Assets/LatestTravelUpdates/travel_2.jpg";
import travel3 from "../../../Assets/LatestTravelUpdates/travel_3.jpg";
import travel4 from "../../../Assets/LatestTravelUpdates/travel_4.webp";
import travel5 from "../../../Assets/LatestTravelUpdates/travel_5.jpg";

import boat from "../../../Assets/LatestTravelUpdates/boat.png";

const LatestTravelGuide = () => {
  const travels = [
    {
      img: update1,
      date: "July 13, 2023",
      who: "Admin",
      title: "The Impact of Covid-19 on travel & tourism industry",
    },
    {
      img: update2,
      date: "Aug 20, 2023",
      who: "Moderator",
      title: "Best way to arrange for tour in this dry season",
    },
    {
      img: update3,
      date: "Sept 13, 2023",
      who: "Admin",
      title: "Who is demanding to be a master?",
    },
    {
      img: update4,
      date: "Nov 05, 2023",
      who: "Editor",
      title: "Tour: Blessing or Curse for youth?",
    },
  ];
  return (
    <div className="relative mx-4 mb-[200px]">
      <img
        src={boat}
        className="absolute top-[20px] left-[50px] w-[100px] opacity-40"
        alt=""
      />
      <h2
        className={`${styles.travelGuide} text-center text-2xl text-sky-800 mb-4`}
      >
        Updates
      </h2>

      <h2 className="text-center text-4xl font-bold mb-20">
        Latest Travel Updates
      </h2>

      <div className="flex justify-center mb-32">
        <div className="max-w-[1400px] grid grid-cols-2 gap-16">
          {travels?.map((travel) => (
            <div className="flex items-center gap-6">
              <img src={travel?.img} className="w-[400px]" alt="" />

              <div>
                <div className="flex items-center gap-6 mb-4">
                  <h2 className="text-gray-500 font-medium">{travel?.date}</h2>
                  <h2 className="text-gray-500 font-medium">• {travel?.who}</h2>
                </div>

                <h2 className="text-xl font-bold">{travel?.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-6">
        <div
          className={`${styles.rotateText} flex items-center justify-center gap-2`}
        >
          <AiFillInstagram className="text-2xl" />
          <h2 className="text-lg font-semibold">Wander Woman</h2>
        </div>

        <img
          src={travel1}
          className="w-[250px] h-[250px] object-cover"
          alt=""
        />
        <img
          src={travel2}
          className="w-[250px] h-[250px] object-cover"
          alt=""
        />
        <img
          src={travel3}
          className="w-[250px] h-[250px] object-cover"
          alt=""
        />
        <img
          src={travel4}
          className="w-[250px] h-[250px] object-cover"
          alt=""
        />
        <img
          src={travel5}
          className="w-[250px] h-[250px] object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default LatestTravelGuide;
