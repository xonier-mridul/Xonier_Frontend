import React from 'react'
import PageBanner from '../components/PageBanner'
import Contacts from "../assets/Contact-bg.jpg"
import ContactForm from '../components/ContactFrom'
import Map from '../components/Map'

const Contact = () => {
  return (
    <>
      <PageBanner bgImg={Contacts} heading={"Us"} subHeading={"Contact"}/>
      <ContactForm />
      <Map  />
    </>
  )
}

export default Contact
