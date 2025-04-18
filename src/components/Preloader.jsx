import React from 'react'

import BLogo from "../assets/b.png"

const Preloader = () => {
  return (
    <>
      <div className='fixed top-0 left-0 preloader right-0 bottom-0 w-full z-[1000] h-full flex justify-center items-center '>
        <div className='my-10 h-[100px] w-[100px] relative rounded'>
           <div className="loading"></div>
           <div className="absolute top-1/2 left-1/2 max-w-[78px] -translate-x-1/2 -translate-y-1/2">
              <img className='w-[78px]' src={BLogo} alt="BLogo" />
           </div>

        </div>
         
      </div>
    </>
  )
}

export default Preloader
