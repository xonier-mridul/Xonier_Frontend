import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AssignBRFQDetail from '../../components/supplier/AssignBRFQDetail'

const AssignedBRFQ = () => {

  const [data, setData] = useState({});

    const params = useParams()

    const id = params?.id

    const getAssignBRFQ = async(id)=>{
        try {
            if(!id) return;
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}assigned/getbyid/${id}`, {withCredentials: true});
            if(response.status === 200){
               setData(response.data?.brfq);
               console.log(response.data?.brfq);
            }
        } catch (error) {
            console.error(error);
        }
    }
   
  useEffect(() => {
    getAssignBRFQ(id)
  }, [])

  return (
    <div className='p-8 flex flex-col gap-5'>
       <AssignBRFQDetail data={data}/>
    </div>
  )
}

export default AssignedBRFQ
