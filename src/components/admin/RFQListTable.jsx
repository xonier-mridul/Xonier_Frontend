import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Media Start
import {
  FaEye,
  FaChevronLeft,
  FaChevronRight,
  FaHistory,
} from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
// Media End


const RFQListTable = ({ rfqData, totalPages }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <>
      <div className="bg-white rounded-4xl border-orange-500 border-2 p-8">
        <div className="mb-5 flex items-center gap-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-60 p-2 border-1 border-[#f2f2f2] rounded-lg outline-none bg-slate-100"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select name="buyer" id="buyer" className="w-60 p-2 border-1 border-[#f2f2f2] rounded-lg outline-none ">

          </select>
        </div>
        <table className="w-full border-[1px] border-[#eff2f5]">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-4 text-start">RFQ ID</th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Buyer Name
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Product Category
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                <span> Quantity </span>
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
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {rfqData.map((item) => {
              const deliveryDate = new Date(
                item?.orderQuantity[0]?.deliveryDate
              ).toLocaleDateString();

              return (
                <tr
                  key={item._id}
                  className="border-b-[1px] border-l-1 border-zinc-200"
                >
                  <td className="p-4 border-zinc-200 border-l-1">
                    {item?._id}
                  </td>
                  <td className="p-4 border-zinc-200 border-l-1"></td>
                  <td className="p-4 border-zinc-200 border-l-1">
                    <span className="capitalize">{item?.product}</span>
                  </td>
                  <td className="p-4 border-zinc-200 border-l-1">
                    {item?.orderQuantity[0]?.quantity}
                  </td>
                  <td className="p-4 border-zinc-200 border-l-1">
                    {item?.DeliveryLocation}
                  </td>
                  <td className="p-4 border-zinc-200 border-l-1">
                    {deliveryDate}
                  </td>
                  <td className="p-4 border-zinc-200 border-l-1">
                    <span className={`${item?.status === true ? "bg-green-500 " : "bg-red-500 "} text-sm py-1 px-4 rounded-lg text-white`}>{item?.status === true ? "Approved" : "Pending"}</span>
                  </td>
                  <td className="p-4 border-zinc-200 border-l-1">
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        className="rounded-lg bg-teal-600 px-2 py-2 text-white cursor-pointer"
                        onClick={()=>navigate(`rfq-detail/${item._id}`)}
                      >
                        <FaEye className="text-xl" />
                      </button>
                      <button
                        type="button"
                        className="rounded-lg bg-lime-500 px-2 py-2 text-white cursor-pointer"
                        onClick={()=>navigate(`update-rfq/${item._id}`)}
                      >
                        <MdEdit className="text-xl" />
                      </button>
                      
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-end items-center p-6 ">
          <div className="flex items-center gap-4 ">
            <span className="cursor-pointer">
              {" "}
              <FaChevronLeft />{" "}
            </span>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={` ${
                  currentPage === index + 1 ? "bg-orange-500 text-white" : ""
                } h-9 w-9 rounded-lg flex items-center justify-center cursor-pointer `}
              >
                {index + 1}
              </button>
            ))}
            <span className="cursor-pointer">
              <FaChevronRight />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RFQListTable;
