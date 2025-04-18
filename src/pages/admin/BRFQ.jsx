import axios from 'axios'
import React, {useEffect, useState} from 'react'
import BRFQTable from '../../components/admin/BRFQTable'


const BRFQ = () => {
  const [BRFQData, setBRFQData] = useState([])

  const getBRFQ = async()=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}brfq/all`)
        if(response.status === 200){
          setBRFQData(response.data.brfqs);
        } 
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getBRFQ()
  }, [])
  

  return (
    <>
      <div className='p-5 flex flex-col gap-5'>
         <BRFQTable BRFQData={BRFQData} />
      </div>
    </>
  )
}

export default BRFQ
