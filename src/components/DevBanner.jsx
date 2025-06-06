import React from 'react';
import {Link} from "react-router-dom"

// Media Start
import { IoHomeOutline } from "react-icons/io5";
// Media End


const DevBanner = ({bgImg, subHeading, heading}) => {
  return (
    <>
        <div style={{backgroundImage:`url(${bgImg})`}} className="page-banner pt-52 py-30 bg-cover bg-center relative">
            <div className='max-w-7xl mx-auto z-20 relative '>

            <h1 className='text-[70px] font-light leading-tight text-white pb-4 capitalize'>{subHeading} <span className='font-bold trans-color'> {heading} </span></h1>

            <Link className='text-white hover:text-green-400 text-lg flex items-center gap-3 leading-none' to={'/'}> <IoHomeOutline className='text-xl'/>Home</Link>

            </div>
            
        </div>
    
    </>
  )
}

export default DevBanner