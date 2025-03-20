import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

//Icon & Images start
import SupplyImg from "../assets/supplyChain.jpg";
import Engineer from "../assets/engineer.jpg";
import Experience from "../assets/company-experience.svg";
import Bulb from "../assets/bulb.svg"
import ClientOne from "../assets/client-1.jpg"
import ClientTwo from "../assets/satisfy-2.jpg"
import ClientThree from "../assets/satisfy-3.jpg"
import ClientFour from "../assets/satisfy-4.jpg"
import ClientFive from "../assets/satisfy-5.jpg"

import { TbSlashes } from "react-icons/tb";
import { FaCheck, FaArrowRight  } from "react-icons/fa6";
// Icons & Images End

const AboutSection = () => {

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  
  return (
    <>
      <div className="max-w-7xl mx-auto py-24 flex items-center gap-5">
        <div className="w-1/2 px-20 pb-16 relative">
          <div className="about-banner">
            <figure className="image-anime">
              <img src={SupplyImg} alt="about image" />
            </figure>
          </div>
          <div className="about-banner-small">
            <figure className="image-anime">
              <img src={Engineer} alt="" />
            </figure>
          </div>
          <div className="absolute w-44 top-6 left-6 p-5 rounded-xl background flex flex-col gap-3 text-white left-right">
            <img className="w-12" src={Experience} alt="experience" />
            <h3 className="text-xl font-semibold text-white"> 10+ year of experience </h3>
          </div>
          <h4 className="company-review z-10 text-teal-950 tracking-widest font-bold uppercase ">
          5200+ five star reviews
          </h4 >
        </div>
        <div className="w-1/2 flex flex-col gap-6 ml-2">
          <h3 className="uppercase tracking-widest  font-semibold text-sm flex items-center gap-2">
           
            <TbSlashes className="text-xl text-green-400" /> About us{" "}
          </h3>
          <motion.h2 initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, 
    ease: [0.25, 0.1, 0.25, 1] }}
  viewport={{ once: true }} className="text-[50px] font-light leading-tight ">
           
            Revolutionizing Construction{" "}
            <span className="font-bold trans-color">Supply Chains</span>{" "}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{duration: 1.2, 
    ease: [0.25, 0.1, 0.25, 1],}}
  viewport={{ once: true }} className="para leading-relaxed mb-3">
            At BildKart, we empower the construction industry by connecting
            buyers and sellers through a seamless marketplace. Our platform
            simplifies procurement, optimizes supply chains, and drives
            innovation, ensuring efficiency and growth for businesses worldwide.
          </motion.p>
          <motion.ul initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ 
    duration: 1.2, 
    ease: [0.25, 0.1, 0.25, 1],
   }}
  viewport={{ once: true }} className="flex flex-col gap-5">
            <li className="flex items-center gap-3 text-teal-950 font-semibold text-xl capitalize">
              <span className="trans-text">
                <FaCheck /> 
              </span>
              Simplifies procurement for construction materials & services.
            </li>
            <li className="flex items-center gap-3 text-teal-950 font-semibold text-xl capitalize">
              <span className="trans-text">
                <FaCheck /> 
              </span>
              Connects buyers and sellers to streamline supply chains.
            </li>
          </motion.ul>
          <div className="flex items-center py-7 pb-10 border-b-[1px] border-[#DFE1DE]">
            <div className="w-1/2">
                  <div className="">
                  <div className="client-image">
                    <figure className="image-anime">
                            <img src={ClientOne} alt=" client one " />
                    </figure>
                  </div>
                  <div className="client-image">
                    <figure className="image-anime">
                            <img src={ClientTwo} alt=" client one " />
                    </figure>
                  </div>
                  <div className="client-image">
                    <figure className="image-anime">
                            <img src={ClientThree} alt=" client one " />
                    </figure>
                  </div>
                  <div className="client-image">
                    <figure className="image-anime">
                            <img src={ClientFour} alt=" client one " />
                    </figure>
                  </div>
                  <div className="client-image">
                    <figure className="image-anime">
                            <img src={ClientFive} alt=" client one " />
                    </figure>
                  </div>
                  </div>
                  <p className="para pt-2">Join our <span className="text-cyan-950"> 5000+ </span> satisfied client</p>
            </div>
            <div className="w-1/2 flex items-center gap-4">
            <span className="main-bg h-14 w-14 rounded-full flex items-center justify-center">
                <img className="h-8 w-8" src={Bulb} alt="" />
            </span>
            <div className="flex flex-col gap-2">
                <h3 className="text-teal-950 font-semibold text-xl">Creative Result</h3>
                <p className="para">Award Winning</p>
            </div>
               
            </div>

          </div>
          <div className="flex mt-4">
            <Link to={"/contact"} className="capitalize font-bold flex items-center gap-3 rounded-full btn-bg text-white" >
             Get in touch <FaArrowRight className="text-lg btn-arrow" /></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
