import React from 'react'
import PageBanner from '../components/PageBanner'

// Media Start 

import Suppliers from "../assets/Supplier-bg.jpg"
import Become from '../components/Become'
import Order from "../assets/order.png"
import DeliveryTime from "../assets/delivery-time.png"
import Idea from "../assets/idea-organization.png"
import World from "../assets/worldwide-delivery.png"
import SupplierImg from "../assets/supplier-img.jpg"

// Media End

const Supplier = () => {
  return (
    <>
      <PageBanner bgImg={Suppliers} subHeading={"Become a"} heading={"Supplier"}/>
      <Become img={SupplierImg} span={"Become a Supplier"} heading={'Why Suppliers Choose BildKart'} para={"BildKart stands out by offering a streamlined procurement process, connecting buyers with reliable suppliers, transparent pricing, and comprehensive support. Simplify your material management while saving time, reducing costs, ensuring project success, and accessing a wide range of construction materials. Our intuitive platform empowers buyers with advanced tools for comparison, budgeting, and seamless order management, making construction procurement more efficient and stress-free."} hTwo={'Connect with'} hTwoSpan={'Buyers'} hThree={'Suppliers'} imgOne={Order} imgTwo={DeliveryTime} imgThree={Idea} imgFour={World} listOne={'Easy to receive and respond to customer requests.'} listTwo={"Easy management of merchandise preparation and logistics."} listThree={'Easy management of invoicing'} listFour={'Easy management of logistics'} paraTwo={'I am here to support your journey towards personal and professional growth! Whether you have questions about my coaching services.'} lOne={'Unlimited tenders for material'} lTwo={'Unlimited tenders for subcontractors'} lThree={'Unlimited access to large network of material suppliers for all requirements'} lFour={'Easy to use system for organising material delivery and pickup'}
      lFive={'Easy to use system for organising material delivery and pickup'} btn={"Register as supplier"} btnLink={"/supplier-register"}/>
    </>
  )
}

export default Supplier
