import React from 'react'
import { Outlet } from 'react-router-dom'

const CommonOutlet = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default CommonOutlet
