import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ApprovedRFQTable from '../../components/admin/ApprovedRFQTable'



const ApprovedRFQ = () => {
  const [rfqData, setRfqData] = useState([]);

  const getApprovedRFQs = async()=>{
     try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}new-rfq/approved`, {withCredentials: true});
      if(response.status === 200){
        setRfqData(response.data.rfq)
      }
     } catch (error) {
      console.error(error)
     }
  }

  useEffect(()=>{
      getApprovedRFQs()
  },[])
  return (
    <>
     
      <ApprovedRFQTable rfqData={rfqData}/>
     
    </>
  )
}

export default ApprovedRFQ
