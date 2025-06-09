import React from "react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { Skeleton } from "@mui/material";

const ServicesViewComponent = ({ isLoading, serviceData }) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-2xl m-5 border-2 flex flex-col gap-6 px-8 py-6 border-emerald-500">
        <div className="flex items-center justify-between">
         <div className="flex items-center gap-3">
             <h2 className="font-medium text-xl">Service ID:</h2>{" "}  {serviceData ? <p className="text-blue-500 text-lg capitalize">{serviceData?._id || "N/A"}</p>: <Skeleton className="rounded-md" variant="text" animation="wave" height={28} width={200}/>}
         </div>
         <div className="flex items-center gap-4">
            <Link to={`/admin/service-list/edit/${serviceData?._id}`} className="px-6 py-2 rounded-lg text-white bg-blue-600 flex items-center gap-2"><MdEdit /> Edit Service</Link>
         </div>
        </div>
        <div className="w-full border-b-1 border-stone-200"></div>
        <div className="flex flex-col gap-12">
          {serviceData ? <img
            src={serviceData?.serviceImage}
            className="h-52 w-full rounded-xl object-cover"
            alt=""
          />: <Skeleton className='w-full rounded-lg' variant="rectangular" animation="wave"  height={200}/>}
          <div className="grid grid-cols-2 gap-8 p-6 rounded-xl bg-blue-50">
            <div className="flex items-center gap-3 text-xl tracking-wide">
              <h2 className="font-medium"> <span className="text-red-500">*</span> Service Name:</h2>{" "}
              {serviceData ? <p className="text-blue-500 capitalize">{serviceData?.name || "N/A"}</p> : <Skeleton className="rounded-md" variant="text" animation="wave" height={28} width={200}/>}
            </div>
            <div className="flex items-center gap-3 text-xl tracking-wide">
              <h2 className="font-medium"> <span className="text-red-500">*</span> Service Category:</h2>{" "}
             {serviceData ? <p className="text-blue-500 capitalize">
                {serviceData?.category?.category || "N/A"}
              </p> : <Skeleton className="rounded-md" variant="text" animation="wave" height={28} width={200}/>}
            </div>
            
            <div className="flex items-center flex-wrap gap-3  tracking-wide col-span-2">
              <h2 className="font-medium text-xl"><span className="text-red-500">*</span> Key Feature:</h2>{" "}
              {serviceData?.feature.map((item) => (
                <>
               { serviceData ? <p className="text-blue-500 capitalize bg-blue-100 px-5 py-1.5 rounded-lg ">
                  {item || "N/A"}
                </p> : <Skeleton className="rounded-md" variant="text" animation="wave" height={28} width={200}/>} </>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className="font-medium text-xl"><span className="text-red-500">*</span> Short Description:</h2>{" "}
           {serviceData ? <p className="bg-stone-50 px-6 py-4 rounded-lg text-stone-500">{serviceData?.shortDescription || "N/A"}</p> :  <Skeleton className="rounded-md" variant="text" animation="wave" height={68} />}
            
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className="font-medium text-xl"><span className="text-red-500">*</span> Description:</h2>{" "}
           {serviceData ?  <p className="bg-stone-50 px-6 py-4 rounded-lg text-stone-500">{serviceData?.description || "N/A"}</p> : <Skeleton className="rounded-md" variant="text" animation="wave" height={308} /> }
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesViewComponent;
