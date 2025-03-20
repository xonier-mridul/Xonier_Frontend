import React from 'react'
import HomeBanner from '../components/HomeBanner'
import AboutSection from '../components/AboutSection'
import WhyChoose from '../components/WhyChoose'
import WhoWeAre from '../components/WhoWeAre'
import SuccessTogether from '../components/SuccessTogether'
import HowWeWork from '../components/HowWeWork'
import WhyBildkart from '../components/WhyBildkart'
import Testimonial from '../components/Testimonial'
import FAQ from '../components/FAQ'
import ClientCaraousal from '../components/ClientCaraousal'
import Team from '../components/Team'

// it is main home page of the website
const Home = () => {
  return (
    <>
      <HomeBanner/>
      <AboutSection/>
      <SuccessTogether/>
      <WhyChoose/>
      <WhoWeAre/>
      <HowWeWork/>
      <WhyBildkart/>
      <Team/>
      <Testimonial/>
      <FAQ/>
      <ClientCaraousal/>
    </>
  )
}

export default Home
