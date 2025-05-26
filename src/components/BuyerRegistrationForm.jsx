import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuyerRegistrationForm = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(""); 

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    role: "buyer",
    number: "",
    category: "",
    tradeNumber: "",
    website: "",
    password: "",
    cpassword: "",
  });


  //navigate 

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true)
    if (formData.password !== formData.cpassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    setErrorMessage(""); 

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}user/register`,
        formData
      );
      if (response.status === 201) {
        toast.success("User created successfully");
        setFormData({
          name: "",
          company: "",
          email: "",
          role: "buyer",
          number: "",
          category: "",
          tradeNumber: "",
          website: "",
          password: "",
          cpassword: "",
          
        });
        localStorage.setItem('emailForVerify', formData.email);
        navigate("/verify-otp");
        setErrorMessage("")
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response?.data?.message)
    }
    finally{
      setIsLoading(false)
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-white shadow-lg flex flex-col gap-5 p-9 rounded-2xl w-full">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Buyer sign up form</h3>
          <p className="text-neutral-400">
            Unlock your potential with expert guidance! Schedule a free
            consultation toward personal and and business success.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">
            {" "}
            <span className="text-red-500">*</span> Please enter your 
            details
          </h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex items-center gap-5 ">
              <input
                className="w-1/2 p-3 outline-none border-b-1 border-neutral-200"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="w-1/2 p-3 outline-none border-b-1 border-neutral-200"
                type="text"
                name="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center gap-5 ">
              <input
                className="w-1/2 p-3 outline-none border-b-1 border-neutral-200"
                type="email"
                name="email"
                placeholder="Enter your mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className="w-1/2 p-3 outline-none border-b-1 border-neutral-200"
                type="number"
                name="number"
                placeholder="Enter your phone number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>

            <select
              className="p-3 outline-none border-b-1 border-neutral-200"
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Buyer Category
              </option>
              <option value="construction company">Construction Company</option>
              <option value="sme">SMEs</option>
              <option value="property developers">Property Developers</option>
              <option value="architects"> Architects</option>
              <option value="engineers">Engineers</option>
              <option value="contractor">General Contractor</option>
            </select>

            <div className="flex items-center gap-5 ">
              <input
                className="w-1/2 p-3 outline-none border-b-1 border-neutral-200"
                type="text"
                name="tradeNumber"
                placeholder="Trade Register Number"
                value={formData.tradeNumber}
                onChange={handleChange}
                required
              />
              <input
                className="w-1/2 p-3 outline-none border-b-1 border-neutral-200"
                type="text"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-5">
                <div className="flex w-1/2 items-center gap-3 border-b-1 border-neutral-200">
                  <input
                    className="w-full p-3 outline-none"
                    type={passwordShow ? "text" : "password"}
                    name="password"
                    placeholder="Set your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <span onClick={() => setPasswordShow(!passwordShow)}>
                    {passwordShow ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>

                {/* Confirm Password Input */}
                <div className="flex w-1/2 items-center gap-3 border-b-1 border-neutral-200">
                  <input
                    className="w-full p-3 outline-none"
                    type={confirmPasswordShow ? "text" : "password"}
                    name="cpassword"
                    placeholder="Confirm password"
                    value={formData.cpassword}
                    onChange={handleChange}
                    required
                  />
                  <span
                    onClick={() => setConfirmPasswordShow(!confirmPasswordShow)}
                  >
                    {confirmPasswordShow ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>

              
              {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}
            </div>

            <div className="flex justify-end">
              <button className="py-3 capitalize font-bold flex items-center gap-3 rounded-full px-5 btn-bg text-white cursor-pointer">
                {isLoading? "Submitting":"Submit"} <FaArrowRight className="text-lg btn-arrow" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BuyerRegistrationForm;
