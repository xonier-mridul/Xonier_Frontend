import React, {useState, useEffect} from 'react'
import BuyerMonitor from '../../components/buyer/BuyerMonitor'
import BuyerDashboardRowTwo from '../../components/buyer/BuyerDashboardRowTwo'
import api from "../../components/common/api"

const BuyerDashboard = () => {
   const [orderCount, setOrderCount] = useState(0)
   const [deliveredOrderCount, setDeliveredOrderCount] = useState(0)
   const [buyerCount, setBuyerCount] = useState(0)
   // Get placed order count

   const getOrderCount = async()=>{
    try {
      const response = await api.get('/order/buyer-order', {withCredentials: true})
      if(response.status === 200){
        setOrderCount(response?.data?.count)
      }
    } catch (error) {
      console.error(error)
    }
   }

   // Get successfully delivered count

   const getDeliveredOrderCount = async()=>{
    try {
      const response = await api.get('/order/buyer-delivered-order-count', {withCredentials: true})
      if(response.status === 200){
       setDeliveredOrderCount(response.data?.count)
      }
    } catch (error) {
      console.error(error)
    }
   }

   const getBuyerCount = async()=>{
    try {
      const response = await api.get('/user/buyer-count', {withCredentials: true})
      if(response.status ===200){
         setBuyerCount(response.data?.count)
      }
    } catch (error) {
      console.error(error)
    }
   }

   useEffect(() => {
     getOrderCount();
     getDeliveredOrderCount();
     getBuyerCount()
   }, [])
   

  return (
    <>
      <div className='p-5 flex flex-col gap-5'> 
        <BuyerMonitor orderCount={orderCount} deliveredOrderCount={deliveredOrderCount} buyerCount={buyerCount}/>
        <BuyerDashboardRowTwo/>
      </div>
    </>
  )
}

export default BuyerDashboard
