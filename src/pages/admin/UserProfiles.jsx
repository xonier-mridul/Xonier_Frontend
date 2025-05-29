import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UserProfileComponent from '../../components/common/UserProfileComponent'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../components/common/api'

const UserProfiles = () => {
    const [userData, setUserData] = useState({})
    const [currentOrder, setCurrentOrder] = useState(0)
    const [buyerOrderDeliveredCount, setBuyerOrderDeliveredCount] = useState(0)
    const [buyerOrderCount, setBuyerOrderCount] = useState(0)

   const {id} = useParams()

   const getUserProfileData = async()=>{
    try{
      const response = await api.get(`/user/byid/${id}`, {withCredentials: true})
      if(response.status === 200){
        setUserData(response.data.user)
      }
    }
    catch(err){
        console.log(err)
    }
   }

   const getCurrentOrders = async()=>{
    try {
      const response = await api.get(`/order/supplier-order-by-id/${id}`, {withCredentials: true})
      if(response.status === 200){
        setCurrentOrder(response.data?.totalOrders)
      }
    } catch (error) {
      console.error(error)
    }
   }

   const getBuyerDeliveredOrderCount = async()=>{
    try {
      const response = await api.get(`/order/buyer-delivered-count-id/${id}`, {withCredentials: true})
      if(response.status === 200){
        setBuyerOrderDeliveredCount(response.data?.count)
        
      }
    } catch (error) {
      console.error(error)
    }
   }

   const getBuyerOrderCount = async()=>{
    try {
      const response = await api.get(`/order/buyer-order-count-id/${id}`, {withCredentials: true})
      if(response.status === 200){
         setBuyerOrderCount(response?.data?.count)
         console.log('buyer order count', response.data?.count)
      }
    } catch (error) {
      console.error(error)
    }
   }

   useEffect(()=>{
      getUserProfileData()
      getCurrentOrders()
      getBuyerDeliveredOrderCount()
      getBuyerOrderCount()
   },[])

  return (
    <>
      <div className='p-5 flex flex-col gap-5'>
       <UserProfileComponent userData={userData} currentOrder={currentOrder} buyerOrderDeliveredCount={buyerOrderDeliveredCount} buyerOrderCount={buyerOrderCount}/>
      </div>
    </>
  )
}

export default UserProfiles
