import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowRight, FaXmark } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCategoryForm = ({fetchCategories}) => {
  const [formData, setFormData] = useState({
    category: "",
    // specification: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}category`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201 || response.status === 204) {
        fetchCategories();

        toast.success(`"${formData.category}" Category Added successfully`, {
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
        setFormData({
          category: "",
          specification: [],
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <>
      <ToastContainer />
      <div className="bg-white border-2 border-orange-500 rounded-4xl ">
        <h2 className="text-[20px] font-semibold p-9 py-6 border-b-1 border-zinc-200">
          Fill the form
        </h2>

        <form className="p-9 py-6 flex  flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <label className="text-lg" htmlFor="category">
              Add Category
            </label>
            <input
              className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
              type="text"
              name="category"
              id="category"
              value={formData.category}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your category"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              className="capitalize font-bold flex items-center gap-3 rounded-lg bg-orange-500 px-7 py-3 text-white w-fit cursor-pointer disabled:bg-green-400"
              type="submit"
            >
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCategoryForm;
