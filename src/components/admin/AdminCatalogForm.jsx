import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// media
import { FaDownload, FaStarOfLife, FaUser, FaUserAlt } from "react-icons/fa";

import { FaXmark } from "react-icons/fa6";

const AdminCatalogForm = ({ serviceData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrorMessage] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [assignSupplierShow, setAssignSupplierShow] = useState(false);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [filterTech, setFilterTech] = useState([]);
  const [userData, setUserData] = useState([]);
  const [technologyData, setTechnologyData] = useState([]);
  const [serviceFilterData, setServiceFilterData] = useState([])
  const [filterTechnologies, setFilterTechnologies] = useState([]);
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    subCategory: "",
    hourlyRate: "",
    experience: "",
    technologies: [],
    designation: "",
    yearOfExperience: "",
    createdBy: "",
    resume: "",
    education: "",
    resumePreview: "",
    profileImage: "",
    profilePreview: "",
    language: [],
    services: [],
    skillDescription: "",
  });

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({
      ...formData,
      [name]: e.target.files[0],
      resumePreview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleProfileChange = (e) => {
    const { name } = e.target;
    setFormData({
      ...formData,
      [name]: e.target.files[0],
      profilePreview: URL.createObjectURL(e.target.files[0]),
    });
    console.log(formData);
  };

  // Handle Language Change

  const handleLanguageChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, language: [...formData.language, value] });
  };

  const handleRemoveLanguage = (i) => {
    setFormData({
      ...formData,
      language: formData.language.filter((_, index) => index !== i),
    });
  };

  const handleServicesChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: [...prev.services, value] }));

  };

  useEffect(() => {
  setServiceFilterData(
    serviceData.filter(item => formData?.services?.includes(item._id))
  );
 
}, [formData]);

  const handleRemoveService = (i)=>{
     setFormData({ ...formData, services: formData.services.filter((_,index)=>index !==i)});
  }

  


  // Handle input changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const CategoryHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    getSubCategories(value);
  };

  useEffect(() => {
    setFormData((prev) => ({ ...prev, technologies: "" }));
  }, [formData.category]);

  const verifyUser = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}auth/verify-auth`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        const userId = response?.data?.user?._id;
        setFormData((prevFormData) => ({
          ...prevFormData,
          createdBy: userId,
        }));
        console.log("User ID:", userId);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}category`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        setCategoryData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getSubCategories = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}sub-category/by-category/${id}`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        setSubCategoryData(response.data.subCategory);
        console.log(response.data.subCategory);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getSpecification = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}specification`,
        { withCredentials: true }
      );

      if (response.status === 200) {
        setTechnologyData(response.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // Fetch User Data, Categories, Sub-Categories,  Specification

  useEffect(() => {
    getCategories();
    getSpecification();
    verifyUser();
  }, []);

  // Handle Form Submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("productName", formData.productName);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("subCategory", formData.subCategory);
    formDataToSend.append("hourlyRate", formData.hourlyRate);
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("resume", formData.resume);
    formDataToSend.append("profileImage", formData.profileImage);
    formDataToSend.append("designation", formData.designation);
    formDataToSend.append("yearOfExperience", formData.yearOfExperience);
    formDataToSend.append("education", formData.education);
    formDataToSend.append("createdBy", formData.createdBy);
    formDataToSend.append("skillDescription", formData.skillDescription);
    formDataToSend.append("services", JSON.stringify(formData.services));
    formDataToSend.append("language", JSON.stringify(formData.language));

    formDataToSend.append(
      "technologies",
      JSON.stringify(formData.technologies)
    );

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}catalog`,
        formDataToSend,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        toast.success("Catalog Created successfully");

        setFormData({
          productName: "",
          category: "",
          subCategory: "",
          hourlyRate: "",
          experience: "",
          technologies: [],
          createdBy: "",
          resume: "",
          designation: "",
          yearOfExperience: "",
          profileImage: "",
          education: "",
          language: [],
          skillDescription: "",
        });

        setErrorMessage(null);
      }
    } catch (error) {
      console.error(
        "Form submission error:",
        error.response?.data || error.message
      );

      setErrorMessage(error.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (technologyData?.length > 0) {
      const data = technologyData.filter(
        (item) => item.category?._id === formData.category
      );
      setFilterTech(data);
    }
  }, [formData, technologyData]);

  // Handle Technology Change
  const handleTechChange = (e) => {
    const { value } = e.target;

    if (!formData?.technologies?.includes(value)) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, value],
      }));
    }
  };

  // Handle Remove Technology
  const handleRemoveTech = (techId) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((id) => id !== techId),
    }));
  };

  useEffect(() => {
    setFilterTechnologies(
      technologyData.filter((item) =>
        formData?.technologies?.includes(item._id)
      )
    );
  }, [formData]);

  return (
    <>
      <ToastContainer />
      {assignSupplierShow && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 w-full backdrop-blur-sm bg-black/10 z-99"
          onClick={() => setAssignSupplierShow(false)}
        ></div>
      )}
      <div className="bg-white w-full border-2 border-emerald-500 rounded-4xl">
        <h3 className="text-[20px] font-semibold p-9 py-6 border-b-1 border-zinc-200">
          Fill the form
        </h3>
        <form className="p-9 py-6 flex flex-col gap-5" onSubmit={handleSubmit}>
          {/* Main Form */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <div className="flex w-1/2 flex-col gap-3">
                <label className="text-lg " htmlFor="productName">
                  {" "}
                  <span className="text-red-500 text-lg">*</span> Developer Name
                </label>
                <input
                  type="text"
                  name="productName"
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  value={formData.productName}
                  onChange={handleChange}
                  placeholder="Enter Product Name"
                  required
                />
              </div>
              <div className="flex w-1/2 flex-col gap-3">
                <label className="text-lg" htmlFor="category">
                  <span className="text-red-500 text-lg">*</span> Select
                  Category
                </label>
                <select
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  name="category"
                  value={formData.category}
                  onChange={CategoryHandleChange}
                  required
                >
                  <option value="" hidden>
                    Select Category
                  </option>
                  {categoryData.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex w-1/2 flex-col gap-3">
                <label className="text-lg" htmlFor="designation">
                  <span className="text-red-500 text-lg">*</span> Select
                  Designation
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

                  <option value="junior developer">Junior Developer</option>
                  <option value="software engineer">Software Engineer</option>
                  <option value="senior software engineer">
                    Senior Software Engineer
                  </option>

                  <option value="lead developer">Lead Developer</option>
                  <option value="staff engineer">Staff Engineer</option>
                  <option value="software architect">Software Architect</option>
                  <option value="engineering manage">Engineering Manage</option>
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
            <div className="flex flex-col gap-3">
              <label className="text-lg" htmlFor="education">
                <span className="text-red-500 text-lg">*</span> Highest
                Education
              </label>
              <select
                type="text"
                name="education"
                className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                value={formData.education}
                onChange={handleChange}
                placeholder="Highest Education"
              >
                <option value="" hidden>
                  Select Education level
                </option>
                <option value="B.Sc">B.Sc</option>
                <option value="M.Sc">M.Sc</option>
                <option value="BCA">BCA</option>
                <option value="MCA">MCA</option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
              </select>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex w-1/2 flex-col gap-3 ">
                <label className="text-lg" htmlFor="experience">
                  <span className="text-red-500 text-lg">*</span> Experience
                  Level
                </label>
                <select
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
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
                  required
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
            <div className="flex flex-col gap-5">
              <label className="text-lg" htmlFor="yearOfExperience">
                <span className="text-red-500 text-lg">*</span> Years of
                Experience
              </label>
              <input
                type="number"
                name="yearOfExperience"
                className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg capitalize"
                value={formData.yearOfExperience}
                onChange={handleChange}
                placeholder="Experience"
              />
            </div>
            <div className="flex items-start gap-5">
              <div className="flex w-1/2 flex-col gap-3 ">
                <label className="text-lg" htmlFor="services">
                  <span className="text-red-500 text-lg">*</span>
                  Assign Services
                </label>
                <select
                  type="text"
                  name="services"
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg capitalize"
                  onChange={handleServicesChange}
                  required
                >
                  <option value="" hidden>
                    {" "}
                    Assign Service
                  </option>
                  {serviceData?.map((item) => (
                    <option value={item._id}>{item?.name}</option>
                  ))}
                </select>
                <div className="flex items-center flex-wrap gap-3">
                  

                      {serviceFilterData.map((item, i) => (
                        <div key={i} className="bg-green-400 px-4 py-1 rounded-full text-sm text-white capitalize flex items-center gap-2">
                          {item?.name||"N/A"} <span onClick={()=>handleRemoveService(i)} className="cursor-pointer"><FaXmark/></span>
                        </div>
                      ))}
                  
                </div>
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
                  required
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
            <div className="flex items-start gap-5 ">
              <div className="flex w-1/2 flex-col gap-3 ">
                <label className="text-lg" htmlFor="resume">
                  <span className="text-red-500 text-lg">*</span> Developer
                  Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf"
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  onChange={handleFileChange}
                  required
                />
                {formData.resumePreview && (
                  <div>
                    {formData.resume.type === "application/pdf" ? (
                      <iframe
                        src={formData.resumePreview}
                        title="PDF Preview"
                        width="100%"
                        height="300px"
                        className="rounded border"
                      />
                    ) : (
                      <p className="text-sm text-gray-600">
                        Selected file: {formData.resume.name}
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div className="flex w-1/2 flex-col gap-3 ">
                <label className="text-lg" htmlFor="profileImage">
                  <span className="text-red-500 text-lg">*</span> Developer
                  Profile Image
                </label>
                <input
                  type="file"
                  name="profileImage"
                  accept=".png, .svg, .webp, .jpg ,.jpeg"
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  onChange={handleProfileChange}
                  required
                />
                {formData.profilePreview && (
                  <div>
                    <img
                      src={formData.profilePreview}
                      alt="Profile Img"
                      width="100px"
                      height="100px"
                      className="rounded-full border-1 border-stone-200"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Select Technology */}

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

          {/* Payment Schedule */}

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

          {errMessage && (
            <div className="flex justify-end items-center">
              <p className="text-red-500">{errMessage}</p>
            </div>
          )}

          <div className="flex items-center justify-end ">
            <button
              type="submit"
              className="rounded-lg bg-emerald-600 px-6 py-3 text-white w-fit cursor-pointer"
            >
              {isLoading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminCatalogForm;
