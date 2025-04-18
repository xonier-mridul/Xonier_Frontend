import React from 'react'
import { Link } from 'react-router-dom'

import { FaUserPen } from "react-icons/fa6";

const SupplierProfileComponent = ({userData}) => {
  return (
    <>
      <div className='bg-white rounded-4xl flex flex-col gap-6 border-emerald-500 border-2 '>
        <div className='px-8 py-5 flex justify-between items-center border-b-1 border-stone-200'>
          <h2 className='text-xl font-semibold'>Welcome <span className='capitalize'>{userData?.name}</span></h2>
          <Link to={"update"} className='bg-emerald-600 py-2.5 px-6 rounded-lg text-white flex items-center justify-center gap-2 cursor-pointer'> <FaUserPen className='text-2xl'/> Update Profile </Link>
        </div>
        <div className='px-8 py-5 '> 

        </div>

      </div>
    </>
  )
}

export default SupplierProfileComponent
