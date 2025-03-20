import React, {useState} from 'react'
import BuyerRecentVendors from './BuyerRecentVendors'
import BuyerOrderedProduct from './BuyerOrderedProduct'

const BuyerDashboardRowTwo = () => {
  return (
    <>
      <div className='flex w-full gap-5'>
          <div className='w-2/5'>
           <BuyerRecentVendors/>
          </div>
          <div className='w-3/5'>
            <BuyerOrderedProduct/>
          </div>
      </div>
    </>
  )
}

export default BuyerDashboardRowTwo
