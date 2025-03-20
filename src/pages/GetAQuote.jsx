import React from 'react'
import PageBanner from '../components/PageBanner'
import BuyerBg from "../assets/Buyer-bg.jpg"
import GetAQuoteFrom from '../components/GetAQuoteFrom'

const GetAQuote = () => {
  return (
    <>
      <PageBanner bgImg={BuyerBg} subHeading={"Get a"} heading={"Quote"}/>
      <GetAQuoteFrom/>
    </>
  )
}

export default GetAQuote
