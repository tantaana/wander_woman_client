import React from "react";
import styles from "./Footer.module.css";

import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

import logo from "../../Assets/Navbar/logo.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="xl:grid xl:grid-cols-3 gap-4 px-6 sm:px-24 xl:px-32 py-20 xl:py-32">
        <div className="mb-14 xl:flex justify-center">
          <div>
            <img src={logo} className="w-[120px] mb-10" alt="" />

            <h2 className={`${styles.footerText} text-white mb-1`}>
              Need any help?
            </h2>
            <h2 className="text-white text-xl font-semibold mb-6">
              Call Us: <span className="text-yellow-400">(+880)1628672468</span>
            </h2>

            <h2 className="text-white mb-2">
              223, Firinghee Bazar, Chittagong, Bangladesh
            </h2>
            <h2 className="text-white mb-8">wanderwoman.bd@gmail.com</h2>

            <div className="flex items-center gap-4">
              <FaFacebookSquare className="text-white text-2xl hover:cursor-pointer" />
              <BsTwitter className="text-white text-2xl hover:cursor-pointer" />
              <FaLinkedinIn className="text-white text-2xl hover:cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="mb-14 xl:flex justify-center items-center xl:border-l xl:border-r xl:border-gray-600">
          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col items-start">
              <h2 className={`${styles.footerText} text-white mb-6`}>
                Company
              </h2>

              <h2 className="text-white mb-3 hover:cursor-pointer">About Us</h2>
              <h2 className="text-white mb-3 hover:cursor-pointer">
                Contact Us
              </h2>
              <h2 className="text-white mb-3 hover:cursor-pointer">
                Travel Guides
              </h2>
              <h2 className="text-white mb-3 hover:cursor-pointer">
                Data Policy
              </h2>
            </div>

            <div className="flex flex-col items-start">
              <h2 className={`${styles.footerText} text-white mb-6`}>
                Top Destination
              </h2>

              <h2 className="text-white mb-3 hover:cursor-pointer">
                Las Vegas
              </h2>
              <h2 className="text-white mb-3 hover:cursor-pointer">New York</h2>
              <h2 className="text-white mb-3 hover:cursor-pointer">
                San Francisco
              </h2>
              <h2 className="text-white mb-3 hover:cursor-pointer">Hawaii</h2>
            </div>
          </div>
        </div>

        <div className="xl:flex justify-center items-center">
          <div className="flex flex-col items-start">
            <h2 className={`${styles.footerText} text-white mb-6`}>
              Sign Up Newsletter
            </h2>

            <input
              type="email"
              placeholder="Enter email.."
              className="input input-ghost w-full max-w-xs bg-white mb-4"
            />

            <h2 className="text-white font-semibold bg-yellow-600 hover:bg-yellow-800 duration-300 ease-in-out px-6 py-2 rounded-lg hover:cursor-pointer">
              Submit
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-yellow-400 w-full h-[3px]"></div>
    </div>
  );
};

export default Footer;
