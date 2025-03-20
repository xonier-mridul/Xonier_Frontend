import React from 'react'
import PageBanner from '../components/PageBanner'
import Suppliers from "../assets/Supplier-bg.jpg"
import SupplierForm from '../components/SupplierForm'

const SupplierRegister = () => {
  return (
    <>
      <PageBanner bgImg={Suppliers} subHeading={"Become a"} heading={"Supplier"}/>
      <SupplierForm/>
    </>
  )
}

export default SupplierRegister
