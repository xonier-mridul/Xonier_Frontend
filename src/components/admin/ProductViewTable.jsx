import React, {useEffect, useState}  from 'react'
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const ProductViewTable = () => {
      // States Start
      const [catalogData, setCatalogData] = useState([])

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
      <div className='bg-white rounded-2xl border-2 border-orange-500 m-5'>
            <div className='mb-5 flex justify-between items-center px-8 py-6 border-b-1 border-gray-300'>
             <h2 className='font-semibold text-2xl'>{catalogData?.subCategory?.name}</h2>
             <Link to={"/admin/product-list"} className='text-lg text-white bg-black py-3 px-6 rounded-lg cursor-pointer'> Product list </Link>
            </div>
            <table className='w-full border-[1px] border-[#eff2f5] '>
                <tbody>
                    <tr className='border-b-1 border-zinc-200'>
                        <th  className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Supplier</th>
                        <td className='w-2/3 p-4 px-6 text-lg'>{catalogData?.seller?.company_name}</td>

                    </tr>
                    <tr className='border-b-1 border-zinc-200'>
                    <th  className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Selected Category</th>
                    <td className='w-2/3 p-4 px-6 text-lg'>{catalogData?.category?.category}</td>
                    </tr>
                    <tr className='border-b-1 border-zinc-200'>
                        <th className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'> Product Name </th>
                        <td className='w-2/3 p-4 px-6 text-lg'>{catalogData?.subCategory?.name}</td>
                    </tr>
                    <tr className='border-b-1 border-zinc-200'>
                        <th className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'> ISO Certification </th>
                        <td className='w-2/3 p-4 px-6 text-lg'> <span className={` ${catalogData?.iso === "yes" ? "bg-green-500 text-white" : "bg-red-500 text-white "} py-1 px-4 rounded-md capitalize tracking-wider`} >{catalogData?.iso}</span></td>
                    </tr>
                    {catalogData?.specifications?.map((item, index)=>(
                    <tr key={index} className='border-b-1 border-zinc-200'>
                            
                            <th className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>{item.key.name}</th>
                            <td className='w-2/3 p-4 px-6 text-lg'>{item.value}</td>
                           
                    </tr>
                   ))}
                   {catalogData?.addSpecifications?.map((item, index)=>(
                     <tr key={index} className='border-b-1 border-zinc-200'>
                           <th className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>{item.field === "" ? "N/A" : item.field}</th>
                           <td className='w-2/3 p-4 px-6 text-lg'>{item.value === "" ? "N/A" : item.value === "" ? "N/A" : item.value}</td>
                     </tr>
                   ))}
                   <tr className='border-b-1 border-zinc-200'>
                       <th className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Base Price (₹)</th>
                       <td className='w-2/3 p-4 px-6 text-lg'></td>
                   </tr>
                   <tr className='border-b-1 border-zinc-200'>
                       <th className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>GST Rate (%) </th>
                       <td className='w-2/3 p-4 px-6 text-lg'></td>
                   </tr>
                   <tr className='border-b-1 border-zinc-200'>
                       <th className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Final Price (₹) </th>
                       <td className='w-2/3 p-4 px-6 text-lg'></td>
                   </tr>
                   <tr className='border-b-1 border-zinc-200'>
                       <th className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Term and Condition</th>
                   </tr>
                </tbody>
            </table>
            <div className='flex justify-end p-4' ><button type='button' className='capitalize font-medium text-lg text-white bg-black py-2 px-8 cursor-pointer rounded-md' onClick={()=>navigate(-1)}>Back</button></div>
         </div>
    </>
  )
}

export default ProductViewTable
