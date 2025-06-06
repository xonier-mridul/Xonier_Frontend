import React, {useEffect} from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ChatBot from './components/ChatBot'
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from 'aos'


function App() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    })
  }, [])
  
  
  return (
    <>
    <ToastContainer />
     <Navbar/>
     <ScrollToTop/>
     <AnimatedCursor
        innerSize={0}
        outerSize={10}
        color="155, 237, 124"
        showSystemCursors={true}
        outerAlpha={0.3}
        innerScale={0.7}
        trailingSpeed={5}
        outerStyle={{
          background: "linear-gradient(263deg, #73ED7C 0.16%, #019297 99.84%)",
          mixBlendMode: "normal", 
        }}
        outerScale={1.7}
        
      />
     <ChatBot/>
     <Outlet/>
     <Footer/>
    
    </>
  )
}

export default App
