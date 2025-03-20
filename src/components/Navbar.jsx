import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/BildKart-Logo.png'
import { FaArrowRight, FaXmark } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Navbar = () => {

  const [showPass, setshowPass] = useState(false);
  const [ShowLogin, setShowLogin] = useState(false);

  // Scroll Effect Start
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    document.addEventListener('scroll',()=>{
      const scroll = window.scrollY
      if(scroll !== 0){
        setIsScrolled(true)
      }
      else{
        setIsScrolled(false)
      }
    })
  }, [])

  // Scroll Effect End


   const handleLogin = (e)=>{
      e.preventDefault();

   }

  return (
    <> 
       {ShowLogin && <div className="fixed top-0 left-0 w-full h-full bg-[#00000024] backdrop-blur-md z-50" onClick={()=>setShowLogin(false)}></div>}
       {ShowLogin && <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-10 pb-5 rounded-xl w-[650px] flex flex-col gap-3 ">
       <h2 className='font-bold text-2xl '>LogIn</h2>
       <span onClick={()=>setShowLogin(false)}><FaXmark className='absolute top-5 right-5 text-2xl cursor-pointer' /></span>

       <form className='flex flex-col gap-3' onSubmit={handleLogin}>
        <input type="email" placeholder="Enter your Email" className='w-full outline-none border-b-[1px] border-neutral-200 py-3 px-2' required />
        {showPass ?  <div className='flex items-center w-full outline-none border-b-[1px] border-neutral-200 py-3 px-2'>
          <input type="text" placeholder=" Enter your Password" className='w-full outline-none border-none' /> <FaEye onClick={()=>setshowPass(!showPass)}/>

        </div> : <div className='flex items-center w-full outline-none border-b-[1px] border-neutral-200 py-3 px-2'>
          <input type="password" placeholder=" Enter your Password" className='w-full outline-none border-none' /> <FaEyeSlash onClick={()=>setshowPass(!showPass)}/>

        </div>}
        <div className='flex items-center justify-end'><Link className='text-green-400 capitalize' to={''}> forgot password? </Link></div>
       <button style={{borderRadius: "10px"}} className="capitalize font-bold flex items-center gap-3 rounded-md w-full justify-center text-lg btn-bg text-white  mb-2" type="submit" > Submit <FaArrowRight className="text-lg btn-arrow" /> </button>
       </form>
       <div className='flex items-center justify-center'>
       <p>Not a member? <Link className='text-green-500 underline ' to={"/"}> Sign Up </Link></p>

       </div>
          
       </div>}

      <div className={` ${isScrolled ? "bg-[#000000d6] py-4" : "bg-[#00000099] py-6"} transition-all duration-300 fixed top-0 w-full left-0 z-40`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="w-1/5">

           <Link to={'/'}> <img className={` ${isScrolled ? "w-36" : "w-40"} transition-all duration-300`} src={Logo} alt="logo" /></Link></div>
            <div className="w-2/5">
            <nav>
                <ul className='flex items-center gap-10'>
                    <li>
                        <NavLink to={"/"} className={({ isActive }) =>`${ isActive ? "text-[#73ED7C]" : "text-white"}  text-lg font-semibold`}>
                              Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/buyer"} className={({ isActive }) =>`${ isActive ? "text-[#73ED7C]" : "text-white"}  text-lg font-semibold`}>
                              Buyer
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/supplier"} className={({ isActive }) =>`${ isActive ? "text-[#73ED7C]" : "text-white"}  text-lg font-semibold`}>
                              Supplier
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"} className={({ isActive }) =>`${ isActive ? "text-[#73ED7C]" : "text-white"}  text-lg font-semibold`}>
                              About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"} className={({ isActive }) =>`${ isActive ? "text-[#73ED7C]" : "text-white"}  text-lg font-semibold`}>
                              Support
                        </NavLink>
                    </li>
                </ul>
            </nav>
            </div>
            
            <div className='w-2/5 flex justify-end items-center gap-5'>
            <Link className={` ${isScrolled ? "py-3" : "py-4"} capitalize font-bold flex items-center gap-3 rounded-full  px-5 btn-bg text-white`} to={"/quote"}>
            get a quote <FaArrowRight className="text-lg btn-arrow" />
            </Link>

            <Link className={` ${isScrolled ? "py-3" : "py-4"} capitalize font-bold flex items-center gap-3 rounded-full  px-5 btn-bg text-white`} onClick={()=>setShowLogin(!ShowLogin)} > <span className='flex items-center gap-2' > <FaUser className='text-lg' />
            Log In </span> <FaArrowRight className="text-lg btn-arrow" />
            </Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
