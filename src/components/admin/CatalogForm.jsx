import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaPlus, FaMinus } from "react-icons/fa";

const CatalogForm = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [ specData, setSpecData] = useState([]);
  const [filterSpec, setFilterSpec] = useState([])
  const [userData, setUserData] = useState([]);
  const [additionalSpecs, setAdditionalSpecs] = useState([{
    field: "",
    value: ""}]);
  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
    seller: "",
    iso: "",
    specifications: {},
    createdBy: "Admin"
    

  });

  const addAdditionalSpec = ()=>{
    setAdditionalSpecs([...additionalSpecs, {field: "", value: ""}])
  }

  const removeAdditionalSpec = (index) =>{
    if(additionalSpecs.length === 1) return
    setAdditionalSpecs(additionalSpecs.filter((item,i)=> i !== index))
  }

  const handleAdditionalSpecChange = (index, field, value) => {
    const updatedSpecs = [...additionalSpecs];
    updatedSpecs[index][field] = value;
    setAdditionalSpecs(updatedSpecs);

  };
  

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };

  // Handle specification input changes
  const handleSpecChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      specifications: {
        ...prev.specifications,
        [name]: value,
      },
    }));
  };



  // Fetch User Data
  useEffect(() => {

    const getUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}user/supplier`);
        if (response.status === 200 ) {
          setUserData(response.data.user);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    getUsers();
    return ()=>{
     
    }
  }, []);

  // Fetch Categories
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}category`);
        if(response.status === 200){

          setCategoryData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);

  // Fetch Sub-Categories
  useEffect(() => {
    const getSubCategories = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}sub-category`);
        if(response.status === 200){

          setSubCategoryData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getSubCategories();
  }, []);

  // Fetch Specification 

  useEffect(() => {
    const getSpecification = async()=>{
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}specification`)

      if(response.status === 200){
        setSpecData(response.data);
      }
      } catch (error) {
        console.error(error.message);
      }
      
    }
    getSpecification()
  
  }, [])
  

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const transformedFormData = {
      ...formData,
      specifications: Object.entries(formData.specifications).map(([key, value]) => ({
        key,
        value,
      })),
      addSpecifications: additionalSpecs
    };
  
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}catalog`, transformedFormData);
      if (response.status === 201) {
        console.log(transformedFormData);
        toast.success("Catalog Created successfully", {
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
          subCategory: "",
          seller: "",
          iso: "",
          specifications: {},
          createdBy: "Admin"
        });
        setAdditionalSpecs([
          {
            field: "",
            value: ""
          }
        ]);
        
      }
    } catch (error) {
      
      console.error("Form submission error:", error.response?.data || error.message);
      toast.error(`${error.response?.data?.message || error.message}`, {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        
      });
    }
  };
  

  useEffect(() => {
    if (specData?.length > 0) {
      const data = specData.filter((item) => item.category?._id === formData.category);
      setFilterSpec(data);
    };
    
  }, [formData, specData]);



  return (
    <>
    <ToastContainer />
    <div className="bg-white w-full border-2 border-orange-500 rounded-4xl">
      <h3 className="text-[20px] font-semibold p-9 py-6 border-b-1 border-zinc-200">
        Fill the form
      </h3>
      <form className="p-9 py-6 flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* Main Form */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
           
            <div className="flex w-1/2 flex-col gap-3">
              <label className="text-lg" htmlFor="category">
                Select Category
              </label>
              <select
                className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value=""hidden>
                  Select category
                </option>
                {categoryData.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.category}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </div>
           
            <div className="flex w-1/2 flex-col gap-3">
              <label className="text-lg" htmlFor="subCategory">
                Select Sub Category
              </label>
              <select
                className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
              >
                <option value="" hidden>
                  Select Sub Category
                </option>
                {subCategoryData.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-5">
           
            <div className="flex w-1/2 flex-col gap-3">
              <label className="text-lg" htmlFor="seller">
                Select Seller
              </label>
              <select
                className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                name="seller"
                value={formData.seller}
                onChange={handleChange}
              >
                <option value="" hidden>
                  Select Seller
                </option>
                {userData.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.company}
                  </option>
                ))}
              </select>
            </div>

           
            <div className="flex w-1/2 flex-col gap-3">
              <label className="text-lg" htmlFor="iso">
                ISO Certified
              </label>
              <select
                className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                name="iso"
                value={formData.iso}
                onChange={handleChange}
              >
                <option value="" hidden>
                  Please select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product General Specification */}
        
        {formData.category && <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold p-5 py-3 bg-zinc-100">
            Product General Specification
          </h3>
          <div className="w-full border-1 grid grid-cols-2 gap-6 border-green-300 p-5 bg-green-50">
            {filterSpec.map((item) => (
              <div className="flex flex-col gap-3" key={item._id}>
                <label className="text-lg line-clamp-1 overflow-hidden" htmlFor={item._id}>
                  {item.name}
                </label>
                <input
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  type="text"
                  name={item._id}
                  value={formData.specifications[item._id] || ""}
                  onChange={handleSpecChange}
                />
              </div>
            ))}
          </div>
        </div>}

        {/* Additional Specifications */}

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold p-5 py-3 bg-zinc-100">
            Product Additional Specification
          </h3>
          <div className="w-full border-1 flex flex-col items-center gap-6 border-green-300 p-5 bg-green-50" >
           {additionalSpecs.map((item, index)=>(
            <>
            <div className="w-full  flex items-center gap-6 " key={index} >

            <div className="w-1/2 flex flex-col gap-3" > 
               <label className="text-lg" htmlFor=""> Specification Name </label>
               <input type="text" className="bg-white w-full border-1 border-zinc-200 outline-none p-3 rounded-lg" onChange={(e) => handleAdditionalSpecChange(index, "field", e.target.value)} value={additionalSpecs[index].field}/>
            </div>
            <div className="w-1/2 flex flex-col gap-3"  > 
               <label className="text-lg" htmlFor=""> Specification value </label>
               <input type="text" className="bg-white w-full border-1 border-zinc-200 outline-none p-3 rounded-lg" onChange={(e) => handleAdditionalSpecChange(index, "value", e.target.value)} value={additionalSpecs[index].value}/>
            </div>
            <div className="flex items-center justify-center gap-4">
                <span className="bg-teal-600 p-2 rounded-lg text-white cursor-pointer" onClick={addAdditionalSpec} > <FaPlus /> </span>
                <span className="bg-rose-500 p-2 rounded-lg text-white cursor-pointer" onClick={()=>removeAdditionalSpec(index)}> <FaMinus /> </span>
            </div>
            </div>

            </>
           ))}
          </div>
        </div>

   
        <div className="flex items-center justify-end ">
        <button
          type="submit"
          className="rounded-lg bg-orange-500 px-6 py-3 text-white w-fit cursor-pointer">
          Save
        </button>
          </div>
          
      </form>
    </div>
    </>
  );
};

export default CatalogForm;
