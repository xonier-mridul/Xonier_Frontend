import React from 'react'


import { IoMdDoneAll, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const QuotationDetailTable = ({quotationData}) => {

    const navigate = useNavigate()
  return (
    <>
    <div className="flex items-center mx-5 gap-5">
        <div className="bg-white border-emerald-500 border-2 rounded-4xl px-8 py-4  flex items-center gap-2 w-1/2">
          <h2 className="font-semibold ">VRFQ ID:</h2>{" "}
          <span className="text-emerald-500">{quotationData._id}</span>
        </div>
        <div className="bg-white border-emerald-500 border-2 rounded-4xl px-8 py-4  flex items-center gap-2 w-1/2">
          <h2 className="font-semibold ">BRFQ ID:</h2>{" "}
          <span className="text-emerald-500">{quotationData.brfqId?._id}</span>
        </div>
      </div>
    <div className="bg-white border-emerald-500 border-2 rounded-4xl ">
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
                  
                     </div>
                </div>
                <div className="w-full px-8 py-5 ">
          <div className="flex flex-col gap-4 p-5 bg-green-50 border-green-300 border-1">
            <h2 className="text-lg capitalize font-semibold">delivery schedule</h2>
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
                {quotationData?.spreadQuantityData?.map((item) => (
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
                {quotationData?.TotalPrice?.map((item=>(
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
      
    </div>
    </>
  )
}

export default QuotationDetailTable
