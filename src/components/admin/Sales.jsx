import React from 'react'
import SalesChart from './SalesChart'
import DailySales from './DailySales'

const Sales = () => {
  return (
    <>
      <div className='flex gap-5'>
        <div className='w-3/5'>
            <SalesChart/>
        </div>
        <div className='w-2/5'>
            <DailySales/>
        </div>
      </div>
    </>
  )
}

export default Sales
