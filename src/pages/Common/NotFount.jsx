import React from 'react'
import NotFound from "../../assets/page-not-found.png"
import { useLocation, Link } from 'react-router-dom'
import { HiOutlineHome } from "react-icons/hi";
import Logo from "../../assets/bildkart-admin-logo.png"


const NotFount = () => {
    const {pathname} = useLocation();
  
    const routeName = pathname.split("/").pop()
  return (
    <div className='w-full min-h-screen flex items-center justify-center '>
      <div className='flex flex-col justify-center items-center gap-2  bg-white  w-[700px] p-8 rounded-2xl'>
        <Link to={'/'} className='transition-all duration-300 hover:scale-105'><img className='w-52' src={Logo} alt="bildkart logo" /></Link>
          <img className='w-46' src={NotFound} alt="not found" />
         <h2 className='text-3xl tracking-wide font-bold text-red-500 py-5 '> <span className='text-teal-500 text-4xl'>"{routeName}"</span> page Not Found</h2>
         <Link to={"/"} className='flex items-center gap-2 text-lg underline transition-all duration-300 hover:text-teal-600'> <span className='text-teal-500'><HiOutlineHome className='text-xl'/></span> Back to home</Link>
      </div>
    </div>
  )
}

export default NotFount
