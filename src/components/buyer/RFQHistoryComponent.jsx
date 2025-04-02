import React from "react";
import { useNavigate } from "react-router-dom";

import {
    FaEye,
    FaChevronLeft,
    FaChevronRight,
    FaHistory,
  } from "react-icons/fa";

const RFQHistoryComponent = ({ id, rfqHistory }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex items-center gap-5">
        <div className="w-1/2 bg-white rounded-full border-2 border-orange-500 p-3 px-5">
          <h2>
            <span className="font-bold">RFQ ID:</span>
            {id}
          </h2>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-2xl  border-2 border-orange-500">
        <div className="mb-5 flex justify-between items-center px-8 py-4 border-b-1 border-gray-300">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex justify-end">
            <button
              className="rounded-lg bg-black px-6 py-2.5 text-white w-fit cursor-pointer"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
        <div className="p-4 px-7">
          <table className="w-full border-[1px] border-zinc-200">
            <thead>
              <tr className="bg-slate-100 border-b-1 border-zinc-200">
                <th className="p-4 text-start">S.No.</th>
                <th className="p-4 text-start border-l-1 border-zinc-200">
                  Updated by
                </th>
                <th className="p-4 text-start border-l-1 border-zinc-200">
                  Updated At
                </th>
                <th className="p-4 text-start border-l-1 border-zinc-200">
                  Delivery Location
                </th>
                <th className="p-4 text-start border-l-1 border-zinc-200">
                  Pin Code
                </th>
                <th className="p-4 text-start border-l-1 border-zinc-200">
                  Additional Comment
                </th>
                <th className="p-4 text-start border-l-1 border-zinc-200">
                  Actions
                </th>
              </tr>
              <tr></tr>
            </thead>
            <tbody>
              {rfqHistory.length > 0 ? (
                rfqHistory?.map((item, index) => (
                  <tr key={item._id} className="border-b-1 border-zinc-200">
                    <td className="p-4 text-start">{index + 1}</td>
                    <td className="p-4 text-start border-l-1 border-zinc-200">
                      {" "}
                      <span className="capitalize bg-orange-500 px-4 py-1 rounded-lg text-white text-sm">
                        {item.process}
                      </span>
                    </td>
                    <td className="p-4 text-start border-l-1 border-zinc-200">
                      {" "}
                      {new Date(item.updatedAt).toLocaleDateString()}{" "}
                    </td>
                    <td className="p-4 text-start border-l-1 border-zinc-200">
                      {" "}
                      {item.DeliveryLocation}{" "}
                    </td>
                    <td className="p-4 text-start border-l-1 border-zinc-200">
                      {" "}
                      {item.pinCode}{" "}
                    </td>
                    <td className="p-4 text-start border-l-1 border-zinc-200">
                      {" "}
                      {item.additionalComment}{" "}
                    </td>
                    <td className="p-4 text-start border-l-1 border-zinc-200">
                      {" "}
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          className="rounded-lg bg-teal-600 px-2 py-2 text-white cursor-pointer"
                        >
                          <FaEye className="text-xl" />
                        </button>
                      </div>{" "}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-b-1 border-zinc-200">
                  <td colSpan={7} className="text-center p-3">
                    Data not found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-2xl   border-2 border-orange-500">
       <div className="mb-5 flex justify-between items-center px-8 py-4 border-b-1 border-gray-300">
         <h2 className="text-xl font-bold">Order Quantity with Delivery date</h2>
       </div>
       <div className="p-4 px-7">
       <table className="w-full border-[1px] border-zinc-200">
       <thead>
              <tr className="bg-slate-100 border-b-1 border-zinc-200">
                <th className="p-4 text-start">S.No.</th>
                <th className="p-4 text-start border-l-1 border-zinc-200">
                  Quantity
                </th>
                <th className="p-4 text-start border-l-1 border-zinc-200">
                  Delivery Date
                </th>
                
              </tr>
              <tr></tr>
            </thead>
       </table>
       </div>
      </div>
      
    </>
  );
};

export default RFQHistoryComponent;
