import React, {useState, useEffect} from 'react'
import ProductEditPage from '../../components/common/ProductEditPage'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import api from '../../components/common/api'

const ProductEdit = () => {

    const [categoryData, setCategoryData] = useState([]);
    
    const [serviceData, setServiceData] = useState([])


  const getServiceData = async()=>{
    try {
      const response = await api.get(`/service/getall`, {withCredentials: true})
      if(response.status ===200){
        setServiceData(response.data?.data)
        console.log(response.data.data)
      }
    } catch (error) {
      console.error(error)
    }
  }



    const { id } = useParams();
    const navigate = useNavigate();
  
   
  
    const getCategory = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}category`,{withCredentials: true});
        if (response.status === 200) setCategoryData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

  
    useEffect(() => {
  
      getServiceData()
      getCategory();
 
     
    }, [id]);
  return (
    <>
      <div className='p-5 flex flex-col gap-5'>
       
         <ProductEditPage  categoryData={categoryData}  serviceData={serviceData}/>
      </div>
    </>
  )
}

export default ProductEdit
