import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/admin-img.jpg";

// Media
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaUserEdit, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";

const BuyerTable = () => {
  const [supplierData, setSupplierData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const filteredData = supplierData.filter((item) =>
    `${item._id} ${item.company} ${item.email} ${item.number} ${item.tradeNumber} ${item.category}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const getBuyer = async () => {
    try {
      const buyer = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}user/buyer`,
        { withCredentials: true }
      );
      if (buyer.status === 200) {
        setSupplierData(buyer.data.user);
      }
    } catch (error) {
      console.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    getBuyer();
  }, []);

  const length = filteredData.length;
  return (
    <>
      <div className="bg-white border-emerald-500 border-2 rounded-4xl p-8 m-5">
        <div className="mb-5 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-60 p-2 border-1 border-[#f2f2f2] rounded-lg outline-none bg-slate-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-teal-600 px-5 py-2 rounded-lg text-white hover:bg-teal-700 transition-all duration-300 cursor-pointer hover:scale-103 flex items-center gap-1.5 tracking-wide"
            onClick={() => navigate(`add-buyer`)}
          >
            <AiOutlineUserAdd className="text-xl" /> Add Buyer
          </button>
        </div>
        <table className="w-full border-[1px] border-[#eff2f5]">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-4 text-start"> Name </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Company{" "}
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Category
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Email
              </th>
              <th className="p-4 text-start border-l-1 border-[#f1f1f1]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={item._id}>
                  <td className="p-4 border-b-[1px] border-[#f1f1f1] hover:text-blue-600 transition-all duration-300">
                    {" "}
                    <Link
                      to={`/admin/user-profile/${item._id}`}
                      className="capitalize flex items-center flex-nowrap gap-3 profile"
                    >
                      {" "}
                      <div className="relative h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-lg profile-img"
                          src={img}
                          alt=""
                        />{" "}
                        {item.isActive === true && (
                          <span className="absolute h-2.5 w-2.5 rounded-full bg-green-600 z-50 bottom-0 right-0"></span>
                        )}{" "}
                      </div>{" "}
                      {item.name}
                    </Link>{" "}
                  </td>
                  <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                    <span className="capitalize">{item.company}</span>
                  </td>
                  <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                    <span className=" text-lime-500 bg-emerald-50 capitalize text-sm  py-2 px-4 rounded-lg text-nowrap font-medium">
                      {item.category}{" "}
                    </span>
                  </td>

                  <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                    {" "}
                    <span className="text-orange-400 p-1 px-4 rounded-lg bg-orange-50">
                      {item.email}
                    </span>
                  </td>
                  <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                    <div className="flex items-center gap-2 ">
                      <button
                        className="rounded-lg bg-teal-600 px-2 py-2 text-white cursor-pointer hover:scale-104 transition-all duration-300 hover:bg-teal-700"
                        onClick={() => navigate(`/admin/update-password/${item._id}`)}
                      >
                        <MdOutlinePassword className="text-xl" />
                      </button>
                      <button
                        className="rounded-lg bg-orange-500 px-2 py-2 text-white cursor-pointer hover:scale-104 transition-all duration-300 hover:bg-orange-600"
                        onClick={() => navigate(`update-user/${item._id}`)}
                      >
                        <FaUserEdit className="text-xl" />
                      </button>
                      <button className="rounded-lg bg-green-500 hover:bg-green-600 px-2 py-2 text-white cursor-pointer hover:scale-104 transition-all duration-300" onClick={()=>navigate(`/admin/user-profile/${item._id}`)}>
                        <FaEye className="text-xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <td colSpan="6" className="p-4 text-center text-gray-500">
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

export default BuyerTable;
