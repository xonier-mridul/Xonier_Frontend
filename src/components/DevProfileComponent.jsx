import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { Skeleton } from "@mui/material";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";

const DevProfileComponent = ({ devData }) => {
  return (
    <>
      <div className="bg-stone-100">
        <div className="max-w-7xl mx-auto py-24 flex flex-col gap-24">
          <div className="flex  gap-6 ">
            <div className="w-[30%] flex flex-col">
              <figure className=" rounded-full sticky top-24 " >
                <img
                  src={devData?.profileImage}
                  className="rounded-full h-80 w-80 object-cover"
                  alt=""
                />
              </figure>
            </div>
            <div className="w-[70%]">
              <div className="bg-white p-10 rounded-xl shadow-[0_0_12px_#00000020] flex flex-col gap-4">
                {devData ? (
                  <h2 className="text-4xl font-bold capitalize trans-color" data-aos='fade-up'>
                    {devData?.productName || "N/A"}
                  </h2>
                ) : (
                  <Skeleton
                    className="w-full rounded-lg"
                    variant="rectangular"
                    height={50}
                  />
                )}
                {devData ? (
                  <p className="para" data-aos='fade-up' data-aos-delay="200">{devData?.skillDescription || "N/A"}</p>
                ) : (
                  <Skeleton
                    className="w-full rounded-lg"
                    variant="rectangular"
                    height={100}
                  />
                )}

                <div className="grid grid-cols-2 items-start gap-x-6 gap-y-12 py-6">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-lg text-stone-600 tracking-wide" data-aos='fade-up' data-aos-delay="200">
                      Designation:
                    </h4>
                    {devData ? (
                      <p className="text-3xl font-semibold tracking-wide capitalize" data-aos='fade-up' data-aos-delay="200">
                        {devData?.designation || "N/A"}
                      </p>
                    ) : (
                      <Skeleton
                        className="w-full rounded-lg"
                        variant="rectangular"
                        height={50}
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    <h4 className="text-lg text-stone-600 tracking-wide" data-aos='fade-up' data-aos-delay="300">
                      Years of experience :
                    </h4>
                    <p className="text-3xl font-semibold tracking-wide capitalize" data-aos='fade-up' data-aos-delay="300">
                      {devData?.yearOfExperience || "N/A"}
                      <span className="">+</span>
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h4 className="text-lg text-stone-600 tracking-wide" data-aos='fade-up' data-aos-delay="400">
                      Skillset :
                    </h4>
                    <div className="flex items-center gap-3 flex-wrap">
                      {devData?.technologies?.map((item, i) => (
                        <span
                          key={i}
                          className="px-5 py-1 rounded-full bg-green-100 text-sm text-green-600 tracking-wide"
                          data-aos='fade-up' data-aos-delay="400"
                        >
                          {item?.name || "N/A"}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h4 className="text-lg text-stone-600 tracking-wide" data-aos='fade-up' data-aos-delay="500">
                      Higher Education Level :
                    </h4>
                    <p className="flex items-center gap-3 text-xl" data-aos='fade-up' data-aos-delay="500">
                      <span className="text-green-400 text-2xl">
                        <FaGraduationCap />
                      </span>
                      {devData?.education || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 col-span-2">
                    <h4 className="text-lg text-stone-600 tracking-wide" data-aos='fade-up' data-aos-delay="500">
                      Service Provided on :
                    </h4>
                    <div className="flex items-center gap-3 text-xl" data-aos='fade-up' data-aos-delay="500">
                      {devData?.services?.map((item, index)=>(
                        <Link to={`/services/detail/${item._id}`} className="bg-green-100 px-5 py-1.5 rounded-full text-sm text-green-600 capitalize tracking-wide hover:bg-teal-700 hover:text-white transition-all duration-300">
                           {item?.name || "N/A"}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded-xl p-8 px-10 bg-white flex items-center flex-col gap-8">
            <h2 className="text-3xl font-bold tracking-wide"> About More </h2>
            <div className="grid grid-cols-3  gap-8 w-full">
            <div className="flex flex-col gap-3 bg-stone-100 items-center p-6 rounded-xl" data-aos="zoom-in">
            
               
            <h4 className="text-lg font-medium text-stone-600 tracking-wide">
              Category
            </h4>
            <span className="w-8 border-b-2 border-green-400"></span>
            {devData ? (
                <p className="text-2xl trans-color font-semibold">{devData?.category.category}</p>
              ) : (
                <Skeleton
                  className="w-full rounded-lg"
                  variant="text"
                  height={50}
                />
              )}
              </div>
              <div className="flex flex-col gap-3 bg-stone-100 items-center p-6 rounded-xl" data-aos="zoom-in" data-aos-delay='200'>
            <h4 className="text-lg font-medium text-stone-600 tracking-wide ">
              Hourly Rate
              
            </h4>
            <span className="w-8 border-b-2 border-green-400"></span>
            {devData ? (
                <p className="text-2xl trans-color font-semibold">{devData?.hourlyRate}$</p>
              ) : (
                <Skeleton
                  className="w-full rounded-lg"
                  variant="text"
                  height={50}
                />
              )}
            </div>
              <div className="flex flex-col gap-3 bg-stone-100 items-center p-6 rounded-xl" data-aos="zoom-in" data-aos-delay='400'>
            <h4 className="text-lg font-medium text-stone-600 tracking-wide ">
             Language
            </h4>
            <span className="w-8 border-b-2 border-green-400 "></span>
            {devData ? (
                <div className="text-2xl trans-color font-semibold">{devData?.language?.map((item)=>(
                   <span className="capitalize">{item}, </span>
                ))}</div>
              ) : (
                <Skeleton
                  className="w-full rounded-lg"
                  variant="text"
                  height={50}
                />
              )}
            </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-semibold text-stone-600 tracking-wide flex items-center gap-1" data-aos='fade-up'>
              <span className="text-red-500">*</span> Skill Description:
            </h4>
            {devData ? (
              <p className="p-6 px-8 bg-white rounded-lg para" data-aos='fade-up'>
                {devData?.skillDescription}
              </p>
            ) : (
              <Skeleton
                className="w-full rounded-lg"
                variant="text"
                height={300}
              />
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-semibold text-stone-600 tracking-wide flex items-center gap-1" data-aos='fade-up'>
              <span className="text-red-500">*</span> Resume:
            </h4>
            {devData ? (
              <iframe src={devData?.resume} className="p-6 px-8 bg-white rounded-lg" data-aos='fade-up'>
                {devData?.skillDescription}
              </iframe>
            ) : (
              <Skeleton
                className="w-full rounded-lg"
                variant="text"
                height={300}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DevProfileComponent;
