import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa6";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaEye, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ServicesTableComponent = ({searchTerm, setSearchTerm, handleProductFilter, filterDataLength, totalPages, currentPage, setCurrentPage, errMessage, filteredData, handleDelete}) => {
  return (
    <>
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

            {/* <select
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
            </select> */}

          </div>

          <Link
            to={"/admin/service"}
            className="bg-emerald-600 p-2 px-8 rounded-lg text-white text-lg flex items-center gap-3 hover:scale-103 transition-all duration-300 hover:bg-emerald-700"
          >
            Add Services <FaCartPlus />
          </Link>
        </div>
        <div className="p-4 px-7">
                  <table className="w-full border-[1px] border-zinc-200">
                    <thead>
                      <tr className="bg-slate-100 border-b-1 border-zinc-200">
                        <th className="p-4 text-start">Service Name</th>
                        <th className="p-4 text-start border-l-1 border-zinc-200">
                          Category
                        </th>
                        
                        <th className="p-4 text-start border-l-1 border-zinc-200">
                          Features
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
                              
                             <span className="capitalize"> {item?.name || "N/A"} </span>
                            </td>
                            <td className="p-4 border-zinc-200 border-l-1">
                              
                              {item?.category?.category || "N/A"}
                            </td>
                            
                            <td className="p-4 border-zinc-200 flex items-center gap-2 border-l-1">
                              {item.feature.map((item=>(
                                <span className="bg-green-600 px-4 py-1.5 rounded-lg text-white text-sm tracking-wide capitalize">{item || "N/A"}</span>
                              )))}
                                
                              
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
                                  onClick={() => handleDelete(item._id)}
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
                <div className='flex justify-end p-6'>
                  <p className='text-red-500'>{errMessage}</p>
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
  )
}

export default ServicesTableComponent
