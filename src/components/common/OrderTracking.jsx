import React from 'react'
import {
  FaCheckCircle,
  FaCog,
  FaTruck,
  FaCheckDouble,
  FaTimesCircle,
  FaBox
} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const processStages = ['confirmed', 'processing', 'dispatch', 'shipped', 'delivered']


const iconMap = {
  confirmed: <FaCheckCircle size={24} />,
  processing: <FaCog size={24} />,
  dispatch: <FaBox size={24} />,
  shipped: <FaTruck size={24} />,
  delivered: <FaCheckDouble size={24} />,
  cancelled: <FaTimesCircle size={24} />,
}

const OrderTracking = ({ orderData, id, user }) => {
  
  const process = orderData?.process?.toLowerCase()
  const currentStep = processStages.findIndex((stage) => stage === process)

  return (
    
    <div className="bg-white shadow-lg rounded-2xl m-5 border-2 border-emerald-500 overflow-hidden">
      <div className='bg-emerald-500 p-4'>
        <h2 className='text-white text-lg font-medium tracking-wide text-center'>Order Tracking:({id})</h2>
      </div>

      <div className='bg-slate-100 p-4 grid grid-cols-3'>
        <h3 className='text-lg text-center capitalize'>{orderData?.process}</h3>
        <h3 className='text-lg text-center capitalize'>Status: {orderData.process}</h3>
        <h3 className='text-lg text-center capitalize'>Expected Date: {"N/A"}</h3>
      </div>

      <div className='flex flex-col gap-8 py-6 px-6'>
        <h2 className='capitalize text-lg font-bold text-center'>Order Tracker</h2>

        <div className="relative w-full">
          
          <div className="absolute top-8 left-0 right-0 h-1 bg-gray-300 z-0 transform -translate-y-1/2" />

          {currentStep >= 0 && (
            <div
              className="absolute top-8 left-0 h-1 bg-emerald-500 z-10 transition-all duration-500 transform -translate-y-1/2"
              style={{ width: `${(currentStep / (processStages.length - 1)) * 100}%` }}
            />
          )}

          <div className="flex justify-between relative z-20">
            {processStages.map((stage, index) => (
              <div key={index} className="flex flex-col items-center w-1/6 text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-1
                    ${index <= currentStep ? 'bg-emerald-500' : 'bg-gray-300 text-gray-600'}`}
                >
                  {iconMap[stage]}
                </div>
                <span
                  className={`text-sm font-semibold capitalize
                    ${index <= currentStep ? 'text-emerald-600' : 'text-gray-500'}`}
                >
                  {stage}
                </span>
              </div>
            ))}
          </div>
        </div>
        {(user?.role === "supplier" && orderData.status === false )  && <div  className='flex justify-end '>
           <Link to={`/supplier-admin/order/order-update/${id}`} className='bg-emerald-600 text-white px-6 py-2.5 rounded-lg'>Update Tracking</Link>
          </div>}
      </div>
    </div>
  )
}

export default OrderTracking
