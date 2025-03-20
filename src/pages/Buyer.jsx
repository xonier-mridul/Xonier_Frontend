import React from 'react'
import PageBanner from '../components/PageBanner'
import Become from '../components/Become'

// Media Start
import BuyerBg from "../assets/Buyer-bg.jpg"
import Order from "../assets/order.png"
import DeliveryTime from "../assets/delivery-time.png"
import Idea from "../assets/idea-organization.png"
import World from "../assets/worldwide-delivery.png"
import BuyerImg from "../assets/buyer-img.jpg";
// Media End

const Buyer = () => {
  return (
    <>
      <PageBanner bgImg={BuyerBg} subHeading={"Become a"} heading={"Buyer"}/>
      <Become img={BuyerImg} span={"Become a Buyer"} heading={'Why Buyers Choose BildKart'} para={"BildKart stands out by offering a streamlined procurement process, connecting buyers with reliable suppliers, transparent pricing, and comprehensive support. Simplify your material management while saving time, reducing costs, ensuring project success, and accessing a wide range of construction materials. Our intuitive platform empowers buyers with advanced tools for comparison, budgeting, and seamless order management, making construction procurement more efficient and stress-free."} paraTwo={"I am here to support your journey towards personal and professional growth! Whether you have questions about my coaching services."} hTwo={"Simplify Your"} hTwoSpan={"Procurement"} hThree={"Buyers"} imgOne={Order} imgTwo={DeliveryTime} imgThree={Idea} imgFour={World} listOne="Quick and easy to order the material you need" listTwo="Receive your material at the right time" listThree="Easy management of your material orders" listFour="Easy management of logistics"
      lOne="Unlimited tenders for material" lTwo="Unlimited tenders for subcontractors" lThree="Unlimited access to large network of material suppliers for all requirements"
      lFour="Easy to use system for organising material delivery and pickup" lFive="Easy to use system for organising material delivery and pickup" btn={"Register as buyer"} btnLink={"/buyer-register"}/>
    </>
  )
}

export default Buyer
