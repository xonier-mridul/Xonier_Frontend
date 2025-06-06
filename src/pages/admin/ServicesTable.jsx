import React,{useState, useEffect} from 'react'
import api from '../../components/common/api'
import ServicesTableComponent from '../../components/admin/ServicesTableComponent'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

const ServicesTable = () => {
   const [searchTerm, setSearchTerm] = useState("");
  const [catalogData, setCatalogData] = useState([]);

const [servicesData, setServicesData] = useState([])
  
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [errMessage, setErrMessage] = useState(null);
  const [deleteCatalogId, setDeleteCatalogId] = useState(null)
  
  const navigate = useNavigate();

  
  const filteredData = servicesData?.filter(item=>`${item.name} ${item.category.category}`.toLowerCase().includes(searchTerm.toLowerCase()))

  const filterDataLength = filteredData.length;

  const getServicesData = async()=>{
    try {
        const response = await api.get(`/service/paginated/getall?${currentPage}`, {withCredentials: true})
        if(response.status === 200){
            setServicesData(response.data?.data)
            setTotalPages(response.data.totalpages)
        }
    } catch (error) {
        console.error(error)
    }
  }



  useEffect(() => {
    getServicesData()
  }, [])

  const handleDelete = async(id)=>{
    if(!id) return setErrMessage('Id is not find')
    try {
        const confirm = window.confirm('Are you sure for delete service?')
        if (!confirm) return
        const response = await api.delete(`/service/delete/${id}`, {withCredentials: true})
        if(response.status === 200){
            toast.success(`${id} is deleted successfully`)
            getServicesData()
            setErrMessage('')
        }
    } catch (error) {
        console.error(error)
        setErrMessage(error?.response?.data?.message)
    }
  }
  
  return (
    <>
      <div className='p-5 flex flex-col gap-5'>
        <ServicesTableComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterDataLength={filterDataLength} totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} errMessage={errMessage} filteredData={filteredData} handleDelete={handleDelete}/>
      </div>
    </>
  )
}

export default ServicesTable
