import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductEditPage = () => {
  const [catalogData, setCatalogData] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [sellerData, setSellerData] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
    seller: "",
    iso: "",
    specifications: [],
    addSpecifications: [],
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getCatalogById = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}catalog/${id}`);
        if (response.status === 200) {
          setCatalogData(response.data);
          setFormData({
            category: response.data.category._id,
            subCategory: response.data.subCategory._id,
            seller: response.data.seller._id,
            iso: response.data.iso,
            specifications: response.data.specifications.map((spec) => ({
              key: spec.key._id,
              name: spec.key.name,
              value: spec.value,
            })),
            addSpecifications: response.data.addSpecifications.map((spec) => ({
              field: spec.field,
              value: spec.value,
            })),
          });
        }
      } catch (error) {
        console.error("Error fetching catalog:", error.message);
      }
    };

    const getCategory = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}category`);
        if (response.status === 200) setCategoryData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    const getSubCategory = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}sub-category`);
        if (response.status === 200) setSubCategoryData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    const getSeller = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}user/supplier`);
        if (response.status === 200) setSellerData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    getCatalogById();
    getCategory();
    getSubCategory();
    getSeller();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpecificationChange = (index, value, type) => {
    const updatedSpecifications = [...formData[type]];
    updatedSpecifications[index].value = value;
    setFormData((prev) => ({ ...prev, [type]: updatedSpecifications }));
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`${import.meta.env.VITE_SERVER_URL}catalog/${id}`, formData);
      if (response.status === 200) {
        toast.success("Catalog Updated successfully", {
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
               
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Catalog not updated");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-white shadow-lg rounded-2xl m-5">
        <div className="mb-5 flex justify-between items-center px-8 py-6 border-b border-gray-300">
          <h2 className="font-semibold text-2xl">{catalogData?.subCategory?.name}</h2>
          
          <button type='button' className='capitalize font-medium text-lg text-white bg-black py-2 px-8 cursor-pointer rounded-md' onClick={()=>navigate(-1)}> Back </button>
        </div>
        <form className="p-9 py-6 flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <div className="flex w-1/2 flex-col gap-3">
                <label className="text-lg">Select Category</label>
                <select className="w-full border p-3 rounded-lg" name="category" value={formData.category} onChange={handleChange}>
                  {categoryData.map((category) => (
                    <option key={category._id} value={category._id}>{category.category}</option>
                  ))}
                </select>
              </div>
              <div className="flex w-1/2 flex-col gap-3">
                <label className="text-lg">Select Sub Category</label>
                <select className="w-full border p-3 rounded-lg" name="subCategory" value={formData.subCategory} onChange={handleChange}>
                  {subCategoryData.map((item) => (
                    <option key={item._id} value={item._id}>{item.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex w-1/2 flex-col gap-3">
                <label className="text-lg">Select Seller</label>
                <select className="w-full border p-3 rounded-lg" name="seller" value={formData.seller} onChange={handleChange}>
                  {sellerData.map((item) => (
                    <option key={item._id} value={item._id}><span className="capitalize">{item.company} </span></option>
                  ))}
                </select>
              </div>
              <div className="flex w-1/2 flex-col gap-3">
                <label className="text-lg">ISO Certified</label>
                <select className="w-full border p-3 rounded-lg" name="iso" value={formData.iso} onChange={handleChange}>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold p-5 py-3 bg-gray-100">Product Specification</h3>
            <div className="w-full grid grid-cols-1 gap-6 p-5">
              {formData.specifications.map((spec, index) => (
                <div className="w-full flex items-center gap-6" key={index}>
                  <div className="w-full flex flex-col gap-3">
                    <label className="text-lg">Specification Name</label>
                    <input type="text" className="w-full border p-3 rounded-lg" value={spec?.name} readOnly />
                  </div>
                  <div className="w-full flex flex-col gap-3">
                    <label className="text-lg">Specification Value</label>
                    <input type="text" className="w-full border p-3 rounded-lg" value={spec?.value} onChange={(e) => handleSpecificationChange(index, e.target.value, "specifications")} />
                  </div>
                </div>
              ))}
              {formData.addSpecifications.map((spec, index) => (
                <div className="w-full flex items-center gap-6" key={index}>
                  <div className="w-full flex flex-col gap-3">
                    <label className="text-lg">Specification Name</label>
                    <input type="text" className="w-full border p-3 rounded-lg" name="" value={spec.field} readOnly />
                  </div>
                  <div className="w-full flex flex-col gap-3">
                    <label className="text-lg">Specification Value</label>
                    <input type="text" className="w-full border p-3 rounded-lg" value={spec.value} onChange={(e) => handleSpecificationChange(index, e.target.value, "addSpecifications")} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button type="submit" className="rounded-lg bg-teal-600 px-6 py-3 text-white w-fit cursor-pointer">Update</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductEditPage;
