import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa6";
import { GrUpdate } from "react-icons/gr";

const UpdateTrackerComponent = ({formData, setFormData, handleSubmit, handleChange, errMessage}) => {
    const navigate = useNavigate()
  return (
    <>
      <div className='bg-white rounded-4xl flex flex-col gap-6 border-emerald-500 border-2 '>
      <div className='px-8 py-5 flex justify-between items-center border-b-1 border-stone-200'>
          <h2 className='text-xl font-semibold'>Update Order Tracking  <span className='capitalize'></span></h2>
          <button onClick={()=>navigate(-1)} className='bg-emerald-600 py-2.5 px-6 rounded-lg text-white flex items-center justify-center gap-2 cursor-pointer'> < FaAngleLeft  className='text-2xl'/> Back </button>
        </div>
        <div className='w-full px-8 py-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-3'>
                    <label className='text-lg' htmlFor="process">Set Tracking</label>
                    <select className='w-full border-1 border-zinc-200 outline-none p-3 rounded-lg' name="process" id="process" onChange={handleChange}>
                        <option value="" hidden> Select Tracking</option>
                        <option value="confirmed">Confirmed Order</option>
                        <option value="processing">Processing</option>
                        <option value="dispatch">Dispatched</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                    </select>

                </div>
                <div className='flex justify-end'>
                    <p className='text-red-500'>{errMessage}</p>
                </div>
                <div className='flex justify-end'>

                <button disabled={formData.process === ""} className='text-white bg-emerald-600 px-6 py-2.5 rounded-lg cursor-pointer flex items-center gap-2 disabled:bg-emerald-400' type="submit"> <GrUpdate/> Update</button>
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default UpdateTrackerComponent
