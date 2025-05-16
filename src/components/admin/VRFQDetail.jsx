import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaAngleDown,FaXmark } from "react-icons/fa6";
import { IoMdDoneAll, IoIosArrowBack } from "react-icons/io";

const VRFQDetail = ({ vrfqData }) => {
  const [tableShow, settableShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  
  // Navigator

  const navigate = useNavigate();

  const id = vrfqData?._id

   // Handle Approve  

  const handleApproveVRFQ = async()=>{
    setIsLoading(true)
   try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}order/add`, {vrfqId: vrfqData?._id,
        supplier: vrfqData?.createdBy._id, buyer: vrfqData?.brfqId?.rfqId?.createdBy?._id}, {withCredentials: true});
      if(response.status === 201){
         setErrorMsg('');
         toast.success("VRFQ approved, Order placed successfully ")
      }
   } catch (error) {
      console.error(error);
      setErrorMsg(error?.response?.data?.message);
   } 
   finally{
    setIsLoading(false)
   }
  }

  // Handle Reject

  const handleReject = async()=>{

    try {
      if(!id) return 
      const response = await axios.patch(`${import.meta.env.VITE_SERVER_URL}vrfq/update/${id}`,{process: "rejected by admin"},{withCredentials: true});
      if(response.status === 200){
        toast.success('VRFQ rejected successfully')
      }

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="flex items-center mx-5 gap-5">
        <div className="bg-white border-emerald-500 border-2 rounded-4xl px-8 py-4  flex items-center gap-2 w-1/2">
          <h2 className="font-semibold ">VRFQ ID:</h2>{" "}
          <span className="text-emerald-500">{vrfqData._id}</span>
        </div>
        <div className="bg-white border-emerald-500 border-2 rounded-4xl px-8 py-4  flex items-center gap-2 w-1/2">
          <h2 className="font-semibold ">BRFQ ID:</h2>{" "}
          <span className="text-emerald-500">{vrfqData.brfqId?._id}</span>
        </div>
      </div>
      <div className="bg-white border-emerald-500 border-2 rounded-4xl  m-5">
        <div className="px-8 py-5 border-b-1 border-stone-200 flex items-center justify-between gap-5">
          <h2 className="text-xl font-semibold ">View VRFQ</h2>

          <div className="flex items-center gap-3">

          <button
            className="px-6 py-2.5 rounded-lg text-white bg-emerald-600 flex items-center gap-1"
            onClick={() => navigate(-1)}
            >
               <IoIosArrowBack className="text-xl"/>
            Back
          </button>
          <button
            className="px-6 py-2.5 rounded-lg text-white bg-emerald-600"
            onClick={() => navigate(`/admin/brfq/detail/${vrfqData.brfqId?._id}`)}
            >
            View BRFQ
          </button>
             </div>
        </div>
        <div className="w-full px-8 py-5 ">
          <div className="flex flex-col gap-4 p-5 bg-green-50 border-green-300 border-1">
            <h2 className="text-lg capitalize font-semibold">Vendor delivery schedule</h2>
            <table className="w-full border-[1px] border-[#eff2f5]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-4 text-start">Quantity</th>
                  <th className="p-4 text-start border-l-1 border-stone-200">
                    From Date
                  </th>
                  <th className="p-4 text-start border-l-1 border-stone-200">
                    To Date
                  </th>
                  <th className="p-4 text-start border-l-1 border-stone-200">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                {vrfqData?.spreadQuantityData?.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b-1 border-stone-200 bg-white"
                  >
                    <td className="p-4 ">{item.quantity}</td>
                    <td className="p-4 border-l-1 border-stone-200">
                      {new Date(item.fromDate).toLocaleDateString()}
                    </td>
                    <td className="p-4 border-l-1 border-stone-200">
                      {new Date(item.toDate).toLocaleDateString()}
                    </td>
                    <td className="p-4 border-l-1 border-stone-200">
                      {item.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="px-8 py-5">
          <div className={`w-full  flex flex-col ${tableShow && "gap-4"}  border-1 border-[#eff2f5] overflow-hidden rounded-xl`}>
            <div className="p-3 px-5 rounded-tr-xl  overflow-hidden bg-slate-200 capitalize flex justify-between items-center" onClick={()=>settableShow(!tableShow)}>
              <h2 className="text-lg font-semibold">Buyer delivery schedule</h2>
              <span className="text-xl"><FaAngleDown /></span>
            </div>
             <div className={` ${tableShow ? "h-auto": "h-0 overflow-hidden"} transition-all duration-300`}>
              <table className="w-full border-[1px] border-[#eff2f5]">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-4 text-start">Quantity</th>
                    <th className="p-4 text-start border-l-1 border-stone-200">
                      From Date
                    </th>
                    <th className="p-4 text-start border-l-1 border-stone-200">
                      To Date
                    </th>
                    <th className="p-4 text-start border-l-1 border-stone-200">
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vrfqData?.brfqId?.rfqId?.spreadQuantityData.map((item) => (
                    <tr key={item._id} className="border-b-1 border-stone-200">
                      <td className="p-4 ">{item.quantity}</td>
                      <td className="p-4 border-l-1 border-stone-200">
                        {new Date(item.fromDate).toLocaleDateString()}
                      </td>
                      <td className="p-4 border-l-1 border-stone-200">
                        {new Date(item.toDate).toLocaleDateString()}
                      </td>
                      <td className="p-4 border-l-1 border-stone-200">
                        {item.location}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Price Table */}

        <div className="px-8 py-5 flex flex-col gap-4">
           <div>
            <h2 className="text-lg font-semibold"><span className="text-red-500 text-2xl">*</span> Price Table</h2>
            
           </div>
           <table className='w-full border-[1px] border-[#eff2f5]'> 
              <thead>
                <tr className="bg-slate-100"> 
                  <th className="p-4 text-start">Price Per Unit (₹)</th>
                  <th className="p-4 text-start border-l-1 border-stone-200">Total Unit (m)</th>
                  <th className="p-4 text-start border-l-1 border-stone-200">Product</th>
                  <th className="p-4 text-start border-l-1 border-stone-200">GST</th>
                  <th className="p-4 text-start border-l-1 border-stone-200">Total Price (₹)</th>
                </tr>
              </thead>
              <tbody>
                {vrfqData?.TotalPrice?.map((item=>(
                  <tr key={item._id} className="border-b-1 border-stone-200">
                  <td className="p-4">₹{item?.pricePerUnit?.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || "N/A"} </td>
                  <td className="p-4 border-l-1 border-stone-200">{item.totalUnit || "N/A"}</td>
                  <td className="p-4 border-l-1 border-stone-200 capitalize">{item?.product?.productName || "N/A"}</td>
                  <td className="p-4 border-l-1 border-stone-200 capitalize"><span className="font-semibold">₹{item.gst.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || "N/A"}</span></td>
                  <td className="p-4 border-l-1 border-stone-200 capitalize"><span className="font-semibold">₹{item.finalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || "N/A"} </span></td>
               </tr>
                )))}
               
              </tbody>
            </table>
        </div>
        {errorMsg &&<p className="text-red-500 px-8 flex justify-end"> {errorMsg}</p>}


       {vrfqData?.process !== "rejected by admin" ? <div className="flex justify-end px-8 py-5  gap-5 items-center">

        {vrfqData?.status !== true && <button className="bg-red-500 text-white px-5 py-2.5 rounded-lg flex items-center gap-1 cursor-pointer" onClick={handleReject}><FaXmark className="text-xl"/> Reject</button> }

         {vrfqData?.status !== true ? <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg flex items-center gap-1 cursor-pointer" disabled={isLoading} onClick={handleApproveVRFQ}><IoMdDoneAll className="text-xl" /> {isLoading ? "Approving" : "Approve"} </button> : <button type="button" className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg flex items-center gap-1 cursor-pointer" ><IoMdDoneAll className="text-xl" /> Approved </button> }

        </div> : <div className="flex justify-end px-8 py-5  gap-5 items-center"> <button type="button" className="bg-red-500 text-white px-5 py-2.5 rounded-lg flex items-center gap-1 cursor-pointer">  Rejected</button> </div>}
      </div>
    </>
  );
};

export default VRFQDetail;
