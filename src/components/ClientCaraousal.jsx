import React from 'react'

// React Slick Slider Start
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// React Slick Slider End

// Media Start 

import BMW from "../assets/bmw.png"
import Birla from "../assets/Birla-group.png"
import Mahindra from "../assets/mahindra.png"
import Anchor from "../assets/anchor.png"
import Hochtief from "../assets/hochtief.png"
import Gmr from "../assets/gmr.png"
import HCC from "../assets/HCC.png"
import LT from "../assets/L&T.png"
import Tata from "../assets/tata.png"

// Media End

const ClientCaraousal = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: false
      };

  return (
    <>
      <div className='pb-24 bg-[#F2F1ED] overflow-hidden client-caraousal'>
          <Slider {...settings}>
           <div className='flex justify-center items-center'>
               <img className='w-24' src={BMW} alt="bmw logo" />
           </div>
           <div className='flex justify-center items-center'>
               <img className='w-24' src={Birla} alt="birla logo" />
           </div>
           <div className='flex justify-center items-center'>
               <img className='w-24' src={Mahindra} alt="birla logo" />
           </div>
           <div className='flex justify-center items-center'>
               <img className='w-24' src={Anchor} alt="birla logo" />
           </div>
           <div className='flex justify-center items-center'>
               <img className='w-24' src={Hochtief} alt="birla logo" />
           </div>
           <div className='flex justify-center items-center'>
               <img className='w-24' src={Gmr} alt="birla logo" />
           </div>
           <div className='flex justify-center items-center'>
               <img className='w-24' src={HCC} alt="birla logo" />
           </div>
           <div className='flex justify-center items-center'>
               <img className='w-24' src={LT} alt="birla logo" />
           </div>
           <div className='flex justify-center items-center'>
               <img className='w-24' src={Tata} alt="birla logo" />
           </div>
          </Slider>
      </div>
    </>
  )
}

export default ClientCaraousal
