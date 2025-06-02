import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowRight, FaXmark } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCategoryForm = ({fetchCategories}) => {
  const [isLoading, setIsLoading]  = useState(false)
  const [formData, setFormData] = useState({
    category: "",
    // specification: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}category`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true
        }
      );

      if (response.status === 201) {
        fetchCategories();

        toast.success(`"${formData.category}" Category Added successfully`);
        setFormData({
          category: "",
          specification: [],
        });
      }
    } catch (error) {
      console.log(error.message);
      
    }
    finally{
      setIsLoading(false)
    }
  };


  return (
    <>
      <ToastContainer />
      <div className="bg-white border-2 border-emerald-500 rounded-4xl ">
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
              className="capitalize font-bold flex items-center gap-3 rounded-lg bg-emerald-600 px-7 py-3 text-white w-fit cursor-pointer disabled:bg-green-400"
              type="submit"
            >
              {" "}
              {isLoading ? "Submitting" :  "Submit" }
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCategoryForm;
