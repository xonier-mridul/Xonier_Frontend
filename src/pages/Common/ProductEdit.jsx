import React, {useState, useEffect} from 'react'
import ProductEditPage from '../../components/common/ProductEditPage'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductEdit = () => {

    const [categoryData, setCategoryData] = useState([]);
    const [subCategoryData, setSubCategoryData] = useState([]);
    const [sellerData, setSellerData] = useState([]);


    const { id } = useParams();
    const navigate = useNavigate();
  
   
  
    const getCategory = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}category`,{withCredentials: true});
        if (response.status === 200) setCategoryData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
  
    const getSubCategory = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}sub-category`, {withCredentials: true});
        if (response.status === 200) setSubCategoryData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
  
    const getSeller = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}user/supplier`, {withCredentials: true});
        if (response.status === 200) setSellerData(response.data.user);
      } catch (error) {
        console.error(error.message);
      }
    };
  
    useEffect(() => {
  
     
      getCategory();
      getSubCategory();
      getSeller();
    }, [id]);
  return (
    <>
      <div className='p-5 flex flex-col gap-5'>
       
         <ProductEditPage  categoryData={categoryData} subCategoryData={subCategoryData} sellerData={sellerData}/>
      </div>
    </>
  )
}

export default ProductEdit
