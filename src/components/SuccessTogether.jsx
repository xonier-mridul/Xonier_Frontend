import React from 'react'
import { Link } from 'react-router-dom';

// Icons Start
import { FaCheck, FaArrowRight  } from "react-icons/fa6";
import { TbSlashes } from "react-icons/tb";
import SaveMoney from "../assets/save-money.svg"
import Financing from "../assets/Financing.svg"
import Statistic from "../assets/statistics.svg"
import Builder from '../assets/engineer.png'
import Supplier from '../assets/supplier.png'
import Network from '../assets/network.svg'
import UPI from '../assets/upi.svg'
import Product from '../assets/product.svg'
import PriceOne from '../assets/pricing-1.svg'
import PriceTwo from '../assets/pricing-2.svg'
import PriceThree from '../assets/pricing-3.svg'
import Refresh from '../assets/refresh.webp'
// Icons End

const SuccessTogether = () => {
  return (
    <>
    <div className='py-24 bg-stone-100'>
      <div className=' max-w-7xl mx-auto flex  gap-12'>
          <div className="w-[41%]">
          <div className='flex flex-col gap-6 sticky top-24'>
               <h3 className="uppercase tracking-widest  font-semibold text-sm flex items-center gap-2  ">
                         
                           <TbSlashes className="text-xl text-green-400" />Building Success Together
               </h3>
               <h2 className="text-[50px] font-light leading-tight ">
 
               Marketplace for
            <span className="font-bold trans-color"> Builders </span>
            and
            <span className="font-bold trans-color"> suppliers </span> Growth
          </h2>
          <p className="para leading-relaxed mb-3">
            At BildKart, we empower the construction industry by connecting
            buyers and sellers through a seamless marketplace. Our platform
            simplifies procurement, optimizes supply chains, and drives
            innovation, ensuring efficiency and growth for businesses worldwide.
          </p>
          <div className='flex'>
          <Link to={"/contact"} className="capitalize font-bold flex items-center gap-3 rounded-full btn-bg text-white" >
             Get all touch <FaArrowRight className="text-lg btn-arrow" /></Link>
             </div>
             </div>
          </div>
          <div className="w-[59%] flex flex-col gap-8">
            <div className="grid grid-cols-3 gap-7">
                <div className='flex flex-col items-center justify-center gap-2 service-item'>
                  <div className="icon-box">
                      <img className='w-10 h-10' src={SaveMoney} alt="save money" />
                  </div>
                  <h3 className='text-lg font-semibold text-center'>Access to Materials Quicker Reducing Extra Cost</h3>
                </div>
                <div className='flex flex-col -mt-24 items-center justify-center gap-2 service-item'>
                  <div className="icon-box">
                      <img className='w-10 h-10' src={Financing} alt="save money" />
                  </div>
                  <h3 className='text-lg font-semibold text-center'>Get Financing Approval in Minutes with Better Terms</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 service-item'>
                  <div className="icon-box">
                      <img className='w-10 h-10' src={Statistic} alt="save money" />
                  </div>
                  <h3 className='text-lg font-semibold text-center'>Get Financing Approval in Minutes with Better Terms</h3>
                </div>

            </div>
            <div className='grid grid-cols-3 gap-6 py-6 rounded-lg bg-[#4ed08514]'>
                 <div className='flex flex-col items-center justify-center gap-2 service-item' >
                    <div className='icon-box'>
                        <img className='w-12 h-12' src={Builder} alt="builder" />
                    </div>
                        <h3 className='text-3xl font-black trans-color'>Builders</h3>
                 </div>
                 <div className='flex flex-col items-center justify-center gap-2 service-item' >
                    <img className='h-28 w-28 rotate' src={Refresh} alt="refresh" />
                 </div>
                 <div className='flex flex-col items-center justify-center gap-2 service-item' >
                    <div className='icon-box'>
                        <img className='w-12 h-12' src={Supplier} alt="builder" />
                    </div>
                        <h3 className='text-3xl font-black trans-color'>Supplier</h3>
                 </div>

            </div>
            <div className="grid grid-cols-3 gap-6 pb-16 border-b-[1px] border-[#00000020]">
                <div className='flex flex-col items-center justify-center gap-2 service-item'>
                  <div className="icon-box">
                      <img className='w-10 h-10' src={Network} alt="save money" />
                  </div>
                  <h3 className='text-lg font-semibold text-center'>Access to a network of vetted builders and high rise projects</h3>
                </div>
                <div className='flex flex-col mt-24 items-center justify-center gap-2 service-item'>
                  <div className="icon-box">
                      <img className='w-10 h-10' src={UPI} alt="save money" />
                  </div>
                  <h3 className='text-lg font-semibold text-center'>Higher Margins Through Buildstock’s Net 5 payment</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 service-item'>
                  <div className="icon-box">
                      <img className='w-10 h-10' src={Product} alt="save money" />
                  </div>
                  <h3 className='text-lg font-semibold text-center'>Digitization & standardization companies product catalog</h3>
                </div>

            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
                <div className='flex items-center gap-4'>
                 <img src={PriceOne} alt="price one" />
                 <span className='font-medium'>Get 30 day free trial</span>
                </div>
                <div className='flex items-center gap-4'>
                 <img src={PriceTwo} alt="price one" />
                 <span className='font-medium'>No any hidden fees pay</span>
                </div>
                <div className='flex items-center gap-4'>
                 <img src={PriceThree} alt="price one" />
                 <span className='font-medium'>You can cancel anytime</span>
                </div>

            </div>
          </div>
      </div>
      </div>
    </>
  )
}

export default SuccessTogether
