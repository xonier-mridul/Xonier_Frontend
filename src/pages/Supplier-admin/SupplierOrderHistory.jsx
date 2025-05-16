import React, {useState, useEffect} from 'react'
import OrderHistoryTable from '../../components/common/OrderHistoryTable'
import axios from 'axios';

const SupplierOrderHistory = () => {
    const [orderData, setOrderData] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
  
     const getOrderData = async()=>{
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}order/supplier-order-history?page=${currentPage}`, {withCredentials: true});
        if(response.status===200){
          setOrderData(response.data?.orders);
          setTotalPages(response.data.totalPages);
          return
        }
      } catch (error) {
        console.error(error)
      }
     }
  
    useEffect(() => {
      getOrderData();
    }, [])
  return (
    <>
      <div className='p-5 flex flex-col gap-5'>
        <OrderHistoryTable orderData={orderData} totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </>
  )
}

export default SupplierOrderHistory
