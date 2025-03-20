import React,{useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";


// Media Started

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// Media End

const Footer = () => {

  const [contactData, setContactData] = useState({});


 
  

  useEffect(() => {
    const getContactData = async()=>{
      try{
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}admin-contact/active`)
        if(response.status === 200){
            setContactData(response.data)
            console.log(response.data)
        }
      }
      catch(err){
        console.error(err.message)
      }
    }
    getContactData()
  }, [])
  
  //  footer Year 
  const year = new Date().getFullYear();
  const email = contactData[0]?.email
  const number = contactData[0]?.number

  return (
    <>
      <div className="bg-teal-950 pt-20">
        <div className="flex  max-w-7xl mx-auto pb-20 border-b-[1px] border-[#FFFFFF33]">
          <div className="w-3/5 flex flex-col gap-3">
            <h2 className="text-[50px] font-light leading-tight text-white">
              We Gave you{" "}
              <span className="font-bold trans-color"> best deals </span>
            </h2>
            <p className="text-white leading-relaxed mt-3 w-4/5">
              Empowering construction with innovative solutions. Connect,
              collaborate, and build smarter with our all-in-one platform for
              materials and services. Start today!
            </p>
          </div>
          <div className="w-2/5 flex gap-10">
            <div className="w-[60%] flex flex-col gap-6">
              <h3 className="text-2xl text-white font-semibold">Address</h3>
              <p className="text-white ">
                {contactData[0]?.location}
              </p>
              <div className="flex items-center gap-5">
                <Link
                  to={""}
                  className="h-10 w-10 flex items-center text-white justify-center rounded-full border-[1px] border-white hover:border-green-400 hover:text-green-400 hover:scale-105  transition-all duration-300"
                >
                  <FaFacebookF className="text-lg" />
                </Link>
                <Link
                  to={""}
                  className="h-10 w-10 flex items-center text-white justify-center rounded-full border-[1px] border-white hover:border-green-400 hover:text-green-400 hover:scale-105  transition-all duration-300"
                >
                  <FaXTwitter className="text-lg" />
                </Link>
                <Link
                  to={""}
                  className="h-10 w-10 flex items-center text-white justify-center rounded-full border-[1px] border-white hover:border-green-400 hover:text-green-400 hover:scale-105  transition-all duration-300"
                >
                  <FaInstagram className="text-lg" />
                </Link>
              </div>
            </div>
            <div className="w-[40%]">
              <h3 className="text-2xl text-white font-semibold pb-4">
                Say Hello
              </h3>
              <div className="flex flex-col gap-1">
              <Link to={`mailto:${email}`} className="text-white ">
                {email}
              </Link>
              <Link to={`tel:${number}`} className="text-white font-semibold text-lg hover:text-green-400">
              {number}
              </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex items-center py-9">
            <nav className="w-1/2">
              <ul className="flex items-center gap-10">
                <li><NavLink to={'/'} className={({isActive}) => `${isActive ? "text-[#73ED7C]" : "text-white"} text-lg font-semibold`}> Home </NavLink></li>
                <li><NavLink to={'/buyer'} className={({isActive}) => `${isActive ? "text-[#73ED7C]" : "text-white"} text-lg font-semibold`}> Buyer </NavLink></li>
                <li><NavLink to={'/Supplier'} className={({isActive}) => `${isActive ? "text-[#73ED7C]" : "text-white"} text-lg font-semibold`}> Supplier </NavLink></li>
                <li><NavLink to={'/about'} className={({isActive}) => `${isActive ? "text-[#73ED7C]" : "text-white"} text-lg font-semibold`}> About Us </NavLink></li>
                <li><NavLink to={'/contact'} className={({isActive}) => `${isActive ? "text-[#73ED7C]" : "text-white"} text-lg font-semibold`}> Support </NavLink></li>

              </ul>
            </nav>
            <div className="w-1/2 flex justify-end">
            <span className="text-white ">Copyright Bildkart &copy; {year} &nbsp; | &nbsp; All Rights Reserved</span>
            </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
