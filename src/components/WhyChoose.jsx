import React from 'react'
import { TbSlashes } from "react-icons/tb";
import { FaCheck, FaArrowRight  } from "react-icons/fa6";
import { Link } from 'react-router-dom';

//Images start
import ServiceOne from "../assets/icon-services-1.svg";
import ServiceTwo from "../assets/icon-services-2.svg";
import ServiceThree from "../assets/icon-services-3.svg";
import ServiceFour from "../assets/icon-services-4.svg";
import ServiceFive from "../assets/icon-services-5.svg";
import ServiceSix from "../assets/icon-services-6.svg";

//Images End

const WhyChoose = () => {
  return (
    <>
      <div className='bg-teal-950 py-24 why-choose-banner'>
        <div className='max-w-7xl mx-auto flex  gap-20'>
            <div className='w-[42%] '>
              <div className='flex flex-col gap-6 sticky top-24'>
               <h3 className="uppercase tracking-widest  font-semibold text-sm flex items-center gap-2 text-white ">
                         
                           <TbSlashes className="text-xl text-green-400" /> Why Choose bildkart?
               </h3>
               <h2 className="text-[50px] font-light leading-tight text-white">
 
               Core Features That Set Us
            <span className="font-bold trans-color"> Apart</span>
          </h2>
          <p className="text-white leading-relaxed mb-3">
            At BildKart, we empower the construction industry by connecting
            buyers and sellers through a seamless marketplace. Our platform
            simplifies procurement, optimizes supply chains, and drives
            innovation, ensuring efficiency and growth for businesses worldwide.
          </p>
          <div className='flex'>
          <Link to={"/contact"} className="capitalize font-bold flex items-center gap-3 rounded-full btn-bg text-white" >
             Get in touch <FaArrowRight className="text-lg btn-arrow" /></Link>
             </div>
             </div>
            </div>
            <div className='w-[58%] '>
              <div className='grid grid-cols-2 gap-12 pb-14 border-b-[1px] border-[#FFFFFF33]'>
              <div className='service-item flex flex-col gap-3'>
                <div className='icon-box'>
                  <img src={ServiceOne} alt="Service One" />
                </div>
                  <h3 className='text-white text-2xl font-semibold'>Centralized Procurement</h3>
                  <p className='text-white'>Connects professionals with a vast network of suppliers.</p>
              </div>
              <div className=' service-item flex flex-col gap-3'>
                <div className='icon-box'>
                  <img src={ServiceTwo} alt="Service One" />
                </div>
                  <h3 className='text-white text-2xl font-semibold'>Streamlined Ordering</h3>
                  <p className='text-white'>Simplifies the procurement process from selection to order generation.</p>
              </div>
              <div className=' service-item flex flex-col gap-3'>
                <div className='icon-box'>
                  <img src={ServiceThree} alt="Service One" />
                </div>
                  <h3 className='text-white text-2xl font-semibold'>Real-Time Inventory Tracking</h3>
                  <p className='text-white'>Ensures timely material availability.</p>
              </div>
              <div className=' service-item flex flex-col gap-3'>
                <div className='icon-box'>
                  <img src={ServiceFour} alt="Service One" />
                </div>
                  <h3 className='text-white text-2xl font-semibold'>Cost Management Tools</h3>
                  <p className='text-white'>Tracks expenses and helps control costs.</p>
              </div>
              <div className=' service-item flex flex-col gap-3'>
                <div className='icon-box'>
                  <img src={ServiceFive} alt="Service One" />
                </div>
                  <h3 className='text-white text-2xl font-semibold'>Data Analytics</h3>
                  <p className='text-white'>Offers insights for informed purchasing decisions.</p>
              </div>
              <div className=' service-item flex flex-col gap-3'>
                <div className='icon-box'>
                  <img src={ServiceSix} alt="Service One" />
                </div>
                  <h3 className='text-white text-2xl font-semibold'>Document Management</h3>
                  <p className='text-white'>Integrates with existing accounting and project management systems</p>
              </div>
              </div>
              <div className='flex items-center gap-5 text-white pt-8 service-footer'>
                <span className='anime-bg px-5 py-1'>free</span> <p>Let's make something great work together. <Link className='text-green-400 capitalize underline font-bold hover:text-teal-600 transition-all duration-500' to={""}> get free quote </Link></p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default WhyChoose
