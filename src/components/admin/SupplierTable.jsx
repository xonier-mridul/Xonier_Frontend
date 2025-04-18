import React, { useState, useEffect } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Media

import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SupplierTable = () => {
  const [supplierData, setSupplierData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = supplierData.filter((item) =>
    `${item._id} ${item.company} ${item.name} ${item.email}  ${item.number} `
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const getSupplier = async () => {
    try {
      const supplier = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}user/supplier`

      );
      if (supplier.status === 200) {
        setSupplierData(supplier.data.user);
       
      }
    } catch (error) {
      console.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    getSupplier();
  }, []);

  const handleDelete = async (id, name) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}user/delete/${id}`
      );
      if (response.status === 200) {
        toast.success(`${name} deleted successfully`)
        setSupplierData(supplierData.filter(item=>item._id !== id))
      }
    } catch (error) {
      console.error(error?.response?.data?.message);
    }
  };

  const length = filteredData.length;
  return (
    <>
      <ToastContainer />
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
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Contact Person
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Number
              </th>

              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Email
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                {" "}
                Action{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={item._id}>
                  <td className="p-4 border-b-[1px] border-[#f1f1f1]">
                    {" "}
                    <span className="capitalize"> {item.company} </span>
                  </td>
                  <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                    <span className="capitalize">{item.name}</span>
                  </td>
                  <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                    {item.number}
                  </td>

                  <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1] text-orange-500">
                    {item.email}
                  </td>
                  <td className="p-4 border-zinc-200 border-l-1">
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        className="rounded-lg bg-teal-600 px-2 py-2 text-white cursor-pointer"
                        onClick={""}
                      >
                        <FaEye className="text-xl" />
                      </button>
                      <button
                        type="button"
                        className="rounded-lg bg-red-500 px-2 py-2 text-white cursor-pointer"
                        onClick={() => handleDelete(item._id, item.name)}
                      >
                        <MdDelete className="text-xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <td colSpan="5" className="p-4 text-center text-gray-500">
                {" "}
                Nothing Found{" "}
              </td>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SupplierTable;
