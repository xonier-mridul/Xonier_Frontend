import React,{useState, useEffect} from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { BsGraphUpArrow, BsShopWindow } from "react-icons/bs";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { TbSlashes } from "react-icons/tb";

import Video from "../assets/tech.mp4";
import axios from "axios";

const HomeBanner = () => {


   
  const [quoteData, setQuoteData] = useState({
         fname:"",
         lname:"",
         email:"",
         phone:"",
         message:""
  })

  const handleChange = (e)=>{
     const { name, value} = e.target;
     setQuoteData({...quoteData, [name]:value})
  }

  const handleQuerySubmit = async(e) => {
    e.preventDefault();
   try {
      const {data} = await axios.post(`${import.meta.env.VITE_SERVER_URL}quote`, quoteData, {
        headers: {
            "Content-Type": "application/json",
        },
      });
      setQuoteData({
        fname:"",
        lname:"",
        email:"",
        phone:"",
        message:""
      })

      console.log( data.message)
   } catch (error) {
      console.log(error);
   }
  };

  return (
    <>
      <div className="home-banner h-full relative banner-video pt-20 pb-6">
       
        <video
          className="w-full h-full absolute top-0 left-0 z-0 object-cover"
          autoPlay
          loop
          muted
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

       
        <div className="max-w-7xl mx-auto py-28 relative z-10 flex items-center">
          <div className="w-[57%] flex flex-col gap-3">
            <span className="uppercase text-white font-bold tracking-wider text-sm flex items-center gap-2">
             <TbSlashes className="text-xl text-green-400"/> Welcome to Xonier Technology
            </span>
            <h1 className="text-[70px] text-white leading-none pb-5 capitalize">
             With <span className="leading-tight font-bold trans-color">Xonier</span> Execute your next big 
              <span className="font-bold trans-color"> Business Idea</span>
            </h1>
            <div className="flex items-center gap-8">
              <Link
                className="capitalize font-bold flex items-center gap-3 rounded-full btn-bg text-white"
                to={"/buyer"}
              >
                For Buyer <FaArrowRight className="text-lg btn-arrow" />
              </Link>

              <Link
                className="capitalize font-bold flex items-center gap-3 rounded-full btn-bg text-white"
                to={"/supplier"}
              >
                For Supplier <FaArrowRight className="text-lg btn-arrow" />
              </Link>
            </div>
          </div>
          <div className="w-[43%]">
            {/* <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send A Query</h3>
              <form className="flex flex-col gap-4" onSubmit={handleQuerySubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className="w-full outline-none border-b-[1px] border-neutral-200 py-3"
                    type="text"
                    name="fname"
                    value={quoteData.fname}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                  <input
                    className="w-full outline-none border-b-[1px] border-neutral-200 py-3"
                    type="text"
                    name="lname"
                    value={quoteData.lname}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    className="w-full outline-none border-b-[1px] border-neutral-200 py-3"
                    name="email"
                    value={quoteData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                  />
                  <input
                    type="number"
                    className="w-full outline-none border-b-[1px] border-neutral-200 py-3"
                    name="phone"
                    value={quoteData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                </div>
                <textarea
                  name="message"
                  className="w-full outline-none border-b-[1px] border-neutral-200 py-3"
                  id="message"
                  value={quoteData.message}
                  onChange={handleChange}
                  placeholder="Query"
                  rows={4}
                ></textarea>
                <button
                  className="capitalize font-bold flex items-center gap-3 rounded-full w-fit  btn-bg text-white mt-5"
                  type="submit"
                >
                  Submit Query <FaArrowRight className="text-lg btn-arrow" />
                </button>
              </form>
            </div> */}
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-5 items-center relative z-10">
          
            <div
           
              className="banner-box relative flex flex-col gap-4 pt-8 pr-12 border-t-2 border-[#FFFFFF33]"
            >
              <BsGraphUpArrow className="text-3xl text-white" />
              <h3 className="text-white"> 
                Leading global software solution
              </h3>
            </div>
            <div
           
              className="banner-box relative flex flex-col gap-4 pt-8 pr-12 border-t-2 border-[#FFFFFF33]"
            >
              <BsShopWindow className="text-3xl text-white" />
              <h3 className="text-white"> 
              B2B SaaS-enabled marketplace
              </h3>
            </div>
            <div
           
              className="banner-box relative flex flex-col gap-4 pt-8 pr-12 border-t-2 border-[#FFFFFF33]"
            >
              <LuBriefcaseBusiness className="text-3xl text-white" />
              <h3 className="text-white"> 
              Holistic Life and Business Coaching.
              </h3>
            </div>
            <div
           
              className="banner-box relative flex flex-col gap-4 pt-8 pr-12 border-t-2 border-[#FFFFFF33]"
            >
              <FaRegUser className="text-3xl text-white" />
              <h3 className="text-white"> 
              Flexible Client Centered business Program.
              </h3>
            </div>
            <div
           
              className="banner-box relative flex flex-col gap-4 pt-8 pr-12 border-t-2 border-[#FFFFFF33]"
            >
              <BiSupport className="text-3xl text-white" />
              <h3 className="text-white"> 
              Expert Guidance with Ongoing Support.
              </h3>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
