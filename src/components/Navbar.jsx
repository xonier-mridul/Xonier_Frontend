import React, { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo-light.png'
import { FaArrowRight, FaXmark } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





const Navbar = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [ShowLogin, setShowLogin] = useState(false);


  const navigate = useNavigate()

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


   const CheckUserLogin = async()=>{
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}auth/verify-auth`, { withCredentials: true });
      if(response.data.isAuthenticated){
         setIsAuthenticated(true)
      }
    } catch (error) {
      console.error(error)
      setIsAuthenticated(false)
    }
   }

   useEffect(() => {
     CheckUserLogin();
   }, []);

   const handleLogout = async(e)=>{
    e.preventDefault();
       try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}user/logout`,{}, { withCredentials: true });
        if(response.status === 200){
          
          setIsAuthenticated(false);
          navigate('/');
        }
       } catch (error) {
        console.error("Logout failed", error);
        toast.error("Logout failed");
       }
   }
   

  return (
    <> 
       
      <ToastContainer />
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
                              Client
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/supplier"} className={({ isActive }) =>`${ isActive ? "text-[#73ED7C]" : "text-white"}  text-lg font-semibold`}>
                              Vendor
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/services"} className={({ isActive }) =>`${ isActive ? "text-[#73ED7C]" : "text-white"}  text-lg font-semibold`}>
                             Services
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

            {isAuthenticated ? <button onClick={handleLogout}  className={` ${isScrolled ? "py-3" : "py-4"} capitalize font-bold flex items-center gap-3 rounded-full  px-5 btn-bg text-white`}  > <span className='flex items-center gap-2' > <FaUser className='text-lg' />
            Log Out </span> <FaArrowRight className="text-lg btn-arrow" />
            </button> : <Link to={"/login"} className={` ${isScrolled ? "py-3" : "py-4"} capitalize font-bold flex items-center gap-3 rounded-full  px-5 btn-bg text-white`}  > <span className='flex items-center gap-2' > <FaUser className='text-lg' />
            Log In </span> <FaArrowRight className="text-lg btn-arrow" />
            </Link>}
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
