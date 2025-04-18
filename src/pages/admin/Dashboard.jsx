import React,{useEffect, useState} from 'react'
import axios from 'axios'
import MainMoniter from '../../components/admin/MainMoniter';
import QuoteTable from '../../components/admin/QuoteTable';
import Sales from '../../components/admin/Sales';
import DashboardRowThree from '../../components/admin/DashboardRowThree';

const Dashboard = () => {
   const [userCount, setUserCount] = useState({})

   const getUsersData = async(req, res)=>{
      try {
         const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}user/quantity`)
         if(response.status === 200){
             setUserCount(response.data)
         }
      } catch (error) {
         console.error(error)
      }
   }

   useEffect(() => {
     getUsersData();
   }, []);
   


  return (
     <>
     <div className='p-5 flex flex-col gap-5'>      
        <MainMoniter userQuantityData={userCount}/>
        <Sales/>
        <DashboardRowThree/>
        <QuoteTable/>
     </div>
        
     </>
  )
}

export default Dashboard
