import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { FaXmark } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";

const LogoutPopup = ({logout,logoutShow}) => {
  return (
    
    <>
      <div className='backdrop-blur-sm fixed top-0 left-0 w-full h-full z-50 bg-[#00000020]' onClick={logoutShow}></div>
      <div className='fixed w-[520px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 flex flex-col gap-4 rounded-lg bg-white z-[100] shadow-[0_0_20px_#00000020]'>
         <span className='absolute right-3 top-3 text-2xl cursor-pointer hover:rotate-90 transition-all duration-300' onClick={logoutShow}><FaXmark /></span>
         <h2 className='text-2xl font-bold text-center'>Are you sure to logout!</h2>
         <div className='flex items-center justify-center'>
          <IoLogOutOutline className='text-6xl text-orange-400'/>
         </div>
         <button className='bg-emerald-500 px-4 py-2 rounded-lg text-white hover:bg-emerald-600 transition-all duration-300 cursor-pointer' type='button' onClick={logout}>Logout</button>
      </div>
    </> 
    
  )
}

export default LogoutPopup
