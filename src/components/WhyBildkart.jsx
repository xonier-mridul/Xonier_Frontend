import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";

// Media Start

import Growth from "../assets/company-growth.jpg"
import { TbSlashes } from "react-icons/tb";
import { FaCheck, FaArrowRight } from "react-icons/fa6";

// Media End

const WhyBildkart = () => {
  
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <>
      <div className='max-w-7xl mx-auto py-24 flex-col flex gap-16'>
        <div className="flex items-center gap-14">
            <div className="w-[42%]">
           <figure className='image-anime'>
            <img className='growth-img' src={Growth} alt="" />

           </figure>
            </div>
            <div className='w-[58%] flex flex-col gap-5'>
                <h3 className="uppercase tracking-widest  font-semibold text-sm flex items-center gap-2  "><TbSlashes className="text-xl text-green-400 " />Bildkart </h3>
                <h2 className="text-[50px] font-light leading-tight "> Why Bildkart is the Leading Marketplace for <span className="font-bold trans-color"> Construction Materials</span></h2>
                
                <p className="para leading-relaxed pb-6">Bildkart's digital procurement process helps builders and suppliers save time, money, and risk.</p>

                <div>
                <Link to={"/quote"} className="capitalize font-bold flex items-center gap-3 rounded-full btn-bg text-white w-fit" > Get Started <FaArrowRight className="text-lg btn-arrow" /></Link>
                </div>
            </div>

        </div>
        <div className='grid grid-cols-4 gap-10'>
            <div className='flex flex-col gap-3'>
                <h2  ref={ref} className='text-4xl font-bold counter-color'>
                <CountUp 
                start={0}
                end={inView ? 42 : 0}
                duration={3}
                suffix='%' />
                </h2>
                <h3 className='text-[22px] font-bold capitalize'>Builders Save on order</h3>
                <p className='para leading-relaxed'>Builders Save on order 42% money on their orders</p>

            </div>
            <div ref={ref} className='flex flex-col gap-3'>
                <h2 className='text-4xl font-bold counter-color'>
                <CountUp 
                start={0}
                end={inView ? 5 : 0}
                duration={3}
                suffix='x' />
                </h2>
                <h3 className='text-[22px] font-bold capitalize'>Faster Delivery</h3>
                <p className='para leading-relaxed'>Builder get 5x faster delivery</p>

            </div>
            <div ref={ref} className='flex flex-col gap-3'>
                <h2 className='text-4xl font-bold counter-color'>
                <CountUp 
                start={0}
                end={inView ? 6 : 0}
                duration={3} /> to&nbsp; 
                <CountUp 
                start={ 0}
                end={inView ? 24 : 0}
                duration={3}
                suffix='x' />
                </h2>
                <h3 className='text-[22px] font-bold capitalize'>Receiveing Better Net Terms</h3>
                <p className='para leading-relaxed'>Builder Receiveing upto 6x to 24x better net terms</p>

            </div>
            <div ref={ref} className='flex flex-col gap-3'>
                <h2 className='text-4xl font-bold counter-color'>
                <CountUp 
                start={0}
                end={inView ? 5000 : 0}
                duration={3}
                suffix='+' />
                </h2>
                <h3 className='text-[22px] font-bold capitalize'>satisfied client</h3>
                <p className='para leading-relaxed'>We have 5k plus satisfied client</p>

            </div>

        </div>

      </div>
    </>
  )
}

export default WhyBildkart
