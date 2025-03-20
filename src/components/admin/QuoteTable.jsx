import React, { useState, useEffect } from "react";
import axios from "axios";

// Media Start
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";

// Media End

const QuoteTable = () => {
  const [QuoteData, setQuoteData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}quote`)
      .then((res) => setQuoteData(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const handleDelete = (id) => {
    try {
      axios.delete(`${import.meta.env.VITE_SERVER_URL}quote/${id}`);
      setQuoteData(QuoteData.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  // Filter Quotes

  const filteredData = QuoteData.filter((item) =>
    `${item.fname} ${item.lname} ${item.phone} ${item.email} ${item.message}`
   .toLowerCase().includes(searchTerm.toLowerCase())
  );

  const length = filteredData.length

  return (
    <>
      <div className="bg-white rounded-4xl border-orange-500 border-2 p-8">
      
        <div className="mb-5">
          <input
            type="text"
            placeholder="Search..."
            className="w-60 p-2 border-1 border-[#f2f2f2] rounded-lg outline-none bg-slate-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
            
        </div>

      
        <table className="w-full border-[1px] border-[#eff2f5]">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-4 text-start">S.No.</th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Name</th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Number</th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Email</th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Message</th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Action</th>
            </tr>
          </thead>
          <tbody>
         {length> 0 ? filteredData.map((item, index) => (
           <tr key={item._id}>
                <td className="p-4 border-b-[1px] border-[#f1f1f1]">{index + 1}</td>
                <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                  {item.fname} {item.lname}
                </td>
                <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">{item.phone}</td>
                <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">{item.email}</td>
                <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">{item.message}</td>
                <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                  <div className="flex gap-3 items-center">
                    <span className="bg-teal-700 p-2 text-white rounded-lg">
                      <FaEye className="text-lg font-bold cursor-pointer" />
                    </span>
                    <span
                      className="bg-red-500 p-2 text-white rounded-lg"
                      onClick={() => handleDelete(item._id)}
                    >
                      <MdDelete className="text-lg font-bold cursor-pointer" />
                    </span>
                  </div>
                </td>
              </tr> 
              
            
            )) : <td colSpan="6" className="p-4 text-center text-gray-500"> Nothing Found </td> }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default QuoteTable;
