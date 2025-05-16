import React,{useEffect, useState} from 'react'
import axios from 'axios'
import MainMoniter from '../../components/admin/MainMoniter';
import QuoteTable from '../../components/admin/QuoteTable';
import Sales from '../../components/admin/Sales';
import DashboardRowThree from '../../components/admin/DashboardRowThree';

const Dashboard = () => {
   const [userCount, setUserCount] = useState({});
   const [orderCount, setOrderCount] = useState(null);

   const getUsersData = async()=>{
      try {
         const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}user/quantity`, {withCredentials: true})
         if(response.status === 200){
             setUserCount(response.data)
         }
      } catch (error) {
         console.error(error)
      }
   }

   const getTotalOrders = async()=>{
      try {
         const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}order/total-order`, {withCredentials: true})
         if(response.status === 200){

            setOrderCount(response.data.totalOrders)
         }
      } catch (error) {
         console.error(error)
      }
   }

   useEffect(() => {
     getUsersData();
     getTotalOrders()
   }, []);
   

  return (
     <>
     <div className='p-5 flex flex-col gap-5'>      
        <MainMoniter userQuantityData={userCount} orderCount={orderCount}/>
        <Sales/>
        <DashboardRowThree/>
        <QuoteTable/>
     </div>
        
     </>
  )
}

export default Dashboard
