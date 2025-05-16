import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


// Media

import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";


const ResetPasswordFrom = ({
  formData,
  setFormData,
  errMessage,
  handleSubmit,
  passwordShow,
  setPasswordShow,
  isLoading,
  cPasswordShow,
  setCPasswordShow,
  
}) => {

    const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
    <ToastContainer />
      <div className="bg-stone-200 flex justify-center items-center relative min-h-screen">
        <div className="bg-white shadow-lg flex flex-col gap-5 p-9 rounded-2xl w-[570px]">
          <h2 className="text-2xl font-bold"><span className="text-red-500">*</span> Please set your new password</h2>
          <form onSubmit={handleSubmit} className=" flex flex-col gap-5">
            {passwordShow ? (
              <div className="flex gap-3 items-center w-full p-3  border-b-1 border-neutral-200">
                {" "}
                <input
                  type="text"
                  className="outline-none  w-full"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />{" "}
                <span onClick={() => setPasswordShow((prev) => !prev)}>
                  {" "}
                  <FaEyeSlash />{" "}
                </span>{" "}
              </div>
            ) : (
              <div className="flex gap-3 items-center w-full p-3  border-b-1 border-neutral-200">
                {" "}
                <input
                  type="password"
                  className="outline-none  w-full"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />{" "}
                <span onClick={() => setPasswordShow((prev) => !prev)}>
                  {" "}
                  <FaEye />{" "}
                </span>{" "}
              </div>
            )}
            {cPasswordShow ? (
              <div className="flex gap-3 items-center w-full p-3  border-b-1 border-neutral-200">
                {" "}
                <input
                  type="text"
                  className="outline-none  w-full"
                  name="cpassword"
                  value={formData.cpassword}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />{" "}
                <span onClick={() => setCPasswordShow((prev) => !prev)}>
                  {" "}
                  <FaEyeSlash />{" "}
                </span>{" "}
              </div>
            ) : (
              <div className="flex gap-3 items-center w-full p-3  border-b-1 border-neutral-200">
                {" "}
                <input
                  type="password"
                  className="outline-none  w-full"
                  name="cpassword"
                  placeholder="Enter your password"
                  value={formData.cpassword}
                  onChange={handleChange}
                />{" "}
                <span onClick={() => setCPasswordShow((prev) => !prev)}>
                  {" "}
                  <FaEye />{" "}
                </span>{" "}
              </div>
            )}
            {errMessage && <div className="flex items-center justify-end">
                <p className="text-red-500">{errMessage}</p>
            </div>}
            <div className="flex justify-end">
              <button
                className="w-full py-3 capitalize font-bold flex justify-center items-center gap-3 rounded-full px-5 btn-bg text-white cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Loading..."
                ) : (
                  <>
                    Submit <FaArrowRight className="text-lg btn-arrow" />
                  </>
                )}
              </button>
            </div>
            
          </form>
          <div className="flex justify-between items-center mt-2">
              <button  className="flex items-center gap-1.5 cursor-pointer hover:text-green-500 transition-all duration-300" onClick={()=>navigate(-1)}><FaAngleLeft className="text-green-500"/>Step back</button>
              <button type="btn" className="flex items-center gap-1.5 cursor-pointer hover:text-green-500 transition-all duration-300" onClick={()=>navigate("/")}> <MdOutlineHome className="text-green-500 text-xl"/>Back to Home</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordFrom;
