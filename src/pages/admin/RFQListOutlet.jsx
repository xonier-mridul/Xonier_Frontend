import React from 'react'
import { Outlet } from 'react-router-dom'
const RFQListOutlet = () => {
  return (
    <div className='p-5 flex flex-col gap-5'>
      <Outlet/>
    </div>
  )
}

export default RFQListOutlet
