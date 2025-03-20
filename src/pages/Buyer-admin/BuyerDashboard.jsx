import React from 'react'
import BuyerMonitor from '../../components/buyer/BuyerMonitor'
import BuyerDashboardRowTwo from '../../components/buyer/BuyerDashboardRowTwo'

const BuyerDashboard = () => {
  return (
    <>
      <div className='p-5 flex flex-col gap-5'> 
        <BuyerMonitor/>
        <BuyerDashboardRowTwo/>
      </div>
    </>
  )
}

export default BuyerDashboard
