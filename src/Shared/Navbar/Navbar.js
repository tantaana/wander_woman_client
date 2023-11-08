import React from "react";
import logo from "../../Assets/Navbar/logo.png";
import { Link, NavLink } from "react-router-dom";

import { AiOutlineTwitter, AiOutlineGoogle } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoPinterestAlt } from "react-icons/bi";
import { GrSearch } from "react-icons/gr";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  const activeLinks = ({ isActive }) => {
    return {
      color: isActive ? "#ea580c" : "",
    };
  };

  return (
    <div className="border border-black px-10 py-2">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-4">
          <Link to="tel:+8801628672468">
            <h2 className="text-sm font-medium hover:text-orange-600 duration-300 ease-in-out">
              (+880) 1628672468
            </h2>
          </Link>

          <h2 className="text-sm font-medium">|</h2>

          <Link to="mailto:wanderwoman.bd@gmail.com">
            <h2 className="text-sm font-medium hover:text-orange-600 duration-300 ease-in-out">
              wanderwoman.bd@gmail.com
            </h2>
          </Link>
        </div>

        <div className="flex justify-center items-center gap-5">
          <AiOutlineTwitter className="text-xl hover:text-orange-400 duration-300 ease-in-out hover:cursor-pointer" />
          <BiLogoLinkedin className="text-xl hover:text-orange-400 duration-300 ease-in-out hover:cursor-pointer" />
          <AiOutlineGoogle className="text-xl hover:text-orange-400 duration-300 ease-in-out hover:cursor-pointer" />
          <BiLogoPinterestAlt className="text-xl hover:text-orange-400 duration-300 ease-in-out hover:cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-4">
        <div className="flex justify-start">
          <NavLink to="/" className="duration-300 ease-in-out hover:scale-105">
            <img src={logo} className="w-[110px]" alt="" />
          </NavLink>
        </div>

        <div className="col-span-2 flex justify-center items-center gap-10">
          <NavLink
            to="/"
            style={activeLinks}
            className="text-lg font-semibold hover:cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
          >
            Home
          </NavLink>

          <NavLink
            to="/tour"
            style={activeLinks}
            className="text-lg font-semibold hover:cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
          >
            Tour
          </NavLink>

          <NavLink
            to="/destination"
            style={activeLinks}
            className="text-lg font-semibold hover:cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
          >
            Destination
          </NavLink>

          <NavLink
            to="/blog"
            style={activeLinks}
            className="text-lg font-semibold hover:cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
          >
            Blog
          </NavLink>

          <NavLink
            to="/pages"
            style={activeLinks}
            className="text-lg font-semibold hover:cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
          >
            Pages
          </NavLink>

          <NavLink
            to="/contact"
            style={activeLinks}
            className="text-lg font-semibold hover:cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
          >
            Contact
          </NavLink>
        </div>

        <div className="flex items-center justify-end gap-4">
          <GrSearch className="text-2xl hover:cursor-pointer" />

          <Link
            to="/login"
            className="flex items-center gap-2 hover:text-orange-600 duration-300 ease-in-out"
          >
            <FiUser className="text-2xl" />
            <h2 className="text-lg font-semibold">Login / Signup</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
