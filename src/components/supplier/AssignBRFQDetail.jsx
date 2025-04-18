import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AssignBRFQDetail = ({data}) => {
    
  
  const navigate = useNavigate()
  const total = data?.brfqId?.rfqId?.orderQuantity.reduce((acc,init)=>acc + init.quantity, 0)
  return (
    <>
      <div className='bg-white rounded-4xl flex flex-col gap-6 border-orange-500 border-2 p-8 '>
        <div className="">
          <h2 className='font-semibold text-2xl'> BRFQ id: <span className='text-orange-500'>{data?.brfqId?._id} </span></h2>
        </div>
        <table className='w-full border-[1px] border-[#eff2f5]'>
        <tbody>
        <tr className='border-b-1 border-zinc-200'>
        <th  className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Product Name </th>
        <td className='w-2/3 p-4 px-6 text-lg'> <span className='capitalize'>{data?.brfqId?.rfqId?.product}</span></td>
         
        </tr>
        <tr className='border-b-1 border-zinc-200'>
        <th  className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Category</th>
        <td className='w-2/3 p-4 px-6 text-lg'> <span className='capitalize'>{data?.brfqId?.rfqId?.category?.category}</span></td>
         
        </tr>

        <tr className='border-b-1 border-zinc-200'>
        <th  className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Delivery Location</th>
        <td className='w-2/3 p-4 px-6 text-lg'>{data?.brfqId?.rfqId?.DeliveryLocation}</td>
         
        </tr>
        <tr className='border-b-1 border-zinc-200'>
        <th  className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Pin Code</th>
        <td className='w-2/3 p-4 px-6 text-lg'>{data?.brfqId?.rfqId?.pinCode}</td>
         
        </tr>
       
        <tr className='border-b-1 border-zinc-200'>
        <th  className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Status</th>
        <td className='w-2/3 p-4 px-6 text-lg'></td>
         
        </tr>
        <tr className='border-b-1 border-zinc-200'>
        <th  className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Receive At</th>
        <td className='w-2/3 p-4 px-6 text-lg '>{new Date(data?.createdAt).toLocaleDateString()}</td>
         
        </tr>
        </tbody>
        </table>
        <div className='flex flex-col gap-5 '>
            <h2 className='font-semibold text-2xl'>Quantity with Delivery date</h2>
            <table className='w-full border-[1px] border-zinc-200'>
                <thead>
                    
                    <tr className='bg-slate-100 border-b-1 border-zinc-200'>
                        <th className='p-4 text-start'> S.No.</th>
                        <th className='p-4 text-start border-l-1 border-zinc-200'>Quantity ({data?.brfqId?.rfqId?.measurement})</th>
                        <th className='p-4 text-start border-l-1 border-zinc-200'>Delivery Date</th>

                    </tr>
                    

                </thead>
                <tbody>
                {data?.brfqId?.rfqId?.orderQuantity?.length > 0 ? data?.brfqId?.rfqId?.orderQuantity?.map((item,index)=>(
                    <tr className='border-b-[1px] border-l-1 border-zinc-200' key={item._id}>
                        <td className='p-4 border-zinc-200 border-l-1'> {index + 1} </td>
                        <td className='p-4 border-zinc-200 border-l-1'> {item.quantity} </td>
                        <td className='p-4 border-zinc-200 border-l-1'> <span className='py-1 px-4 rounded-lg bg-green-500 text-white text-sm tracking-wide'> {new Date(item.deliveryDate).toLocaleDateString()} </span> </td>
                    </tr>
                )) : <tr className='border-b-[1px] border-l-1 border-zinc-200'>
                    <td className='p-4 border-zinc-200 border-l-1 text-center' colSpan={3}>Not Found</td>
                    </tr>}
                    <tr className='border-b-[1px] border-l-1 border-zinc-200'>
                    <td className='p-4 border-zinc-200 border-l-1 capitalize'> total </td>
                    <td className='p-4 border-zinc-200 border-l-1'> <span className='  font-bold'>{total} </span></td>
                    <td className='p-4 border-zinc-200 border-l-1'> </td>
                    </tr>
                </tbody>
            </table>

        </div>
        <div className='flex justify-end items-center '>
            <button className='capitalize font-medium text-lg text-white bg-black py-2 px-8 cursor-pointer rounded-md' onClick={()=>navigate(-1)}>
                Back
            </button>

        </div>
      </div>
    </>
  )
}

export default AssignBRFQDetail
