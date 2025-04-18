import React, {useState, useEffect} from 'react'
import axios from "axios"
import SupplierBRFQTable from '../../components/supplier/SupplierBRFQTable'

const NewBRFQ = () => {
   const [assignedBRFQData, setAssignedBRFQData] = useState([])

  const getAssignedBRFQ = async()=>{
        try {
          const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}assigned/getbysupplier`, {withCredentials: true});
          if(response.status === 200){
            setAssignedBRFQData(response?.data?.assignBRFQ);
            console.log(response?.data?.assignBRFQ);
          }
        } catch (error) {
          console.error(error)
        }
  }
  
  useEffect(()=>{
    getAssignedBRFQ()
  },[])

  return (
    <>
     <div className='p-5 flex flex-col gap-5'> 
      <SupplierBRFQTable assignBRFQ={assignedBRFQData} />
      </div> 
    </>
  )
}

export default NewBRFQ
