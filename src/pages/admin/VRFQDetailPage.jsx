import React, {useState, useEffect} from 'react'
import axios from 'axios'
import VRFQDetail from '../../components/admin/VRFQDetail'
import { useParams, useNavigate } from 'react-router-dom'

const VRFQDetailPage = () => {

  const [vrfqData, setVrfqData] = useState({})

  const params = useParams();

  const id = params.id;
  

   const getVRFQDetail = async(id)=>{
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}vrfq/getbyid/${id}`,{withCredentials: true});
      if(response.status === 200){
        setVrfqData(response.data.vrfq)
      }

    } catch (error) {
      console.error(error)
    }
   }

   useEffect(() => {
     getVRFQDetail(id);
   }, [])
   

  return (
    <>
      <div className='p-5 flex flex-col gap-5'>
        <VRFQDetail vrfqData={vrfqData}/>
      </div>
    </>
  )
}

export default VRFQDetailPage
