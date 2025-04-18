import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Media
import { FaEye, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const RFQListTable = ({ rfqData, setRfqData, totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [buyerUser, setBuyerUser] = useState([]);
  const [rfqFilterData, setRfqFilterData] = useState([]);
  const navigate = useNavigate();

  const getBuyerUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}user/buyer`
      );
      if (response.status === 200) {
        setBuyerUser(response.data?.user || []);
      }
    } catch (error) {
      console.error("Failed to fetch buyers:", error);
    }
  };

  useEffect(() => {
    setRfqFilterData(rfqData);
    getBuyerUsers();
  }, [rfqData]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleChange = (e) => {
    const id = e.target.value;
    if (id === "all") {
      setRfqFilterData(rfqData);
    } else {
      const filtered = rfqData.filter(
        (item) => item.createdBy?._id === id
      );
      setRfqFilterData(filtered);
    }
  };

  return (
    <div className="bg-white rounded-4xl border-orange-500 border-2 p-8">
      <div className="mb-5 flex items-center gap-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-60 p-2 border-1 border-[#f2f2f2] rounded-lg outline-none bg-slate-100"
        />
        <select
          name="buyer"
          id="buyer"
          className="w-60 p-2 border-1 border-[#f2f2f2] rounded-lg outline-none capitalize"
          onChange={handleChange}
        >
          <option value="all">All Buyers</option>
          {buyerUser.map((item) => (
            <option key={item?._id} value={item?._id}>
              {item?.name}
            </option>
          ))}
        </select>
      </div>

      <table className="w-full border-[1px] border-[#eff2f5]">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-4 text-start border-l border-neutral-200">RFQ ID</th>
            <th className="p-4 text-start border-l border-neutral-200">Buyer Name</th>
            <th className="p-4 text-start border-l border-neutral-200">Product Category</th>
            <th className="p-4 text-start border-l border-neutral-200">Quantity</th>
            <th className="p-4 text-start border-l border-neutral-200">Delivery Location</th>
            <th className="p-4 text-start border-l border-neutral-200">Delivery Date</th>
            <th className="p-4 text-start border-l border-neutral-200">Status</th>
            <th className="p-4 text-start border-l border-neutral-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rfqFilterData?.map((item) => {
            const deliveryDate = new Date(
              item?.orderQuantity[0]?.deliveryDate
            ).toLocaleDateString();

            const quantity = item.orderQuantity?.reduce(
              (acc, cur) => acc + cur.quantity,
              0
            );

            return (
              <tr
                key={item._id}
                className="border-b-[1px] border-l-1 border-zinc-200"
              >
                <td className="p-4 border-l border-neutral-200">{item?._id}</td>
                <td className="p-4 border-l border-neutral-200 capitalize">{item.createdBy?.name}</td>
                <td className="p-4 border-l border-neutral-200 capitalize">{item?.product}</td>
                <td className="p-4 border-l border-neutral-200">{quantity}</td>
                <td className="p-4 border-l border-neutral-200">{item?.DeliveryLocation}</td>
                <td className="p-4 border-l border-neutral-200">{deliveryDate}</td>
                <td className="p-4 border-l border-neutral-200">
                  <span
                    className={`${
                      item?.status === true
                        ? "bg-green-500"
                        : "bg-red-500"
                    } text-sm py-1 px-4 rounded-lg text-white`}
                  >
                    {item?.status === true ? "Approved" : "Pending"}
                  </span>
                </td>
                <td className="p-4 border-l border-neutral-200">
                  <div className="flex items-center gap-4">
                    <button
                      className="rounded-lg bg-teal-600 px-2 py-2 text-white"
                      onClick={() => navigate(`rfq-detail/${item._id}`)}
                    >
                      <FaEye className="text-xl" />
                    </button>
                    <button
                      className="rounded-lg bg-lime-500 px-2 py-2 text-white"
                      onClick={() => navigate(`update-rfq/${item._id}`)}
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

      <div className="flex justify-end items-center p-6">
        <div className="flex items-center gap-4">
          <span className="cursor-pointer">
            <FaChevronLeft />
          </span>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`${
                currentPage === index + 1 ? "bg-orange-500 text-white" : ""
              } h-9 w-9 rounded-lg flex items-center justify-center cursor-pointer`}
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
  );
};

export default RFQListTable;
