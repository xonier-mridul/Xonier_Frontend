import React,{useEffect, useState} from 'react'
import axios from 'axios'
import MainMoniter from '../../components/admin/MainMoniter';
import QuoteTable from '../../components/admin/QuoteTable';
import Sales from '../../components/admin/Sales';
import DashboardRowThree from '../../components/admin/DashboardRowThree';

const Dashboard = () => {


  return (
     <>
     <div className='p-5 flex flex-col gap-5'>      
        <MainMoniter/>
        <Sales/>
        <DashboardRowThree/>
        <QuoteTable/>
     </div>
        
     </>
  )
}

export default Dashboard
