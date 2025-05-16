import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CompareQuotationComponent from '../../components/admin/CompareQuotationComponent'

const CompareQuotation = () => {
const [vrfqData, setVrfqData] = useState([]);
const [brfqData, setBrfqData] = useState([]);
const [supplierData, setSupplierData] = useState([]);

  const getVRFQs = async()=>{
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}vrfq/getall`, {withCredentials: true});
        if(response.status === 200){
           setVrfqData(response.data?.vrfq)
        }
      } catch (error) {
        console.error(error)
      }
  }

  const getBRFQs = async()=>{
    try{
       const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}brfq/all`, {withCredentials: true})
       if(response.status === 200){
        setBrfqData(response.data.brfqs)
       }
    }
    catch(err){
 console.error(err)
    }
  }

  const getSupplierData = async()=>{
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}user/supplier`, {withCredentials: true});
      if(response.status === 200){
        setSupplierData(response.data.user)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getVRFQs();
    getBRFQs();
    getSupplierData();
  }, [])
  
  return (
    <>
      <div className='p-5 flex flex-col gap-5'>
        <CompareQuotationComponent vrfqData={vrfqData} brfqData={brfqData} supplierData={supplierData} getVRFQ={getVRFQs}/>
      </div>
    </>
  )
}

export default CompareQuotation
