import React, {useEffect, useState}  from 'react'
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


// MEDIA

import { FaUserEdit, FaListUl } from "react-icons/fa";



const ProductViewTable = () => {
      // States Start
      const [catalogData, setCatalogData] = useState([])
      const [userData, setUserData] = useState({})


      useEffect(() => {
        const verifyAuth = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}auth/verify-auth`,
        { withCredentials: true }
      );
      setUserData(response.data.user);
    } catch (error) {
      console.error("Authentication verification failed:", error);
    }
  };

  verifyAuth();
    }, []);

      // States End
  
     const {id} = useParams();
     const navigate = useNavigate();
  
     // Get Catalog 
  
     const getCatalogById = async () => {
      if (!id) return; 
    
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}catalog/${id}`);
        if (response.status === 200) {
          setCatalogData(response.data);
        }
      } catch (error) {
        console.error("Error fetching catalog:", error.message);
      }
    };
  
    useEffect(() => {
      getCatalogById();
    }, [id]);
     
  return (
    <>
      <div className='bg-white rounded-2xl border-2 border-blue-700 m-5 flex flex-col gap-4'>
            <div className='mb-5 flex justify-between items-center px-8 py-6 border-b-1 border-gray-300'>

             <h2 className='font-semibold text-2xl capitalize'>{catalogData?.productName || "N/A"}</h2>
              <div className='flex items-center gap-5'>
             <Link to={`/${userData?.role === 'admin' ? 'admin' : 'supplier-admin'}/product-list`} className='text-lg text-white bg-emerald-600 py-2.5 px-6 rounded-lg cursor-pointer flex items-center gap-2'> <FaListUl className='text-lg'/> Product list </Link>
             <Link to={`/${userData?.role === 'admin' ? 'admin' : 'supplier-admin'}/product-list/product-edit/${catalogData?._id}`} className='text-lg text-white bg-emerald-600 py-2.5 px-6 rounded-lg cursor-pointer flex items-center gap-2'> <FaUserEdit className='text-xl'/> Edit Product
             </Link>
              </div>
            </div>
            <div className=' px-6 py-5 flex items-center  gap-5'>
              <div className="w-1/3">
                <img src={catalogData.profileImage} width={'250px'} height={'250px'} alt="User Profile" className='border-1 rounded-full border-stone-200'/>
              </div>
              <div className="w-2/3 grid grid-cols-2 gap-5">
                <div className='flex items-center gap-2 tracking-wide'>
                   <h2 className='text-xl font-semibold'>Name:</h2> <span className='text-xl capitalize text-sky-500'>{catalogData?.productName || "N/A"}</span>
                </div>
                <div className='flex items-center gap-2 tracking-wide'>
                   <h2 className='text-xl font-semibold'>Category:</h2> <span className='text-xl capitalize text-sky-500'>{catalogData?.category?.category || "N/A"}</span>
                </div>
                <div className='flex items-center gap-2 tracking-wide'>
                   <h2 className='text-xl font-semibold'>Designation:</h2> <span className='text-xl capitalize text-sky-500'>{catalogData?.designation || "N/A"}</span>
                </div>
                <div className='flex items-center gap-2 tracking-wide'>
                   <h2 className='text-xl font-semibold'>Developer Type:</h2> <span className='text-xl capitalize text-sky-500'>{catalogData?.subCategory?.name || "N/A"}</span>
                </div>
                <div className='flex items-center gap-2 tracking-wide'>
                   <h2 className='text-xl font-semibold'>Years of Experience:</h2> <span className='text-xl capitalize text-sky-500'>{catalogData?.yearOfExperience || "N/A"}</span>
                </div>
                <div className='flex items-center gap-2 tracking-wide'>
                   <h2 className='text-xl font-semibold'>Developer Experience:</h2> <span className='text-xl capitalize text-sky-500'>{catalogData?.experience || "N/A"}</span>
                </div>
                <div className='flex items-center gap-2 tracking-wide'>
                   <h2 className='text-xl font-semibold'>Hourly Rate:</h2> <span className='text-xl capitalize text-sky-500'>{catalogData?.hourlyRate || "N/A"}$</span>
                </div>
                <div className='flex items-center gap-2 tracking-wide'>
                   <h2 className='text-xl font-semibold'>Language:</h2> <span className='text-xl capitalize text-sky-500'>{catalogData?.language?.map(item=>(

                     <span>{item || "N/A"}, </span>
                     
                  )
                  ) }</span>
                </div>
                
              </div>
              
               
            </div>
            <div className="flex flex-col gap-6 mx-8   ">
                 <h2 className='text-2xl font-semibold '><span className='text-red-500'>*</span> Description</h2>
                 <p className='bg-stone-50 px-6 py-3 rounded-lg text-stone-700 tracking-wide leading-relaxed'>{catalogData?.skillDescription || "N/A"}</p>
            </div>

            <div className="flex flex-col gap-6 mx-8 my-6 p-6  bg-sky-50 rounded-lg border-1 border-sky-400 ">
                   <h2 className='text-2xl font-semibold '><span className='text-red-500'>*</span> Technology</h2>
                   <div className='flex items-center gap-4 '>
                       {catalogData?.technologies?.map((item)=>(
                        <span className='bg-blue-500 px-5 py-2 rounded-full text-white'>{item?.name || "N/A"}</span>
                       ))}
                   </div>
              </div>
            <div className="flex flex-col gap-6 mx-8 my-6 p-6  bg-sky-50 rounded-lg border-1 border-sky-400 ">
                   <h2 className='text-2xl font-semibold '><span className='text-red-500'>*</span> Services Provided</h2>
                   <div className='flex items-center gap-4 '>
                       {catalogData?.services?.map((item)=>(
                        <span className='bg-blue-500 px-5 py-2 rounded-full text-white capitalize'>{item?.name || "N/A"}</span>
                       ))}
                   </div>
              </div>

              <div className="flex flex-col gap-6 mx-8 my-6 p-6 bg-stone-50 rounded-lg ">
                 <h2 className='text-2xl font-semibold '><span className='text-red-500'>*</span> Resume</h2>
                 <iframe src={catalogData.resume} className='rounded-lg' title="PDF Preview" frameborder="0"></iframe>
              </div>

            
            <div className='flex justify-end p-4' ><button type='button' className='capitalize font-medium text-lg text-white bg-emerald-600 py-2 px-8 cursor-pointer rounded-md' onClick={()=>navigate(-1)}>Back</button></div>
         </div>
    </>
  )
}

export default ProductViewTable
