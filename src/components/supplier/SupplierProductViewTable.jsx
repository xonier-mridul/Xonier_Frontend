import React  from 'react'
import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';



const SupplierProductViewTable = ({catalogData}) => {
      const navigate = useNavigate();
     
  return (
    <>
      <div className='bg-white rounded-2xl border-2 border-emerald-600 m-5'>
            <div className='mb-5 flex justify-between items-center px-8 py-6 border-b-1 border-gray-300'>
             <h2 className='font-semibold text-2xl'>{catalogData?.subCategory?.name}</h2>
             <Link to={"/admin/product-list"} className='text-lg text-white bg-emerald-600 py-3 px-6 rounded-lg cursor-pointer'> Product list </Link>
            </div>
            <div className='px-8 py-6'>
            <table className='w-full border-[1px] border-[#eff2f5] '>
                <tbody>
                    <tr className='border-b-1 border-zinc-200'>
                        <th  className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Supplier</th>
                        <td className='w-2/3 p-4 px-6 text-lg'> <span className='capitalize'>{catalogData?.seller?.company} </span></td>

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
                    
                   
                   <tr className='border-b-1 border-zinc-200'>
                       <th className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Base Price (₹)</th>
                       <td className='w-2/3 p-4 px-6 text-lg'>{catalogData?.commercialCondition?.productPrice}</td>
                   </tr>
                   <tr className='border-b-1 border-zinc-200'>
                       <th className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Product Discount (%) </th>
                       <td className='w-2/3 p-4 px-6 text-lg'>{catalogData?.commercialCondition?.productDiscount || "N/A"}%</td>
                   </tr>
                   <tr className='border-b-1 border-zinc-200'>
                       <th className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Discount Validity </th>
                       <td className='w-2/3 p-4 px-6 text-lg'>{new Date(catalogData?.commercialCondition?.discountValidity).toLocaleDateString() || "N/A"}</td>
                   </tr>
                   <tr className='border-b-1 border-zinc-200'>
                       <th className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>GST Rate (%) </th>
                       <td className='w-2/3 p-4 px-6 text-lg'></td>
                   </tr>
                   <tr className='border-b-1 border-zinc-200'>
                       <th className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Final Price (₹) </th>
                       <td className='w-2/3 p-4 px-6 text-lg'><span className='px-4 py-1 bg-green-500 text-white rounded-lg'> {catalogData.finalPrice || "N/A"}</span></td>
                   </tr>
                   <tr className='border-b-1 border-zinc-200'>
                       <th className='bg-slate-100 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'>Term and Condition</th>
                   </tr>
                </tbody>
            </table>
            </div>

            <div className='px-8 py-6 flex flex-col gap-4'>
            <h2 className='text-xl font-semibold'>Product Specifications</h2>
            <table className='w-full border-[1px] border-zinc-300 '>
              <tbody>
                <tr className='border-b-1 border-zinc-200'>
                  <th className='bg-slate-200 border-b-1 border-zinc-200 w-1/3 p-4 px-6 font-semibold text-lg text-start'> Specification</th>
                  <td className='bg-slate-200 border-l-1 border-zinc-300  w-2/3 p-4 px-6 text-lg font-semibold'>Values</td>
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
              </tbody>
            </table>
            </div>

            <div className='px-8 py-6 flex flex-col gap-4'>
               <h2 className='text-xl font-semibold'>Payment Schedule</h2>
               <table className='w-full border-[1px] border-zinc-300 '>
                <thead className='bg-slate-100'>
                  <th className='p-4 text-start capitalize'>Advance</th>
                  <th className='p-4 border-l-1 border-zinc-200 text-start capitalize'>After Dispatch</th>
                  <th className='p-4 border-l-1 border-zinc-200 text-start capitalize'>On Delivery</th>
                  <th className='p-4 border-l-1 border-zinc-200 text-start capitalize'>after testing</th>
                  
                </thead>
                <tbody>
                  
                    <td className='p-4 text-start '>{catalogData?.paymentSchedule?.advance || "N/A"}%</td>
                    <td className='p-4 border-l-1 border-[#f1f1f1] text-start '>{catalogData?.paymentSchedule?.afterDispatch || "N/A"}%</td>
                    <td className='p-4 border-l-1 border-[#f1f1f1] text-start '>{catalogData?.paymentSchedule?.onDelivery || "N/A"}%</td>
                    <td className='p-4 border-l-1 border-[#f1f1f1] text-start '>{catalogData?.paymentSchedule?.afterTesting || "N/A"}%</td>
                
                </tbody>

               </table>
            </div>
            <div className='flex justify-end p-4' ><button type='button' className='capitalize font-medium text-lg text-white bg-emerald-600 py-2 px-8 cursor-pointer rounded-md' onClick={()=>navigate(-1)}>Back</button></div>
         </div>
    </>
  )
}

export default SupplierProductViewTable
