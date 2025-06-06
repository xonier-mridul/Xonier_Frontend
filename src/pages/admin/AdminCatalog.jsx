import React, {useState, useEffect} from 'react'
import AdminCatalogForm from '../../components/admin/AdminCatalogForm'
import api from '../../components/common/api'

const AdminCatalog = () => {
  const [serviceData, setServiceData] = useState([])


  const getServiceData = async()=>{
    try {
      const response = await api.get(`/service/getall`, {withCredentials: true})
      if(response.status ===200){
        setServiceData(response.data?.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getServiceData();
  }, [])
  
  return (
    <div className='p-5 flex flex-col gap-5'>
      <AdminCatalogForm serviceData={serviceData}/>
    </div>
  )
}

export default AdminCatalog
