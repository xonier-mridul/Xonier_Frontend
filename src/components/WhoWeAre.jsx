import React from "react";
import Counter from "react-countup";
import { useInView } from "react-intersection-observer";
// Icons Start

import { TbSlashes } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";

// Icons End

//Images start
import Partner from "../assets/partner.jpg";

const WhoWeAre = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <>
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <div className="w-1/2 flex flex-col gap-6">
            <h3 className="uppercase tracking-widest  font-semibold text-sm flex items-center gap-2">
              <TbSlashes className="text-xl text-green-400" /> Who We Are
            </h3>
            <h2 className="text-[50px] font-light leading-tight ">
           
            Your Partner in
            <span className="font-bold trans-color"> Building Success</span>
          </h2>
          <p className="para leading-relaxed mb-3">
          Choosing us means partnering with experienced coaches who are dedicated to unlocking your potential. We offer personalized strategies, proven methods, and unwavering support to help you navigate challenges.
          </p>
          <div className="flex items-center w-full border-b-[1px] pb-10 border-neutral-200">
            <div className="w-1/2 flex items-center gap-7">
               <span className="counter-circle ">
                  <h2 className="bg-stone-100 h-28 w-28  rounded-full text-3xl font-bold flex items-center justify-center border-[10px] border-white" >
                    <Counter
                    start={0}
                    end={inView ? 98: 0}
                    duration={3}
                    suffix="%"
                    />
                    </h2>
               </span>
               <h4 className="text-xl font-semibold capitalize">Satisfied Customer</h4>
            </div>
            <div className="w-1/2 flex items-center gap-7">
            
               <span ref={ref} className="counter-circle">
                  <h2  className="bg-stone-100 h-28 w-28 rounded-full text-3xl font-bold flex items-center justify-center border-[10px] border-white" >
                    <Counter
                    start={0}
                    end={inView ? 10 : 0}
                    duration={3}
                    suffix="k"
                    />
                    
                    </h2>
               </span>
               <h4 className="text-xl font-semibold capitalize ">projects deals completed</h4>
            
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Certified Expertise, Professional Excellence</h3>
            <p className="para leading-relaxed mb-2">

            Our team consists of highly trained and certified coaches who stay up-to-date with the latest coaching practices.
            </p>

            <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3 para capitalize"><span><FaCheck className="text-xl text-green-400"/></span>continuous support and accountability</li>
                <li className="flex items-center gap-3 para capitalize"><span><FaCheck className="text-xl text-green-400"/></span>results-driven methods that deliver lasting change</li>
            </ul>

          </div>
          </div>
          <div className="w-1/2 pl-10">
          <figure className="image-anime">
            <img className="partner-img" src={Partner} alt="partner" />
          </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
