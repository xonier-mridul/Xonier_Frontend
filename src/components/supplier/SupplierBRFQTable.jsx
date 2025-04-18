import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import { MdEdit, MdDelete } from "react-icons/md";
import {
  FaEye,
  FaChevronLeft,
  FaChevronRight,
  FaHistory,
} from "react-icons/fa";

const SupplierBRFQTable = ({assignBRFQ}) => {
   
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();
    
      const filteredData = assignBRFQ.filter((item) =>
        `${item._id} ${item?.brfqId?._id} ${item.brfqId?.rfqId?.product} ${item.brfqId?.rfqId?.DeliveryLocation}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    
    
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
              <th className="p-4 text-start">BRFQ ID</th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
              Product Name
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Quantity
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Delivery Location
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Delivery Date
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Status
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Action
              </th>
            </tr>
        </thead>
        <tbody>
          {filteredData?.map((item)=>{

             const quantity = item?.brfqId?.rfqId?.orderQuantity.reduce((acc, init)=> acc + init.quantity, 0);
            return(
            <tr className='border-[#f1f1f1] border-b-1' key={item._id}>
              <td className='p-4 text-start '>{item.brfqId?._id}</td>
              <td className='p-4 border-l-1 border-[#f1f1f1] text-start'> <span className='capitalize'>{item.brfqId?.rfqId?.product}</span></td>
              <td className='p-4 border-l-1 border-[#f1f1f1] text-start'>{quantity}</td>
              <td className='p-4 border-l-1 border-[#f1f1f1] text-start'>{item.brfqId?.rfqId?.DeliveryLocation}</td>
              <td className='p-4 border-l-1 border-[#f1f1f1] text-start'> { new Date(item.brfqId?.rfqId?.orderQuantity[0].deliveryDate).toLocaleDateString()} </td>
              <td className='p-4 border-l-1 border-[#f1f1f1] text-start'> {item.status === true ? "True" : "False"} </td>
              <td className='p-4 border-l-1 border-[#f1f1f1] text-start'> 
              <div className="flex items-center gap-4">
                    <button
                      className="rounded-lg bg-teal-600 px-2 py-2 text-white"
                      onClick={()=> navigate(`detail/${item._id}`)}
                    >
                      <FaEye className="text-xl" />
                    </button>
                    <button
                      className="rounded-lg bg-lime-500 px-2 py-2 text-white"
                      onClick={()=> navigate(`add-quotation/${item._id}`)}
                    >
                      <MdEdit className="text-xl" />
                    </button>
                  </div>
              </td>
            </tr>)
})}
          
        </tbody>
        </table>    

      </div>
    </>
  )
}

export default SupplierBRFQTable
