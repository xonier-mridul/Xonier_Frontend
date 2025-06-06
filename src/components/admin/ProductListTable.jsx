import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Media Start

import { MdEdit, MdDelete } from "react-icons/md";
import { FaEye, FaChevronLeft, FaChevronRight, FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

// Media End

const ProductListTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [catalogData, setCatalogData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [sellerData, setSellerData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [errMessage, setErrMessage] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false)
  const [deleteCatalogId, setDeleteCatalogId] = useState(null)
  const navigate = useNavigate();
  const filterDataLength = filteredData.length;

  // Fetch Catalog Data

  const getCatalog = async (currentPage) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}catalog/paginate?page=${currentPage}`, {withCredentials: true}
      );
      if (response.status === 200) {
        setCatalogData(response?.data?.response);
        setTotalPages(response?.data?.totalPages);
        setFilteredData(response?.data?.response);
        
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getSubCategory = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}sub-category`
      );
      if (response.status === 200) {
        setSubCategoryData(response.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const getSeller = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}user/supplier`, {withCredentials: true}
      );
      if (response.status === 200) {
        setSellerData(response.data.user);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCatalog(currentPage);
    getSubCategory();
    getSeller();
  }, [currentPage]);

  // Handle Delete


  const handleDeletePopIp = (id)=>{
   
      setShowDeletePopup(true)
      setDeleteCatalogId(id)
   
  }

  const handleCancelDelete=()=>{
    setShowDeletePopup(false)
      setDeleteCatalogId(null)
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}catalog/${id}`
      );
      if (response.status === 200) {
        toast.success("Product deleted successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          style: { backgroundColor: "#009689", color: "#fff" },
        });
        setFilteredData(filteredData.filter((item) => item._id !== id));
        setShowDeletePopup(false)
      }
    } catch (error) {
      console.error(error.message);
      setErrMessage(error?.response?.data?.message)
    }
  };

  // Handle Page Change

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle Page Change End

  // Handle Product Filter

  const handleProductFilter = (id) => {
    if (id === "all") {
      return setFilteredData(catalogData);
    }
    const filtered = catalogData.filter(
      (item) => item?.subCategory?._id === id
    );
    setFilteredData(filtered);
  };

  // Handle Supplier Filter

  const handleSupplierFilter = (id) => {
    if (id === "all") {
      return setFilteredData(catalogData);
    }
    const filtered = catalogData.filter((item) => item?.seller?._id === id);
    setFilteredData(filtered);
  };

  // Handle Supplier Filter End

  return (
    <>
      <ToastContainer />
      {showDeletePopup && <><div className='fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm z-99 bg-black/10'></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100 p-6 bg-white rounded-xl w-[550px] flex flex-col gap-4 shad" data-aos='fade-up' >
        <h2 className=' text-2xl font-semibold'>Are you sure to delete this</h2>
        <div className="flex items-center justify-end gap-3">

          <button className="text-green-500 bg-green-100 px-5 py-2 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 cursor-pointer" onClick={()=>handleDelete(deleteCatalogId)}>Yes</button>
          <button className="text-red-500 bg-red-100 px-5 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer" onClick={handleCancelDelete}>No</button>
        </div>
      </div></>}

      <div className="bg-white shadow-lg rounded-2xl m-5 border-2 border-emerald-500">
        <div className="mb-5 flex justify-between items-center px-8 py-6 border-b-1 border-gray-300">
          <div className="flex gap-3 items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-60 p-3 border-1 border-[#f2f2f2] rounded-lg outline-none bg-slate-100"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              name="product"
              id="product"
              className="border-1 border-[#B5B5C3] outline-none rounded-lg px-3 py-2.5 text-lg text-gray-600"
              onChange={(e) => handleProductFilter(e.target.value)}
            >
              <option value="" hidden>
                Filter By Product
              </option>
              <option value="all"> View All</option>
              {subCategoryData.map((item) => (
                <option key={item._id} value={item._id}>
                  {item?.name}
                </option>
              ))}
            </select>

          </div>

          <Link
            to={"/admin/catalog"}
            className="bg-emerald-600 p-2 px-8 rounded-lg text-white text-lg flex items-center gap-3 hover:scale-103 transition-all duration-300 hover:bg-emerald-700"
          >
            Add Developer <FaUser />
          </Link>
        </div>

        <div className="p-4 px-7">
          <table className="w-full border-[1px] border-zinc-200">
            <thead>
              <tr className="bg-slate-100 border-b-1 border-zinc-200">
                <th className="p-4 text-start">Product Name</th>
                <th className="p-4 text-start border-l-1 border-zinc-200">
                  Category
                </th>
                <th className="p-4 text-start border-l-1 border-zinc-200">
                  Developer Type
                </th>
                <th className="p-4 text-start border-l-1 border-zinc-200">
                  Experience Level
                </th>
                <th className="p-4 text-start border-l-1 border-zinc-200">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filterDataLength > 0 ? (
                filteredData.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b-[1px] border-l-1 border-zinc-200"
                  >
                    <td className="p-4 border-zinc-200 border-l-1">
                      
                     <span className="capitalize"> {item?.productName} </span>
                    </td>
                    <td className="p-4 border-zinc-200 border-l-1">
                      {" "}
                      {item.category.category}{" "}
                    </td>
                    <td className="p-4 border-zinc-200 border-l-1">
                      {" "}
                      {item.subCategory.name }{" "}
                    </td>
                    <td className="p-4 border-zinc-200 border-l-1">
                      
                        <span className="bg-green-600 px-4 py-1.5 rounded-lg text-white text-sm tracking-wide">{item?.experience || "N/A"}</span>
                      
                    </td>
                    <td className="p-4 border-zinc-200 border-l-1">
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          className="rounded-lg bg-teal-600 px-2 py-2 text-white cursor-pointer hover:scale-104 transition-all duration-300 hover:bg-teal-700"
                          onClick={() =>
                            navigate(
                              `/admin/product-list/product-view/${item._id}`
                            )
                          }
                        >
                          <FaEye className="text-xl" />
                        </button>
                        <button
                          type="button"
                          className="rounded-lg bg-lime-500 px-2 py-2 text-white cursor-pointer hover:scale-104 transition-all duration-300 hover:bg-lime-600"
                          onClick={() =>
                            navigate(
                              `/admin/product-list/product-edit/${item._id}`
                            )
                          }
                        >
                          <MdEdit className="text-xl" />
                        </button>
                        <button
                          type="button"
                          className="rounded-lg bg-red-500 px-2 py-2 text-white cursor-pointer hover:scale-104 transition-all duration-300 hover:bg-red-600"
                          onClick={() => handleDeletePopIp(item._id)}
                        >
                          <MdDelete className="text-xl" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-4 text-center">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end items-center p-6">
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
                  currentPage === index + 1 ? "bg-emerald-500 text-white" : ""
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

export default ProductListTable;
