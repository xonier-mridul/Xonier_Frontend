import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import {Skeleton} from "@mui/material"

const ServicesDetailComponent = ({ serviceData }) => {
    const navigate = useNavigate()
  return (
    <>
      <div className='bg-stone-100 pb-24'>
        <div
          className='page-banner w-full py-40 pt-55 bg-center bg-cover bg-no-repeat relative'
          style={{
            backgroundImage: `url(${serviceData?.serviceImage})`
          }}
        >
            <div className='max-w-7xl mx-auto relative z-40'>

            <h2 className='text-white  text-5xl font-bold capitalize mb-4' data-aos='fade-up' >{serviceData?.name}</h2>
            <button className='text-white tracking-wide hover:text-teal-800 transition-all duration-300 flex items-center gap-1 text-lg' onClick={()=> navigate(-1)} data-aos='fade-up' data-aos-delay='300' ><IoIosArrowBack /> Back</button>
            </div>
        </div>

        <div className='max-w-7xl mx-auto pt-24'>
         {serviceData  ?  <div className='bg-white p-7 rounded-2xl shadow-lg flex flex-col gap-5' data-aos='fade-up'>
             <div className='flex items-center gap-5' >
                <h3 className='text-2xl font-bold tracking-wide' data-aos='fade-up' data-aos-delay='200' > Key Highlights:</h3>
             <div className='flex items-center gap-3'> {serviceData?.feature?.map((item, index)=>(
                <span key={index} className='anime-bg px-4 py-1 rounded-full font-normal' data-aos='fade-up' data-aos-delay='300' >{item}</span>
             ))}</div>
             </div>

              <div className="w-full border-b-1 border-stone-200"></div>
            <p className='para ' data-aos='fade-up' data-aos-delay='300' >{serviceData?.description || 'N/A'}</p>
          </div>
          : (
          <Skeleton className='w-full rounded-lg' variant="rectangular"  height={200}/>
        )}
        </div> 
      </div>
    </>
  );
};

export default ServicesDetailComponent;
