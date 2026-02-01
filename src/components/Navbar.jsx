import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="container sm:flex sm:justify-between sm:items-center py-2.5 sm:py-3.5 md:py-5 lg:py-6.5">
      <div className="w-24 sm:w-32 md:w-40">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="hidden sm:flex justify-between items-center">
        <div>
        <ul className="nav-ul">
          <li className="hover:text-primary">Home</li>
          <li className="hover:text-primary">About</li>
          <li className="hover:text-primary">Shop</li>
          <li className="hover:text-primary">Pages</li>
          <li className="hover:text-primary">Blog</li>
          <li className="hover:text-primary">Contact</li>
        </ul>
      </div>
      <div className="flex gap-2 lg:gap-4.5 ml-7.75">
        <div className="icons">
          <FaRegHeart className="w-3 lg:w-5" />
        </div>
        <div className="icons">
          <IoPersonOutline className="w-3 lg:w-5" />
        </div>
        <div className="icons">
          <IoCartOutline className="w-3 lg:w-5" />
        </div>
      </div>
      <div className="ml-2.5 lg:ml-[45.8px] ">
        <button className="btn">GET A QUATE</button>
      </div>
      </div>
      <div className="sm:hidden">
        <IoMenu className="absolute top-2 right-2 text-2xl"/>
        <div className="bg-[#648d03] text-white mt-2 py-2">
        <ul className="nav-ul block">
          <li className="nav-list">Home</li>
          <li className="nav-list">About</li>
          <li className="nav-list">Shop</li>
          <li className="nav-list">Pages</li>
          <li className="nav-list">Blog</li>
          <li className="nav-list">Contact</li>
        </ul>
        <div className="flex gap-2 lg:gap-4.5 ml-7.75 mt-2">
        <div className="icons">
          <FaRegHeart className="w-4" />
        </div>
        <div className="icons">
          <IoPersonOutline className="w-4" />
        </div>
        <div className="icons">
          <IoCartOutline className="w-4" />
        </div>
      </div>
      <div className="ml-8 lg:ml-[45.8px] mt-3">
        <button className="btn">GET A QUATE</button>
      </div>
      </div>
      
      </div>
      
      
    </div>
  );
};

export default Navbar;
