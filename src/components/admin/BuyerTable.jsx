import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const BuyerTable = () => {
    

    const [supplierData, setSupplierData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    

   
    const filteredData = supplierData.filter((item=>
            `${item._id} ${item.company} ${item.email} ${item.number} ${item.website} ${item.category}`.toLowerCase().includes(searchTerm.toLowerCase())
        ))


        const getBuyer = async () => {
          try {
            const supplier = await axios.get(
              `${import.meta.env.VITE_SERVER_URL}user/buyer`
      
            );
            if (supplier.status === 200) {
              setSupplierData(supplier.data);
              
             
            }
          } catch (error) {
            console.error(error.response?.data?.message);
          }
        };
      
        useEffect(() => {
          getBuyer();
        }, []);
    

    const length = filteredData.length
  return (
    <>
    <div className="bg-white border-orange-500 border-2 rounded-4xl p-8 m-5">
    <div className="mb-5">
          <input
            type="text"
            placeholder="Search..."
            className="w-60 p-2 border-1 border-[#f2f2f2] rounded-lg outline-none bg-slate-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="w-full border-[1px] border-[#eff2f5]">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="p-4 text-start">Company</th>
                      <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Category</th>
                      <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Trade Number</th>
                      <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Email</th>
                      <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Number</th>
                      <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Website</th>
                    </tr>
                  </thead>
                  <tbody>
                 {length > 0 ? filteredData.map((item, index) => (
                   <tr key={item._id}>
                        <td className="p-4 border-b-[1px] border-[#f1f1f1]">{item.company}</td>
                        <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                          <span className='capitalize'>{item.category} </span>
                        </td>
                        <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">{item.tradeNumber}</td>
                        <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">  <span className='text-orange-400 p-1 px-4 rounded-lg bg-orange-50'>{item.email}</span></td>
                        <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">{item.number}</td>
                        <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]"> <Link className='text-blue-500 underline' to={item.website} target='_blank'>{item.website}</Link>
                        </td>
                      </tr> 
                      
                    
                    )) : <td colSpan="6" className="p-4 text-center text-gray-500"> Nothing Found </td>}
                  </tbody>
                </table>
    </div>
      
    </>
  )
}

export default BuyerTable
