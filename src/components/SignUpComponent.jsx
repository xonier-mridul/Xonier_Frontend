import React, {useState, useEffect} from 'react'
import buyer from "../assets/buyer.png"
import supplier from "../assets/supplier-icon.png"

import { FaAngleRight } from "react-icons/fa6";
import BuyerRegistrationForm from './BuyerRegistrationForm';
import SupplierRegistrationFrom from './SupplierRegistrationFrom';

const SignUpComponent = () => {
    const [formShow, setFormShow] = useState("supplier")
  return (
    <>
    <div className='bg-stone-200'>

      <div className='max-w-7xl  flex items-center gap-8 mx-auto pt-44 py-24 '>
         <div className='w-[35%] flex flex-col gap-8'>
             <h1 className='text-3xl font-bold'><span className='text-red-500 '> * </span> Are you want to join as</h1>
             <ul className='flex flex-col gap-4 '>
                <li className={`${formShow === "buyer" ? "border-teal-600 border-2" :"border-2 border-white"}  transition-all  py-3 px-5 rounded-lg bg-white flex justify-between gap-4 items-center cursor-pointer`} onClick={()=>setFormShow("buyer")}> <div className='flex gap-4 items-center'> <img className='w-9 h-9' src={buyer} alt="buyer" /> <h2 className='text-xl font-medium'>Register as Buyer</h2> </div> <FaAngleRight className='text-teal-600 text-2xl'/> </li>
                <li className={`${formShow === "supplier" ? "border-teal-600 border-2" :"border-2 border-white"} transition-all py-3 px-5 rounded-lg bg-white justify-between cursor-pointer flex gap-4  items-center`} onClick={()=>setFormShow("supplier")}> <div className='flex gap-4 items-center'> <img className='w-9 h-9' src={supplier} alt="supplier" /> <h2 className='text-xl font-medium'>Register as Supplier</h2></div> <FaAngleRight className='text-teal-600 text-2xl'/> </li>
             </ul>
         </div>
         <div className='w-[65%]'>
           {formShow === "buyer" && <BuyerRegistrationForm/>}
           {formShow === "supplier" && <SupplierRegistrationFrom/>}
         </div>

      </div>
    </div>
    </>
  )
}

export default SignUpComponent
