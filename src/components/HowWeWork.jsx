import React from 'react'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Icons Start
import { TbSlashes } from "react-icons/tb";
import { FaCheck, FaArrowRight  } from "react-icons/fa6";

import iconsOne from "../assets/icon-how-work-1.svg"
import iconsTwo from "../assets/icon-how-work-2.svg"
import iconsThree from "../assets/icon-how-work-3.svg"
import iconsFour from "../assets/icon-how-work-4.svg"
import AsteriskIcon from "../assets/asterisk-icon.svg"
// Icons End

const HowWeWork = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 8000,
        pauseOnHover: false,
        cssEase: "linear"
      };
  return (
    <>
      <div className='py-24 bg-[#F2F1ED] flex flex-col gap-16'>
        <div className="max-w-7xl mx-auto flex items-center">
            <div className="w-1/2 flex flex-col gap-5">
                 <h3 className="uppercase tracking-widest  font-semibold text-sm flex items-center gap-2  "><TbSlashes className="text-xl text-green-400 " />How We work </h3>
                 <h2 className="text-[50px] font-light leading-tight "> Grow Your Business with Construction Material <span className="font-bold trans-color"> Financing from Bildkart</span></h2>
            </div>
            <div className="w-1/2 flex justify-end">
                 <Link to={"/contact"} className="capitalize font-bold flex items-center gap-3 rounded-full btn-bg text-white w-fit" > Get all touch <FaArrowRight className="text-lg btn-arrow" /></Link>
            </div>

        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
            <div className='flex flex-col w-full service-item'>
                <div className='pb-4 border-b-[1px] border-neutral-200'>
                <div className='icon-box '>
                    <img src={iconsOne} alt="" />
                </div>
                </div>
                <h2 className='text-2xl pt-5 pb-4 font-bold'>01. Builders go to Buildstock</h2>
                <p className="para leading-relaxed">
                One on one sessions to achieve personal goals and enhance self awareness. </p>
            </div>
            <div className='flex flex-col w-full service-item'>
                <div className='pb-4 border-b-[1px] border-neutral-200'>
                <div className='icon-box '>
                    <img src={iconsTwo} alt="" />
                </div>
                </div>
                <h2 className='text-2xl pt-5 pb-4 font-bold'>02. Approval Form (10-15 minutes)</h2>
                <p className="para leading-relaxed">
                One on one sessions to achieve personal goals and enhance self awareness. </p>
            </div>
            <div className='flex flex-col w-full service-item'>
                <div className='pb-4 border-b-[1px] border-neutral-200'>
                <div className='icon-box '>
                    <img src={iconsThree} alt="" />
                </div>
                </div>
                <h2 className='text-2xl pt-5 pb-4 font-bold'>03. 1-2 Days Approval Process</h2>
                <p className="para leading-relaxed">One on one sessions to achieve personal goals and enhance self awareness. </p>
            </div>
            <div className='flex flex-col w-full service-item'>
                <div className='pb-4 border-b-[1px] border-neutral-200'>
                <div className='icon-box '>
                    <img src={iconsFour} alt="" />
                </div>
                </div>
                <h2 className='text-2xl pt-5 pb-4 font-bold'>04. Credit Issued to buyer</h2>
                <p className="para leading-relaxed">One on one sessions to achieve personal goals and enhance self awareness. </p>
            </div>

        </div>
        <div className='w-full overflow-hidden pt-10'>
        <Slider {...settings}>
        <div>
          <h3 className='border-text  tracking-wider'> <img src={AsteriskIcon} alt="asterisk icon" /> easy access</h3>
        </div>
        <div>
          <h3 className='border-text tracking-wider'> <img src={AsteriskIcon} alt="asterisk icon" />fast responsce</h3>
        </div>
        <div>
          <h3 className='border-text tracking-wider'> <img src={AsteriskIcon} alt="asterisk icon" />great deals</h3>
        </div>
        
      </Slider>
        </div>

      </div>
    </>
  )
}

export default HowWeWork
