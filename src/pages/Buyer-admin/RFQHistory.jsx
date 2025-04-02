import React, {useState, useEffect} from 'react';
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom';
import RFQHistoryComponent from '../../components/buyer/RFQHistoryComponent';




const RFQHistory = () => {
    const [rfqHistory, setRfqHistory] = useState([]);

    const {id} = useParams()

    const getHistory = async()=>{
     try {
        if(!id) return;
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}new-rfq/history/${id}`);
        if(response.status === 200){
           setRfqHistory(response.data)
        }
     } catch (error) {
        console.error(error);
     }
    }

    useEffect(() => {
     getHistory();
    }, [])
    

  return (
    <>
      <div className='p-5 m-5 flex flex-col gap-5'>
         <RFQHistoryComponent rfqHistory={rfqHistory} setRfqHistory={setRfqHistory} id={id}/>
      </div>
    </>
  )
}

export default RFQHistory
