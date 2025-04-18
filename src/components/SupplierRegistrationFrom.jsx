import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SupplierRegistrationFrom = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Navigate

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    role: "supplier",
    category: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.password) {
        setErrorMessage("Passwords do not match!");
        return;
      }
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}user/register`,
        formData
      );
      if (response.status === 201) {
        toast.success("User created successfully");
        setFormData({
          name: "",
          email: "",
          number: "",
          company: "",
          role: "supplier",
          category: "",
          password: "",
          cpassword: "",
        });
        navigate("/verify-otp")
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-white shadow-lg flex flex-col gap-5 p-9 rounded-2xl w-full">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Supplier sign up form</h3>
          <p className="text-neutral-400">
            Unlock your potential with expert guidance! Schedule a free
            consultation toward personal and business success.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">
            {" "}
            <span className="text-red-500">*</span> Please enter your details
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
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center gap-5 ">
              <input
                className="w-1/2 p-3 outline-none border-b-1 border-neutral-200"
                type="number"
                name="number"
                placeholder="Enter your contact number"
                value={formData.number}
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
                {" "}
                Supplier Category
              </option>
              <option value="material supplier"> Material Supplier</option>
              <option value="service provider"> Service Provider</option>
              <option value="transporter"> Transporter </option>
              <option value="machine rentals"> Machine Rentals</option>
              <option value="waste management">Waste Management</option>
              <option value="interior">Interior</option>
            </select>

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
                Submit <FaArrowRight className="text-lg btn-arrow" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SupplierRegistrationFrom;
