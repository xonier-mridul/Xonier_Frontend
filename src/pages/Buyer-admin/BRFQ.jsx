import axios from 'axios'
import React, {useEffect, useState} from 'react'
import BRFQTable from '../../components/buyer/BRFQTable'


const BRFQ = () => {
  const [BRFQData, setBRFQData] = useState([])

  return (
    <>
      <div className='p-5 flex flex-col gap-5'>
         <BRFQTable BRFQData={BRFQData} />
      </div>
    </>
  )
}

export default BRFQ
