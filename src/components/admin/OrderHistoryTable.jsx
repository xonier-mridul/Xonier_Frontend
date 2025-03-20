import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderHistoryTable = () => {
    // const [orderData, setOrderData] = useEffect([])
  return (
    <>
      <ToastContainer />
      <div className="bg-white shadow-lg rounded-2xl m-5 border-2 border-orange-500">
        <div className="mb-5 flex justify-between items-center px-8 py-6 border-b-1 border-gray-300">
          <input
            type="text"
            placeholder="Search..."
            className="w-60 p-3 border-1 border-[#f2f2f2] rounded-lg outline-none bg-slate-100"
            //   value={searchTerm}
            //   onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="p-4 px-7">
      <table className="w-full border-[1px] border-zinc-200">
            <thead>
              <tr className="bg-slate-100 border-b-1 border-zinc-200">
                <th className="p-4 text-start uppercase">id</th>
                <th className="p-4 text-start border-l-1 border-zinc-200">Buyer</th>
                <th className="p-4 text-start border-l-1 border-zinc-200">Email</th>
                <th className="p-4 text-start border-l-1 border-zinc-200">Items</th>
                <th className="p-4 text-start border-l-1 border-zinc-200">Status</th>
                <th className="p-4 text-start border-l-1 border-zinc-200">Date</th>
                <th className="p-4 text-start border-l-1 border-zinc-200">Action</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default OrderHistoryTable;
