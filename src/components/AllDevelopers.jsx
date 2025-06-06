import React from 'react'
import { FaArrowRight, FaXmark, FaStar } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {Skeleton} from "@mui/material"

const AllDevelopers = ({developersData, getCategoryData, filterData, handleFilter, activeId}) => {
    console.log(activeId)
  return (
    <>
    <div className='bg-stone-100 '>
      <div className="max-w-7xl mx-auto py-24 flex flex-col gap-9">
        <div className="flex items-center w-full "> 
            <ul className='flex items-center justify-between gap-6 w-full px-12 py-5 rounded-full bg-white sticky top-42'>
                {getCategoryData.map((item, index)=>(
                    <li className='w-full'> <button className={`${activeId === item._id && 'bg-teal-500 text-white' } px-10 py-3 rounded-full bg-green-100 w-full text-green-600 font-semibold text-lg tracking-wide transition-all duration-300`} onClick={()=>handleFilter(item._id)}>{item?.category}</button> </li>
                ))}
            </ul>
        </div>
         <div className="grid grid-cols-3 gap-8 items-center">
                    {filterData.length > 0 ?  filterData.map((item, index) => (
                      <Link
                      to={`profile/${item._id}`}
                        key={index}
                        className="bg-white p-7 flex flex-col gap-5 rounded-lg shadow-[0_0_10px_#00000020] hover:shadow-lg transition-all duration-300  "
                        data-aos='zoom-in'
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-full flex items-center gap-5">
                            <img
                              src={item?.profileImage}
                              className="w-18 h-18 rounded-full object-cover border-1 border-stone-200"
                              alt="Profile image"
                            />
                            <div className="w-full flex flex-col gap-0.5">
                              <h3 className="capitalize text-xl font-semibold tracking-wide trans-color">
                                {item?.productName || "N/A"}
                              </h3>
                              <span className="para text-sm tracking-wide capitalize">
                                {item?.designation || "N/A"}
                              </span>
                            </div>
                          </div>
                          <div>
                            <span className="bg-stone-100 px-3.5 py-0.5 rounded-full flex items-center gap-1 text-sm tracking-wide text-stone-700">
                              <FaStar className="text-green text-md" /> 4/5
                            </span>
                          </div>
                        </div>
                        <div className="w-full border-b-1 border-stone-200"></div>
                        <div className="flex flex-col gap-5">
                          <div>
                            {" "}
                            <span className="animea-bg px-4 text-sm py-0.5 flex items-center gap-2 w-fit">
                              {" "}
                              <FaGraduationCap className="text-md" />{" "}
                              {item?.education || "N/A"}
                            </span>
                          </div>
                          <p className="para line-clamp-3 overflow-ellipsis h-18">
                            {item.skillDescription}
                          </p>
                          <div className="flex items-center gap-2">
                            {item?.technologies.slice(0,3).map((item, i) => (
                              <span key={i} className="bg-stone-100 text-stone-600 px-4 py-1 rounded-full text-sm tracking-wide">
                                {" "}
                                {item?.name || "N/A"}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Link
                          style={{ padding: "8px 24px" }}
                          className={` capitalize w-fit font-bold text-sm tracking-wide flex items-center justify-center gap-3 rounded-full  px-5 py-1 btn-bg text-white`}
                          to={`profile/${item._id}`}
                        >
                          View Profile
                          <FaArrowRight className="text-lg btn-arrow" />
                        </Link>
                      </Link>
                    )): 
                    <>
                    <Skeleton className='w-full rounded-lg' variant="rectangular"  height={300}/>
                    <Skeleton className='w-full rounded-lg' variant="rectangular"  height={300}/>
                    <Skeleton className='w-full rounded-lg' variant="rectangular"  height={300}/>
                    </>
                    }
                  </div>
      </div>
      </div>
    </>
  )
}

export default AllDevelopers
