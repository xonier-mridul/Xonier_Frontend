import React, { useState } from "react";

import { FaXmark } from "react-icons/fa6";

const CreateServicesForm = ({
  handleSubmit,
  setFormData,
  formData,
  errMessage,
  handleChange,
  categoryData,
  subCategoryData,
  isLoading
}) => {
  const [filterSpec, setFilterSpec] = useState([]);
  const [featureInput, setFeatureInput] = useState("");

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFilterSpec(subCategoryData.filter((item) => item.categoryId._id === value));
  };

  const handleAddFeature = () => {
    if (featureInput.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        feature: [...prev.feature, featureInput.trim()],
      }));
      setFeatureInput("");
    }
  };

  const handleRemoveFeature = (index) => {
    setFormData((prev) => ({
      ...prev,
      feature: prev.feature.filter((_, i) => i !== index),
    }));
  };

  const handleServiceImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setFormData((prev) => ({
      ...prev,
      serviceImage: file,
      imagePreview: URL.createObjectURL(file),
    }));
  }
};


  return (
    <>
      <div className="bg-white w-full border-2 border-emerald-500 rounded-4xl">
        <h3 className="text-[20px] font-semibold p-9 py-6 border-b-1 border-zinc-200">
          Create Service Form
        </h3>
        <form className="p-9 py-6 flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="w-full">
              <label className="text-lg" htmlFor="serviceImage">
                <span className="text-red-500 text-lg">*</span> Service Image
              </label>
              <input
                type="file"
                name="serviceImage"
                accept=".jpg, .jpeg, .png"
                className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                onChange={handleServiceImageChange}
                required
              />
              <div>
                {formData.imagePreview && (
                  <img
                    src={formData.imagePreview}
                    alt="Service Preview"
                    className="mt-3 w-full h-50 object-contain rounded-lg"
                  />
                )}
              </div>
            </div>
          <div className="grid grid-cols-2 gap-5">
            
            <div className="flex flex-col gap-3">
              <label className="text-lg" htmlFor="name">
                <span className="text-red-500 text-lg">*</span> Service Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Service Name"
                required
              />
            </div>

            
            <div className="flex flex-col gap-3">
              <label className="text-lg" htmlFor="category">
                <span className="text-red-500 text-lg">*</span> Category
              </label>
              <select
                name="category"
                className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                onChange={handleCategoryChange}
                required
              >
                <option value="" hidden>
                  Choose category
                </option>
                {categoryData.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-3 col-span-2">
              <label className="text-lg" htmlFor="shortDescription">
                <span className="text-red-500 text-lg">*</span> Short Description
              </label>
              <textarea
              type="text"
                name="shortDescription"
                className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                value={formData.shortDescription}
                onChange={handleCategoryChange}
                placeholder="Enter short description"
                rows={2}
                required
              />
              
            </div>

            
            <div className="flex flex-col gap-3 col-span-2">
              <label className="text-lg" htmlFor="feature">
                <span className="text-red-500 text-lg">*</span> Feature Highlights
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="featureInput"
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  value={featureInput}
                  onChange={(e) => setFeatureInput(e.target.value)}
                  placeholder="Enter a feature"
                />
                <button
                  type="button"
                  className="bg-emerald-500 text-white px-4 py-2 rounded-lg"
                  onClick={handleAddFeature}
                >
                  Add
                </button>
              </div>

             
              <ul className="mt-2 flex flex-wrap gap-2">
                { formData.feature.map((feat, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 bg-sky-500 text-white px-4 py-1 rounded-lg"
                  >
                    <span>{feat}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFeature(index)}
                      className="text-red-500 cursor-pointer hover:rotate-90 transition-all duration-300"
                    >
                      <FaXmark />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            
            <div className="flex flex-col gap-3 col-span-2">
              <label className="text-lg" htmlFor="description">
                <span className="text-red-500 text-lg">*</span> Service Description
              </label>
              <textarea
                name="description"
                id="description"
                className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                rows={5}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end"><p className="text-red-500"> {errMessage}</p></div>
          <div className="flex justify-end"><button type="submit" className="px-6 py-2 bg-blue-700 text-white rounded-lg">{isLoading  ? "Submitting..." : "Submit"}</button></div>
        </form>
      </div>
    </>
  );
};

export default CreateServicesForm;
