import React, {useState, useEffect} from 'react'
import axios from 'axios'
import BuyerOrderTable from '../../components/buyer/BuyerOrderTable'

const BuyerOrder = () => {
     const [orderData, setOrderData] = useState([]);
      const [totalPages, setTotalPages] = useState(null);
      const [currentPage, setCurrentPage] = useState(1);


      const getOrderData = async()=>{
        try {
          const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}order/buyer-user-order?page=${currentPage}`, {withCredentials: true});
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
      <BuyerOrderTable orderData={orderData} totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default BuyerOrder
