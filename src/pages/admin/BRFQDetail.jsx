import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import BRFQDetailTable from '../../components/admin/BRFQDetailTable'

const BRFQDetail = () => {

    const [data, setData] = useState({});

    const params = useParams()

    const id = params?.id

    const getAssignBRFQ = async(id)=>{
        try {
            if(!id) return;
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}brfq/single/${id}`, {withCredentials: true});
            if(response.status === 200){
               setData(response.data?.brfq);
            }
        } catch (error) {
            console.error(error);
        }
    }
   
  useEffect(() => {
    getAssignBRFQ(id)
  }, [])
  return (
    <div className='p-5 flex flex-col gap-5'>
      <BRFQDetailTable data={data}/>
    </div>
  )
}

export default BRFQDetail
