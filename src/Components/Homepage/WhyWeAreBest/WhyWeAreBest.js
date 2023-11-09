import React from "react";
import styles from "./WhyWeAreBest.module.css";

import circle from "../../../Assets/WhyWeAreBest/circle.png";
import travel1 from "../../../Assets/WhyWeAreBest/travel1.webp";
import travel2 from "../../../Assets/WhyWeAreBest/travel2.jpg";
import travel3 from "../../../Assets/WhyWeAreBest/travel3.jpg";

const WhyWeAreBest = () => {
  return (
    <div className="mx-4 mb-[200px]">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex justify-center">
          <div>
            <h2 className={`${styles.weAreBest} text-2xl text-sky-800 mb-4`}>
              Why We Are Best
            </h2>

            <h2 className="text-4xl font-bold mb-10">Keep Things Flexible</h2>

            <div className="flex mb-20">
              <h2 className="border-2 border-sky-800 text-sky-800 text-lg font-semibold rounded-xl py-4 px-8 hover:bg-sky-800 hover:border-transparent hover:text-white duration-300 ease-in-out hover:cursor-pointer">
                Contact Us
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="relative flex flex-col gap-3">
                <img
                  src={circle}
                  className="absolute top-0 w-[40px] z-30"
                  alt=""
                />
                <h2
                  className={`${styles.weAreBest} text-3xl font-semibold z-40`}
                >
                  120+
                </h2>
                <h2 className="text-gray-500 font-medium">Total Destination</h2>
              </div>

              <div className="relative flex flex-col gap-3">
                <img
                  src={circle}
                  className="absolute top-0 w-[40px] z-30"
                  alt=""
                />
                <h2
                  className={`${styles.weAreBest} text-3xl font-semibold z-40`}
                >
                  12k+
                </h2>
                <h2 className="text-gray-500 font-medium">Total Travelers</h2>
              </div>

              <div className="relative flex flex-col gap-3">
                <img
                  src={circle}
                  className="absolute top-0 w-[40px] z-30"
                  alt=""
                />
                <h2
                  className={`${styles.weAreBest} text-3xl font-semibold z-40`}
                >
                  500+
                </h2>
                <h2 className="text-gray-500 font-medium">Travel Packages</h2>
              </div>

              <div className="relative flex flex-col gap-3">
                <img
                  src={circle}
                  className="absolute top-0 w-[40px] z-30"
                  alt=""
                />
                <h2
                  className={`${styles.weAreBest} text-3xl font-semibold z-40`}
                >
                  7k+
                </h2>
                <h2 className="text-gray-500 font-medium">Positive Reviews</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src={travel1} className="bg-white p-1 w-[400px]" alt="" />
          <img
            src={travel2}
            className="bg-white p-1 w-[300px] absolute top-[-50px] right-[220px]"
            alt=""
          />
          <img
            src={travel3}
            className="bg-white p-1 w-[500px] absolute top-[180px] left-[280px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhyWeAreBest;
