import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  FaEye,
  FaChevronLeft,
  FaChevronRight,
  FaHistory,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

const BRFQTable = ({ BRFQData }) => {

  // States
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  // Filter
  const filteredData = BRFQData.filter((item) =>
    `${item._id} ${item.rfqId?._id} ${item.rfqId?.product} ${item.rfqId?.createdBy?.name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const length = BRFQData?.length;

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
                RFQ ID
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Product
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Buyer Name
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {length >= 1 ? (
              filteredData.map((item) => (
                <tr>
                  <td className="p-4 border-b-[1px] border-[#f1f1f1]">
                    {" "}
                    {item._id}{" "}
                  </td>
                  <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                    {" "}
                    {item.rfqId?._id}{" "}
                  </td>
                  <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                    {" "}
                    <span className="capitalize"> {item.rfqId?.product} </span>
                  </td>
                  <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                    {" "}
                    <span className="capitalize"> {item.rfqId?.createdBy?.name}</span>
                  </td>
                  <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                    <div className="flex items-center gap-4">
                      <button className="rounded-lg bg-teal-600 px-2 py-2 text-white">
                        <FaEye className="text-xl" />
                      </button>
                     <button className={`rounded-lg ${item.assigned !== true ? "bg-orange-500" : "bg-green-500"} px-2 py-2 text-white`} onClick={()=>navigate(`assign/${item._id}`)}>
                        {item.assigned !== true ?<IoIosSend className="text-xl" /> : <FaCheck className="text-xl" />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="p-4">
                <td colSpan={5}> Data not found </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BRFQTable;
