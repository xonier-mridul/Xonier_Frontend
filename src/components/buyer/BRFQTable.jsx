import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import {
  FaEye,
  FaChevronLeft,
  FaChevronRight,
  FaHistory,
} from "react-icons/fa";

const BRFQTable = ({ BRFQData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = BRFQData.filter((item) =>
    `${item._id} ${item.company} ${item.email} ${item.number} ${item.website} ${item.category}`
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
                RFQ ID
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Buyer Name
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Send To
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {length > 0 ? (
              filteredData.map((item, index) => ( */}
            <tr>
              <td className="p-4 border-b-[1px] border-[#f1f1f1]">
                67e51b28b51261451a374380
              </td>
              <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                <span className="capitalize">67e51b28b51261451a374380</span>
              </td>
              <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                Ajay Kumar
              </td>
              <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                Morpheous Enterprise
              </td>
              <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    className="rounded-lg bg-teal-600 px-2 py-2 text-white cursor-pointer"
                  >
                    <FaEye className="text-xl" />
                  </button>
                  
                  <button
                    type="button"
                    className="rounded-lg bg-red-500 px-2 py-2 text-white cursor-pointer"
                    onClick={() => handleDelete(rfq._id)}
                  >
                    <MdDelete className="text-xl" />
                  </button>
                </div>
              </td>
            </tr>
            {/* ))
            ) : (
              <td colSpan="6" className="p-4 text-center text-gray-500">
                {" "}
                Nothing Found{" "}
              </td>
            )} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BRFQTable;
