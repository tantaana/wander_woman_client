import React from "react";
import styles from "./BrowseByCategory.module.css";

import { GiModernCity, GiBackpack, GiHiking } from "react-icons/gi";
import { TbBeach, TbSailboat } from "react-icons/tb";
import { MdFastfood } from "react-icons/md";

const BrowseByCategory = () => {
  return (
    <div className="py-[80px] border border-black">
      <h2
        className={`${styles.browseCategory} text-center text-2xl text-sky-800 mb-4`}
      >
        Browse By Category
      </h2>

      <h2 className="text-center text-4xl font-bold mb-16">Pick A Tour Type</h2>

      <div className="flex justify-center items-center gap-16">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl bg-yellow-400 p-4 rounded-full mb-2">
            <GiModernCity />
          </h2>
          <h2 className="text-xl font-bold">City Tours</h2>
          <h2 className="font-medium text-lg text-gray-500">10 Tours+</h2>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-3xl bg-yellow-400 p-4 rounded-full mb-2">
            <TbBeach />
          </h2>
          <h2 className="text-xl font-bold">Beaches</h2>
          <h2 className="font-medium text-lg text-gray-500">10 Tours+</h2>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-3xl bg-yellow-400 p-4 rounded-full mb-2">
            <TbSailboat />
          </h2>
          <h2 className="text-xl font-bold">Boat Tours</h2>
          <h2 className="font-medium text-lg text-gray-500">10 Tours+</h2>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-3xl bg-yellow-400 p-4 rounded-full mb-2">
            <GiBackpack />
          </h2>
          <h2 className="text-xl font-bold">Adventure</h2>
          <h2 className="font-medium text-lg text-gray-500">10 Tours+</h2>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-3xl bg-yellow-400 p-4 rounded-full mb-2">
            <MdFastfood />
          </h2>
          <h2 className="text-xl font-bold">Food</h2>
          <h2 className="font-medium text-lg text-gray-500">10 Tours+</h2>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-3xl bg-yellow-400 p-4 rounded-full mb-2">
            <GiHiking />
          </h2>
          <h2 className="text-xl font-bold">Hiking</h2>
          <h2 className="font-medium text-lg text-gray-500">10 Tours+</h2>
        </div>
      </div>
    </div>
  );
};

export default BrowseByCategory;