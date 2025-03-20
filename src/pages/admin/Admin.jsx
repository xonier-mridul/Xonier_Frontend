import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/BildKart-Logo.png";
import fav from "../../assets/b-fav.png";
import DashboardHeader from "./DashboardHeader";
import { useState } from "react";


// Media Start
import { AiFillDashboard, AiFillProduct } from "react-icons/ai";
import {  FaUsers, FaCartPlus } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";

// Media End

const Admin = () => {
  
  const [showSidebar, setShowSidebar] = useState(true);
  const [submenuShow, setSubmenuShow] = useState(0);
  // Side Menu Start


  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
    setSubmenuShow(0);
  }

  // Side Menu End

  // Sub Menu Start 

  const handleSubmenu = (n) => {
    if(showSidebar === true){

     return setSubmenuShow(n === submenuShow ? 0 : n);

    }
  }
  // Sub Menu End

  return (
    <div className="flex gap-2">
      {/* Sidebar */}
      <div className={` ${showSidebar ? "w-72" : "w-20"} m-4 border-2 border-orange-500 rounded-4xl app-sidebar z-30 text-white min-h-screen  transition-all duration-300`}>
        <div className="flex relative w-full  p-4">

        <span className="absolute top-6 -right-4 w-8 h-8 bg-white rounded-md flex items-center justify-center shadow-[0_0_5px_#00000015] cursor-pointer" onClick={handleSidebar}> <MdKeyboardDoubleArrowLeft className={`${showSidebar ? "" : "rotate-180"} text-black text-2xl transition-all duration-300`}/></span>
        {showSidebar ? <img className="w-40 pb-6 invert" src={Logo} alt="bildkart logo" />
        : <img className="w-10 pb-9 " src={fav} alt="bildkart favicon" />}
        </div>
       
        <ul className="flex flex-col gap-3 p-3 pt-0 overflow-y-scroll admin-sidebar h-full ">
          <li className="">
            < Link to={'/admin'} className="admin-list w-full flex gap-3 text-xl items-center hover:bg-white transition-all duration-300 p-2 rounded-lg hover:text-teal-950 cursor-pointer"> <span className="bg-orange-500 text-white h-8 w-8 min-w-8  rounded-full flex justify-center items-center  "> <AiFillDashboard className="text-xl "/></span>  <span className={`${showSidebar ? "opacity-100" : "opacity-0"} transition-all duration-300 `}> Dashboard </span> </ Link>
            
          </li>
          <li className="">
            <button className={` ${submenuShow === 1 && "mb-4"} admin-list w-full  flex gap-2 text-xl items-center justify-between hover:bg-white transition-all duration-300 p-2 rounded-lg hover:text-teal-950 cursor-pointer`} onClick={()=>handleSubmenu(1)}><div className="flex items-center justify-center gap-2"> <span className="bg-orange-500 text-white h-8 w-8 min-w-8  rounded-full flex justify-center items-center "> < FaUsers className="text-xl"/></span> <span className={`${showSidebar ? "opacity-100" : "opacity-0"} transition-all duration-300 `}> User Management </span></div> <span className="para"><FaAngleDown /></span> </button>
            <ul className={`${submenuShow === 1 ? "h-full p-5" : "h-0 pl-5"} flex flex-col gap-5  pt-0 overflow-hidden list-disc ml-7 transition-all duration-300`}>
              <li><Link to={"buyer"} className="capitalize text-xl ">Manage Buyer</Link></li>
              <li><Link to={"suppliers"} className="capitalize text-xl ">Manage Supplier</Link ></li>
              
            </ul>
          </li>
       
          <li className="">
            <button className={` ${submenuShow === 2 && "mb-4"} admin-list w-full  flex gap-3 text-xl items-center justify-between hover:bg-white transition-all duration-300 p-2 rounded-lg hover:text-teal-950 cursor-pointer`} onClick={()=>handleSubmenu(2)}><div className="flex items-center justify-center gap-3"> <span className="bg-orange-500 text-white h-8 w-8 min-w-8  rounded-full flex justify-center items-center "> < AiFillProduct className="text-xl"/></span> <span className={`${showSidebar ? "opacity-100" : "opacity-0"} transition-all duration-300 `}> Products </span></div> <span className="para"><FaAngleDown /></span> </button>
            <ul className={`${submenuShow === 2 ? "h-full p-5" : "h-0 pl-5"} flex flex-col gap-5  pt-0 overflow-hidden list-disc ml-7 transition-all duration-300`}>
              <li><Link to={"category"} className="capitalize text-xl ">category</Link></li>
              <li><Link to={"sub-category"} className="capitalize text-xl ">sub category</Link ></li>
              <li><Link to={"specification"} className="capitalize text-xl ">Specification</Link></li>
              <li><Link to={"catalog"} className="capitalize text-xl ">create catalog</Link></li>
              <li><Link to={"product-list"} className="capitalize text-xl ">product list</Link></li>
            </ul>
          </li>
          <li className="">
            <button className={` ${submenuShow === 3 && "mb-4"} admin-list w-full flex gap-3 text-xl items-center justify-between hover:bg-white transition-all duration-300 p-2 rounded-lg hover:text-teal-950 cursor-pointer`} onClick={()=>handleSubmenu(3)}><div className="flex items-center justify-center gap-3"> <span className="bg-orange-500 text-white h-8 w-8 min-w-8  rounded-full flex justify-center items-center "> < FaCartPlus className="text-xl"/></span> <span className={`${showSidebar ? "opacity-100" : "opacity-0"} transition-all duration-300 `}> Orders </span></div> <span className="para"><FaAngleDown /></span> </button>
            <ul className={`${submenuShow === 3 ? "h-full p-5" : "h-0 pl-5"} flex flex-col gap-5  pt-0 overflow-hidden list-disc ml-7 transition-all duration-300`}>
              <li><Link to={"new-order"} className="capitalize text-xl ">New Order </Link></li>
              <li><Link to={"order-history"} className="capitalize text-xl ">order history</Link></li>
              <li><Link to={''} className="capitalize text-xl ">order details</Link></li>
              <li><Link to={''} className="capitalize text-xl ">invoice</Link></li>
            </ul>
          </li>
          <li className="">
            <Link to={'inquiries'} className="admin-list w-full flex gap-3 text-xl items-center hover:bg-white transition-all duration-300 p-2 rounded-lg hover:text-teal-950 cursor-pointer"> <span className="bg-orange-500 text-white h-8 w-8 min-w-8  rounded-full flex justify-center items-center  "> < BsFillChatRightQuoteFill className="text-xl"/></span>  <span className={`${showSidebar ? "opacity-100" : "opacity-0"} transition-all duration-300 `}> Inquiries </span> </Link>
          </li>
          <li className="">
            <Link to={'contact'} className="admin-list w-full flex gap-3 text-xl items-center hover:bg-white transition-all duration-300 p-2 rounded-lg hover:text-teal-950 cursor-pointer"> <span className="bg-orange-500 text-white h-8 w-8 min-w-8  rounded-full flex justify-center items-center "> < RiContactsBook3Fill className="text-xl"/></span>  <span className={`${showSidebar ? "opacity-100" : "opacity-0"} transition-all duration-300 `}> Contact Us </span> </Link>
          </li>
        </ul>
      </div>

      <div className={`flex-1 ${showSidebar ? "pl-74" :"pl-22"} transition-all duration-300  bg-stone-100 min-h-screen `}>
        <DashboardHeader/>
        <Outlet /> 
      </div>
    </div>
  );
};

export default Admin;
