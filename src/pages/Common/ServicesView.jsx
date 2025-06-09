import React, {useState, useEffect} from 'react'
import ServicesViewComponent from '../../components/common/ServicesViewComponent'
import { useParams } from 'react-router-dom';
import api from '../../components/common/api';

const ServicesView = () => {

    const [serviceData, setServiceData] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const {id} = useParams()

    const getServiceData = async(id)=>{
        setIsLoading(true)
        try {
            const response = await api.get(`/service/get/${id}`, {withCredentials: true})
            if(response.status === 200){
                setServiceData(response.data?.data)
            }
        } catch (error) {
            console.error(error)
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
      getServiceData(id)
    }, [])
    
  return (
    <>
    <div className='p-5 flex flex-col gap-5'>
      <ServicesViewComponent serviceData={serviceData} isLoading={isLoading}/>
    </div>
    </>
  )
}

export default ServicesView
