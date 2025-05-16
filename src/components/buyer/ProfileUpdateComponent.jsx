import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileUpdateComponent = ({userData}) => {


    const [formData, setFormData] = useState({
        name: "",
        company: "",
        billingName: "",
        email: "",
        number: "",
        category: "",
      });
    
    
      const [progress, setProgress] = useState(0);
      const navigate = useNavigate();
    
      useEffect(() => {
        if (userData) {
          setFormData((prev) => ({
            ...prev,
            name: userData.name || "",
            company: userData.company || "",
            billingName: userData.billingName || "",
            email: userData.email || "",
            number: userData.number || "",
            category: userData.category || "",
          }));
    
         
        }
      }, [userData]);
    
      useEffect(() => {
        const allFormFields = Object.values(formData);
        const filledFormFields = allFormFields.filter((v) => v && v.trim() !== "").length;
      
        let filledBranchFields = 0;
        let totalBranchFields = 0;
      
      
        const totalFields = allFormFields.length + totalBranchFields;
        const filled = filledFormFields + filledBranchFields;
      
        setProgress(Math.round((filled / totalFields) * 100));
      }, [formData]);
      
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.patch(
            `${import.meta.env.VITE_SERVER_URL}user/update`,
            {
              ...formData,
             
            },
            { withCredentials: true }
          );
    
          if (response.status === 200) {
            toast.success("Profile updated successfully");
          }
        } catch (error) {
          console.error(error);
          toast.error("Profile not updated");
        }
      };
    
  return (
    <>
       <ToastContainer />
            <div className="bg-white rounded-4xl flex flex-col gap-6 border-emerald-500 border-2">
              <div className="px-8 py-5 flex justify-between items-center border-b-1 border-stone-200">
                <h2 className="text-xl font-semibold">
                  Welcome <span className="capitalize">{userData?.name}</span>
                </h2>
                <button
                  type="button"
                  className="bg-emerald-600 py-2.5 px-6 rounded-lg text-white flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => navigate(-1)}
                >
                  Back
                </button>
              </div>
      
              <div className="px-8 py-5 w-full flex flex-col gap-6">
                <div className="pb-4">
                  <div className="mb-2 font-semibold text-gray-700">
                    Profile Completion: {progress}%
                  </div>
                  <div className="w-full bg-gray-200 h-4 rounded-xl overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
      
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-3 gap-5">
                    {[
                      { label: "Full Name", name: "name" },
                      { label: "Company Name", name: "company" },
                      { label: "Billing Name", name: "billingName" },
                      { label: "Email", name: "email", type: "email" },
                      { label: "Contact Number", name: "number", type: "number" },
                    ].map((field) => (
                      <div key={field.name} className="flex flex-col gap-3">
                        <label htmlFor={field.name}>{field.label}</label>
                        <input
                          type={field.type || "text"}
                          name={field.name}
                          className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.label}
                        />
                      </div>
                    ))}
      
                    <div className="flex flex-col gap-3">
                      <label htmlFor="category">Buyer Category</label>
                      <select
                        name="category"
                        className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                        value={formData.category}
                        onChange={handleChange}
                      >
                        <option value="" hidden>
                          Supplier Category
                        </option>
                        <option value="construction company">Construction Company</option>
                        <option value="sme">SME</option>
                        <option value="property developers">Property Developers</option>
                        <option value="architects">Architects</option>
                        <option value="engineers">Engineers</option>
                        <option value="contractor">Contractor</option>
                      </select>
                    </div>
                  </div>
      
                  <div className="flex justify-end mt-6">
                    <button
                      type="submit"
                      className="bg-emerald-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:scale-105 transition-all duration-300"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
    </>
  )
}

export default ProfileUpdateComponent
