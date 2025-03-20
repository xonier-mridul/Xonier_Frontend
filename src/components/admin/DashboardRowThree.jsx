import React from 'react'
import PopularSeller from './PopularSeller'
import ProductStats from './ProductStats'

const DashboardRowThree = () => {
  return (
    <>
      <div className='flex w-full gap-5'>
          <div className='w-2/5'>
            <PopularSeller/>
          </div>
          <div className='w-3/5'>
             <ProductStats/>
          </div>
      </div>
    </>
  )
}

export default DashboardRowThree
