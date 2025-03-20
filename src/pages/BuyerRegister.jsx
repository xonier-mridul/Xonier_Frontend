import React from 'react'
import PageBanner from '../components/PageBanner'
import BuyerBg from "../assets/Buyer-bg.jpg"
import BuyerForm from '../components/BuyerForm'
import Map from '../components/Map'

const BuyerRegister = () => {
  return (
    <>
      <PageBanner bgImg={BuyerBg} subHeading={"Become a"} heading={"Buyer"}/>
      <BuyerForm />
      <Map/>
    </>
  )
}

export default BuyerRegister
