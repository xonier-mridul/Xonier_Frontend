import React, {useState, useEffect} from 'react'
import AdminCatalogForm from '../../components/admin/AdminCatalogForm'
import api from '../../components/common/api'

const AdminCatalog = () => {
  const [supplierData, setSupplierData] = useState([])


  const getSupplierData = async()=>{
    try {
      const response = await api.get(`/user/supplier`, {withCredentials: true})
      if(response.status ===200){
        setSupplierData(response.data?.user)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getSupplierData();
  }, [])
  
  return (
    <div className='p-5 flex flex-col gap-5'>
      <AdminCatalogForm supplierData={supplierData}/>
    </div>
  )
}

export default AdminCatalog
