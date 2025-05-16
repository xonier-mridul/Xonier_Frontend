import React, {useState, useEffect} from 'react'

import axios from 'axios'

import QuotationDetailTable from '../../components/supplier/QuotationDetailTable'
import { useParams } from 'react-router-dom'

const QuotationDetail = () => {
    const {id}= useParams()

    const [quotationData, setQuotationData] = useState({});

    const QuotationDetail = async()=>{
        try{

            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}vrfq/getbyid/${id}`, {withCredentials: true})
            if(response.status === 200){
                setQuotationData(response.data.vrfq)
            }
        }
        catch(err){
            console.error(err)
        }
    }


    useEffect(() => {
      QuotationDetail()
    }, [])
    
  return (
    <div className='p-5 flex flex-col gap-5'>
      <QuotationDetailTable quotationData={quotationData}/>
    </div>
  )
}

export default QuotationDetail
