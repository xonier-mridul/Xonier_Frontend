import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import TestimonialImg from "../assets/testimonial-img-1.jpg"
import Google from "../assets/google.svg"
import CountUp from 'react-countup';
import Quote from "../assets/quote.svg";
import { useInView } from "react-intersection-observer";

// Icon Start

import { FaStar } from "react-icons/fa";
import { TbSlashes } from "react-icons/tb";
import TestimonialOne from "../assets/testimonial-1.svg"
import TestimonialTwo from "../assets/testimonial-2.svg"  
import TestimonialThree from "../assets/testimonial-3.svg"
import TestimonialFour from "../assets/testimonial-4.svg"

// Icon End

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const [testimonialData, setTestimonialData] = useState([])

  useEffect( () => {
      axios.get(`${import.meta.env.VITE_SERVER_URL}testimonial`)
      .then(res=>setTestimonialData(res.data))
      .catch(err=>console.log(err.message))
      console.log(testimonialData)
    
  }, [])
  

  return (
    <>
      <div className="py-24 bg-teal-950 testimonial-banner flex flex-col gap-20">
        <div className="max-w-7xl mx-auto flex gap-5">
          <div className="w-[33%]">
            <div className="flex flex-col gap-6 sticky top-24">
              <h3 className="uppercase tracking-widest  font-semibold text-sm flex items-center text-white gap-2">
                <TbSlashes className="text-xl text-green-400" />
                Testimonial
              </h3>
              <h2 className="text-[50px] font-light leading-tight text-white w-full">
               
                Real success stories from our  
                <span className="font-bold trans-color"> business clients
                </span>
              </h2>
            </div>
          </div>
          <div className="w-[67%]">
            <Slider {...settings}>
              {testimonialData.map((e)=>(
                <>
                <div key={e._id} className="flex items-center gap-8">
                     <div className="w-1/2 ">
                     <figure className="image-anime">
                     <img className="testimonial-img" src={TestimonialImg} alt="" />
                     </figure>
                     </div>
                     <div className="w-1/2 flex flex-col gap-6">
                      <div className="flex justify-between pb-3">
                       <img src={Google} alt="google icon" />
                       <img src={Quote} alt="quote" />
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: `${e.rating}` }).map((_, index) => (
                          <FaStar key={index} className="text-green-400 text-lg" />
                        ))}
                      </div>
                     <p className="text-white font-semibold text-lg">{e.data}</p>
                     <div className="flex flex-col gap-2">
                        <h3 className="text-white text-2xl font-semibold">{e.name}</h3>
                        <h4 className="text-white">{e.designation}</h4>
                     </div>
                     </div>
                </div>
                </>
              )) }
            </Slider>
          </div>
        </div>
        <div className="grid grid-cols-4 max-w-7xl mx-auto gap-7">
          <div className=" bg-[#ffffff13] p-8 rounded-xl w-full">
            <div className="pb-4 border-b-[1px] border-[#FFFFFF33] flex justify-center">
             <img className="w-44 h-9" src={TestimonialOne} alt="one" />
            </div>
            <p ref={ref} className="text-white font-medium text-center pt-4"><span className="text-green-400">
              <CountUp
            start={0}
            end={inView ? 982 : 0}
            duration={3}
            suffix="+ "
            /></span> Trustpilot 4.8 start reviews</p>
          </div>
          <div className=" bg-[#ffffff13] p-8 rounded-xl w-full">
            <div className="pb-4 border-b-[1px] border-[#FFFFFF33] flex justify-center">
             <img className="w-44 h-9" src={TestimonialTwo} alt="one" />
            </div>
            <p ref={ref} className="text-white font-medium text-center pt-4"><span className="text-green-400">
              <CountUp
            start={0}
            end={inView ? 182 : 0}
            duration={3}
            suffix="+"
            /></span> Airbng 5 start reviews</p>
          </div>
          <div className=" bg-[#ffffff13] p-8 rounded-xl w-full">
            <div className="pb-4 border-b-[1px] border-[#FFFFFF33] flex justify-center">
             <img className="w-44 h-9" src={TestimonialThree} alt="one" />
            </div>
            <p ref={ref} className="text-white font-medium text-center pt-4"><span className="text-green-400">
              <CountUp
            start={0}
            end={inView ? 182 : 0}
            duration={3}
            suffix="+"
            /></span> Yelp 5 start reviews</p>
          </div>
          <div className=" bg-[#ffffff13] p-8 rounded-xl w-full">
            <div className="pb-4 border-b-[1px] border-[#FFFFFF33] flex justify-center">
             <img className="w-44 h-9" src={TestimonialFour} alt="one" />
            </div>
            <p className="text-white font-medium text-center pt-4"><span className="text-green-400">
              <CountUp
            start={0}
            end={inView ? 897 : 0}
            duration={3}
            suffix="+"
            /> </span> Google 5 start reviews</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Testimonial;
