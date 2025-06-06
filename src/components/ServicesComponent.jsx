import React from "react";
import { MdMiscellaneousServices } from "react-icons/md";
import { Link } from "react-router-dom";
import {Skeleton} from "@mui/material"
import { LuDot } from "react-icons/lu";


import { ImUserTie } from "react-icons/im";

import { FaArrowRight, FaXmark } from "react-icons/fa6";
const ServicesComponent = ({
  servicesData,
  getCategoryData,
  handleServiceFilter,
  filteredServices,
  activeCategory,
}) => {
  console.log("servicesData", servicesData);
  return (
    <>
      <div className="bg-stone-100 py-24 pt-48">
        <div className="max-w-7xl mx-auto flex ">
          <div className="w-1/3  flex flex-col  gap-5  pr-5  ">
           {getCategoryData.length > 0 ? <div className="flex sticky top-24  flex-col gap-6 bg-white  p-6 rounded-2xl">
              <h2 className="text-xl font-semibold flex items-center gap-2 bg-green-100 px-5 py-2 rounded-xl" data-aos='fade-up'>
                <span className="text-green-400">
                  <MdMiscellaneousServices />
                </span>
                Services
              </h2>

              <ul className="flex flex-col gap-0 px-3">
                {getCategoryData.length > 0 ? getCategoryData?.map((item, index) => (
                  <li data-aos='fade-up' data-aos-delay='200'>
                    <button
                      className={`text-lg font-medium px-1 py-2 rounded-xl flex items-center gap-1 text-left w-full transition-all duration-300 ${
                        activeCategory === item._id
                          ? "bg-green-100 text-green-700 font-semibold"
                          : "hover:bg-stone-100"
                      }`}
                      onClick={() => handleServiceFilter(item._id)}
                    >
                      <LuDot className="text-green-400 text-2xl"/> {item.category}
                    </button>
                  </li>
                )) : (
                  <>
                  
                  <Skeleton className='w-full rounded-lg' variant="rectangular"  height={200}/>
                  </>
                )}
              </ul>

              <div className="text-xl font-semibold flex items-center gap-2 bg-green-100 px-5 py-2 rounded-xl" data-aos='fade-up' data-aos-delay='200'>  <span className="text-green-400"><ImUserTie /> </span> Developers</div>
               <ul className="flex flex-col gap-0 px-3">
                <li><Link to={`/developers`} className="text-lg font-medium px-1 py-2 rounded-xl flex items-center gap-1 text-left w-full transition-all duration-300 hover:bg-stone-100" data-aos='fade-up' data-aos-delay='300'> <LuDot className="text-green-400 text-2xl"/> All Developers</Link></li>
              </ul>
            </div> : (
               <Skeleton className='w-full rounded-lg' variant="rectangular"  height={200}/>
            )}
          </div>

          <div className="w-2/3 grid grid-cols-2 gap-5 pl-5 border-l-1 border-stone-200">
            {filteredServices.length > 0 ? (
              filteredServices.map((item, index) => (
                <Link to={`detail/${item._id}`} className="bg-white p-6 rounded-2xl flex flex-col gap-5 shadow-[0_0_10px_#00000020] hover:shadow-lg transition-all duration-300 anime-box" data-aos='fade-up'>
                  <img
                    className="w-full h-55 object-cover rounded-xl anime-box-img transition-all duration-300"
                    src={item?.serviceImage}
                    alt="serviceImage"
                  />
                  <div className="flex gap-3 items-center">
                    {" "}
                    {item.feature?.slice(0,2).map((item) => (
                      <span className="anime-bg px-5 py-1 text-[12px] tracking-wide text-nowrap">
                        {" "}
                        {item}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-bold text-2xl tracking-wide capitalize text-overflow-hidden text-ellipsis h-7 line-clamp-1">
                    {item.name || "N/A"}
                  </h2>
                  <p className="para text-overflow-hidden text-ellipsis h-12 line-clamp-2">{item.shortDescription || "N/A"}</p>
                 
                  <Link style={{padding:"8px 24px", fontWeight: 500}} className={` capitalize w-fit font-bold flex items-center justify-center gap-3 rounded-full  px-5 btn-bg text-white`} to={`detail/${item._id}`}>
                              More Info<FaArrowRight className="text-lg btn-arrow" />
                              </Link>
                </Link>
              ))
            ) : (
             <>
              <Skeleton className='w-full rounded-lg' variant="rectangular" animation="wave"  height={400}/>
              <Skeleton className='w-full rounded-lg' variant="rectangular" animation="wave"  height={400}/>
              <Skeleton className='w-full rounded-lg' variant="rectangular" animation="wave"  height={400}/>
              <Skeleton className='w-full rounded-lg' variant="rectangular" animation="wave"  height={400}/>
             </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesComponent;
