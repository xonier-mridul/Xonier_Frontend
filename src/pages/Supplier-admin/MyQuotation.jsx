import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MyQuotationTable from '../../components/supplier/MyQuotationTable'

const MyQuotation = () => {

    const [myQuotationData, setMyQuotationData] = useState([])

    const getMyQuotation = async()=>{
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}vrfq/getbyCreator`, {withCredentials: true});
            if(response.status === 200){
               setMyQuotationData(response.data.vrfq);
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
      getMyQuotation();
    }, [])
    
  return (

    <div className='p-5 flex flex-col gap-5'> 
      <MyQuotationTable myQuotationData={myQuotationData}/>
    </div>
  )
}

export default MyQuotation
