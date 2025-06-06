import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MdOutlinePercent, MdCurrencyRupee } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";

const ProductEditPage = ({ categoryData, serviceData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [catalogData, setCatalogData] = useState(null);
  const [technologyData, setTechnologyData] = useState([]);
  const [filterTech, setFilterTech] = useState([]);
  const [filterTechnologies, setFilterTechnologies] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);

  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    subCategory: "",
    hourlyRate: "",
    experience: "",
    technologies: [],
     designation:"",
    yearOfExperience:"",
    education:"",
    resume: "",
    profileImage: "",
    profilePreview:"",
    language: [],
    services: "",
    skillDescription: "",
  });

  useEffect(() => {
    getCatalogById();
    getSpecification();
  }, []);

   const handleProfileChange = (e)=>{
    const {name} = e.target;
    setFormData({
      ...formData,
      [name]: e.target.files[0],
      profilePreview: URL.createObjectURL(e.target.files[0])
    })
    console.log(formData)
  }

  useEffect(() => {
    if (formData.category) {
      getSubCategories(formData.category);
    }
  }, [formData.category]);

  useEffect(() => {
    if (technologyData.length) {
      const filtered = technologyData.filter(
        (item) => item.category?._id === formData.category
      );
      setFilterTech(filtered);
    }
  }, [formData.category, technologyData]);

  useEffect(() => {
    setFilterTechnologies(
      technologyData.filter((item) => formData.technologies.includes(item._id))
    );
  }, [formData.technologies, technologyData]);

  const getSubCategories = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}sub-category/by-category/${id}`,
        { withCredentials: true }
      );
      setSubCategoryData(response.data.subCategory || []);
    } catch (error) {
      console.error("Failed to fetch subcategories:", error);
    }
  };

  const getCatalogById = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}catalog/${id}`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        const data = response.data;
        setCatalogData(data);
        setFormData({
          productName: data?.productName || "",
          category: data?.category?._id || "",
          subCategory: data?.subCategory?._id || "",
          hourlyRate: data?.hourlyRate || "",
          experience: data?.experience || "",
          services: data?.services || "",
          designation: data?.designation || "",
          education: data?.education || "",
          yearOfExperience: data?.yearOfExperience || "",
          language: data?.language || [],
          skillDescription: data?.skillDescription || "",
          profileImage: data?.profileImage || "",
          technologies: data?.technologies?.map((t) => t._id) || [],
        });
      }
    } catch (error) {
      console.error("Error fetching catalog:", error.message);
    }
  };

  const getSpecification = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}specification`,
        { withCredentials: true }
      );
      setTechnologyData(response.data);
    } catch (error) {
      console.error("Failed to fetch specifications:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTechChange = (e) => {
    const { value } = e.target;
    if (value && !formData.technologies.includes(value)) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, value],
      }));
    }
  };

  const handleRemoveTech = (techId) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((id) => id !== techId),
    }));
  };

  const handleLanguageChange = (e) => {
    const { value } = e.target;
    if (value && !formData.language.includes(value)) {
      setFormData((prev) => ({
        ...prev,
        language: [...prev.language, value],
      }));
    }
  };

  const handleRemoveLanguage = (i) => {
    setFormData((prev) => ({
      ...prev,
      language: prev.language.filter((_, index) => index !== i),
    }));
  };

  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    try {
      
      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}catalog/update/${id}`,
        formData,
        { withCredentials: true }
      );
      if (response.status === 200) {
        toast.success("Catalog Updated successfully");
      }
    } catch (error) {
      console.log("Update error:", error.message);
      toast.error("Catalog not updated");
    } finally{
      setIsLoading(false)
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="bg-white border-2 border-emerald-500 rounded-2xl m-5">
        <div className="mb-5 flex justify-between items-center px-8 py-6 border-b border-gray-300">
          <h2 className="font-semibold text-2xl">
            {" "}
            <span className="capitalize">{catalogData?.productName}</span>
          </h2>

          <button
            type="button"
            className="capitalize font-medium text-lg text-white bg-emerald-600 py-2 px-8 cursor-pointer rounded-md"
            onClick={() => navigate(-1)}
          >
            {" "}
            Back{" "}
          </button>
        </div>
        <form className="p-9 py-6 flex flex-col gap-9" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <div className="flex items-end gap-3">
            <div className=" w-1/2 flex flex-col gap-3">
            <div className="mb-8">
                <img className="h-36 w-36 rounded-full object-cover border-1 border-sky-400" src={formData.profilePreview || formData.profileImage} alt="" />
               </div>
               <label htmlFor="profileImage">Profile Image</label>
               <input type="file" accept=".png, .svg, .jpg, .webp" onChange={handleProfileChange} name="profileImage" className="w-full border border-zinc-200 p-3 rounded-lg" />
               
            </div>
            <div className=" w-1/2 flex flex-col gap-3">
              <label className="text-lg" htmlFor="productName">
                Product Name
              </label>
              <input
                className="w-full border border-zinc-200 p-3 rounded-lg"
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
              />
            </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex w-1/2 flex-col gap-3">
                <label className="text-lg">Select Category</label>
                <select
                  className="w-full border border-zinc-200 p-3 rounded-lg"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  {categoryData?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex w-1/2 flex-col gap-3">
                <label className="text-lg" htmlFor="subCategory">
                  <span className="text-red-500 text-lg">*</span> Select
                  Developer Type
                </label>
                <select
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleChange}
                  required
                >
                  <option value="" hidden>
                    Select Developer Type
                  </option>
                  {subCategoryData.length > 0 ? (
                    subCategoryData?.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      {" "}
                      Please select category first{" "}
                    </option>
                  )}
                </select>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex w-1/2 flex-col gap-3">
                <label className="text-lg" htmlFor="designation">
                  <span className="text-red-500 text-lg">*</span> Select Designation
                </label>
                <select
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                >
                  <option value="" hidden>
                    Select Designation
                  </option>
                  
                    <option  value='junior developer'>Junior Developer</option>
                    <option  value='software engineer'>Software Engineer</option>
                    <option  value='senior software engineer'>Senior Software Engineer</option>
                    
                    <option  value='lead developer'>Lead Developer</option>
                    <option  value='staff engineer'>Staff Engineer</option>
                    <option  value='software architect'>Software Architect</option>
                    <option  value='engineering manage'>Engineering Manage</option>
                 
                </select>
              </div>
              <div className="flex w-1/2 flex-col gap-3">
              <label className="text-lg" htmlFor="yearOfExperience">
                  <span className="text-red-500 text-lg">*</span> Years of Experience
                </label>
                <input type="number" name="yearOfExperience"  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg capitalize" value={formData.yearOfExperience} onChange={handleChange} placeholder="Experience"/>
            </div>
            </div>
             <div className="flex w-full flex-col gap-3 ">
              <label className="text-lg" htmlFor="education">
                  <span className="text-red-500 text-lg">*</span> Highest Education
                </label>
                <select type="text" name="education"  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg" value={formData.education} onChange={handleChange} placeholder="Highest Education">
                  <option value="" hidden>Select Education level</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="M.Sc">M.Sc</option>
                  <option value="BCA">BCA</option>
                  <option value="MCA">MCA</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                </select>
             </div>
            <div className="flex items-center gap-5">
              <div className="flex w-1/2 flex-col gap-3">
                <label className="text-lg" htmlFor="experience">
                  <span className="text-red-500 text-lg">*</span> Experience
                  Level
                </label>
                <select
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                 
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="junior">Junior</option>
                  <option value="mid-level">Mid-Level</option>
                  <option value="senior">Senior</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              <div className="flex w-1/2 flex-col gap-3 ">
                <label className="text-lg" htmlFor="hourlyRate">
                  <span className="text-red-500 text-lg">*</span> Hourly Rate
                  ($)
                </label>
                <select
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  name="hourlyRate"
                  value={formData.hourlyRate}
                  onChange={handleChange}
                 
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="25">25 ($)</option>
                  <option value="30">30 ($)</option>
                  <option value="35">35 ($)</option>
                  <option value="40">40 ($)</option>
                  <option value="45">45 ($)</option>
                  <option value="50">50 ($)</option>
                  <option value="55">55 ($)</option>
                </select>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex w-1/2 flex-col gap-3 ">
                <label className="text-lg" htmlFor="services">
                  <span className="text-red-500 text-lg">*</span>
                  Assign Services
                </label>
                <select
                  type="text"
                  name="services"
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg capitalize"
                  onChange={handleChange}
                  value={formData.services}
               
                >
                  <option value="" hidden>
                    {" "}
                    Assign Service
                  </option>
                  {serviceData?.map((item) => (
                    <option value={item._id}>{item?.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex w-1/2 flex-col gap-3 ">
                <label className="text-lg" htmlFor="language">
                  <span className="text-red-500 text-lg">*</span> Language
                  Spoken
                </label>
                <select
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  name="language"
                  onChange={handleLanguageChange}
                  value={formData.language}
              
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                </select>
                <div className="flex items-center gap-3">
                  {formData.language?.map((item, index) => (
                    <button
                      type="button"
                      key={index}
                      className="bg-sky-500 px-4 py-1.5 rounded-full text-white capitalize flex items-center gap-2"
                    >
                      {item}{" "}
                      <span
                        className="cursor-pointer hover:rotate-90 transition-all duration-300"
                        onClick={() => handleRemoveLanguage(index)}
                      >
                        {" "}
                        <FaXmark />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
           <div className="flex flex-col gap-3">
                      <h3 className="text-lg font-semibold p-5 py-3 bg-zinc-100 rounded-xl">
                        <span className="text-red-500 text-lg">*</span> Product General
                        Specification
                      </h3>
                      <div className="w-full border-1 grid grid-cols-1 gap-6 border-green-300 p-5 bg-green-50 rounded-xl">
                        <div className="flex w-full flex-col gap-3">
                          <label className="text-lg" htmlFor="technology">
                            <span className="text-red-500 text-lg">*</span> Select
                            Technologies
                          </label>
                          <select
                            className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg bg-white"
                            name="technologies"
                            onChange={handleTechChange}
                          >
                            <option value="" hidden>
                              Select
                            </option>
                            {filterTech.map((tech) => (
                              <option key={tech._id} value={tech._id}>
                                {tech.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {filterTechnologies.map((tech) => (
                            <span
                              key={tech._id}
                              className="bg-emerald-500 text-white px-3 py-1 rounded-full flex items-center gap-2"
                            >
                              {tech.name}
                              <button
                                type="button"
                                onClick={() => handleRemoveTech(tech._id)}
                                className="text-white hover:text-red-300"
                              >
                                <FaXmark />
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
            <label className="text-lg font-semibold p-5 py-3 bg-zinc-100 rounded-xl">
              <span className="text-red-500 text-lg">*</span> Skill Description
            </label>
            <textarea
              type="text"
              name="skillDescription"
              className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
              rows={6}
              placeholder="Enter skill description"
              value={formData.skillDescription}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              disabled={isLoading === true}
              type="submit"
              className="rounded-lg bg-emerald-600 px-6 py-3 text-white w-fit cursor-pointer disabled:bg-blue-300"
            >
              {isLoading ? "Updating..." : 'Update'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductEditPage;
