import React, {useState, useEffect} from 'react'
import PopularSeller from './PopularSeller'
import ProductStats from './ProductStats'
import axios from "axios"

const DashboardRowThree = () => {
  const [supplierData, setSupplierData] = useState([]);
  const [orderData, setOrderData] = useState([]);

  const getSupplierData = async()=>{
    try{
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}user/supplier`, {withCredentials: true})
        if(response.status === 200){
          setSupplierData(response.data?.user)
        }
    }catch(err){
      console.log(err)
    }
  }
  const newSupplierData = supplierData.sort((a,b)=>b?.deliveries - a?.deliveries)
  
  const getOrderData = async()=>{
    try{
     const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}order/all-received`, {withCredentials: true})
     if(response.status === 200){
      setOrderData(response.data.orders)
     }
    }catch(err){
      console.error(err)
    }
  }
  useEffect(()=>{
    getSupplierData();
    getOrderData()
  },[])



  return (
    <>
      <div className='flex w-full gap-5'>
          <div className='w-2/5'>
            <PopularSeller supplierData={newSupplierData}/>
          </div>
          <div className='w-3/5'>
             <ProductStats orderData={orderData}/>
          </div>
      </div>
    </>
  )
}

export default DashboardRowThree
