import React from "react";
import { TbSlashes } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaCheck, FaArrowRight } from "react-icons/fa6";
import TeamOne from "../assets/team-4.jpg";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const Team = () => {
  return (
    <>
      <div className=" bg-stone-100 py-24">
        <div className=" max-w-7xl mx-auto flex items-center pb-14">
          <div className="w-1/2 flex flex-col gap-5">
            <h3 className="uppercase tracking-widest  font-semibold text-sm flex items-center gap-2  ">
              <TbSlashes className="text-xl text-green-400 " />
              Our Team{" "}
            </h3>
            <h2 className="text-[50px] font-light leading-tight ">
              {" "}
              Meet the People Who{" "}
              <span className="font-bold trans-color"> Make It Happen</span>
            </h2>
          </div>
          <div className="w-1/2 flex justify-end">
            <Link
              to={"/contact"}
              className="capitalize font-bold flex items-center gap-3 rounded-full btn-bg text-white w-fit"
            >
              {" "}
              Get all touch <FaArrowRight className="text-lg btn-arrow" />
            </Link>
          </div>
        </div>
        <div className=" max-w-7xl mx-auto grid grid-cols-3 gap-10">
          <div className="flex items-center justify-center flex-col gap-3 relative team-box">
            <div className="team-image overflow-hidden relative">
              <figure className="image-anime pb-4">
                <img className="rounded-2xl team-image" src={TeamOne} alt="" />
              </figure>
              <ul className="team-social absolute left-1/2 -translate-x-1/2 flex justify-center gap-3  backdrop-blur-xl p-2 rounded-xl bg-[#00000024]">
                <li>
                  <Link
                    className="h-10 w-10 flex items-center justify-center text-white hover:text-green-400 rounded-full border-[1px] border-white hover:border-green-400 hover:scale-105  transition-all duration-300"
                    to={"/"}
                  >
                    {" "}
                    <FaLinkedinIn className="text-lg" />
                  </Link>
                </li>
                <li>
                  <Link
                    className="h-10 w-10 flex items-center justify-center text-white hover:text-green-400 rounded-full border-[1px] border-white hover:border-green-400 hover:scale-105  transition-all duration-300"
                    to={"/"}
                  >
                    {" "}
                    <FaInstagram className="text-xl" />
                  </Link>
                </li>
                <li>
                  <Link
                    className="h-10 w-10 flex items-center justify-center text-white hover:text-green-400 rounded-full border-[1px] border-white hover:border-green-400 hover:scale-105  transition-all duration-300"
                    to={"/"}
                  >
                    {" "}
                    <FaFacebookF className="text-xl" />
                  </Link>
                </li>
              </ul>
            </div>
            <h3 className="font-bold text-2xl"> Vikrant Sharma</h3>
            <span className="para"> Co-founder & CEO </span>
          </div>
          <div className="flex items-center justify-center flex-col gap-3 relative team-box">
            <div className="team-image overflow-hidden relative">
              <figure className="image-anime pb-4">
                <img className="rounded-2xl team-image" src={TeamOne} alt="" />
              </figure>
              <ul className="team-social absolute left-1/2 -translate-x-1/2 flex justify-center gap-3  backdrop-blur-xl p-2 rounded-xl bg-[#00000024]">
                <li>
                  <Link
                    className="h-10 w-10 flex items-center justify-center text-white hover:text-green-400 rounded-full border-[1px] border-white hover:border-green-400 hover:scale-105  transition-all duration-300"
                    to={"/"}
                  >
                    {" "}
                    <FaLinkedinIn className="text-lg" />
                  </Link>
                </li>
                <li>
                  <Link
                    className="h-10 w-10 flex items-center justify-center text-white hover:text-green-400 rounded-full border-[1px] border-white hover:border-green-400 hover:scale-105  transition-all duration-300"
                    to={"/"}
                  >
                    {" "}
                    <FaInstagram className="text-xl" />
                  </Link>
                </li>
                <li>
                  <Link
                    className="h-10 w-10 flex items-center justify-center text-white hover:text-green-400 rounded-full border-[1px] border-white hover:border-green-400 hover:scale-105  transition-all duration-300"
                    to={"/"}
                  >
                    {" "}
                    <FaFacebookF className="text-xl" />
                  </Link>
                </li>
              </ul>
            </div>
            <h3 className="font-bold text-2xl"> Jagdish Kumar </h3>
            <span className="para"> Co-founder & Mentor </span>
          </div>
          <div className="flex items-center justify-center flex-col gap-3 relative team-box">
            <div className="team-image overflow-hidden relative">
              <figure className="image-anime pb-4">
                <img className="rounded-2xl team-image" src={TeamOne} alt="" />
              </figure>
              <ul className="team-social absolute left-1/2 -translate-x-1/2 flex justify-center gap-3  backdrop-blur-xl p-2 rounded-xl bg-[#00000024]">
                <li>
                  <Link
                    className="h-10 w-10 flex items-center justify-center text-white hover:text-green-400 rounded-full border-[1px] border-white hover:border-green-400 hover:scale-105  transition-all duration-300"
                    to={"/"}
                  >
                    {" "}
                    <FaLinkedinIn className="text-lg" />
                  </Link>
                </li>
                <li>
                  <Link
                    className="h-10 w-10 flex items-center justify-center text-white hover:text-green-400 rounded-full border-[1px] border-white hover:border-green-400 hover:scale-105  transition-all duration-300"
                    to={"/"}
                  >
                    {" "}
                    <FaInstagram className="text-xl" />
                  </Link>
                </li>
                <li>
                  <Link
                    className="h-10 w-10 flex items-center justify-center text-white hover:text-green-400 rounded-full border-[1px] border-white hover:border-green-400 hover:scale-105  transition-all duration-300"
                    to={"/"}
                  >
                    {" "}
                    <FaFacebookF className="text-xl" />
                  </Link>
                </li>
              </ul>
            </div>
            <h3 className="font-bold text-2xl"> Vikrant Sharma </h3>
            <span className="para"> Co-founder </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
